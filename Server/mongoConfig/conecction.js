const pkg = require("mongoose");
const { connect } = pkg;


 module.exports.startConnection= async function startConnection() {
  const db = await
    connect("mongodb+srv://andreeda58:Sasuke29@reactproyect.aeofv.mongodb.net/DataProyect?retryWrites=true&w=majority")
      .then(() => {
        console.log("mongooseConect");
      })
      .catch((err) => { console.log(err); });
}

