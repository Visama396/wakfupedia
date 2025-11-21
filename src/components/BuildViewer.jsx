import { useState } from "react"

function BuildViewer() {
    const buildSlots = [
        {
            id: 134,
            name: "HEAD"
        },
        {
            id: 120,
            name: "NECK"
        },
        {
            id: 136,
            name: "CHEST"
        },
        {
            id: 103,
            name: "LEFT_HAND",
        },
        {
            id: 103,
            name: "RIGHT_HAND",
        },
        {
            id: 119,
            name: "LEGS"
        },
        
        {
            id: 132,
            name: "BACK"
        },
        {
            id: 133,
            name: "BELT"
        },
        {
            id: 138,
            name: "SHOULDERS"
        },
        {
            id: 138,
            name: "FIRST_WEAPON"
        },
        {
            id: 138,
            name: "SECOND_WEAPON"
        }
    ]


    return (
        <div className="flex h-full bg-slate-700 p-2 gap-1 rounded-md">
            {buildSlots.map(slot => (
                <figure className="bg-slate-500/20 p-2 rounded-md cursor-pointer transition-all hover:bg-slate-500/80" onClick={() => {}}>
                    <img className="size-12 object-cover" src={`https://tmktahu.github.io/WakfuAssets/equipmentDefaults/${slot.name}.png`} alt="icon" />
                </figure>
            ))}
        </div>
    )
}

export default BuildViewer