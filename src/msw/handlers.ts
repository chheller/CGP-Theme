import faker from "@faker-js/faker";
import { DateTime } from "luxon";
import { rest } from "msw";
import { initializeArray } from "../util/array";
import { getDailyTrackers } from "./daily-tracker/get";

export const handlers = [
  rest.get("/tracker", (req, res, ctx) =>
    res(ctx.status(200), ctx.json(getDailyTrackers))
  ),

  rest.put("/tracker", (req, res, ctx) => {
    const { id, name, date, status } = req.body as Record<string, any>;

    if (id != null) {
      const existingTrackerIdx = getDailyTrackers.findIndex(
        (tracker) => tracker.id === id
      );

      if (existingTrackerIdx) {
        getDailyTrackers[existingTrackerIdx] = {
          ...getDailyTrackers[existingTrackerIdx],
          ...(req.body as Record<string, any>),
        };

        return res(
          ctx.status(200),
          ctx.json(getDailyTrackers[existingTrackerIdx])
        );
      }
    } else {
      const newTracker = {
        id: faker.datatype.uuid(),
        name,
        status: status ?? "incomplete",
        date: date ?? DateTime.utc(),
      };

      getDailyTrackers.push(newTracker);
      return res(ctx.status(201), ctx.json(newTracker));
    }
  }),
];
