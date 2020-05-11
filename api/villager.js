const fetch = require('node-fetch');

const BASE_URL = 'https://nookipedia.com/api/villager';
const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    'X-API-KEY': process.env.API_KEY,
  },
};

// api/villager
module.exports = (req, res) => {
  let { name } = req.query;
  let url = `${BASE_URL}/${name}/`;
  
  fetch(url, API_OPTIONS)
    .then((res) => res.json())
    .then((json) => {
      if (json.hasOwnProperty('error')) {
        throw new Error(json.error);
      }

      res.status(200).json({
        source: 'api',
        data: json,
      });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send(err);
    });
};