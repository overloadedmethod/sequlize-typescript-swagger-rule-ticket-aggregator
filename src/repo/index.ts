import { RuleDTO, TicketDTO, RuleEventDTO } from "./models/types";
import { Sequelize } from "sequelize-typescript";
import {
  Rule as RuleModel,
  Ticket as TicketModel,
  Event as EventModel,
} from "./models";

export function InitRepo() {
  const sequelize = new Sequelize({
    database: "some_db",
    dialect: "sqlite",
    username: "root",
    password: "",
    storage: ":memory:",
    models: [RuleModel, TicketModel, EventModel],
  });

  const serializeTickets = async (tickets: TicketDTO[]) => {
    console.log("serializing tickets");
    const repo = sequelize.getRepository(TicketModel);
    // TODO: check if it's possible to store them in batch
    const tasks = tickets.map((ticket) => repo.create(ticket));
    await Promise.all(tasks);
  };
  const serializeRules = async (rules: RuleDTO[]) => {
    console.log("serializing rules");
    const repo = sequelize.getRepository(RuleModel);
    // TODO: check if it's possible to store them in batch
    const tasks = rules.map((rule) => repo.create(rule));
    await Promise.all(tasks);
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
