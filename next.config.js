const withImages = require("next-images");
module.exports = withImages({
  webpack(config, options) {
    return config;
  },
});

module.exports = {
  reactStrictMode: true,
};

module.exports = {
  images: {
    domains: ["images.unsplash.com", "res.cloudinary.com", "lakhrifood-with-vendor.vercel.app", "lh3.googleusercontent.com"],
  },
};
