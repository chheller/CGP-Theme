import { configureStore } from "@reduxjs/toolkit";

export interface RootState {}

export function makeStore(partialState?: Partial<RootState>) {
  return configureStore({
    reducer: {},
    preloadedState: partialState,
  });
}

export default makeStore();
// Infer the `RootState` and `AppDispatch` types from the store itself

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = ReturnType<typeof makeStore>["dispatch"];
