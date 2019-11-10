import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/notube", {
  useNewUrlParser: true,
  useFindAndModify: false
});

const db = mongoose.connection;

const handleOpen = () => {
  console.log("Connected with DB");
};
const handleError = error => {
  console.log(`XXXXXX Error on DB Connection${error}`);
};
db.once("open", handleOpen);
db.on("error", handleError);
