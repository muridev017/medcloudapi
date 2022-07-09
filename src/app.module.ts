import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PacienteController } from './paciente.controller';

@Module({
  imports: [],
  controllers: [AppController, PacienteController],
  providers: [AppService],
})
export class AppModule {}
