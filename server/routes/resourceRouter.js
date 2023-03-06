const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const { ObjectId } = require('mongodb');


// Define connection string
const uri = "mongodb://0.0.0.0:27017/portfolio";

// Connect to MongoDB
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MongoDB Connected…");
    })
    .catch(err => console.log(err));

// Define a schema
const ResourceSchema = new mongoose.Schema({
    title: String,
    description: String,
    image: String,
    sub_topics: Array
});

// Create a model
const Resource = mongoose.model("resources", ResourceSchema);

// Create an express app and use JSON middleware
const resourceRouter = express.Router();
resourceRouter.use(bodyParser.json());


// we will mount this router at /resources end point, any requests coming in will goto /resources/
resourceRouter.route('/')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get(async (req, res, next) => {
        try {
            // Find all users from MongoDB and Send response as JSON array
            const resources = await Resource.find();
            res.json(resources);
        } catch (err) {
            // Handle error
            res.status(500).json({ message: err.message });
        }
    })
    .post((req, res, next) => {
        res.end("will add the dish" + req.body.name)
    })
    .put((req, res, next) => {
        res.statusCode = 403;
        res.end("PUT operation not supported on /resources ")
    })
    .delete((req, res, next) => {
        res.statusCode = 403;
        res.end("Delete operation not supported on /resources ")
    });

resourceRouter.route('/:id')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get(async (req, res, next) => {
        try {
            // Find all users from MongoDB and Send response as JSON array
            const query = { _id: new ObjectId(req.params.id) };
            const resource = await Resource.find(query);
            res.json(resource);
        } catch (err) {
            // Handle error
            res.status(500).json({ message: err.message });
        }
    })
    .post((req, res, next) => {
        res.end("will add the dish" + req.body.name)
    })
    .put((req, res, next) => {
        res.statusCode = 403;
        res.end("PUT operation not supported on /resources ")
    })
    .delete((req, res, next) => {
        res.statusCode = 403;
        res.end("Delete operation not supported on /resources ")
    });



module.exports = resourceRouter;


/*
app.all('/resources/:resourceId', (req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
});

app.get('/resources/:resourceId', (req, res, next) => {
    res.end("dishe sent : " + req.params.resourceId);
});

app.post('/resources/:resourceId', (req, res, next) => {
    res.statusCode = 403
    res.end("POST operation not supported on /resources/:resourceId");
});
 
app.put('/resources/:resourceId', (req, res, next) => {
    res.end("PUT operation sucessful ");
});

app.delete('/resources/:resourceId', (req, res, next) => {
    res.end("Delete operation successful ");
});
*/