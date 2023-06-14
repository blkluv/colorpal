import TailwindShade from "@/components/elements/button/TailwindShade";
import Toast from "@/components/elements/toast/Toast";
import codeCopier from "@/utils/codeCopier";
import getColorName, { genericColorName } from "@/utils/getColorName";
import getColorPalette from "@/utils/getColorPalette";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import { ArrowUpCircle, Recycle, SquareFill } from "react-bootstrap-icons";

const getColors = require("get-image-colors");

export default function Pfi() {
  const [img, setImg] = useState();
  const [colors, setColors] = useState([]);
  const [aiColors, setAiColors] = useState([]);

  const onImageChange = (e) => {
    if (e.target.files.length !== 0) {
      const [file] = e.target.files;
      setImg(URL.createObjectURL(file));
    }
  };
  useEffect(() => {
    if (img !== undefined) {
      getColors(img).then((clr) => {
        // `clr` is an array of color objects
        setColors(clr);
        // Test
        setAiColors(getColorPalette(clr[0].hex()));
      });
    }
  }, [img]);
  return (
    <div className="flex justify-center">
      <Head>
        {/* Meta tags */}
      </Head>
      {img ? (
        // When Image has been selected
        <main className="flex flex-col sm:items-center gap-8 px-4 w-[64rem] mb-10 transition-all ease-in-out">
          {/* Content */}
        </main>
      ) : (
        // When Image is not selected
        <main className="flex flex-col min-h-screen -mt-32 md:-mt-44 justify-center items-center gap-6 sm:gap-10 text-center">
          {/* Content */}
        </main>
      )}
      <Toast color={aiColors} />
    </div>
  );
}
