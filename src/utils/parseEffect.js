// The following raw data is obtained from Wakfu's CDN
// https://www.wakfu.com/en/forum/332-development/236779-json-data
import actionsData from '@actions'
import statesData from '@states'
import jobsData from '@recipeCategories'

export const elementMap = {
  1: {
    en: 'Fire',
    pt: 'Fogo',
    fr: 'Feu',
    es: 'Fuego'
  },
  2: {
    en: 'Water',
    pt: 'Água',
    fr: 'Eau',
    es: 'Agua'
  },
  3: {
    en: 'Earth',
    pt: 'Terra',
    fr: 'Terre',
    es: 'Tierra'
  },
  4: {
    en: 'Air',
    pt: 'Ar',
    fr: 'Air',
    es: 'Aire'
  }
}

/**
 * Parse effect to enrich it with a description with all languages.
 *
 * @param {object} effect
 * @param {number} level
 * @returns {object}
 */
export function parseEffect (effect, level) {
  const actionId = effect.definition.actionId
  const isMakabrakfire = actionId === 1020 // Hardcoded
  if (isMakabrakfire) {
    effect.description = {
      fr: 'Renvoie 10% des dégâts',
      en: 'Reflects 10% of damage',
      es: 'Devuelve un 10% de los daños',
      pt: 'Reenvia 10% dos danos'
    }
  }
  const originalParams = effect.definition.params
  const action = actionsData.find(actionDataId => actionDataId.definition.id === actionId)
  const description = action.description
  if (!description) {
    return effect
  }
  const parsedParams = originalParams.reduce((params, param, index) => {
    const isOddIndex = Boolean(index % 2)
    if (isOddIndex) {
      return params
    }
    const paramNumber = (index / 2) + 1
    const paramKey = `\\[#${paramNumber}\\]`
    let paramValue = Math.floor(param + originalParams[index + 1] * level)

    if (actionId === 304 && index === 0) {
      const statedId = originalParams[0]
      const state = statesData.find(state => statedId === state.definition.id)
      paramValue = state.title ? state.title : '\'Unknown effect\''
    }

    if (actionId === 832 && index === 0) {
      const elementId = originalParams[0]
      paramValue = elementMap[elementId]
    }

    if (actionId === 2001 && index === 2) {
      const jobId = originalParams[2]
      const job = jobsData.find(job => jobId === job.definition.id)
      paramValue = job.title
    }

    if (actionId === 39 && index === 4) {
      const characteristicId = originalParams[4]
      const characteristicMap = {
        120: {
          fr: 'Armure reçue',
          en: 'Armor received',
          es: 'Armadura recibida',
          pt: 'de Armadura recebida'
        },
        121: {
          fr: 'Armure donnée',
          en: 'Armor given',
          es: 'Armadura dada',
          pt: 'de Armadura concedida'
        }
      }
      paramValue = characteristicMap[characteristicId]
    }
    return [
      ...params,
      {
        regex: new RegExp(paramKey, 'g'),
        value: `\${stack = ${paramValue}}`,
        rawValue: paramValue
      }
    ]
  }, [])
  let stack = 0
  console.log(stack)
  const replacements = [
    {
      regex: /\[~(\d+)\]/g,
      value: 'parsedParams.length >= $1'
    },
    {
      regex: /\[\+(\d+)\]/g,
      value: 'parsedParams.length > $1'
    },
    {
      regex: /\[-(\d+)\]/g,
      value: 'parsedParams.length < $1'
    },
    {
      regex: /\[>(\d+)\]/g,
      value: 'stack >= $1'
    },
    {
      regex: /\[<(\d+)\]/g,
      value: 'stack <= $1'
    },
    {
      regex: /\[=(\d+)\]/g,
      value: 'stack == $1'
    },
    {
      regex: /\[(\d+)=(\d+)\]/g,
      value: 'Object(parsedParams[$2 - 1]).rawValue == $1'
    },
    {
      regex: /\[(\d+)<(\d+)\]/g,
      value: 'Object(parsedParams[$2 - 1]).rawValue < $1'
    },
    {
      regex: /\[(\d+)>(\d+)\]/g,
      value: 'Object(parsedParams[$2 - 1]).rawValue > $1'
    },
    {
      regex: /{/g,
      value: '${('
    },
    {
      regex: /\?/g,
      value: ') ? `'
    },
    {
      regex: /:(\S)/g,
      value: '` : `$1'
    },
    {
      regex: /}/g,
      value: '`}'
    },
    ...parsedParams
  ]
  const newDescription = Object.keys(description).reduce((newDescription, lang) => {
    let langDescription = description[lang]
    replacements.forEach(({ regex, value, rawValue }) => {
      if (rawValue && rawValue.en) {
        langDescription = langDescription.replace(regex, rawValue[lang])
        return
      }
      langDescription = langDescription.replace(regex, value)
    })
    return {
      ...newDescription,
      [lang]: eval(`\`${langDescription}\``)
    }
  }, {})
  return {
    ...effect,
    description: newDescription
  }
}