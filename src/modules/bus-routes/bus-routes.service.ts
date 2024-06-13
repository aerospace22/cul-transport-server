import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '@/services';
import { CreateBusRouteDto } from './dto/create-bus-routes.dto';
import { UpdateBusRouteDto } from './dto/update-bus-routes.dto';

@Injectable()
export class BusRoutesService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createBusRouteDto: CreateBusRouteDto) {
    return await this.prismaService.busRoute.create({
      // @ts-ignore
      data: {
        ...createBusRouteDto,
      },
    });
  }

  async findAll() {
    return await this.prismaService.busRoute.findMany({
      include: {
        busRouteTickets: true,
        busRouteTicketBookings: true,
        busRouteTicketBookingTransaction: true,
      },
    });
  }

  async findOne(id: number) {
    const result = await this.prismaService.busRoute.findUnique({
      where: { id },
    });

    if (!result) {
      throw new NotFoundException('_NOT_FOUND');
    }

    return result;
  }

  async update(id: number, updateBusRouteDto: UpdateBusRouteDto) {
    return await this.prismaService.busRoute.update({
      where: {
        id,
      },
      data: {
        ...updateBusRouteDto,
      },
    });
  }

  async remove(id: number) {
    return await this.prismaService.busRoute.delete({ where: { id } });
  }
}
