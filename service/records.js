import recordsSchema from '../models/RecordsSchema.js'

const getAll = async () => await recordsSchema.find({});

//query db for records
/**
 * This function retrievs records based on the filters provided
 * @param {RequestModel} requestModel expects {startDate, endDate, minCount, maxCount} 
 * @returns Returns array of documents that get validated by the requested filters
 */
const getRecordsByFilter = async (requestModel) => await recordsSchema.aggregate([
  {
    //match records with created date coming between start and end date provided
    $match: {
      createdAt: {
        $gte: new Date(requestModel.startDate),
        $lt: new Date(requestModel.endDate)
      }
    }
  },
  //project new schema with required fields
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
  //match new added field across the request 
  {
    $match: {
      totalCount: {
        $gte: parseInt(requestModel.minCount),
        $lt: parseInt(requestModel.maxCount)
      }
    }
  }
])
  //sort records descending on createdAt
  .sort({ createdAt: 'desc' });

export default { getRecordsByFilter, getAll };