import { configureStore } from "@reduxjs/toolkit";
import { curryGetDefaultMiddleware } from "@reduxjs/toolkit/dist/getDefaultMiddleware";
import api from "../api/api";

export interface RootState {
  api: ReturnType<typeof api.reducer>;
}

export function makeStore(partialState?: Partial<RootState>) {
  return configureStore({
    reducer: {
      api: api.reducer,
    },
    preloadedState: partialState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(api.middleware),
  });
}

export default makeStore();
// Infer the `RootState` and `AppDispatch` types from the store itself

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = ReturnType<typeof makeStore>["dispatch"];
