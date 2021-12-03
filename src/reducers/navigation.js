const initState = {
  homePage: false,
  search: false,
};

const navigation = (state = initState, action) => {
  switch (action.type) {
      case 'GO_HOME':
          return {
              ...state,
              homePage: action.payload
          };
          case 'GO_SEARCH':
            return {
                ...state,
                search: action.payload
            };
      default:
          return { ...state };
  }
};

export default navigation;