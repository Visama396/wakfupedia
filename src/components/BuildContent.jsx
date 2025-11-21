import { useState, useEffect } from 'react'
import ClassSelector from '@/components/ClassSelector'
import BuildViewer from '@/components/BuildViewer'

function BuildContent({ selectedClass }) {
    const [buildLevel, setBuildLevel] = useState(1)

    const handleLevelChange = (level) => {
        let l = parseInt(level)
        if (level <= 0) setBuildLevel(1)
        if (level >= 246) setBuildLevel(245)
        setBuildLevel(level)
    }

    return (
        <header className='flex gap-2 p-2 items-center bg-slate-800/80 rounded-md'>
            <ClassSelector onClassSelectedChange={selectedClass} />
            <input className="bg-slate-700 border-none w-12" type="text" value={buildLevel} onChange={(e) => handleLevelChange(e.target.value)} />
            <BuildViewer />
        </header>
    )
}

export default BuildContent