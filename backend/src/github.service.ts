// github.service.ts
import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class GithubService {
  async getCommits(): Promise<any[]> {
    // Realiza una solicitud a la API de GitHub para obtener los commits
    // Aqui puse mi nombre de usuario y nombre de la repo correctos
    const response = await axios.get('https://api.github.com/repos/GeroPazPapa1/pruebatecnicaFTFVite/commits');
    return response.data;
  }
}
