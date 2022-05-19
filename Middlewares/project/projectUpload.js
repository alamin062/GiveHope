const uploader = require("../../utilities/singleUploader");

function projectUpload(req, res, next) {
  const upload = uploader(
    "images",
    ["image/jpeg", "image/jpg", "image/png"],
    1000000,
    "Only .jpg, jpeg or .png format allowed!"
  );

  // call the middleware function
  upload.any()(req, res, (err) => {
    if (err) {
      res.status(500).json({
        errors: {
          images: {
            msg: err.message,
          },
        },
      });
    } else {
      next();
    }
  });
}

module.exports = projectUpload;