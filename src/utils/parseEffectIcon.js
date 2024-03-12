

const STATISTICS = [
    {
        "actionId": 20,
        "name": "health_points"
    },
    {
        "actionId": 21,
        "name": "health_points"
    },
    {
        "actionId": 31,
        "name": "action_points"
    },
    {
        "actionId": 41,
        "name": "movement_points"
    },
    {
        "actionId": 191,
        "name": "wakfu_points"
    },
    {
        "actionId": 175,
        "name": "dodge"
    },
    {
        "actionId": 173,
        "name": "lock"
    },
    {
        "actionId": 875,
        "name": "block"
    },
    {
        "actionId": 1052,
        "name": "melee_mastery"
    },
    {
        "actionId": 1053,
        "name": "distance_mastery"
    },
    {
        "actionId": 1055,
        "name": "berserk_mastery"
    }
]

/**
 * 
 */
export function parseEffectIcon(actionId) {
    const statName = STATISTICS.find(stat => stat.actionId === actionId)
    if (statName) {
        return `https://tmktahu.github.io/WakfuAssets/statistics/${statName.name}.png`
    } else {
        return undefined
    }
}