import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Utilisateur {

    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    nom:string;

    @Column()
    prenom:string;
    
    @Column()
    email:string;

    @Column()
    password:string;


}
