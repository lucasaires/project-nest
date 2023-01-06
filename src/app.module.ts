import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaService } from './database/prisma.service';
import { PrismaRbbMembersRepository } from './repositories/prisma/prisma-rbb-players-repository';
import { RbbMembersRepository } from './repositories/rbb-players-repository';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    PrismaService,
    {
      provide: RbbMembersRepository,
      useClass: PrismaRbbMembersRepository,
    },
  ],
})
export class AppModule {}
