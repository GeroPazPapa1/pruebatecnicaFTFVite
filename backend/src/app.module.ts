import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GithubService } from './github.service'; 
import { CommitsController } from './commits.controller';

@Module({
  imports: [],
  controllers: [AppController, CommitsController],
  providers: [AppService, GithubService, CommitsController], 
})
export class AppModule {}
