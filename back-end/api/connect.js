// import { MongoClient } from 'mongodb'

// const URI =
//   'mongodb+srv://leo:58j1Vzg5k9sTZwX2@cluster0.tsmqd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

// const client = new MongoClient(URI)

// export const db = client.db('spotifyBd')

import { MongoClient } from 'mongodb'
import dotenv from 'dotenv'

dotenv.config()

const URI = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_CLUSTER}/?retryWrites=true&w=majority&appName=Cluster0`

const client = new MongoClient(URI)

export const db = client.db(process.env.MONGO_DB)
