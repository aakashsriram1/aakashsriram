const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  assetPrefix: isProd ? '/aakashsriram1.github.io/' : '',
  images: {
    unoptimized: true,
  },
};
