module.exports = {
  devServer: {
    host: "localhost",
    port: 8080,
    proxy: {
      "/api": {
        target: "http://api.travelpayouts.com",
        changeOrigin: true,
        pathRewrite: { "^/api": "" }
      }
    }
  }
};

console.log("CONFIG");
