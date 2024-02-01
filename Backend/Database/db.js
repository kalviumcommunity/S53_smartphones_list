require("dotenv").config()
const config = {
  mongoURI: `mongodb+srv://Addarshkumar:${process.env.PASSWORD}@cluster0.191l7qo.mongodb.net/`,
};

module.exports = config;