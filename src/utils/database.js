import { Client } from 'pg' 

const client = new Client({
    user: import.meta.env.DB_USER,
    host: import.meta.env.DB_HOST,
    database: import.meta.env.DB_DATABASE,
    password: import.meta.env.DB_PASSWORD,
    port: import.meta.env.DB_PORT
})

client.connect()
    .then(() => {
        console.log('Connected to database')
    })
    .catch((err) => {
        console.error('Error connecting to database', err)
    })
    
export default client