import { createSlice } from "@reduxjs/toolkit";

const initialValue = {
  _id: "",
  username: "",
  email: "",
  avatar: "",
  phone: "",
  status: "",
  address: "",
  gender: "",
  birthday: "",
  verify_email: "",
  role: "",
};

const userSlice = createSlice({
  name: "user",
  initialState: initialValue,
  reducers: {
    setUserDetails: (state, action) => {
      state._id = action.payload?._id;
      state.username = action.payload?.username;
      state.email = action.payload?.email;
      state.avatar = action.payload?.avatar;
      state.phone = action.payload?.phone;
      state.status = action.payload?.status;
      state.address = action.payload?.address;
      state.birthday = action.payload?.birthday;
      state.gender = action.payload?.gender;
      state.verify_email = action.payload?.verify_email;
      state.role = action.payload?.role;
    },
    updateAvatar: (state, action) => {
      state.avatar = action.payload;
    },
    logout: (state, action) => {
      state._id = "";
      state.username = "";
      state.email = "";
      state.avatar = "";
      state.phone = "";
      state.status = "";
      state.verify_email = "";
      state.role = "";
    },
  },
});

export const { setUserDetails, logout, updateAvatar } = userSlice.actions;
export default userSlice.reducer;
