import { Client, Databases, ID } from 'appwrite'

const client = new Client()
    .setProject(import.meta.env.APPWRITE_PROJECT_ID)
    .setEndpoint('https://cloud.appwrite.io/v1')

const databases = new Databases(client)

const insertEffect = async (id, actionId, params) => {
    const result = await databases.createDocument(
        'databaseid', // databaseId
        'collectionid', // collectionId
        ID.unique(), // documentId
        {
            id: id,
            actionId: actionId,
            params: params
        },
    );

    return result;
}

export { insertEffect };