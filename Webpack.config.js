module.exports = {
    //... other config options
    module: {
      rules: [
        {
          test: /\.(mp3)$/i,
          use: 'file-loader',
          include: /assets/,
        },
      ],
    },
  };
  