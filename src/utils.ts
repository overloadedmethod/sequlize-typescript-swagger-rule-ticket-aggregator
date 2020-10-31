import { Resolution, RuleEvent, RuleEventDTO } from "./repo/models/types";

export const repo2Dto = (repoResult: RuleEvent): RuleEventDTO[] => {
  const dateBucket: Record<string, RuleEventDTO> = {};

  const resolutions: Record<string, Resolution> = {};

  for (const ticket of repoResult.tickets) {
    if (dateBucket[ticket.date])
      dateBucket[ticket.date].numTickets.push(ticket.id);
    else
      dateBucket[ticket.date] = {
        ruleName: repoResult.name,
        numTickets: [ticket.id],
        resolutions: [],
      };
    if (!resolutions[ticket.id]) resolutions[ticket.id] = { tp: 0, fp: 0 };

    resolutions[ticket.id].fp =
      ticket.resolution === "FP"
        ? resolutions[ticket.id].fp + 1
        : resolutions[ticket.id].fp;
    resolutions[ticket.id].tp =
      ticket.resolution === "TP"
        ? resolutions[ticket.id].tp + 1
        : resolutions[ticket.id].tp;
  }

  for (const [date, rule] of Object.entries(dateBucket)) {
    for (const ticket of rule.numTickets)
      dateBucket[date].resolutions.push(resolutions[ticket]);
  }
  return Object.values(dateBucket);
};
