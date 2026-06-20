import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from "axios";

export const getpets=createAsyncThunk("pet/get", async()=>{
  try {
    let result=await axios.get("http://localhost:5000/pet/");
    return result;
  } catch (error) {
    console.log(error);
  }
})

export const addpet=createAsyncThunk("pet/add", async(newpet)=>{
  try {
    let result=await axios.post("http://localhost:5000/pet/add", newpet);
    return result;
  } catch (error) {
    console.log(error);
  }
})

export const deletepet=createAsyncThunk("pet/delete", async(id)=>{
  try {
    let result=await axios.delete(`http://localhost:5000/pet/${id}`);
    return result;
  } catch (error) {
    console.log(error);
  }
})

export const editpet=createAsyncThunk("pet/update", async({id, edited})=>{
  try {
    let result=await axios.put(`http://localhost:5000/pet/${id}`, edited);
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