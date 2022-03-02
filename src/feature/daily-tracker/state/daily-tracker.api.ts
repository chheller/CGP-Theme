import { groupBy } from "lodash";
import api from "../../../api/api";
import {
  DailyTrackerData,
  DailyTrackerStatus,
} from "../../../model/DailyTracker";

const apiWithTrackerEndpoints = api.injectEndpoints({
  endpoints: (builder) => ({
    getTrackers: builder.query<
      Record<string, DailyTrackerData[]>,
      Record<string, never>
    >({
      providesTags: ["getDailyTrackers"],
      query: ({}) => ({
        url: "/tracker",
      }),
      transformResponse: (response: DailyTrackerData[]) =>
        groupBy(response, (tracker) => tracker.name),
    }),

    updateTracker: builder.mutation<
      DailyTrackerData,
      { id?: string; name?: string; date?: string; status?: DailyTrackerStatus }
    >({
      invalidatesTags: ["getDailyTrackers"],
      query: (body) => ({
        url: `/tracker`,
        method: "PUT",
        body,
      }),
    }),
  }),
});

export const { useGetTrackersQuery, useUpdateTrackerMutation } =
  apiWithTrackerEndpoints;
