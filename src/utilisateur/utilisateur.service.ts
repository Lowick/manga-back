import { Injectable } from '@nestjs/common';
import { CreateUtilisateurDto } from './dto/create-utilisateur.dto';
import { UpdateUtilisateurDto } from './dto/update-utilisateur.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Utilisateur } from './entities/utilisateur.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UtilisateurService {

   constructor(
    @InjectRepository(Utilisateur)
    private utilisateurRepository:Repository<Utilisateur>,
  ){}


  create(createUtilisateurDto: CreateUtilisateurDto) {
    return 'This action adds a new utilisateur';
  }

  findAll() {
    return `This action returns all utilisateur`;
  }

  findOne(id: number) {
    return `This action returns a #${id} utilisateur`;
  }

  update(id: number, updateUtilisateurDto: UpdateUtilisateurDto) {
    return `This action updates a #${id} utilisateur`;
  }

  remove(id: number) {
    return `This action removes a #${id} utilisateur`;
  }
}
