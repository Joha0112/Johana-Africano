module.exports = {
  // ... Otras configuraciones ...
  module: {
    rules: [
      // ... Otras reglas ...
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
        ],
      },
    ],
  },
};



