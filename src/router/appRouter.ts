import { path1Handler } from '../api/path1Handler';
import { path1Validator } from '../helper/path1Validator';
import auth from '../middleware/auth';
import logTagsSetter from '../middleware/logTagsSetter';
import { wrapAsync } from '../middleware/wrapAsync';
import { Router } from 'express';

/* eslint-disable new-cap */
const router = Router();

router.use(logTagsSetter, auth);

router.get('/path1', path1Validator, wrapAsync(path1Handler));

export default router;
