export const getHits = value => dispatch => {
    dispatch({
        type: 'GET_HITS',
        payload: value
    });
  };