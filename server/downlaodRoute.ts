import express, { Request, Response } from "express";
import ytdl from "ytdl-core";
const downloadRoute = express.Router();

downloadRoute.route("/").get(async (req: any, res: any, next: any) => {
  try {
    let url = req.query.url;
    if (!ytdl.validateURL(url)) {
      return res.sendStatus(400);
    }
    let info: any = ytdl(url, {
      filter: (format) => format.container === "mp4",
    });
    let videoID = await ytdl.getURLVideoID(url);
    let metainfo = await ytdl.getInfo(videoID);

    console.log(videoID);
    // let format = ytdl.chooseFormat(metainfo.formats, { quality: "134" });
    let data = {
      url: "https://www.youtube.com/embed/" + videoID,
      info: metainfo.formats,
    };
    return res.send(data);
  } catch (err) {
    console.error(err);
  }
});

export default downloadRoute;
