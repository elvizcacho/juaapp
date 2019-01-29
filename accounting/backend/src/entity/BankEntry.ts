import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class BankEntry {

    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public date: Date;

    @Column()
    public description: string;

    @Column({
        nullable: true
    })
    public category: string;

    @Column({
        precision: 12,
        scale: 2,
        type: "decimal"
    })
    public value: number;

}
