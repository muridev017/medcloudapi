import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

@Controller('pacientes')
export class PacienteController {
  @Get()
  getAll(): string {
    return 'Lista todos os pacientes';
  }

  @Get(':id')
  getName(@Param() name): string {
    return `Retorna o nome do paciente ${name.id}`;
  }

  @Post()
  create(@Body() paciente): string {
    console.log(paciente);
    return 'Paciente cadastrado';
  }

  @Put()
  change(@Body() paciente): string {
    console.log(paciente);
    return 'Paciente atualizado';
  }

  @Delete(':id')
  erase(@Param() params): string {
    return `Apagou o paciente ${params.id}`;
  }
}
