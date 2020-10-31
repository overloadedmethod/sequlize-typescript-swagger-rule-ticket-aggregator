import { RuleDTO, TicketDTO, RuleEventDTO, RuleEvent } from "./models/types";
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
    const tasks = tickets.map(
      (ticket) =>
        new Promise(async (res, rej) => {
          try {
            await TicketModel.create(ticket);
            const rules = ticket.rules.map((ruleId) =>
              EventModel.create({ ruleId, ticketId: ticket.id })
            );
            await Promise.all(rules);
            res();
          } catch (err) {
            rej(err);
          }
        })
    );

    await Promise.all(tasks);

    console.log("tickets serialized");
  };
  const serializeRules = async (rules: RuleDTO[]) => {
    console.log("serializing rules");
    await RuleModel.bulkCreate(rules);
    console.log("rules serialized");
  };
  const fetchEvents = async (
    fromUnixTime: number,
    toUnixTime: number
  ): Promise<RuleEvent[]> => {
    console.log("fetching events");
    const test = await RuleModel.findAll({
      include: [
        {
          model: TicketModel,
          as: "tickets",
          attributes: [
            "id",
            "resolution",
            "creation_time",
            [Sequelize.fn("Date", Sequelize.col("creation_time")), "date"],
          ],
        },
      ],
      limit: 30,
    });
    const testResult = test.map((event) => event.toJSON()) as RuleEvent[];

    const events = await RuleModel.findAll({
      include: [
        {
          model: TicketModel,
          as: "tickets",
          attributes: [
            "id",
            "resolution",
            "creation_time",
            [Sequelize.fn("Date", Sequelize.col("creation_time")), "date"],
          ],
          where: {
            creation_time: {
              $between: [
                new Date(fromUnixTime).toISOString(),
                new Date(toUnixTime).toISOString(),
              ],
            },
          },
        },
      ],
    });
    return events.map((event) => event.toJSON()) as RuleEvent[];
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
