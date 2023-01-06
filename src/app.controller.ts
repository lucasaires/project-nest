import { Controller, Post, Body } from '@nestjs/common';
import { CreatePlayerBody } from './dtos/create-players';
import { RbbMembersRepository } from './repositories/rbb-players-repository';

@Controller('app')
export class AppController {
  constructor(private rbbMembersRepository: RbbMembersRepository) {}

  @Post('player')
  async getHello(@Body() body: CreatePlayerBody) {
    const { name, function: position } = body;

    await this.rbbMembersRepository.create(name, position);
    return {};
  }
}
