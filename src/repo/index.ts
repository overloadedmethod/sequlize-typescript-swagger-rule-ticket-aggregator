import { RuleDTO, TicketDTO, RuleEventDTO } from "./models/types";
import { Sequelize } from "sequelize-typescript";
import { RuleModel, TicketModel, EventModel } from "./models";

export const sequelize = new Sequelize({
  logging: false,
  database: "some_db",
  dialect: "sqlite",
  username: "root",
  password: "",
  storage: ":memory:",
  models: [RuleModel, TicketModel, EventModel],
});

export function InitRepo() {
  const serializeTickets = async (tickets: TicketDTO[]) => {
    console.log("serializing tickets");
    await TicketModel.bulkCreate(tickets);
  };
  const serializeRules = async (rules: RuleDTO[]) => {
    console.log("serializing rules");
    await RuleModel.bulkCreate(rules);
  };
  const fetchEvents = async (
    from: string,
    to: string
  ): Promise<RuleEventDTO[]> => {
    console.log("fetching events");
    return Promise.resolve([]);
  };

  const closeConnection = async () => {
    console.log("closing connection");
    return Promise.resolve();
  };

  const openConnection = async () => {
    console.log("opening connection");
    return Promise.resolve({
      serializeTickets,
      serializeRules,
      fetchEvents,
    });
  };

  return { openConnection, closeConnection };
}

export default InitRepo;
