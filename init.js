import app from "./app";
import "./db";

const PORT = 4100;

const handleListening = () => {
  console.log(`Listen the PORT : ${PORT}`);
};

app.listen(PORT, handleListening);
