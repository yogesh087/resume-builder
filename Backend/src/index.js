import app from "./app.js";
import { connectDB } from "./db/index.js";
import { config } from "dotenv";
config();

connectDB().then(() => {
 app.listen(process.env.PORT, '0.0.0.0', () => {
  console.log("Server is running on http://0.0.0.0:" + process.env.PORT);
});

});

