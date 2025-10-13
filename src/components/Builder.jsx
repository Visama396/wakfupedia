import { useState, useEffect } from 'react'
import BuildContent from '@/components/BuildContent.jsx'

function Builder() {
    const [classBuild, setClassBuild] = useState({
        "code":"huppermage",
        "nombre":"Hipermago",
    })
    const [itemTypeFilter, setItemTypeFilter] = useState("")

    return (
        <main className="flex flex-col gap-2 p-2">
            <BuildContent selectedClass={setClassBuild} />
            <h2>{classBuild.nombre} - {itemTypeFilter}</h2>
        </main>
    )
}

export default Builder