import { DateTime } from "luxon";
import { DailyTrackerData } from "../../model/DailyTracker";
import { faker } from "@faker-js/faker";
import { initializeArray } from "../../util/array";

function getFakeTaskName() {
  return faker.lorem.sentence(faker.datatype.number({ min: 3, max: 5 }));
}

const fakeTaskNames = initializeArray(5, getFakeTaskName);

function createFakeTracker(seed?: Partial<DailyTrackerData>): DailyTrackerData {
  return {
    id: faker.datatype.uuid(),
    date: DateTime.utc().toISODate(),
    name: getFakeTaskName(),
    status: faker.random.arrayElement([
      "complete",
      "partially_complete",
      "incomplete",
    ]),
    ...seed,
  };
}

const dailyTrackers: DailyTrackerData[] = fakeTaskNames.reduce<
  DailyTrackerData[]
>(
  (acc, taskName) => [
    ...acc,
    ...initializeArray(7, (idx) =>
      createFakeTracker({
        date: DateTime.utc().minus({ days: idx }).toISODate(),
        name: taskName,
      })
    ),
  ],
  []
);

export const getDailyTrackers = dailyTrackers;
