import { TicketModel } from ".";

declare global {
  namespace Express {
    export interface Request {
      db: Operations;
    }
  }
}

export type RuleDTO = {
  id: string;
  name: string;
};

export type Resolution = {
  tp: number;
  fp: number;
};

export type RuleEventDTO = {
  ruleName: string;
  numTickets: string[];
  resolutions: Resolution[];
};

export enum ResolutionEnm {
  TP = 0,
  FP,
}

export type TicketDTO = {
  id: string;
  title: string;
  creation_time: number;
  resolution: "TP" | "FP";
  rules: number[];
};

export type RuleEvent = {
  id: string;
  name: string;
  tickets: {
    date: string;
    id: string;
    resolution: string;
    creation_time: string;
  }[];
};

export type Operations = {
  serializeTickets: (tickets: TicketDTO[]) => Promise<void>;
  serializeRules: (rules: RuleDTO[]) => Promise<void>;
  fetchEvents: (
    fromUnixTime: number,
    toUnixTime: number
  ) => Promise<RuleEvent[]>;
};
