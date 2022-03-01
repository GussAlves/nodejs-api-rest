const express = require('express');
const consign = require('consign');

module.exports = () => {
    const app = express();

    app.use(express.urlencoded({extended: true})) // x-urlencoded
    app.use(express.json())

    // incluindo controllers  
    consign()
        .include('controllers')
        .into(app);

    return app;
}