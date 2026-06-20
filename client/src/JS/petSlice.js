import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from "axios";

export const getpets=createAsyncThunk("pet/get", async()=>{
  try {
    let result=await axios.get("https://pets-project-final.vercel.app/pet/");
    return result;
  } catch (error) {
    console.log(error);
  }
})

export const addpet=createAsyncThunk("pet/add", async(newpet)=>{
  try {
    let result=await axios.post("https://pets-project-final.vercel.app/pet/add", newpet);
    return result;
  } catch (error) {
    console.log(error);
  }
})

export const deletepet=createAsyncThunk("pet/delete", async(id)=>{
  try {
    let result=await axios.delete(`https://pets-project-final.vercel.app/pet/${id}`);
    return result;
  } catch (error) {
    console.log(error);
  }
})

export const editpet=createAsyncThunk("pet/update", async({id, edited})=>{
  try {
    let result=await axios.put(`https://pets-project-final.vercel.app/pet/${id}`, edited);
    return result;
  } catch (error) {
    console.log(error);
  }
})


const initialState = {
  petlist:[],
  status: ""
}

export const petSlice = createSlice({
  name: 'pet',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getpets.pending, (state) => {
        state.status = "pending";
      })
      .addCase(getpets.fulfilled, (state, action) => {
        state.status = "success";
        state.petlist = action.payload.data.pets;
      })
      .addCase(getpets.rejected, (state) => {
        state.status = "fail";
      })

      .addCase(addpet.pending, (state) => {
        state.status = "pending";
      })
      .addCase(addpet.fulfilled, (state, action) => {
        state.status = "success";
      })
      .addCase(addpet.rejected, (state) => {
        state.status = "fail";
      })

      .addCase(deletepet.pending, (state) => {
        state.status = "pending";
      })
      .addCase(deletepet.fulfilled, (state, action) => {
        state.status = "success";
      })
      .addCase(deletepet.rejected, (state) => {
        state.status = "fail";
      })

      .addCase(editpet.pending, (state) => {
        state.status = "pending";
      })
      .addCase(editpet.fulfilled, (state, action) => {
        state.status = "success";
      })
      .addCase(editpet.rejected, (state) => {
        state.status = "fail";
      })

  },

})


export default petSlice.reducer