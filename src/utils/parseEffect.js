import actions from "@actions";
import states from "@states";
import recipeCategories from "@recipeCategories";

export function parseEffect (effect, level) {
  let actionId = effect.effect.definition.actionId
  const action = actions.find(action => action.definition.id === actionId)

  if (!action) { return effect }

  let effectParams = effect.effect.definition.params
  let stack = 0
  
  const hasThreeOrMoreArguments = effectParams.length >= 6 // [~3]

  const firstParam = () => {
    const value = effectParams[0] + effectParams[1] * level
    stack = value
    return value
  }

  const secondParam = () => {
    const value = effectParams[2] + effectParams[3] * level
    stack = value
    return value
  }

  const thirdParam = () => {
    const value = effectParams[4] + effectParams[5] * level
    stack = value
    return value
  }

  const isLastStackValueGreaterThanTwo = () => stack >= 2 // [>2]

  const plural = () => isLastStackValueGreaterThanTwo() ? 's' : '' // [>2]?s:

  let actionDescription = action.description.es

  let computedParamNotFound = true

  if (action.definition.id === 304) {

    const state = states.find(state => state.definition.id === effect.effect.definition.params[0])

    return `${state.title.es} ${effectParams[2]}%`
  }

  if (action.definition.id === 39) {
    actionDescription = effect.effect.description.es
  }

  if (action.definition.id === 2001) {
    const recipeCategory = recipeCategories.find(recipeCategory => recipeCategory.definition.id === effectParams[2])
    if (recipeCategory != undefined)
    effectParams[2] = recipeCategory.title.es
  }

  function detectFirstCondition(actionDesc) {
    const conditions = [
      {
        name: "{[~3]?",
        regex: /\{\[~3]\?/
      },
      {
        name: "{[~2]?",
        regex: /\{\[~2]\?/
      },
      {
        name: "{[>2]?s:}",
        regex: /\{\[>2]\?s:}/
      },
      {
        name: "[#1]",
        regex: /\[#1]/
      },
      {
        name: "[#2]",
        regex: /\[#2]/
      },
      {
        name: "[#3]",
        regex: /\[#3]/
      }
    ]

    let firstCondition = ""
    let firstIndex = actionDesc.length

    for (const condition of conditions) {
      const match = actionDesc.match(condition.regex)

      if (match && match.index < firstIndex) {
        firstIndex = match.index
        firstCondition = condition.name
      }
    }

    return firstCondition
  }

  while (computedParamNotFound) {
    computedParamNotFound = false

    let firstCondition = detectFirstCondition(actionDescription)

    if (firstCondition.length > 0) {
      computedParamNotFound = true
      if (firstCondition == "{[~3]?") {
        if (!hasThreeOrMoreArguments) {
          actionDescription = actionDescription.substring(actionDescription.indexOf(":")+1, actionDescription.length-1)
        }
      } else if (firstCondition == "{[~2]?") {
        actionDescription = actionDescription.replace("{[~2]?", " ")
        actionDescription = actionDescription.replace(":}", "")
      } else if (firstCondition == "{[>2]?s:}") {
        actionDescription = actionDescription.replace("{[>2]?s:}", plural())
      } else if (firstCondition == "[#1]") {
        actionDescription = actionDescription.replace("[#1]", Math.floor(firstParam()))
      } else if (firstCondition == "[#2]") {
        if (action.definition.id===2001) actionDescription = actionDescription.replace("[#2]", effectParams[2])
        else actionDescription = actionDescription.replace("[#2]", Math.floor(secondParam()))
      } else if (firstCondition == "[#3]") {
        actionDescription = actionDescription.replace("[#3]", Math.floor(thirdParam()))
      }
    }
  }

  actionDescription = actionDescription.replace("[el1]", "Fuego")
  actionDescription = actionDescription.replace("[el2]", "Agua")
  actionDescription = actionDescription.replace("[el3]", "Tierra")
  actionDescription = actionDescription.replace("[el4]", "Aire")

  return actionDescription
}