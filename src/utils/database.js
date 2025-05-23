import pg from 'pg' 
import fs from 'fs'

const client = new pg.Client({
    user: import.meta.env.DB_USER,
    host: import.meta.env.DB_HOST,
    database: import.meta.env.DB_DATABASE,
    password: import.meta.env.DB_PASSWORD,
    port: import.meta.env.DB_PORT,
    ssl: {
        rejectUnauthorized: true,
        ca: fs.readFileSync('./src/utils/ca.pem').toString()
    }
})

client.connect()
    .then(() => {
        console.log('Connected to database')
    })
    .catch((err) => {
        console.error('Error connecting to database', err)
    })
    
export default client