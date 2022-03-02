import api from "../../../api/api";
import { DailyTrackerData } from "../../../model/DailyTracker";
const apiWithTrackerEndpoints = api.injectEndpoints({
  endpoints: (builder) => ({
    getTrackers: builder.query<DailyTrackerData[], Record<string, never>>({
      query: ({}) => ({
        url: "/tracker",
      }),
    }),
  }),
});

export const { useGetTrackersQuery } = apiWithTrackerEndpoints;
