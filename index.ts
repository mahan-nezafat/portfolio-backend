import express = require('express');
import 'dotenv/config'
const app = express();
const port = process.env.PORT









app.listen(port, () => console.log(`server running on port ${port}`))