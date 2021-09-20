const axios = require('axios');
// eslint-disable-next-line import/extensions
const APOD = require('../models/APOD');

// Utils
// eslint-disable-next-line import/extensions
const getStartDate = require('../utils');

const apiKey = 'X5YJg98pmuUMEC5tAn385uwvfDX50lID0eqIkubk';

module.exports = {
  // Getting APODS from nasaAPI
  getAPODS: async function getAPODS() {
    try {
      const startDate = getStartDate();
      const response = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&start_date=${startDate}`);
      const apods = response.data;
      apods.forEach(async (apod) => {
        const updated = await APOD.create(apod);
        const {
          // eslint-disable-next-line camelcase
          title, date, liked, url, hdurl, explanation, media_type, service_version,
        } = updated;
        await APOD.findOneAndUpdate(
          apod,
          {
            title,
            date,
            liked,
            url,
            hdurl,
            explanation,
            media_type,
            service_version,
          },
          {
            new: true,
            upsert: true,
          },
        );
      });
    } catch (err) {
      console.log('Error with getting APODS: ', err);
    }
  },
  // Getting APODS from db
  readAPODS: async function readAPODS(req, res) {
    try {
      const apods = await APOD.find({ media_type: 'image' })
        .sort({ date: -1 })
        .limit(12);
      res.json(apods);
    } catch (err) {
      res.json({ err });
    }
  },
  // Updating APODS' likes for persistent data
  patchLikes: async function patchLikes(req, res) {
    const { liked } = req.body;
    console.log('PATCH BODY', liked);
    const { id } = req.params;
    console.log('PATCH PARAMS', id);
    try {
      await APOD.findOneAndUpdate(
        { id },
        { liked },
      );
      res.send(`Updated like on photo with the id:${id}`);
    } catch (err) {
      res.json({ err });
    }
  },
};
