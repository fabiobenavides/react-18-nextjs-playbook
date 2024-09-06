import { MongoClient } from 'mongodb'

async function getProducts() {

    const uri = 'mongodb+srv://gecko:alert-radius-LEFTY1@cluster0.m6rbt.mongodb.net/?retryWrites=true&w=majority'
    const dbName = 'album-shop-dev'
    const client = await MongoClient.connect(uri)
    const collection = client.db(dbName).collection("albums")
  
    const albums = await collection.find({}).toArray()
  
    client.close()
  
    return albums
}

export default async function handler(req, res) {
    const albums = await getProducts();

    res.status(200).json(albums);
}