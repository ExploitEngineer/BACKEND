const multer = require("multer");
const crypto = require("crypto");
const path = require("path");

// disk storage setup
const storage = multer.diskStorage({
  destination: function (_, _, cb) {
    cb(null, "./public/images/uploads");
  },
  filename: function (_, file, cb) {
    crypto.randomBytes(12, function (_, name) {
      const fn = name.toString("hex") + path.extname(file.originalname);
      cb(null, fn);
    });
  },
});

// export upload variable
const upload = multer({ storage: storage });

module.exports = upload;
