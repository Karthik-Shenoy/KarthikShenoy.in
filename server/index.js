const express = require('express');
const http = require('http')
const bodyParser = require('body-parser');
const resourceRouter = require('./routes/resourceRouter');

const hostname = 'localhost';
const port = 7000;

const app = express();
app.use(bodyParser.json());

app.use('/resources', resourceRouter);

const server = http.createServer(app);

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
});


/*
db.resources.insert(
    [
        {
            title: "Data structures and algorithms",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non suscipit eros.",
            image: "https://i.postimg.cc/nMWSd4KF/neural.png"
        },
        {
            title: "Computer Networking",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non suscipit eros.",
            image: "https://i.postimg.cc/449y1f55/networking.png"
        },
        {
            title: "Operating Systems",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non suscipit eros.",
            image: "https://i.postimg.cc/YC9wb87H/operational-system.png"
        }
    ]
)

{
    title:
    description:
    image:
    link:
}

db.resources.updateOne(
    { title: "Data structures and algorithms" },
    {
        $set: {
            "sub_topics": [{
                title: "Linked Lists",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non suscipit eros.",
                image: "https://i.postimg.cc/q6t4kh8k/linked-list.png",
                link: ""
            }]
        }
    },
    false,
    true
)

*/
