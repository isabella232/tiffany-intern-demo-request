export const goToHome = value => dispatch => {
  dispatch({
      type: 'GO_HOME',
      payload: value
  });
};

export const goToSearch = value => dispatch => {
  dispatch({
      type: 'GO_SEARCH',
      payload: value
  });
};