import fetch from 'node-fetch';
// eslint-disable-next-line import/extensions
import APOD from '../models/APOD.js';

// Utils
// eslint-disable-next-line import/extensions
import getStartDate from '../utils/index.js';

const apiKey = 'X5YJg98pmuUMEC5tAn385uwvfDX50lID0eqIkubk';

export default {
  // Getting APODS from nasa
  getAPODS: async function getAPODS() {
    try {
      const startDate = getStartDate();
      const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&start_date=${startDate}`);
      const apods = await response.json();
      apods.forEach(async (apod) => {
        await APOD.findOneAndUpdate(
          apod,
          apod,
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
      const apods = await APOD.find({})
        .sort({ date: -1 })
        .limit(7);
      res.json(apods);
    } catch (err) {
      res.json({ err });
    }
  },
  // Updating APODS' likes for persistent data
  putLikes: async function putLikes(req, res) {
    const { _id, liked, title } = req.body;
    try {
      await APOD.findOneAndUpdate(
        { _id },
        { liked },
      );
      res.send(`Updated like on photo with the id:${_id} and title:${title}`);
    } catch (err) {
      res.json({ err });
    }
  },
};
