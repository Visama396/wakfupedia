import { useState, useEffect } from 'react'
import ClassSelector from '@/components/ClassSelector.jsx'

function BuildContent({ selectedClass }) {

    return (
        <header className='flex gap-2 p-2 items-center bg-slate-800/80 rounded-md'>
            <ClassSelector onClassSelectedChange={selectedClass} />
            <input type="number" placeholder='Nivel' />
        </header>
    )
}

export default BuildContent