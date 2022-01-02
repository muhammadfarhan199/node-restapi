import express from "express";
import { checkSchema, validationResult } from 'express-validator';

import records from '../models/Records.js'
import requestValidationSchema from '../validators/requestPayload.js'

const router = express.Router();

//@route POST/
router.post(
  '/',
  checkSchema(requestValidationSchema),
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ code: 403, msg: "Invalid Request", errors: errors.array({ onlyFirstError: true }).map(x => x.msg) });
      }

      //query db for records
      let dbRecords = await records.aggregate([
        {
          $match: {
            createdAt: {
              $gte: new Date(req.body.startDate),
              $lt: new Date(req.body.endDate)
            }
          }
        },
        {
          $project: {
            _id: 0,
            key: "$key",
            createdAt: "$createdAt",
            totalCount: {
              $sum: "$counts"
            }
          }
        },
        {
          $match: {
            totalCount: {
              $gte: parseInt(req.body.minCount),
              $lt: parseInt(req.body.maxCount)
            }
          }
        }
      ]).sort({ createdAt: 'desc' });

      //send response
      res.status(200).json({ code: 200, msg: 'Success', records: dbRecords });

    } catch (err) {
      console.error(err);
      res.status(400).json({ error: err });
    }
  }
);

export default router;