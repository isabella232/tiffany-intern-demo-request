const initState = {
    hits: null,
  };
  
  const getHits = (state = initState, action) => {
    switch (action.type) {
        case 'GET_HITS':
            return {
                ...state,
                hits: action.payload
            };
        default:
            return { ...state };
    }
  };
  
  export default getHits;