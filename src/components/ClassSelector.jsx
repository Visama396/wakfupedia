import { useState, useEffect } from 'react'

function ClassSelector({ onClassSelectedChange }) {
    const [selectedClass, setSelectedClass] = useState("huppermage")
    const [open, setOpen] = useState(false)
    const classes = [
        {
            "code":"sacrier",
            "nombre":"Sacrógrito",
        },
        {
            "code":"cra",
            "nombre":"Ocra"
        },
        {
            "code":"pandawa",
            "nombre":"Pandawa"
        },
        {
            "code":"eniripsa",
            "nombre":"Aniripsa"
        },
        {
            "code":"huppermage",
            "nombre":"Hipermago"
        },
        {
            "code":"sram",
            "nombre":"Sram"
        },
        {
            "code":"ouginak",
            "nombre":"Uginak"
        },
        {
            "code":"ecaflip",
            "nombre":"Zurcarák"
        },
        {
            "code":"xelor",
            "nombre":"Xelor"
        },
        {
            "code":"rogue",
            "nombre":"Tymador"
        },
        {
            "code":"enutrof",
            "nombre":"Anutrof"
        },
        {
            "code":"osamodas",
            "nombre":"Osamodas"
        },
        {
            "code":"masqueraider",
            "nombre":"Zobal"
        },
        {
            "code":"iop",
            "nombre":"Yopuka"
        },
        {
            "code":"eliotrope",
            "nombre":"Selotrop"
        },
        {
            "code":"sadida",
            "nombre":"Sadida"
        },
        {
            "code":"feca",
            "nombre":"Feca"
        },
        {
            "code":"foggernaut",
            "nombre":"Steamer"
        }
    ]

    return (
        <div className='relative'>
            <div id='selected-class'>
                <button onClick={() => setOpen(!open)}>
                    <img className='rounded-md' src={`https://raw.githubusercontent.com/Tmktahu/WakfuAssets/refs/heads/main/classes/${selectedClass}.png`} alt={classes.find(item => item.code == selectedClass).nombre} />
                </button>
            </div>
            {open && (
                <div id='classes-list' className='grid grid-cols-6 gap-2 bg-slate-700/80 rounded-md p-2 absolute w-[500px]'>
                    {classes.map(item => (
                        <button key={item.code} className='transition hover:scale-[1.05]' onClick={() => {setSelectedClass(item.code); onClassSelectedChange(item); setOpen(false)}} >
                            <img src={`https://raw.githubusercontent.com/Tmktahu/WakfuAssets/refs/heads/main/classes/${item.code}.png`} alt={item.nombre} />
                        </button>
                    ))}
                </div>
            )}
        </div>
    )
}

export default ClassSelector