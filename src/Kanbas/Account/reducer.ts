const initialState = {
    currentUser: null,
  };
  
  export const setCurrentUser = (user: any) => ({
    type: 'SET_CURRENT_USER',
    payload: user,
  });
  
  const accountReducer = (state = initialState, action: any) => {
    switch (action.type) {
      case 'SET_CURRENT_USER':
        return { ...state, currentUser: action.payload };
      default:
        return state;
    }
  };
  
  export default accountReducer;


// absolute 

// import { createSlice } from "@reduxjs/toolkit";
// const initialState = {
//   currentUser: null,
// };
// const accountSlice = createSlice({
//   name: "account",
//   initialState,
//   reducers: {
//     setCurrentUser: (state, action) => {
//       state.currentUser = action.payload;
//     },
//   },
// });
// export const { setCurrentUser } = accountSlice.actions;
// export default accountSlice.reducer;