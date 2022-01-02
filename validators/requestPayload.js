const isDate = (date) => {
  return (new Date(date) !== "Invalid Date") && !isNaN(new Date(date));
}

const requestValidationSchema = {
  startDate: {
    custom: {
      options: value => {
        return new Promise((resolve, reject) => {
          if (value && isDate(value)) {
            resolve("Valid Date");
          } else {
            reject("startDate is required and must be a valid date.");
          }
        })
      }
    }
  },
  endDate: {
    custom: {
      options: value => {
        return new Promise((resolve, reject) => {
          if (value && isDate(value)) {
            resolve("Valid Date");
          } else {
            reject("endDate is required and must be a valid date.");
          }
        })
      }
    }
  },
  minCount: {
    notEmpty: true,
    isInt: true,
    errorMessage: "minCount is required and must be a valid integer."
  },
  maxCount: {
    notEmpty: true,
    isInt: true,
    errorMessage: "maxCount is required and must be a valid integer."
  }
};

export default requestValidationSchema;