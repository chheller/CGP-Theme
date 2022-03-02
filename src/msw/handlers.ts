import { rest } from "msw";
import { getDailyTrackers } from "./daily-tracker/get";

export const handlers = [
  rest.get("/tracker", (req, res, ctx) =>
    res(ctx.status(200), ctx.json(getDailyTrackers))
  ),

  rest.patch("/tracker/:id", (req, res, ctx) => {
    const tracker = getDailyTrackers.find(
      (tracker) => tracker.id === req.params.id
    );
    console.log({ body: req.body });
    if (tracker != null) {
      tracker.status = (<Record<string, any>>req.body)?.status!;
      res(ctx.status(200), ctx.json(tracker));
    } else {
      res(ctx.status(404));
    }
  }),
];
