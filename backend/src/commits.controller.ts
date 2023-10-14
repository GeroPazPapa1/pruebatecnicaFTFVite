// commits.controller.ts
import { Controller, Get } from '@nestjs/common';
import { GithubService } from './github.service';

@Controller('api/commits')
export class CommitsController {
  constructor(private readonly githubService: GithubService) {}

  @Get()
  async getCommits() {
    const commits = await this.githubService.getCommits();
    return commits;
  }
}
