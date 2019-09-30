const axios = require('axios');
const baseURL = `http://localhost:8080/`;
const METHODS = {
  POST: "POST",
  PUT: "PUT",
  GET: "GET",
  DELETE: "DELETE"
};

async function approachToServer(options) {
  result = await axios(options);
  return result
}
module.exports = {
  baseURL: baseURL,
  METHODS: METHODS,
  approachToServer: approachToServer
};
