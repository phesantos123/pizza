import {Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn} from "typeorm";
import {v4 as uuid } from "uuid";

@Entity('users')

 class User {

    @PrimaryColumn()
    readonly id: string;

    @Column()
    name: string;

    @Column()
    login: string;

    @Column()
    admin: boolean;

<<<<<<< HEAD
   
    
=======
>>>>>>> eac0d67da05a70d5879b50f763d21285e645ceca
    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    constructor (){
        
        if(!this.id){
            this.id = uuid();
        }
    }

}

export { User }
