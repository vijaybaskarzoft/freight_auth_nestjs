import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('fiq_user')
export class UserEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    carrier_name: string;

    @Column({ unique: true })
    email: string;

    @Column({ select: false })
    password: string;

    @BeforeInsert()
    emailToLowerCase() {
        this.email = this.email.toLocaleLowerCase();
    }
}