require("dotenv").config();
const pkg = require("mongoose");
const { connect } = pkg;


module.exports.startConnection = async function startConnection() {
  const db = await
    connect(process.env.MONGODBCONNECTION || "")
      .then(() => {
        console.log("mongooseConect");
      })
      .catch((err) => { console.log(err); });
}

