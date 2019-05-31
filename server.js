import express from 'express';

const app = express();

app.get('/graphql', (req, res) => {
    res.send(`<html>
        <body>
            <h1> GraphQL</h1>
        </body>
    </html>`);
});

app.listen(4000, () => {
    console.log("listining on porst 4000");
});
