import { Injectable } from '@nestjs/common';
import { randomUUID } from 'node:crypto';
import { PrismaService } from 'src/database/prisma.service';
import { RbbMembersRepository } from '../rbb-players-repository';

@Injectable()
export class PrismaRbbMembersRepository implements RbbMembersRepository {
  constructor(private prisma: PrismaService) {}
  async create(name: string, position: string): Promise<void> {
    await this.prisma.rBBTeamMembers.create({
      data: {
        id: randomUUID(),
        name,
        function: position,
      },
    });
  }
}
