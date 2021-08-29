import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColumn("uuid")
    id: number;

    @Column({type: "varchar", length: 20})
    nom: string;

    @Column({type: "varchar", length: 100})
    prenom: string;

}