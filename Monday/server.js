// defines port number 
const PORT = 8000;

// express needful 
const express = require('express');
const app = express();

// cors and axios and dotenv
const cors = require('cors');
require('dotenv').config();
const axios = require('axios');
app.use(cors());
app.use(express.json())

const url = 'https://36c9249a-65c4-4da0-8249-8f54aa4c0dc3-asia-south1.apps.astra.datastax.com/api/rest/v2/namespaces/tickets/collections/tasks'
const token = 'AstraCS:GmKxuvMSQyBbAADlazvyHwso:3cf48c367f06c63e980662de06c1cbd791753d62924932ebe2344182a409be98'


app.get('/tickets', async (req, res)=> {
    const options = {
        method: 'GET',
        headers: {
            Accepts: 'application/json',
            'X-Cassandra-Token': token,         
        }
    }
    try{
        const response = await axios(`${url}?page-size=20`, options)
        res.status(200).json(response.data)
    } catch(err){
        console.error(err)
        res.status(500).json({message: err})
    }
})


app.get(`/tickets/:documentId`, async (req, res)=> {
    const id = req.params.documentId

    const options = {
        method: 'GET',
        headers: {
            Accepts: 'application/json',
            'X-Cassandra-Token': token,         
        }
    }
    try {
        const response = await axios(`${url}/${id}`, options)
        res.status(200).json(response.data)
    }
    catch(err){
        console.error(err)
        res.status(500).json({message:err})
    }
})

app.post('/tickets', async (req, res) => {
    const formData = req.body.formData


    const options = {
        method: 'POST',
        headers: {
            Accepts: 'application/json',
            'X-Cassandra-Token': token,
            'Content-Type' : 'application/json'
        },
        data : formData
    }

    try{
        // WRT code on tikcetPage , url is local host and option is form data
        const response = await axios(url, options)
        res.status(200).json(response.data)
    }
    catch(err){
        console.error(err)
        res.status(500).json({message:err})
    }
})

app.delete('/tickets/:documentId', async(req, res) => {
    const id = req.params.documentId

    const options = {
        method : 'DELETE',
        headers : {
            Accepts: 'application/json',
            'X-Cassandra-Token': token
        }
    }
    try {
        const response = await axios(`${url}/${id}`, options)
        res.status(200).json(response.data)
    }
    catch(err){
        console.error(err)
        res.status(500).json({message:err})
    }
})

app.put(`/tickets/:documentId`, async (req, res)=> {
    const id = req.params.documentId
    const data = req.body.data

    const options = {
        method: 'PUT',
        headers: {
            Accepts: 'application/json',
            'X-Cassandra-Token': token,         
        }, 
        data
    }
    try {
        const response = await axios(`${url}/${id}`, options)
        res.status(200).json(response.data)
    }
    catch(err){
        console.error(err)
        res.status(500).json({message:err})
    }
})




app.listen(PORT, ()=> console.log('server running on port 8000'))