import { rest } from "msw";
import { getDailyTrackers } from "./daily-tracker/get";

export const handlers = [
  rest.get("/tracker", (req, res, ctx) =>
    res(ctx.status(200), ctx.json(getDailyTrackers))
  ),
];
