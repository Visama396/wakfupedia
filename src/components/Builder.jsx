import { useState, useEffect } from 'react'
import BuildContent from '@/components/BuildContent.jsx'

function Builder() {
    const [classBuild, setClassBuild] = useState({code: "", nombre: ""})

    return (
        <main className="flex flex-col gap-2 p-2">
            <BuildContent selectedClass={setClassBuild} />
            <h2>{classBuild.nombre}</h2>
        </main>
    )
}

export default Builder