import { createSlice } from '@reduxjs/toolkit'
import { MemeInterface } from 'orsys-tjs-meme';
import { DummyMeme } from '../interfaces/dummyMeme';

export interface ISliceCurrent{
    meme: MemeInterface;
}
const initialState:MemeInterface = {
    ...DummyMeme
}

const current = createSlice({
  name: 'current',
  initialState,
  reducers: {
    updateCurrent:(state:MemeInterface,action:{type:string,payload:MemeInterface})=>{
        state=action.payload
    },
    clearCurrent:(state:MemeInterface,action:{type:string,payload:any})=>{
        state={...DummyMeme}
    }
  }
});

export const {clearCurrent,updateCurrent} = current.actions

export default current.reducer