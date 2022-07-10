import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

import { Paciente } from './paciente.model';

@Controller('pacientes')
export class PacienteController {
  pacientes: Paciente[] = [
    new Paciente(
      'João de Deus',
      '1995-11-17',
      'joaodeus@gmail.com',
      'rua das goiabeiras, 187',
    ),
  ];

  @Get()
  getAll(): Paciente[] {
    return this.pacientes;
  }

  @Get(':id')
  getName(@Param() name): Paciente {
    return this.pacientes[0];
  }

  @Post()
  create(@Body() paciente: Paciente) {
    paciente.id = 100;
    this.pacientes.push(paciente);
  }

  @Put()
  change(@Body() paciente: Paciente): Paciente {
    return paciente;
  }

  @Delete(':id')
  erase(@Param() params) {
    this.pacientes.pop();
  }
}
