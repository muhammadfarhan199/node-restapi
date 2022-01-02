/**
 * Model class to map request payload
 */
class RequestModel {
  constructor(bodyParams) {
    this.startDate = bodyParams.startDate;
    this.endDate = bodyParams.endDate;
    this.minCount = bodyParams.minCount;
    this.maxCount = bodyParams.maxCount;
  }
}

export default RequestModel;