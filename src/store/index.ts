import { configureStore } from "@reduxjs/toolkit";
import api from "../api/api";

export interface RootState {
  api: ReturnType<typeof api.reducer>;
}

export function makeStore(partialState?: Partial<RootState>) {
  return configureStore({
    reducer: {
      [api.reducerPath]: api.reducer,
    },
    preloadedState: partialState,
  });
}

export default makeStore();
// Infer the `RootState` and `AppDispatch` types from the store itself

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = ReturnType<typeof makeStore>["dispatch"];
