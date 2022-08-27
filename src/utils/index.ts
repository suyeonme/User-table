export const enum Status {
  OK = 'OK',
  FAILED = 'FAILED',
}

export const enum ErrorMessage {
  REQUIRED_KEY_IS_MISSING = 'One of the following keys is missing or is empty in request body:',
  USER_ID_IS_REQUIRED = 'User ID is required.',
}

/**
 * @param requiredKeys: validation keys
 * @param reqBody: req.body
 * @describe Validate all required keys is included in reqBody.
 */
export const isValidReqBody = (
  requiredKeys: string[],
  reqBody: { [key: string]: string | number }
): boolean => {
  return requiredKeys.every(key => !!reqBody[key]);
};

/**
 * @describe Get an error object for response when status code is 500.
 */
export const getErrorResponse = (error: Error) => {
  return {
    status: Status.FAILED,
    data: {
      error: error?.message || error,
    },
  };
};
