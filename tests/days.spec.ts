import { RuleEvent, RuleEventDTO } from "../src/repo/models/types";

const events: RuleEvent[] = [
  {
    id: "1185",
    name: "Rule 19",

    tickets: [
      {
        id: "292046",
        resolution: "TP",
        creation_time: "2020-04-18T12:13:12.768Z",
        date: "2020-04-18",
      },
      {
        id: "292058",
        resolution: "FP",
        creation_time: "2020-04-18T15:22:09.660Z",
        date: "2020-04-18",
      },
      {
        id: "292074",
        resolution: "TP",
        creation_time: "2020-04-18T22:35:45.247Z",
        date: "2020-04-18",
      },
      {
        id: "292076",
        resolution: "TP",
        creation_time: "2020-04-19T00:06:06.418Z",
        date: "2020-04-19",
      },
      {
        id: "292103",
        resolution: "TP",
        creation_time: "2020-04-19T16:25:08.366Z",
        date: "2020-04-19",
      },
      {
        id: "292119",
        resolution: "FP",
        creation_time: "2020-04-20T03:25:29.093Z",
        date: "2020-04-20",
      },
      {
        id: "292122",
        resolution: "TP",
        creation_time: "2020-04-20T04:20:50.400Z",
        date: "2020-04-20",
      },
      {
        id: "292125",
        resolution: "TP",
        creation_time: "2020-04-20T05:28:01.809Z",
        date: "2020-04-20",
      },
      {
        id: "292126",
        resolution: "FP",
        creation_time: "2020-04-20T05:28:24.984Z",
        date: "2020-04-20",
      },
      {
        id: "292148",
        resolution: "TP",
        creation_time: "2020-04-20T11:56:09.670Z",
        date: "2020-04-20",
      },
      {
        id: "292274",
        resolution: "FP",
        creation_time: "2020-04-20T18:14:17.914Z",
        date: "2020-04-20",
      },
      {
        id: "292295",
        resolution: "FP",
        creation_time: "2020-04-20T19:48:01.850Z",
        date: "2020-04-20",
      },
      {
        id: "292298",
        resolution: "FP",
        creation_time: "2020-04-20T20:28:21.209Z",
        date: "2020-04-20",
      },
      {
        id: "292311",
        resolution: "TP",
        creation_time: "2020-04-20T23:15:25.869Z",
        date: "2020-04-20",
      },
      {
        id: "292321",
        resolution: "TP",
        creation_time: "2020-04-21T05:24:43.827Z",
        date: "2020-04-21",
      },
      {
        id: "292372",
        resolution: "FP",
        creation_time: "2020-04-21T13:06:18.604Z",
        date: "2020-04-21",
      },
      {
        id: "292475",
        resolution: "FP",
        creation_time: "2020-04-22T02:36:24.023Z",
        date: "2020-04-22",
      },
      {
        id: "292489",
        resolution: "FP",
        creation_time: "2020-04-22T08:12:14.548Z",
        date: "2020-04-22",
      },
      {
        id: "292615",
        resolution: "FP",
        creation_time: "2020-04-22T22:33:52.512Z",
        date: "2020-04-22",
      },
      {
        id: "292647",
        resolution: "FP",
        creation_time: "2020-04-23T12:41:41.242Z",
        date: "2020-04-23",
      },
      {
        id: "292669",
        resolution: "FP",
        creation_time: "2020-04-23T13:30:42.316Z",
        date: "2020-04-23",
      },
      {
        id: "292705",
        resolution: "FP",
        creation_time: "2020-04-23T16:17:01.029Z",
        date: "2020-04-23",
      },
      {
        id: "292717",
        resolution: "TP",
        creation_time: "2020-04-23T17:38:23.447Z",
        date: "2020-04-23",
      },
      {
        id: "292759",
        resolution: "FP",
        creation_time: "2020-04-24T00:11:45.539Z",
        date: "2020-04-24",
      },
      {
        id: "292802",
        resolution: "TP",
        creation_time: "2020-04-24T14:16:04.725Z",
        date: "2020-04-24",
      },
      {
        id: "292837",
        resolution: "FP",
        creation_time: "2020-04-24T17:32:03.752Z",
        date: "2020-04-24",
      },
      {
        id: "292879",
        resolution: "TP",
        creation_time: "2020-04-25T02:04:05.216Z",
        date: "2020-04-25",
      },
      {
        id: "292889",
        resolution: "FP",
        creation_time: "2020-04-25T09:18:08.830Z",
        date: "2020-04-25",
      },
      {
        id: "292908",
        resolution: "FP",
        creation_time: "2020-04-25T15:45:48.648Z",
        date: "2020-04-25",
      },
    ],
  },
];

const repo2Dto = (repoResult: RuleEvent, groupByDays = 1): RuleEventDTO[] => {
  const result: RuleEventDTO = {
    ruleName: repoResult.name,
    numTickets: [],
    resolutions: [],
  };
  const buckets: Record<string, { tp: Number; fp: Number }> = {};

  return [];
};

describe("fetching and transforming days to events DTO", () => {
  it("should group by day", () => {});
});
