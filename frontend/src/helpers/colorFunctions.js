import chroma from "chroma-js";

export const textColor = (c, secondary = false) =>
  chroma.valid(c)
    ? chroma.contrast(c, chroma("black")) > 11
      ? secondary
        ? chroma("dimgray").hex()
        : chroma("black").hex()
      : secondary
      ? chroma("whitesmoke").hex()
      : chroma("white").hex()
    : chroma("whitesmoke").hex();
