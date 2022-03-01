const express = require('express');
const consign = require('consign');

module.exports = () => {
    const app = express();

    app.use(express.urlencoded({extended: true})) // x-urlencoded
    app.use(express.json())

    // assim realizamos 
    consign()
        .include('controllers')
        .into(app);

    return app;
}