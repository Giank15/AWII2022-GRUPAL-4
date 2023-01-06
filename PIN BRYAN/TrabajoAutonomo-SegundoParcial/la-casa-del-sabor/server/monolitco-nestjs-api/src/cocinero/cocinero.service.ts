import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { hash } from 'bcrypt';
import { Model } from 'mongoose';
import { CreateCocineroDto } from './dto/create-cocinero.dto';
import { UpdateCocineroDto } from './dto/update-cocinero.dto';
import { Cocinero, CocineroDocument } from './schema/cocinero.schema';

@Injectable()
export class CocineroService {

  constructor(
    @InjectModel(Cocinero.name) private cocineroModel: Model<CocineroDocument>
  ){}

  async createCocinero(createCocineroDto: CreateCocineroDto) {

    const {password} = createCocineroDto;
    const plainToHash = await hash(password, 10);
    createCocineroDto = {...createCocineroDto, password:plainToHash};
    const cocineroCreated = await this.cocineroModel.create(createCocineroDto)
    return cocineroCreated;
  }

  async findAllCocineros() {
    const cocineroFindAll = await this.cocineroModel.find({})
    return cocineroFindAll;
  }

  async findCocinero(id: string) {
    const cocineroFindID = await this.cocineroModel.findById(id)
    return cocineroFindID;
  }

  async updateCocinero(id: string, updateCocineroDto: UpdateCocineroDto) {

    const {password} = updateCocineroDto;
    const plainToHash = await hash(password, 10);
    updateCocineroDto = {...updateCocineroDto, password:plainToHash};
    const actualizarCocinero = await this.cocineroModel.findByIdAndUpdate(id, updateCocineroDto)
    return actualizarCocinero;
  }

  async removeCocinero(id: string) {
    const cocineroRemove = await this.cocineroModel.findByIdAndDelete(id)
    return cocineroRemove;
  }
}
