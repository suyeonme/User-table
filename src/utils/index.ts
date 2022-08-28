import { Status } from '@/types/common';

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
