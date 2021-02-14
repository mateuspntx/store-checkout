const withImages = require('next-images');

module.exports = withImages({
  esModule: true,
});

// Images CDN/Host domains should be added here
module.exports = {
  images: {
    domains: [],
  },
};
