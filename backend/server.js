const express = require('express');
const helmet = require('helmet');
const app = express();
const PORT = process.env.PORT || 3001;
const connectToDB = require('./database/connection');
const router = require('./routes/router');

connectToDB();

app.use(express.json());
app.use(helmet());
app.use('/api', router);

app.listen(PORT, () => {
    console.log(`Listenning on http://localhost:${PORT}`);
});