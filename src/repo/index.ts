import { Rule, Ticket } from "./models/types";

export function InitRepo() {
  const serializeTickets = async (tickets: Ticket[]) => {
    console.log("serializing tickets");
  };
  const serializeRules = async (rules: Rule[]) => {
    console.log("serializing rules");
  };
  const fetchTickets = async (from: string, to: string) => {
    console.log("fetching tickets");
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
      fetchTickets,
    });
  };

  return { openConnection, closeConnection };
}

export default InitRepo;
