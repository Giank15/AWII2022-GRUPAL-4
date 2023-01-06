import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, SetMetadata } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger/dist';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CocineroService } from './cocinero.service';
import { CreateCocineroDto } from './dto/create-cocinero.dto';
import { UpdateCocineroDto } from './dto/update-cocinero.dto';

//TODO http://localhost:3000/cocinero

@ApiBearerAuth()
@ApiTags('cocinero')
@Controller('cocinero')
@UseGuards(JwtAuthGuard)
export class CocineroController {
  constructor(private readonly cocineroService: CocineroService) {}

  @Post()
  create(@Body() createCocineroDto: CreateCocineroDto) {
    return this.cocineroService.createCocinero(createCocineroDto);
  }

  @Get()
  findAll() {
    return this.cocineroService.findAllCocineros();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cocineroService.findCocinero(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCocineroDto: UpdateCocineroDto) {
    return this.cocineroService.updateCocinero(id, updateCocineroDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cocineroService.removeCocinero(id);
  }
}
