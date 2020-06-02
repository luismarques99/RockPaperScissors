'use  strict';

const express = require('express');

const PORT = process.env.PORT || 3000;
const app = express();

app
    .use(express.static('public'))

    .listen(PORT, () => {
        console.log(`The server is running in http://localhost:${PORT}`);
    });