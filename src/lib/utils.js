const { default: mongoose } = require("mongoose");
const connection = {};
export const connectToDB = async () => {
  try {
    if (connection.isConnected) {
      console.log("using existing connection");
      return;
    }
    const db = await mongoose.connect(process.env.MONGOO);
    connection.isConnected = db.connections[0].readyState;
  } catch (error) {
    console.log(error);
    throw new Error("something went wrong while connecting to db");
  }
};
