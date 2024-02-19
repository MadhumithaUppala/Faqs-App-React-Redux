// Define the initial state of the counter
const initialState = {
  symbol: true,
}
// Define the reducer with the initial state and logic to handle actions
const faqReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'dontshowans':
      // Handle increment
      return {
        ...state,
        symbol: !symbol,
      }
    default:
      // Return the existing state unchanged
      return state
  }
}
export default faqReducer
