import { Module } from '@nestjs/common';
import { PrismaService } from '@/services';
import { BusRouteTicketBookingTransactionsService } from './bus-route-ticket-booking-transactions.service';
import { BusRouteTicketBookingTransactionController } from './bus-route-ticket-booking-transactions.controller';

@Module({
  controllers: [BusRouteTicketBookingTransactionController],
  providers: [BusRouteTicketBookingTransactionsService, PrismaService],
})
export class BusRouteTicketsModule {}
