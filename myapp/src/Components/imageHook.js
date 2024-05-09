import React from 'react'

///Images being used in here are in the aspect 16:9 (1920 x 1080 || 1280 x 720)
///images don't have to be this size just the preferred size I'm using

const imageHook = (imagepath) => {

    const image = process.env.PUBLIC_URL + imagepath;

    const folderDirectory = "Images/";
    const splitText = image.split('/')[1].split('.'); //separate filepath by / into two words & //separate remaining text from file format type.
    console.log(splitText);


    const filename = splitText[0];
    const format = "." + splitText[1]; //file format e.g .png .jpg

    const stringImage = `${folderDirectory + filename + "-s" + format + " 360w"}, ${folderDirectory + filename + "-m" + format + " 1200w"}`;
    // ${folderDirectory + filename + "-l" + format + " 1200w"}`;


  return stringImage;
}

export default imageHook