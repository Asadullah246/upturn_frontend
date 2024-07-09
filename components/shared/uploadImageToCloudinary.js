import { ToastError } from "./ToastAlerts";

const preset="ml_default"
const cloudName="dpmxjw26u"
const uploadurl="https://api.cloudinary.com/v1_1/dpmxjw26u/image/upload" 

 const uploadImageToCloudinary = (imageFile) => {
    return new Promise(async (resolve, reject) => {
      try {
        if (!imageFile) {
          resolve(""); // Resolve with empty string if no image file provided
          return;
        }

        const data = new FormData();
        data.append("file", imageFile);
        data.append("upload_preset", preset);
        data.append("cloud_name", cloudName);

        const response = await fetch(uploadurl, {
          method: "POST",
          body: data,
        });

        const imageData = await response.json();
        console.log("url", imageData?.url);
        resolve(imageData.url); // Resolve with the uploaded image URL
      } catch (error) {
        console.error("Error uploading image:", error);
        ToastError(`Error uploading image `)
        reject(new Error("Error uploading image to Cloudinary"));
      }
    });
  };
  export default uploadImageToCloudinary ;

  export const uploadImageToCloudinaryWithExist = (imageFile, prevurl) => {
    return new Promise(async (resolve, reject) => {
      try {
        if (!imageFile) {
          resolve(prevurl); // Resolve with empty string if no image file provided
          return;
        }

        const data = new FormData();
        data.append("file", imageFile);
        data.append("upload_preset", preset);
        data.append("cloud_name", cloudName);

        const response = await fetch(uploadurl, {
          method: "POST",
          body: data,
        });

        const imageData = await response.json();
        console.log("url", imageData?.url);
        resolve(imageData.url); // Resolve with the uploaded image URL
      } catch (error) {
        console.error("Error uploading image:", error);
        ToastError("Error uploading image to Cloudinary")
        reject(new Error("Error uploading image to Cloudinary"));
      }
    });
  };
