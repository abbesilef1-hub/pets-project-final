import { configureStore } from '@reduxjs/toolkit'
import  userSlice  from './userSlice/userSlice'
import petSlice from './petSlice'
import  productSlice  from './productSlice'
import  veterinaireSlice  from './veterinaireSlice'
import  requestSlice  from './requestSlice'
import  commandeSlice  from './commandeSlice'


export const store = configureStore({
  reducer: {
    user: userSlice,
    pet: petSlice,
    product: productSlice,
    veterinaire: veterinaireSlice,
    request: requestSlice,
    commande: commandeSlice,
  },
})