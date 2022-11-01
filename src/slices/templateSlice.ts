import {AnyAction, createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState = {};

// First generic its what function return
// Second generic its first callback arg
// Third generic its second callback arg
export const fetchTemplate = createAsyncThunk<any, void, {}>(
    "templateReducer/fetchTemplate",
    async (_, {rejectWithValue}) => {
        try {
            // can do something
        } catch (e: any) {
            rejectWithValue(e.message);
        }
    }
)

const templateSlice = createSlice({
    name: "templateReducer",
    initialState,
    reducers: {
        showTemplate: (state, action: PayloadAction<{ template: string }>) => {
            return action.payload.template;
        }
    },
    extraReducers: builder => {
        builder
            .addCase(fetchTemplate.pending, (state, action) => {
                // can do something when loading
            })
            .addCase(fetchTemplate.fulfilled, (state, action) => {
                // can do something when loaded success
            })
            .addCase(fetchTemplate.rejected, (state, action) => {
                // can do something when loaded error
            })
            .addMatcher(isError, (state, action: PayloadAction<string>) => {
                // can do something with all rejected query
            })
    },
});

const {} = templateSlice.actions;

export default templateSlice.reducer;

const isError = (action: AnyAction) => {
    return action.type.endsWith("rejected");
};