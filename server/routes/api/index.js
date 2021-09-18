import express from 'express';
// eslint-disable-next-line import/extensions
import apodCtrl from '../../controllers/APOD.js';

const router = express.Router;

// make dem routes boi
router.get('/', apodCtrl.readAPODS);
router.put('/', apodCtrl.putLikes);

export default {
  router,
};
