import { ToastError } from "./ToastAlerts";

 const uploadImageToCloudinary = (imageFile) => {
    return new Promise(async (resolve, reject) => {
      try {
        if (!imageFile) {
          resolve(""); // Resolve with empty string if no image file provided
          return;
        }

        const data = new FormData();
        data.append("file", imageFile);
        data.append("upload_preset", "ml_defaultru");
        data.append("cloud_name", "dc7xchqbj");

        const response = await fetch("http://api.cloudinary.com/v1_1/dc7xchqbj/image/upload", {
          method: "POST",
          body: data,
        });

        const imageData = await response.json();
        resolve(imageData.url); // Resolve with the uploaded image URL
      } catch (error) {
        console.error("Error uploading image:", error);
        ToastError("Error uploading image to Cloudinary")
        reject(new Error("Error uploading image to Cloudinary"));
      }
    });
  };
  export default uploadImageToCloudinary ; 
