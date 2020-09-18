const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'IS_FETCHING':
      return {
        ...state,
        isFetching: true,
      };
    case 'LOAD_SUCCESSED':
      return {
        ...state,
        listTodo: action.listTodo,
        isFetching: false,
      };
    case 'LOAD_FAIL':
      return {
        ...state,
        message: action.message,
      };
    default:
      return state;
  }
};
export default reducer;
