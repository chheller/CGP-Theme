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
      { id: string; status: DailyTrackerStatus }
    >({
      invalidatesTags: ["getDailyTrackers"],
      query: ({ id, status }) => ({
        url: `/tracker/${id}`,
        method: "PATCH",
        body: { status },
      }),
    }),
  }),
});

export const { useGetTrackersQuery, useUpdateTrackerMutation } =
  apiWithTrackerEndpoints;
