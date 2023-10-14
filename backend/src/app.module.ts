import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GithubService } from './github.service'; // Importa el servicio GithubService
import { CommitsController } from './commits.controller';

@Module({
  imports: [],
  controllers: [AppController, CommitsController],
  providers: [AppService, GithubService, CommitsController], // Agrega GithubService a la lista de proveedores
})
export class AppModule {}
