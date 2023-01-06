import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { PreparacionService } from './preparacion.service';
import { CreatePreparacionDto } from './dto/create-preparacion.dto';
import { UpdatePreparacionDto } from './dto/update-preparacion.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

//TODO http://localhost:3000/preparacion

@ApiBearerAuth()
@ApiTags('preparacion')
@UseGuards(JwtAuthGuard)
@Controller('preparacion')
export class PreparacionController {
  constructor(private readonly preparacionService: PreparacionService) {}

  @Post()
  create(@Body() createPreparacionDto: CreatePreparacionDto) {
    return this.preparacionService.create(createPreparacionDto);
  }

  @Get()
  findAll() {
    return this.preparacionService.findAll();
  }

  @Get(':id')
  findByPreparacion(@Param('id') id: string) {
    return this.preparacionService.findByPreparacion(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePreparacionDto: UpdatePreparacionDto) {
    return this.preparacionService.update(id, updatePreparacionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.preparacionService.remove(id);
  }
}
