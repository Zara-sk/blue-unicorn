import {
  Column,
  DataType as dt,
  Model,
  Table,
  BelongsToMany,
} from "sequelize-typescript";

import { User } from "src/users/users.model";
import { UserRoles } from "./user-roles.model";

interface RoleCreationAttrs {
  value: string;
  desctiprion: string;
}

@Table({ tableName: "roles" })
export class Role extends Model<Role, RoleCreationAttrs> {
  @Column({
    type: dt.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({ type: dt.STRING, unique: true, allowNull: false })
  value: string;

  @Column({ type: dt.STRING, allowNull: false })
  description: string;

  @BelongsToMany(() => User, () => UserRoles)
  users: User[];
}
