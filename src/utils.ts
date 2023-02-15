import type { HSL } from "./types";

export function getHsl({ h, s, l }: HSL) {
  return `hsl(${h} ${s}% ${l}%)`;
}

export function isSameShade(c1: HSL, c2: HSL) {
  return (c1.h === c2.h) && (c1.s === c2.s) && (c1.l === c2.l);
}

// from https://stackoverflow.com/questions/36721830/convert-hsl-to-rgb-and-hex
export function hslToHex(color: HSL) {
  let { h, s, l } = color;
  l /= 100;
  const a = s * Math.min(l, 1 - l) / 100;

  const f = (n: number) => {
    const k = (n + h / 30) % 12;
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);

    // convert to Hex and prefix "0" if needed
    return Math.round(255 * color).toString(16).padStart(2, '0');
  };
  
  return `#${f(0)}${f(8)}${f(4)}`;
}