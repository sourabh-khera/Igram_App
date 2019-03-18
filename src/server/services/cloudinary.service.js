const cloudinary = require('cloudinary');

cloudinary.config({ 
  cloud_name: 'dcs4tfpha', 
  api_key: '186944261162382', 
  api_secret: 'k87UGg63VD77o16TVR3zp_HSSFo' 
});

exports.saveImageToCloudinary = (uri, height, width) => {
  return new Promise((resolve, reject) => {   
    cloudinary.v2.uploader.upload(uri,{
      height,
      width,
    },
      (error, result) => {
        if(error){
          console.log(error, "error");
          reject(error);
        }
        resolve(result);
       
      })
  })
}