const mongoose = require('mongoose');
require('dotenv').config();
const connectionURI = process.env.URI;

mongoose.set("strictQuery", false);

const connectToDB = () => {
    mongoose.connect(connectionURI, {useNewUrlParser: true})
        .then(() => console.log(`Connected To MongoDB`))
        .catch((e) => console.error(`Error: ${e.message}`));
    }

module.exports = connectToDB;