import express, { Express, Request, Response } from "express";
import cors from "cors";
import downloadRoute from "./downlaodRoute";

import { configDotenv } from "dotenv";

const app: Express = express();
app.set("view engine", "ejs");
configDotenv();

const allowedOrigins = [
  "http://localhost:3000",
  "https://youtubesave-downloader.vercel.app",
];
const options: cors.CorsOptions = {
  // origin: allowedOrigins,
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST", "OPTIONS", "PUT", "PATCH", "DELETE"],
  allowedHeaders: ["X-Requested-With", "content-type"],
};



app.use(cors(options));
app.use(express.json());
app.use("/download", downloadRoute);


app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.listen(5000, () => {
  console.log("Server is running on http://localhost:5000");
});
