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
      console.log('START DATE', startDate);
      const response = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&start_date=${startDate}`);
      const apods = response.data;
      apods.forEach(async (apod) => {
        let createdAPOD;
        let updatedAPOD;
        console.log('APOD APOD APOD', apod);
        const found = await APOD.find({ date: apod.date });
        console.log('FOUND', found);
        const foundAPOD = found[0];
        if (found.length === 0) {
          console.log(`Found none, creating Apod with date of ${apod.date}`);
          createdAPOD = await APOD.create(apod);
          console.log(`Created APOD: ${createdAPOD}`);
        } else {
          console.log(`Found one created with date ${foundAPOD.date}, begin updating with props`);
          updatedAPOD = await APOD.updateOne({ date: foundAPOD.date }, {
            title: foundAPOD.title,
            date: foundAPOD.date,
            liked: foundAPOD.liked,
            url: foundAPOD.url,
            hdurl: foundAPOD.hdurl,
            explanation: foundAPOD.explanation,
            media_type: foundAPOD.media_type,
            service_version: foundAPOD.service_version,
          });
          console.log(`UPDATE UPDATE UPDATE: ${updatedAPOD}`);
          console.log(`Updated APOD with ${foundAPOD.date} to ${updatedAPOD.date} with property of liked being: ${updatedAPOD.liked}`);
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
