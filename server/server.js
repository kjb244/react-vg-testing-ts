import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
app.use(bodyParser.json());
app.use(cors());


app.listen(4000, function() {
    console.log('express app listening on port 4000!');
});
