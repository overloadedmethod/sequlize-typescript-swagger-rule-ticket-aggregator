import {
  Column,
  CreatedAt,
  Table,
  Model,
  ForeignKey,
  PrimaryKey,
  BelongsToMany,
} from "sequelize-typescript";

@Table
export class RuleModel extends Model<RuleModel> {
  @PrimaryKey
  @Column
  id: string;
  @Column
  name: string;
  @BelongsToMany(() => TicketModel, () => EventModel)
  tickets: TicketModel[];
}

@Table
export class TicketModel extends Model<TicketModel> {
  @PrimaryKey
  @Column
  id: string;
  @Column
  title: string;
  @CreatedAt
  creation_time: Date;
  @Column
  resolution: string;
  @BelongsToMany(() => RuleModel, () => EventModel)
  rules: RuleModel[];
}

@Table
export class EventModel extends Model<EventModel> {
  @ForeignKey(() => RuleModel)
  @Column
  ruleId: string;
  @ForeignKey(() => TicketModel)
  @Column
  ticketId: string;
}
