import React, { useState } from "react";
import { getDownloads } from "../service/api.service";
import axios from "axios";

const Youtube = () => {
  const [urlValue, setUrlValue] = useState("");
  const [data, setData] = useState(null) as any;

  const handleDownload = async () => {
    const data: any = await getDownloads(urlValue);
    try {
      const data: any = await getDownloads(urlValue);
      setData(data);
      console.log(data);
      setUrlValue("");
    } catch (error) {
      console.error(error);
    }
    setData(data);
    console.log(data);
    setUrlValue("");
  };
  return (
    <div>
      <div className="container my-5">
        <h1>
          <strong>Youtube Downloader</strong>
        </h1>
        {/* <form method="GET" action="/download" className="my-5"> */}
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Video Link from Youtube</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Video URL"
            name="url"
            onChange={(e) => setUrlValue(e.target.value)}
          />
        </div>
        <button onClick={handleDownload} className="btn btn-primary">
          Download
        </button>
        {/* </form> */}
      </div>
      <div>
        {data !== null ? (
          <div>
            <div className="my-4">
              <iframe
                width="570"
                height="320"
                src={`${data.data.url}`}
                title="video"
              />
            </div>
            <div>
              {data?.data.info.map((formatName: any, index: any) => {
                if (
                  formatName.mimeType.includes("video/mp4") ||
                  formatName.mimeType.includes("video/mp3")
                ) {
                  return (
                    <div key={index}>
                      <a
                        href={formatName.url}
                        target="_blank"
                        download
                        className=" outline-none italic underline"
                      >
                        {formatName.mimeType.split(";")[0] + " "}
                        {formatName.hasVideo ? formatName.height + "p" : ""}
                      </a>
                    </div>
                  );
                }
              })}
            </div>
          </div>
        ) : (
          <div className=" text-red-700 font-bold mt-10">No download yet</div>
        )}
      </div>
    </div>
  );
};
export default Youtube;
