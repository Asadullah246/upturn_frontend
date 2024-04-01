 // const handleSubmit = async (e) => {
  //   setUploadingStatus(true);
  //   e.preventDefault();
  //   const target = e.target;
  //   const authorImage = target?.authorImage?.files[0];
  //   const blogImage = target?.blogImage?.files[0];
  //   const inputData = {
  //     title: target?.blogTitle.value,
  //     author: {
  //       name: target?.authorName.value,
  //       image: "", // Will be updated after image upload
  //       designation: target?.authorDesignation.value,
  //       description: target?.authorDescription.value,
  //       links: {
  //         facebook: target?.authorFacebook.value,
  //         twitter: target?.authorTwitter.value,
  //         linkedIn: target?.authorLindedIn.value,
  //       },
  //     },
  //     image: "", // Will be updated after image upload
  //     description: descriptions,
  //   };
  //   console.log("data", inputData);
  //   let authorImageLink = "";
  //   let blogImageLink = "";

  //   const uploadAuthorImagePromise = authorImage ?
  //     new Promise((resolve, reject) => {
  //       const data = new FormData();
  //       data.append("file", authorImage);
  //       data.append("upload_preset", "ml_defaultru");
  //       data.append("cloud_name", "dc7xchqbj");

  //       fetch("http://api.cloudinary.com/v1_1/dc7xchqbj/image/upload", {
  //         method: "POST",
  //         body: data,
  //       })
  //         .then((res) => res.json())
  //         .then((res) => {
  //           authorImageLink = res?.url;
  //           // console.log("authorImageLink url", res?.url);
  //           resolve();
  //         })
  //         .catch((err) => {
  //           ToastError(err?.message || "Something error when uploading image");
  //           reject(err);
  //         });
  //     })
  //     : Promise.resolve(); // Resolve immediately if no authorImage

  //   const uploadBlogImagePromise = blogImage ?
  //     new Promise((resolve, reject) => {
  //       const data = new FormData();
  //       data.append("file", blogImage);
  //       data.append("upload_preset", "ml_defaultru");
  //       data.append("cloud_name", "dc7xchqbj");

  //       fetch("http://api.cloudinary.com/v1_1/dc7xchqbj/image/upload", {
  //         method: "POST",
  //         body: data,
  //       })
  //         .then((res) => res.json())
  //         .then((res) => {
  //           blogImageLink = res?.url;
  //           // console.log("blog url", res?.url);
  //           resolve();
  //         })
  //         .catch((err) => {
  //           ToastError(err?.message || "Something error when uploading image");
  //           reject(err);
  //         });
  //     })
  //     : Promise.resolve(); // Resolve immediately if no blogImage

  //   // Wait for both image upload promises to resolve
  //   try {
  //     await Promise.all([uploadAuthorImagePromise, uploadBlogImagePromise]);

  //     // Update inputData with image links
  //     inputData.author.image = authorImageLink;
  //     inputData.image = blogImageLink;

  //     // Upload data to database
  //     const res = await CreateNew(inputData, "blogs");

  //     if (res?.status === "success") {
  //       ToastSuccess("Successfully updated");
  //     } else {
  //       ToastError(res?.message || "Something error");
  //     }
  //   } catch (error) {
  //     ToastError(error?.message || "Something error");
  //   }

  //   setUploadingStatus(false);
  // };
