import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class CreateUtilisateurDto {
    @IsNotEmpty()
    @IsString()
    nom:string;

    @IsNotEmpty()
    @IsString()
    prenom:string;

    @IsNotEmpty()
    @IsEmail()
    email:string;

      @IsNotEmpty()

    password:string;
}
