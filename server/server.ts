const express = require('express');

const app = express();
const path = require('path');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// app.get('/home', (req: Request, res: Response) => {
//     return res.status(200).send("YOOOOO")
// })

app.listen(3000, () => console.log('Listening on port 3000'));

module.exports = app;