import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProduitDto } from './dto/create-produit.dto';
import { UpdateProduitDto } from './dto/update-produit.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Produit } from './entities/produit.entity';
import { Repository } from 'typeorm';
import { Categorie } from 'src/categorie/entities/categorie.entity';

@Injectable()
export class ProduitService {
  constructor(
    @InjectRepository(Produit)
    private produitRepository:Repository<Produit>,
   
  ){}

  async create(createProduitDto: CreateProduitDto) {
    const produit = this.produitRepository.create(createProduitDto);
    const result = await this.produitRepository.save(produit);
    return result;
  }

 async findAll() {
    return await this.produitRepository.find();
  }

 async findOne(id: number) {

  const found= await this.produitRepository.findOneBy({id});
  if(!found){
    throw new NotFoundException(
      `Le produit avec l'id ${id} n'a pas été trouvé`,
    );
  }
  return found
  }

  async update(id: number, updateProduitDto: UpdateProduitDto) {
    const produit = await this.findOne(id);

    const updatePoduit = this.produitRepository.merge(
      produit,
      updateProduitDto,
    );
    const result = await this.produitRepository.save(updatePoduit);
    return result
  }

  async remove(id: number) {

    const produit = await this.findOne(id);
    const response = await this.produitRepository.remove(produit);
    return response;
  }
  }
