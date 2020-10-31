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
  numTickets: number[];
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

export type Operations = {
  serializeTickets: (tickets: TicketDTO[]) => Promise<void>;
  serializeRules: (rules: RuleDTO[]) => Promise<void>;
  fetchEvents: (from: string, to: string) => Promise<RuleEventDTO[]>;
};
