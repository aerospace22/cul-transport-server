import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '@/services';
import { CreateBusRouteDto } from './dto/create-bus-routes.dto';
import { UpdateBusRouteDto } from './dto/update-bus-routes.dto';

@Injectable()
export class BusRoutesService {
  constructor(private readonly prismaService: PrismaService) {}

  generateUniqueRandomString(length: number = 12) {
    const chars =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const charactersLength = chars.length;

    // Add random characters to the string
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * charactersLength));
    }

    // Ensure uniqueness by appending the current timestamp
    result += Date.now().toString(36); // Convert timestamp to a base-36 string

    return result;
  }

  async create(createBusRouteDto: CreateBusRouteDto) {
    const routeNo = this.generateUniqueRandomString(16);

    return await this.prismaService.busRoute.create({
      // @ts-ignore
      data: {
        routeNo,
        ...createBusRouteDto,
      },
    });
  }

  async findAll() {
    return await this.prismaService.busRoute.findMany({
      include: {
        bus: {
          include: {
            busConductor: true,
            busDriver: true,
          },
        },
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
