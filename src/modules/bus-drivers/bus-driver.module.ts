import { Module } from '@nestjs/common';
import { PrismaService } from '@/services';
import { BusDriverService } from './bus-driver.service';
import { BusDriverController } from './bus-driver.controller';

@Module({
  controllers: [BusDriverController],
  providers: [BusDriverService, PrismaService],
})
export class BusDriverModule {}
