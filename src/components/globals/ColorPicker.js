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
    setIsVisible(true);
    if (router.isReady && isVisible) {
      const queryValue = router.query[id] !== "" && router.query[id] !== undefined ? router.query[id] : "#ffffff";
      document.getElementById(`${id}_val`).value = queryValue;
      document.getElementById(id).value = queryValue;
    }
  }, [router.isReady, isVisible, id]);

  useEffect(() => {
    if (isVisible && router.isReady) {
      updateTailwindShades();
    }
  }, [isVisible, router.isReady, updateTailwindShades]);

  return (
    <>
      {isVisible && (
        <div className="flex flex-col gap-2 w-24 justify-center items-center m-4">
          <input
            type="color"
            id={id}
            defaultValue="#ffffff"
            onChange={(e) => {
              document.getElementById(`${id}_val`).value = e.target.value;
            }}
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
            onClick={() =>
              customToast(`Color name is: ${getColorName(document.getElementById(`${id}_val`).value)}`)
            }
          >
            Check name
          </button>
        </div>
      )}
    </>
  );
}
