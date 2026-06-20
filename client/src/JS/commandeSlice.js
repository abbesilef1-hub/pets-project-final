import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from "axios";

export const getcommandes=createAsyncThunk("commande/get", async()=>{
  try {
    let result=await axios.get("http://localhost:5000/commande/");
    return result;
  } catch (error) {
    console.log(error);
  }
})

export const addcommande=createAsyncThunk("commande/add", async(newcommande)=>{
  try {
    let result=await axios.post("http://localhost:5000/commande/add", newcommande);
    return result;
  } catch (error) {
    console.log(error);
  }
})

export const deletecommande=createAsyncThunk("commande/delete", async(id)=>{
  try {
    let result=await axios.delete(`http://localhost:5000/commande/${id}`);
    return result;
  } catch (error) {
    console.log(error);
  }
})

export const editcommande=createAsyncThunk("commande/update", async({id, edited})=>{
  try {
    let result=await axios.put(`http://localhost:5000/commande/${id}`, edited);
    return result;
  } catch (error) {
    console.log(error);
  }
})


const initialState = {
  commandelist:[],
  status: ""
}

export const commandeSlice = createSlice({
  name: 'commande',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getcommandes.pending, (state) => {
        state.status = "pending";
      })
      .addCase(getcommandes.fulfilled, (state, action) => {
        state.status = "success";
        state.commandelist = action.payload.data.commandes;
      })
      .addCase(getcommandes.rejected, (state) => {
        state.status = "fail";
      })

      .addCase(addcommande.pending, (state) => {
        state.status = "pending";
      })
      .addCase(addcommande.fulfilled, (state, action) => {
        state.status = "success";
      })
      .addCase(addcommande.rejected, (state) => {
        state.status = "fail";
      })

      .addCase(deletecommande.pending, (state) => {
        state.status = "pending";
      })
      .addCase(deletecommande.fulfilled, (state, action) => {
        state.status = "success";
      })
      .addCase(deletecommande.rejected, (state) => {
        state.status = "fail";
      })

      .addCase(editcommande.pending, (state) => {
        state.status = "pending";
      })
      .addCase(editcommande.fulfilled, (state, action) => {
        state.status = "success";
      })
      .addCase(editcommande.rejected, (state) => {
        state.status = "fail";
      })

  },

})


export default commandeSlice.reducer