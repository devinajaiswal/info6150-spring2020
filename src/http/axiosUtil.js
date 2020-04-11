var axios = require("axios");

// axios request
function httpApi(method, url, params) {
  return new Promise((resolve, reject) => {
    axios({
      method: method,
      url: url,
      data: method === "POST" || method === "PUT" ? params : null,
      params: method === "GET" || method === "DELETE" ? params : null,
      withCredentials: false
    })
      .then(response => {
        resolve(response);
      })
      .catch(error => {
        reject(error);
      });
  });
}

// interfaces
export default {
  get: function(url, params) {
    return httpApi("GET", url, params);
  },
  post: function(url, params) {
    return httpApi("POST", url, params);
  },
  put: function(url, params) {
    return httpApi("PUT", url, params);
  },
  delete: function(url, params) {
    return httpApi("DELETE", url, params);
  }
};
