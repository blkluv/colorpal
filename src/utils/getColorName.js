import colorNamer from "color-namer";

export default function getColorName(colorCode) {
  const names = colorNamer(colorCode);
  return names.ntc[0].name.toLowerCase().replace(/ /g, "-");
}

// Works for HEX, HSL, RGB, and RGBA

/*
Example:
    let colorName = getColorName("#E2D28F");
    console.log(colorName)
*/

export const genericColorName = [
  "primary",
  "secondary",
  "tertiary",
  "quaternary",
  "quinary",
];
