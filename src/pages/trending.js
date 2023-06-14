import React, { useLayoutEffect, useState, useCallback } from "react";
import { CaretLeftFill, CaretRightFill, SquareFill } from "react-bootstrap-icons";
import TailwindShade from "@/components/elements/button/TailwindShade";
import Toast from "@/components/elements/toast/Toast";
import codeCopier from "@/utils/codeCopier";
import getColorName from "@/utils/getColorName";
import Head from "next/head";
import col from "nice-color-palettes/500";

export default function Trending() {
  const [count, setCount] = useState(0);
  const [colors, setColors] = useState([]);

  const get10 = useCallback(() => {
    let tempArray = [];
    for (let i = 10 * count; i < 10 * (count + 1); i++) {
      tempArray.push(col[i]);
    }
    return tempArray;
  }, [count]);

  // Example initialization of get10 variable
  // const get10 = someFunctionCall(); // Replace `someFunctionCall()` with the actual function call

  // When the user clicks on the button, scroll to the top of the document
  // Smooth Variant
  function topFunction() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }

  useLayoutEffect(() => {
    setColors(get10());
    topFunction();
  }, [get10]);

  return (
    <>
      <Head>
        {/* Head content */}
      </Head>
      <div className="flex justify-center">
        <main className="flex flex-col sm:items-center gap-8 px-4 w-[64rem] mb-10 transition-all ease-in-out">
          {/* Main content */}
        </main>
      </div>
      <Toast />
    </>
  );
}
