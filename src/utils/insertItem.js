import { Client, Databases, ID } from 'appwrite'

const client = new Client()
    .setProject(import.meta.env.APPWRITE_PROJECT_ID)
    .setEndpoint('https://cloud.appwrite.io/v1')

const databases = new Databases(client)

const insertEffect = async (effect) => {
    const result = await databases.createDocument(
        import.meta.env.APPWRITE_DATABASE_ID, // databaseId
        import.meta.env.APPWRITE_EFFECTS_COLLECTION_ID, // collectionId
        ID.custom(`${effect.definition.id}`), // documentId
        {
            "actionId": effect.definition.actionId,
            "params": effect.definition.params
        },
    );

    return result;
}

const insertItem = async (itemTypeId,item) => {
    const effects = item.definition.equipEffects
    
    for (const effect of effects) {
        const response = await insertEffect(effect.effect)
    }

    const equipEffects = effects.map(effect => effect.effect.definition.id)

    const result = await databases.createDocument(
        import.meta.env.APPWRITE_DATABASE_ID, // databaseId
        itemTypeId, // collectionId
        ID.custom(`${item.definition.item.id}`), // documentId
        {
            "level": item.definition.item.level,
            "rarity": item.definition.item.baseParameters.rarity,
            "sprite_id": item.definition.item.graphicParameters.gfxId,
            "name_es": item.title.es,
            "name_en": item.title.en,
            "name_fr": item.title.fr,
            "name_pt": item.title.pt,
            "desc_es": item.description.es,
            "desc_en": item.description.en,
            "desc_fr": item.description.fr,
            "desc_pt": item.description.pt,
            "equipEffects": equipEffects
        },
    );
    return result;
}

export { insertItem };