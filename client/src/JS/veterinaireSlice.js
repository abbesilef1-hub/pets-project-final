import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from "axios";

export const getveterinaires=createAsyncThunk("veterinary/get", async()=>{
  try {
    let result=await axios.get("http://localhost:5000/veterinary/");
    return result;
  } catch (error) {
    console.log(error);
  }
})

export const addveterinaire=createAsyncThunk("veterinary/add", async(newveterinaire)=>{
  try {
    let result=await axios.post("http://localhost:5000/veterinary/add", newveterinaire);
    return result;
  } catch (error) {
    console.log(error);
  }
})

export const deleteveterinaire=createAsyncThunk("veterinary/delete", async(id)=>{
  try {
    let result=await axios.delete(`http://localhost:5000/veterinary/${id}`);
    return result;
  } catch (error) {
    console.log(error);
  }
})

export const editveterinaire=createAsyncThunk("veterinary/update", async({id, edited})=>{
  try {
    let result=await axios.put(`http://localhost:5000/veterinary/${id}`, edited);
    return result;
  } catch (error) {
    console.log(error);
  }
})


const initialState = {
  veterinarylist:[],
  status: ""
}

export const veterinaireSlice = createSlice({
  name: 'veterinaire',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getveterinaires.pending, (state) => {
        state.status = "pending";
      })
      .addCase(getveterinaires.fulfilled, (state, action) => {
        state.status = "success";
        state.veterinarylist = action.payload.data.veterinary;
      })
    //   .addCase(getveterinaires.fulfilled, (state, action) => {
    //     state.status = "success";
    //     state.veterinairelist = action.payload.data.veterinary;
    //   })
      .addCase(getveterinaires.rejected, (state) => {
        state.status = "fail";
      })

      .addCase(addveterinaire.pending, (state) => {
        state.status = "pending";
      })
      .addCase(addveterinaire.fulfilled, (state, action) => {
        state.status = "success";
      })
      .addCase(addveterinaire.rejected, (state) => {
        state.status = "fail";
      })

      .addCase(deleteveterinaire.pending, (state) => {
        state.status = "pending";
      })
      .addCase(deleteveterinaire.fulfilled, (state, action) => {
        state.status = "success";
      })
      .addCase(deleteveterinaire.rejected, (state) => {
        state.status = "fail";
      })

      .addCase(editveterinaire.pending, (state) => {
        state.status = "pending";
      })
      .addCase(editveterinaire.fulfilled, (state, action) => {
        state.status = "success";
      })
      .addCase(editveterinaire.rejected, (state) => {
        state.status = "fail";
      })

  },

})


export default veterinaireSlice.reducer;