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

export type Resolution = {
  tp: number;
  fp: number;
};

export type RuleEvent = {
  ruleName: string;
  numTickets: number[];
  resolutions: Resolution[];
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
  fetchEvents: (from: string, to: string) => Promise<RuleEvent[]>;
};
