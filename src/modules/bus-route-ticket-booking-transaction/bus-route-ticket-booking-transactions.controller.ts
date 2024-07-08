import { Controller, Post, Body } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { BusRouteTicketBookingTransactionsService } from './bus-route-ticket-booking-transactions.service';
import { CreateBusRouteTicketBookingTransactionDto } from './dto/create-bus-route-ticket-booking-transaction.dto';

@ApiTags('Bus Route Tickets API')
@Controller({
  path: 'bus-route-tickets',
  version: '1',
})
export class BusRouteTicketBookingTransactionController {
  constructor(
    private readonly busRouteTicketBookingTransactionsService: BusRouteTicketBookingTransactionsService,
  ) {}

  @ApiResponse({
    status: 201,
    description: 'Created BusRouteTicketBookingTransaction',
  })
  @Post('/')
  create(
    @Body()
    createBusRouteTicketBookingTransactionDto: CreateBusRouteTicketBookingTransactionDto,
  ) {
    return this.busRouteTicketBookingTransactionsService.create(
      createBusRouteTicketBookingTransactionDto,
    );
  }
}
