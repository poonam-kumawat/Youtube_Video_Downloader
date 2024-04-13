import React, { useState } from "react";
import { getDownloads } from "../service/api.service";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Wave from "react-wavify";
import { useTranslation } from "react-i18next"; 


const Youtube = () => {
  const { t } = useTranslation();
  const [urlValue, setUrlValue] = useState("");
  const [data, setData] = useState(null) as any;

  const [selectedFormat, setSelectedFormat] = useState(null) as any;

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
      <div className="md:h-screen md:bg-[#F0EDE9]">
        <Header />
        <div className="relative">
          <div className="mb-5 ">
            <h1 className="py-10 text-2xl md:text-3xl font-semibold text-[#4DBD7A]">
              {t("Heading")}
            </h1>
            <div className="md:flex md:justify-center md:gap-2">
              <div className="form-group ">
                <input
                  type="text"
                  className="form-control border-2 w-[250px] md:w-[524px] border-[#828282] p-3 rounded-[5px]  "
                  placeholder={t("link")}
                  name="url"
                  onChange={(e) => setUrlValue(e.target.value)}
                />
              </div>
              <button
                onClick={handleDownload}
                className="p-3 mt-4 md:mt-0 w-[200px] md:w-auto  bg-[#4DBD7A] text-[#fff] rounded-[5px] cursor-pointer"
              >
                {t("Download")}
              </button>
            </div>
          </div>
          {data !== null ? (
            <div className="flex justify-center items-center p-4">
              {/* Card Container */}
              <div className="grid md:flex  mx-auto bg-white rounded-lg shadow-md overflow-hidden">
                {/* Video */}
                <div className="flex-1">
                  <iframe
                    width={272}
                    src={`${data.data.url}`}
                    title="video"
                    className="m-0 p-0"
                  />
                </div>

                {/* Controls */}
                <div className="flex flex-col items-center p-4">
                  {/* Format */}
                  <div className="mb-4">
                    <h3 className="text-lg font-semibold">{t("Format")}</h3>
                    <select
                      className="form-control border-2 w-[200px] md:w-[400px] border-[#828282] p-2 rounded-[5px]"
                      onChange={handleFormatChange}
                    >
                      <option value="">{t("selectFormat")}</option>
                      {data?.data.info.map((formatName: any, index: any) => {
                        if (
                          formatName.mimeType.includes("video/mp4") ||
                          formatName.mimeType.includes("audio/mp4")
                        ) {
                          return (
                            <option key={index} value={index}>
                              {formatName.mimeType.split(";")[0] + " "}
                              {formatName.hasVideo
                                ? formatName.height + "p"
                                : ""}
                            </option>
                          );
                        }
                      })}
                    </select>
                  </div>

                  {/* Download Button */}
                  {selectedFormat && (
                    <a
                      href={selectedFormat.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      download
                      className="bg-[#4DBD7A] text-white px-4 py-2 rounded"
                    >
                      {t("Download")}
                    </a>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <div className="text-red-700 font-bold mt-10">
              {t("Paste")}
              <img
                className="w-[20%] m-auto hidden md:block"
                src="./pastelink.svg"
                alt="img"
              ></img>
            </div>
          )}
        </div>
        <div className="absolute hidden md:block bottom-0 w-full">
          <Wave
            fill="#4DBD7A"
            paused={false}
            style={{ display: "flex" }}
            options={{
              height: 20,
              amplitude: 70,
              speed: 0.15,
              points: 5,
            }}
          />
        </div>
      </div>
      <section>
        <div className="h-screen  md:p-20">
          <p className="text-2xl md:text-3xl font-semibold my-10">
            {t("What is YoutubeSave and why to use?")}
          </p>
          <div className="grid items-center md:grid md:grid-cols-2">
            <div className="md:text-left text-xl">
              <p>{t("description")}</p>
            </div>
            <div>
              <img src="./hscreen.svg" alt="img"></img>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="md:h-screen  md:p-20">
          <p className="text-2xl md:text-3xl font-semibold my-10">
            {t("secondHeading")}
          </p>
          <div className="grid md:grid-cols-3 gap-10 p-10 md:p-0 m-auto mt-5">
            <div className="">
              <img src="./Group3.svg" alt="img"></img>
              <p className="mt-4">{t("step1")}</p>
            </div>
            <div className="">
              <img src="./Group6.svg" alt="img"></img>
              <p className="mt-4">{t("step2")}</p>
            </div>
            <div className="">
              <img src="./Group8.svg" alt="img"></img>
              <p className="mt-4">{t("step3")}</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
export default Youtube;
