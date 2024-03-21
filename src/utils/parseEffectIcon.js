

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
        "actionId": 56,
        "name": "action_points"
    },
    {
        "actionId": 41,
        "name": "movement_points"
    },
    {
        "actionId": 57,
        "name": "movement_points"
    },
    {
        "actionId": 191,
        "name": "wakfu_points"
    },
    {
        "actionId": 192,
        "name": "wakfu_points"
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
        "name": "melee_mastery"
    },
    {
        "actionId": 1053,
        "name": "distance_mastery"
    },
    {
        "actionId": 1055,
        "name": "berserk_mastery"
    },
    {
        "actionId": 150,
        "name": "critical_hit"
    },
    {
        "actionId": 168,
        "name": "critical_hit"
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
        "name": "rear_mastery"
    },
    {
        "actionId": 181,
        "name": "rear_mastery"
    },
    {
        "actionId": 82,
        "name": "fire_coin"
    },
    {
        "actionId": 83,
        "name": "water_coin"
    },
    {
        "actionId": 85,
        "name": "air_coin"
    },
    {
        "actionId": 84,
        "name": "earth_coin"
    },
    {
        "actionId": 149,
        "name": "critical_mastery"
    },
    {
        "actionId": 1056,
        "name": "critical_mastery"
    },
    {
        "actionId": 71,
        "name": "rear_resistance"
    },
    {
        "actionId": 1063,
        "name": "rear_resistance"
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