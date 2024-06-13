import { Module } from '@nestjs/common';
import { PrismaService } from '@/services';
import { BusConductorService } from './bus-conductor.service';
import { BusConductorController } from './bus-conductor.controller';

@Module({
  controllers: [BusConductorController],
  providers: [BusConductorService, PrismaService],
})
export class BusConductorModule {}
