import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios"

export const fetchData = createAsyncThunk("text/getData", async (params) => {
    const paraf = params.paraf || 4
    const textType = params.textType || "text"
    const result = await axios.get(`https://baconipsum.com/api/?type=all-meat&paras=${paraf}&format=${textType}`)
    return result.data
})

export const textSlice = createSlice({

    name:'texts',
    initialState:{
        text:'',
        status:'idle',
    },
    reducers:{

    },
    extraReducers:{
        [fetchData.pending]: (state, action) => {
            state.status = "loading"
        },
        [fetchData.fulfilled]: (state, action) => {
            state.status = "succeeded";
            state.text = action.payload
        },
        [fetchData.rejected]: (state, action) => {
            state.status = "failed"
        }
    }

})

export default textSlice.reducer;