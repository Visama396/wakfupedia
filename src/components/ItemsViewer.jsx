import { useState } from "react"
import items from "@items"

function ItemsViewer() {
    const [filters, setFilters] = useState({
        level: 200,
        itemType: "HEAD"
    })

    return (
        <section>
            <article>

            </article>
        </section>
    )
}

export default ItemsViewer