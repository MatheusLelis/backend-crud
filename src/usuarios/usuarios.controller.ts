import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Usuarios } from '../entities/Usuarios';
import { Filtro, UsuariosService } from './usuarios.service';

@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) { }

  @Post()
  create(@Body() usuario: Usuarios) {
    console.log("aqui")
    return this.usuariosService.create(usuario);
  }

  @Post('login')
  login(@Body() login: Login) {
    console.log("login = ")
    console.log("login = ", login)
    return this.usuariosService.login(login);
  }

  @Post('filtro/teste')
  filtro(@Body() login: Filtro) {
    console.log("filtro = ", login)
    return this.usuariosService.filtro(login);
  }

  @Get()
  findAll() {
    return this.usuariosService.findAll();
  }

  @Get('status')
  findAllStatus() {
    return this.usuariosService.findAllStatus();
  }

  @Get('faixaEtaria')
  findAllFaixasEtarias() {
    return this.usuariosService.findAllFaixasEtarias();
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() usuario: Usuarios) {
    return this.usuariosService.update(+id, usuario);
  }

  @Patch(':status/:id')
  updateStatus(@Param('status') id: string, @Param('id') status: number) {
    console.log("udpate status")
    return this.usuariosService.updateStatus(+id, +status);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usuariosService.remove(+id);
  }

  @Delete('remover/todos')
  removeAll() {
    console.log("remove all")
    return this.usuariosService.removeAll();
  }
}

export interface Login {
  login: string;
  senha: string;
}