import { HttpException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Cocinero, CocineroDocument } from 'src/cocinero/schema/cocinero.schema';
import { LoginAuthDto } from './dto/login-auth.dto';
import { hash, compare } from "bcrypt";
import { RegisterAuthDto } from './dto/register-auth.dto';

@Injectable()
export class AuthService {

  constructor(
    @InjectModel(Cocinero.name) private cocineroModel: Model<CocineroDocument>,
    private jwtService: JwtService,
  ){}

  async register(cocineroObject: RegisterAuthDto){

    const { password } = cocineroObject; //TODO la contraseña es texto plano, debemos aplicar un hash
    const plainToHash = await hash(password, 10) //TODO nos encripta la contraseña
    cocineroObject = {...cocineroObject, password:plainToHash};
    return this.cocineroModel.create(cocineroObject)

  }

  async login(cocineroObject: LoginAuthDto){

    const {email, password} = cocineroObject; //TODO es lo que se envia por Http

    const findUser = await this.cocineroModel.findOne({email})
    //TODO validacion para saber su el usuario existe o no
    if(!findUser) throw new HttpException('El usuario no existe', 404)

    const checkPass = await compare(password, findUser.password);

    //TODO validacion de contraseña, se pasa la contraseña plana y la contraseña encriptada
    if(!checkPass) throw new HttpException('Contraseña incorrecta', 403)

    const payload = { id: findUser._id, name: findUser.name }
    const token = this.jwtService.sign(payload)

    const data = {

      user: findUser,
      token,

    };

    return data;

  }

}
