import { Injectable } from '@nestjs/common';
import { PrismaService, PaymentsService } from '@/services';
import { CreateBusRouteTicketBookingTransactionDto } from './dto/create-bus-route-ticket-booking-transaction.dto';

@Injectable()
export class BusRouteTicketBookingTransactionsService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly paymentsServce: PaymentsService,
  ) {}

  async create(
    createBusRouteTicketBookingTransaction: CreateBusRouteTicketBookingTransactionDto,
  ) {
    const ticket = await this.prismaService.busRouteTicket.findUnique({
      where: { id: createBusRouteTicketBookingTransaction.busRouteTicketId },
    });

    // prettier-ignore
    const subtotal = +createBusRouteTicketBookingTransaction.ticketQuantity * ticket.price;
    const updatedTicket = await this.prismaService.busRouteTicket.update({
      where: { id: createBusRouteTicketBookingTransaction.busRouteTicketId },
      data: {
        quantity:
          +ticket.quantity -
          +createBusRouteTicketBookingTransaction.ticketQuantity,
      },
    });
    const paymentData = await this.paymentsServce.createPaymentLink({
      amount: Number(`${subtotal}00`),
      description: `[BUS E-TICKET BOOKING PAYMENT]`,
    });

    console.log({ paymentData, updatedTicket });

    return { paymentData, updatedTicket };
  }
}
