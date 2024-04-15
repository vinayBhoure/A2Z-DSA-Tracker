require('dotenv').config();
const PORT = process.env.PORT || 5000;

const express = require('express');
const app = express();
const connectDB = require('./configDB/config')

const router = require('./routers/routes')

app.use('/api', router);

app.listen(3000, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

connectDB();