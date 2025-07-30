const multer = require("multer");
const path = require("path");
let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/");
  },
  filename: (req, file, cb) => {
    let ext = path.extname(file.originalname);
    let filename = file.fieldname + Date.now() + ext;
    cb(null, filename);
  },
});

const uploads = multer({ storage: storage });
// const uploads = multer({ storage: storage }).single("image");
module.exports = uploads;
