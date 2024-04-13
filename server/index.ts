import express, { Express, Request, Response } from "express";
import cors from "cors";
import downloadRoute from "./downlaodRoute";

import { configDotenv } from "dotenv";

const app: Express = express();
app.set("view engine", "ejs");
configDotenv();

const allowedOrigins = [
  "http://localhost:3000",
  "https://youtubesave-downloader.vercel.app/",
];
const options: cors.CorsOptions = {
  origin: allowedOrigins,
};
app.use((req, res, next) => {
  res.header(
    "Access-Control-Allow-Origin",
    "https://youtubesave-downloader.vercel.app/"
  ); 
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(cors(options));
app.use(express.json());
app.use("/download", downloadRoute);


app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.listen(5000, () => {
  console.log("Server is running on http://localhost:5000");
});
