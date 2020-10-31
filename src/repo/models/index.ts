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
export class Rule extends Model<Rule> {
  @PrimaryKey
  @Column
  id: number;
  @Column
  name: string;
}

@Table
export class Ticket extends Model<Ticket> {
  @PrimaryKey
  @Column
  id: number;
  @Column
  title: string;
  @CreatedAt
  creation_time: Date;
  @Column
  resolution: number;
  @BelongsToMany(() => Rule, () => Event)
  rules: Rule[];
}

@Table
export class Event extends Model<Event> {
  @ForeignKey(() => Rule)
  @Column
  ruleId: number;
  @ForeignKey(() => Ticket)
  @Column
  ticketId: number;
}
