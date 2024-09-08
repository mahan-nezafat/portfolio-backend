import express = require('express');
import 'dotenv/config'
import morgan = require('morgan')
import helmet from 'helmet'
const app = express();
const port = process.env.PORT


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'))
app.use(helmet())

app.get('/', (req, res) => {
    return res.status(200).json({
        success: true,
        message: 'response ok'
    })
})





app.listen(port, () => console.log(`server running on port ${port}`))