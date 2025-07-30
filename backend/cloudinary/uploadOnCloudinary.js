const cloudinary = require("./cloudConfig");
const fs = require("fs");
const uploadOnCloudinary = async (filepath) => {
  if (!filepath) {
    return null;
  }
  try {
    const result = await cloudinary.uploader.upload(filepath, {
      resource_type: "auto",
      folder: "wanderlust",
    });
    fs.unlink(filepath, (err) => {
      if (err) throw new Error(err);
      console.log(filepath + "file was deleted");
    });
    return result.secure_url;
  } catch (error) {
    console.log(error);
    fs.unlink(filepath, (err) => {
      if (err) throw new Error("Error deleting file");
      console.log(filepath + "file was deleted");
    });
    return null;
  }
};

module.exports = uploadOnCloudinary;
