module.exports = {
  devServer: {
    host: "localhost",
    port: 8080,
    proxy: {
      "/api": {
        target: "http://api.travelpayouts.com",
        changeOrigin: true,
        pathRewrite: { "^/api": "" }
      },
      "/back": {
        target: "http://localhost:3000",
        changeOrigin: true,
        pathRewrite: { "^/back": "" }
      }
    }
  }
};

console.log("CONFIG");
