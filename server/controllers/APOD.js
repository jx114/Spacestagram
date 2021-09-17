import fetch from 'node-fetch';
// eslint-disable-next-line import/extensions
import APOD from '../models/APOD.js';
// Utils
// eslint-disable-next-line import/extensions
import getStartDate from '../utils/index.js';

const apiKey = 'X5YJg98pmuUMEC5tAn385uwvfDX50lID0eqIkubk';

const getAPODS = async () => {
  const startDate = getStartDate();
  await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&start_date=${startDate}`)
    .then((response) => response.json())
    .then((data) => {
      const apods = data.reverse();
      apods.forEach(async (apod) => {
        await APOD.findOneAndUpdate(
          apod,
          apod,
          {
            new: true,
            upsert: true,
          },
        )
          .catch((err) => console.log('DATA ERR:', err));
      });
    })
    .catch((err) => console.log('ERR ERR ERR', err));
};

export default getAPODS;
