const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

app.get('/status', (req, re) => {
    re.send({
        message: 'hello world'
    })
})

// Dock Server
const dock = 8081;
app.listen(process.env.PORT || dock, () => console.log(`server run on dock ${dock}`));