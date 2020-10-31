declare global {
  namespace Express {
    export interface Request {
      db: Operations;
    }
  }
}

export type Rule = {
  id: number;
  name: string;
};

export type Ticket = {
  id: number;
  title: string;
  creation_time: number;
  resolution: "TP" | "FP";
  rules: number[];
};

export type Operations = {
  serializeTickets: (tickets: Ticket[]) => Promise<void>;
  serializeRules: (rules: Rule[]) => Promise<void>;
  fetchTickets: (from: string, to: string) => Promise<void>;
};
