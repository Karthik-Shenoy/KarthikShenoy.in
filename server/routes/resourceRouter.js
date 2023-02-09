const express = require('express');
const bodyParser = require('body-parser');

const resourceRouter = express.Router();
resourceRouter.use(bodyParser.json());

// we will mount this router at /resources end point, any requests coming in will goto /resources/
resourceRouter.route('/')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res, next) => {
        res.end("dishes sent");
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