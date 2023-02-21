const { default: mongoose } = require("mongoose");

mongoose.set('strictQuery', true)
const dbConn = () => {
    try {
        const conn = mongoose.connect(process.env.MONGO_URL)
        console.log("Database Connected Successfully!!!".blue.bold.underline)
    } catch (error) {
        console.log("Database Error".red.underline)
    }
};
module.exports = dbConn;