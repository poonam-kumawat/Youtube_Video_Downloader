import React, { useState } from "react";
import { getDownloads } from "../service/api.service";
import axios from "axios";

const Youtube = () => {
  const [urlValue, setUrlValue] = useState("");
  const [data, setData] = useState(null) as any;

  const [selectedFormat, setSelectedFormat] = useState(null);

  const handleFormatChange = (event: any) => {
    const selectedFormatIndex = event.target.value;
    setSelectedFormat(data.data.info[selectedFormatIndex]);
  };

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
      <div className="my-5">
        <h1 className="py-10 text-2xl">Free Online Youtube Video Downloader</h1>
        <div className="grid grid-cols-2 gap-2">
          <div className="form-group">
            <input
              type="text"
              className="form-control border-2 border-[#828282] p-3 rounded-[10px]"
              placeholder="Paste your video link here"
              name="url"
              onChange={(e) => setUrlValue(e.target.value)}
            />
          </div>
          <button
            onClick={handleDownload}
            className="p-3  bg-[#4DBD7A] text-[#fff] rounded-[10px] cursor-pointer"
          >
            Download
          </button>
        </div>
        {/* </form> */}
      </div>
      <div>
        {data !== null ? (
          <div className="grid grid-cols-2  gap-4">
            <div className="my-4">
              <iframe width={272} src={`${data.data.url}`} title="video" />
            </div>
            <div className="grid grid-cols-4 gap-3">
              {data?.data.info.map((formatName: any, index: any) => {
                if (
                  formatName.mimeType.includes("video/mp4") ||
                  formatName.mimeType.includes("video/mp3")
                ) {
                  return (
                    <div key={index} className="p-3">
                      <a
                        href={formatName.url}
                        target="_blank"
                        download
                        className=" outline-none cursor-pointer border-2"
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
