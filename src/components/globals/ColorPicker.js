import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { customToast } from "../elements/toast/Toast";
import getColorName from "@/utils/getColorName";

export default function ColorPicker({
  id,
  label,
  onChangeTrigger,
  updateTailwindShades,
}) {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const queryValue =
      router.query[id] !== "" && router.query[id] !== undefined
        ? router.query[id]
        : "#ffffff";

    document.getElementById(`${id}_val`).value = queryValue;
    document.getElementById(id).value = queryValue;

    setIsVisible(true);
  }, [router.isReady, id]);

  useEffect(() => {
    if (isVisible && router.isReady) {
      updateTailwindShades();
    }
  }, [isVisible, router.isReady, updateTailwindShades]);

  const handleColorChange = (e) => {
    document.getElementById(`${id}_val`).value = e.target.value;
  };

  const handleCheckName = () => {
    const colorValue = document.getElementById(`${id}_val`).value;
    const colorName = getColorName(colorValue);
    customToast(`Color name is: ${colorName}`);
  };

  return (
    <>
      {isVisible && (
        <div className="flex flex-col gap-2 w-24 justify-center items-center m-4">
          <input
            type="color"
            id={id}
            defaultValue="#ffffff"
            onChange={handleColorChange}
            className="outline-none bg-transparent h-10 w-10 rounded-full overflow-hidden transition-all ease-in-out duration-100 ring ring-grey"
          />

          <input
            type="text"
            id={`${id}_val`}
            className="opacity-75 bg-transparent text-center"
            disabled
          />
          <span className="capitalize font-semibold">{label}</span>
          <button
            className="text-xs bg-tint-emerald text-black w-full py-1 rounded-sm hover:ring-2 ring-offWhite/40"
            onClick={handleCheckName}
          >
            Check name
          </button>
        </div>
      )}
    </>
  );
}
