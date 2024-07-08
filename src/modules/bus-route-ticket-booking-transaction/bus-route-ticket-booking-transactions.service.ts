import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/services';
import { CreateBusRouteTicketBookingTransactionDto } from './dto/create-bus-route-ticket-booking-transaction.dto';

@Injectable()
export class BusRouteTicketBookingTransactionsService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(
    createBusRouteTicketBookingTransaction: CreateBusRouteTicketBookingTransactionDto,
  ) {
    console.log(createBusRouteTicketBookingTransaction);
  }
}
