import techPics from "./techPics";

export const getTechPic = (tech: String): (() => JSX.Element) => {
  for (let i = 0; i < techPics.length; i++) {
    if (techPics[i].name === tech) {
      return techPics[i].pic;
    }
  }
  console.log("ERROR: No picture found for technology: ", tech);
  return null;
};

export const isProd = (): boolean => {
  return process.env.NODE_ENV === "production";
};
