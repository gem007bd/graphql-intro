const express = require('express');
const app = express();

app.get('/graphql', (req, res, next) => {
    res.send('Hello graphql');
});

app.listen({port: 4000}, () => {
    console.log(`Server ready at port 4000`);
});