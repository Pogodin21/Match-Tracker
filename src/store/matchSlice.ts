import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../services/api";
import { IMatch } from "../types/match";

interface MatchState {
  matches: IMatch[];
  loading: boolean;
  error: string | null;
}

const initialState: MatchState = {
  matches: [],
  loading: false,
  error: null,
};

export const fetchMatches = createAsyncThunk("matches/fetchMatches", async () => {
  const response = await api.get("/fronttemp");
  return response.data.data.matches;
});

const matchSlice = createSlice({
  name: "matches",
  initialState,
  reducers: {
    setMatches(state, action) {
      state.matches = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMatches.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchMatches.fulfilled, (state, action) => {
        state.matches = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchMatches.rejected, (state) => {
        state.loading = false;
        state.error = "Ошибка загрузки матчей";
      });
  },
});

export const { setMatches } = matchSlice.actions;
export default matchSlice.reducer;
