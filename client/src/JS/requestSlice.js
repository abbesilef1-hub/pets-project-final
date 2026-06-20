import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from "axios";

export const getrequests=createAsyncThunk("request/get", async()=>{
  try {
    let result=await axios.get("https://pets-project-final.vercel.app/request/");
    return result;
  } catch (error) {
    console.log(error);
  }
})

export const addrequest=createAsyncThunk("request/add", async(newrequest)=>{
  try {
    let result=await axios.post("https://pets-project-final.vercel.app/request/add", newrequest);
    return result;
  } catch (error) {
    console.log(error);
  }
})

export const deleterequest=createAsyncThunk("request/delete", async(id)=>{
  try {
    let result=await axios.delete(`https://pets-project-final.vercel.app/request/${id}`);
    return result;
  } catch (error) {
    console.log(error);
  }
})

export const editrequest=createAsyncThunk("request/update", async({id, edited})=>{
  try {
    let result=await axios.put(`https://pets-project-final.vercel.app/request/${id}`, edited);
    return result;
  } catch (error) {
    console.log(error);
  }
})


const initialState = {
  requestlist:[],
  status: ""
}

export const requestSlice = createSlice({
  name: 'request',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getrequests.pending, (state) => {
        state.status = "pending";
      })
      .addCase(getrequests.fulfilled, (state, action) => {
        state.status = "success";
        state.requestlist = action.payload.data.requests;
      })
      .addCase(getrequests.rejected, (state) => {
        state.status = "fail";
      })

      .addCase(addrequest.pending, (state) => {
        state.status = "pending";
      })
      .addCase(addrequest.fulfilled, (state, action) => {
        state.status = "success";
      })
      .addCase(addrequest.rejected, (state) => {
        state.status = "fail";
      })

      .addCase(deleterequest.pending, (state) => {
        state.status = "pending";
      })
      .addCase(deleterequest.fulfilled, (state, action) => {
        state.status = "success";
      })
      .addCase(deleterequest.rejected, (state) => {
        state.status = "fail";
      })

      .addCase(editrequest.pending, (state) => {
        state.status = "pending";
      })
      .addCase(editrequest.fulfilled, (state, action) => {
        state.status = "success";
      })
      .addCase(editrequest.rejected, (state) => {
        state.status = "fail";
      })

  },

})


export default requestSlice.reducer