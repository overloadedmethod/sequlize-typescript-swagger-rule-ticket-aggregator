import { Rule, Ticket, RuleEvent } from "./models/types";

export function InitRepo() {
  const serializeTickets = async (tickets: Ticket[]) => {
    console.log("serializing tickets");
  };
  const serializeRules = async (rules: Rule[]) => {
    console.log("serializing rules");
  };
  const fetchEvents = async (
    from: string,
    to: string
  ): Promise<RuleEvent[]> => {
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
