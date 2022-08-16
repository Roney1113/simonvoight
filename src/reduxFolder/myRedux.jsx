import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
    
  tenUserInfo: {
    name: '',
    birthday: ''
  },
  tenUser: [],
    
};

export const localSlice = createSlice({
  name: 'qwe',
  initialState,
  reducers: {
    setUser: (state, action) => {
        var temp = {...state.tenUserInfo};
        for(var i in action.payload)
          eval('temp.' + i + '= action.payload[i]');
        state.tenUserInfo = temp;
    },
    addUser: (state, action) => {
      //   console.log(action);
        state.tenUser = [...state.tenUser, {name: action.payload.name, birthday: action.payload.birthday}];
        
    },
    editUser: (state, action) => {
      state.tenUser.map((user, index) => {
        if(action.payload.index === index){
          state.tenUserInfo = {name: user.name, birthday: user.birthday};
        }
        
      })
    },
  }
});

export const { setUser,addUser,editUser } = localSlice.actions;
export const tenUserInfo = (state) => state.localAction.tenUserInfo;
export const tenUser = (state) => state.localAction.tenUser;
export default localSlice.reducer;
