const STATISTICS = [
    {
        "actionId": 20,
        "name": "hp"
    },
    {
        "actionId": 21,
        "name": "hp"
    },
    {
        "actionId": 31,
        "name": "ap"
    },
    {
        "actionId": 56,
        "name": "ap"
    },
    {
        "actionId": 41,
        "name": "mp"
    },
    {
        "actionId": 57,
        "name": "mp"
    },
    {
        "actionId": 191,
        "name": "wp"
    },
    {
        "actionId": 192,
        "name": "wp"
    },
    {
        "actionId": 175,
        "name": "dodge"
    },
    {
        "actionId": 176,
        "name": "dodge"
    },
    {
        "actionId": 173,
        "name": "lock"
    },
    {
        "actionId": 174,
        "name": "lock"
    },
    {
        "actionId": 875,
        "name": "block"
    },
    {
        "actionId": 876,
        "name": "block"
    },
    {
        "actionId": 1052,
        "name": "mastery_mel"
    },
    {
        "actionId": 1059,
        "name": "mastery_mel"
    },
    {
        "actionId": 1053,
        "name": "mastery_dist"
    },
    {
        "actionId": 1060,
        "name": "mastery_dist"
    },
    {
        "actionId": 1055,
        "name": "mastery_berserk"
    },
    {
        "actionId": 1061,
        "name": "mastery_berserk"
    },
    {
        "actionId": 150,
        "name": "critical"
    },
    {
        "actionId": 168,
        "name": "critical"
    },
    {
        "actionId": 171,
        "name": "initiative"
    },
    {
        "actionId": 172,
        "name": "initiative"
    },
    {
        "actionId": 160,
        "name": "range"
    },
    {
        "actionId": 161,
        "name": "range"
    },
    {
        "actionId": 180,
        "name": "mastery_back"
    },
    {
        "actionId": 181,
        "name": "mastery_back"
    },
    {
        "actionId": 82,
        "name": "fire_res"
    },
    {
        "actionId": 97,
        "name": "fire_res"
    },
    {
        "actionId": 83,
        "name": "water_res"
    },
    {
        "actionId": 98,
        "name": "water_res"
    },
    {
        "actionId": 85,
        "name": "air_res"
    },
    {
        "actionId": 96,
        "name": "air_res"
    },
    {
        "actionId": 84,
        "name": "earth_res"
    },
    {
        "actionId": 100,
        "name": "shield"
    },
    {
        "actionId": 149,
        "name": "mastery_crit"
    },
    {
        "actionId": 1056,
        "name": "mastery_crit"
    },
    {
        "actionId": 71,
        "name": "res_back"
    },
    {
        "actionId": 1063,
        "name": "res_back"
    },
    {
        "actionId": 26,
        "name": "mastery_heal"
    },
    {
        "actionId": 39,
        "name": "armor"
    },
    {
        "actionId": 80,
        "name": "shield"
    },
    {
        "actionId": 90,
        "name": "shield"
    },
    {
        "actionId": 122,
        "name": "fire"
    },
    {
        "actionId": 124,
        "name": "water"
    },
    {
        "actionId": 125,
        "name": "air"
    },
    {
        "actionId": 123,
        "name": "earth"
    },
    {
        "actionId": 132,
        "name": "fire"
    },
    {
        "actionId": 184,
        "name": "control"
    },
    {
        "actionId": 988,
        "name": "res_crit"
    }
]

/**
 * 
 */
export function parseEffectIcon(actionId) {
    const statName = STATISTICS.find(stat => stat.actionId === actionId)
    if (statName) {
        return `https://vertylo.github.io/wakassets/icons/${statName.name}.png`
    } else {
        return undefined
    }
}