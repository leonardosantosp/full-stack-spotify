import { MongoClient } from 'mongodb'
import dotenv from 'dotenv'

dotenv.config()

const URI = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_CLUSTER}/${process.env.MONGO_DB}?retryWrites=true&w=majority&appName=Cluster0`

const client = new MongoClient(URI)

export const db = client.db(process.env.MONGO_DB)
