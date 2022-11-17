import express from "express";
import morgan from "morgan";

//Routes
import languageRoutes from "./routes/language.routes"
import userRoutes from "./routes/user.routes"

const app = express();
var cors = require('cors');
app.use(cors({origin:"http://http://localhost:4000"}));
//Settings
app.set("port", 4000);

//middlewares
app.use(morgan("dev"));
app.use(express.json());

//routes
app.use("/api/languages",languageRoutes)
app.use("/api/users",userRoutes)
export default app;
