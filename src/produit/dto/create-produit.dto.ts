import { IsInt, IsNotEmpty, IsString } from "class-validator";

export class CreateProduitDto {
     @IsNotEmpty()
    @IsString()
    nom:string;

     @IsNotEmpty()
    @IsInt()
    prix:number;

     @IsNotEmpty()
    @IsInt()
    quantite:number;

    @IsNotEmpty()
  @IsInt()
    id_categorie:number;
}
