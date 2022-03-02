import { groupBy } from "lodash";
import api from "../../../api/api";
import { DailyTrackerData } from "../../../model/DailyTracker";

const apiWithTrackerEndpoints = api.injectEndpoints({
  endpoints: (builder) => ({
    getTrackers: builder.query<
      Record<string, DailyTrackerData[]>,
      Record<string, never>
    >({
      query: ({}) => ({
        url: "/tracker",
      }),
      transformResponse: (response: DailyTrackerData[]) =>
        groupBy(response, (tracker) => tracker.name),
    }),
  }),
});

export const { useGetTrackersQuery } = apiWithTrackerEndpoints;
