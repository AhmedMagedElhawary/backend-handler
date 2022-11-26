import { Router } from 'express';

import { wrapAsync } from '../middleware/wrapAsync';

import auth from '../middleware/auth';
import { path1Handler } from '../api/path1Handler';
import { path1Validator } from '../helper/path1Validator';

/* eslint-disable new-cap */
const router = Router();

router.use(auth);

router.get(
  '/path1',
  path1Validator,
  wrapAsync(path1Handler),
);


export default router;
