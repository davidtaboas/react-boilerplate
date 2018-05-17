/**
 * Apply appropriate flags for an object that
 * has just been received in an asynchronous
 * redux action flow.
 *
 *  The following flags will be added:
 * isFetching: false
 * didInvalidate: false
 * isError: false
 *
 * @param  {object} obj The object to extend with receive information
 * @return {object}     A new object with the extra information
 */
export const applyReceiveInfo = obj => ({
  ...obj,
  isFetching: false,
  didInvalidate: false,
  isError: false
});

/**
 * Apply appropriate flags for an object that
 * has just been requested in an asynchronous
 * redux action flow
 *
 *  The following flags will be added:
 * isFetching: true
 * didInvalidate: false
 * isError: false
 *
 * @param  {object} obj The object to extend with request information
 * @return {object}     A new object with the extra information
 */
export const applyRequestInfo = obj => ({
  ...obj,
  isFetching: true,
  didInvalidate: false,
  isError: false
});

/**
 * Apply appropriate flags for an object that
 * has just failed to be requested in an asynchronous
 * redux action flow
 *
 *  The following flags will be added:
 * isFetching: false
 * didInvalidate: false
 * isError: true
 *
 * @param  {object} obj The object to extend with error information
 * @return {object}     A new object with the extra information
 */
export const applyErrorInfo = obj => ({
  ...obj,
  isFetching: false,
  didInvalidate: false,
  isError: true
});

/**
 * Apply appropriate flags for an object that
 * has just been invalidated in an asynchronous
 * redux action flow
 *
 *  The following flags will be added:
 * didInvalidate: true
 *
 * @param  {object} obj The object to extend with invalidation information
 * @return {object}     A new object with the extra information
 */
export const applyInvalidationInfo = obj => ({
  ...obj,
  didInvalidate: true
});

/**
 * Checks if we are allowed to fetch data
 * based on the data we already have.
 *
 * - If we don't have any data yet, we can go ahead
 * and fetch.
 * - If the data already is in 'fetching' state (isFetching) we don't
 * want to fetch new data.
 * - If the data has been invalidated (didInvalidate) we
 * can discard the data we have and fetch new.
 * - Otherwise we'll keep the data we have and don't fetch
 *
 * @param  {object} data   The data to evaluate
 * @return {boolean}       Whether  the data should be fetch or not
 */
export const shouldFetchData = data => {
  // If we didn't find any data in state
  // we should fetch.
  if (!data || typeof data.isFetching === 'undefined') {
    return true;
  }

  // If we're already fetching data with this ID
  // we should hold off.
  if (data.isFetching) {
    return false;
  }

  // If the data object has been invalidated we should fetch
  // a new one, otherwise use the one we have
  if (data.didInvalidate) {
    return true;
  }

  return false;
};
