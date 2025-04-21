import { useState, useEffect } from 'react'
import client from '@/utils/database'

const ItemsList = () => {
    const [items, setItems] = useState([])

    const fetchItems = async () => {
        try {
            const res = await client.query('SELECT * FROM equipments')
            const data = res.rows
            console.log(data)
            setItems(data)
        } catch (error) {
            console.error('Error fetching items:', error)
        }
    }

    useEffect(() => {
        fetchItems()
    }, [])

    return (
        <>
            <h2>Items</h2>
            {items && items.map(item => {
                <div key={item.item_id}>
                    {item.name_es}
                </div>
            })}
        </>
    )
        
}

export default ItemsList