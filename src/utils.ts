import techPics from "./techPics";

export const getTechPic = (tech) => {
  // console.log();
  for (let i = 0; i < techPics.length; i++) {
    if (techPics[i].name === tech) {
      return techPics[i].pic;
    }
  }
  console.log("ERROR: No picture found for technology: ", tech);
  return null;
};
