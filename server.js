const express = require('express');
const axios = require('axios');
const cors = require('cors');

//set origin
const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200
}

const app = express();
const port = 4001;

//set origin
app.use(cors(corsOptions));

app.get('/map', async (req, res) => {
    try {
        const data = await axios.get('https://fortnite-api.com/v1/map');
        console.log(data.data);
        res.send(data.data.data);
    } catch (error) {
        console.log(error);
    }
});

app.listen(port);
console.log(`Connect to port ${port} success`);