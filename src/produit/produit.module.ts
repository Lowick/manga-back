import { Module } from '@nestjs/common';
import { ProduitService } from './produit.service';
import { ProduitController } from './produit.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Produit } from './entities/produit.entity';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports:[
    TypeOrmModule.forFeature([Produit]),
    PassportModule.register({defaultStrategy:`jwt`}),
  ],
  controllers: [ProduitController],
  providers: [ProduitService],
})
export class ProduitModule {}
