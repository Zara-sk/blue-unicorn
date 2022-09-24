import { Column, DataType as dt, Model, Table } from "sequelize-typescript";

@Table({ tableName: "games" })
export class Game extends Model<Game> {
  @Column({
    type: dt.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({ type: dt.STRING, unique: true })
  slug: string;

  @Column({ type: dt.STRING })
  title: string;

  @Column({ type: dt.INTEGER })
  fullsize: number;

  @Column({ type: dt.INTEGER })
  zipsize: number;
}
