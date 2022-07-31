import { configureStore } from "@reduxjs/toolkit";
import moviesSlice from "../features/Movies/moviesSlice";
import genreSlice from "../features/Genres/genreSlice";
import sessionSlice from "../features/Sessions/sessionSlice";
import hallSlice from "../features/Halls/hallSlice";
import bookingSlice from "../features/Booking/bookingSlice";
import ratingSlice from "../features/Rating/ratingsSlice";
import sentSlice from "../features/Sent/sentSlice";

export const store = configureStore({
  reducer: {
    movieReducer: moviesSlice,
    genreReducer: genreSlice,
    sessionReducer: sessionSlice,
    hallReducer: hallSlice,
    bookingReducer: bookingSlice,
    ratingReducer: ratingSlice,
    sentReducer: sentSlice,
  },
});
