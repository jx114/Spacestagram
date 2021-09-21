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
        let createdAPOD;
        const foundArray = await APOD.find({ date: apod.date });
        const found = foundArray[0];
        if (foundArray.length === 0) {
          console.log(`Found none, creating Apod with date of ${apod.date}`);
          createdAPOD = await APOD.create(apod);
          console.log(`Created APOD: ${createdAPOD}`);
        } else {
          console.log(`Found one created with date ${found.date}, begin updating with props`);
          await APOD.updateOne({ date: found.date }, {
            title: found.title,
            date: found.date,
            liked: found.liked,
            url: found.url,
            hdurl: found.hdurl,
            explanation: found.explanation,
            media_type: found.media_type,
            service_version: found.service_version,
          }, { new: true });
          console.log(`Updated APOD with ${found.date} to ${found.date} with property of liked being: ${found.liked}`);
        }
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
    APOD.updateOne(
      { _id: id },
      { liked },
    ).then(() => {
      res.send(`Updated like on photo with the id:${id}`);
    }).catch(() => {
      res.sendStatus(500);
    });
  },
};
