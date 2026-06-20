import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// const API = "https://pets-project-final.vercel.app/user";

/* REGISTER */
export const userRegister = createAsyncThunk(
  "user/register",
  async (user, thunkAPI) => {
    try {
      const response = await axios.post(`https://pets-project-final.vercel.app/user/register`, user);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data);
    }
  }
);

/* LOGIN */
export const userLogin = createAsyncThunk(
  "user/login",
  async (user, thunkAPI) => {
    try {
      const response = await axios.post(`https://pets-project-final.vercel.app/user/login`, user);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data);
    }
  }
);

/* CURRENT USER */
export const userCurrent = createAsyncThunk(
  "user/current",
  async (_, thunkAPI) => {
    try {
      const token = localStorage.getItem("token");

      const response = await axios.get(`https://pets-project-final.vercel.app/user/current`, {
        headers: {
          Authorization: token,
        },
      });

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data);
    }
  }
);

export const getusers=createAsyncThunk("user/get", async()=>{
  try {
    let result=await axios.get("https://pets-project-final.vercel.app/user/");
    return result;
  } catch (error) {
    console.log(error);
  }
})

export const deleteuser=createAsyncThunk("user/delete", async(id)=>{
  try {
    let result=await axios.delete(`https://pets-project-final.vercel.app/user/${id}`);
    return result;
  } catch (error) {
    console.log(error);
  }
})

export const edituser=createAsyncThunk("user/update", async({id, edited})=>{
  try {
    let result=await axios.put(`https://pets-project-final.vercel.app/user/${id}`, edited);
    return result;
  } catch (error) {
    console.log(error);
  }
})

/* INITIAL STATE*/
const initialState = {
  user: null,
  status: null,
  error: null,
  userlist: []
};

/* SLICE */
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.status = null;
      localStorage.removeItem("token");
    },
  },

  extraReducers: (builder) => {
    builder

      /* REGISTER */
      .addCase(userRegister.pending, (state) => {
        state.status = "loading";
      })
      .addCase(userRegister.fulfilled, (state, action) => {
        state.status = "success";
        state.user = action.payload?.user || null;
        if (action.payload?.token) {
        localStorage.setItem("token", action.payload.token);
        }
      })
      .addCase(userRegister.rejected, (state, action) => {
        state.status = "fail";
        state.error = action.payload;
      })

      /* LOGIN */
      .addCase(userLogin.pending, (state) => {
        state.status = "loading";
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        state.status = "success";
        state.user = action.payload?.user || null;
        if (action.payload?.token) {
        localStorage.setItem("token", action.payload.token); }
      })
      .addCase(userLogin.rejected, (state, action) => {
        state.status = "fail";
        state.error = action.payload;
      })

      /* CURRENT USER */
      .addCase(userCurrent.pending, (state) => {
        state.status = "loading";
      })
      .addCase(userCurrent.fulfilled, (state, action) => {
        state.status = "success";
        state.user = action.payload?.user || null;
      })
      .addCase(userCurrent.rejected, (state, action) => {
        state.status = "fail";
        state.error = action.payload;
      })

      .addCase(getusers.pending, (state) => {
              state.status = "pending";
            })
      .addCase(getusers.fulfilled, (state, action) => {
              state.status = "success";
              state.userlist = action.payload.data.users;
            })
      .addCase(getusers.rejected, (state) => {
              state.status = "fail";
            });
  },
});

// Action creators are generated for each case reducer function
export const { logout } = userSlice.actions;

export default userSlice.reducer;