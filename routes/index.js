import express from "express";
import { checkSchema, validationResult } from 'express-validator';

import requestValidationSchema from '../validators/requestPayload.js'
import recordService from '../service/records.js'
import RequestModel from '../models/RequestModel.js'

//setup express router
const router = express.Router();

//@route POST/
/**
 * Post method serving recods from collection
 */
router.post(
  //endpoint url
  '/getrecords',
  //request validation
  checkSchema(requestValidationSchema),
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ code: 403, msg: "Invalid Request", errors: errors.array({ onlyFirstError: true }).map(x => x.msg) });
      }

      //call service for fetching records
      const dbRecords = await recordService.getRecordsByFilter(new RequestModel(req.body));

      //send response
      res.status(200).json({ code: 200, msg: 'Success', records: dbRecords });

    } catch (err) {
      console.error(err);
      res.status(400).json({ msg: "Error", error: err });
    }
  }
);

export default router;