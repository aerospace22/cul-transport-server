import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { BusDriverService } from './bus-driver.service';
import { CreateBusDriverDto } from './dto/create-bus-driver.dto';
import { UpdateBusDriverDto } from './dto/update-bus-driver.dto';

@ApiTags('Bus Drivers API')
@Controller({
  path: 'bus-drivers',
  version: '1',
})
export class BusDriverController {
  constructor(private readonly busDriverService: BusDriverService) {}

  @ApiResponse({
    status: 201,
    description: 'Created BusDriver',
  })
  @Post('/')
  create(@Body() createBusDriverDto: CreateBusDriverDto) {
    return this.busDriverService.create(createBusDriverDto);
  }

  @ApiResponse({
    status: 200,
    description: 'Get all BusDriver',
  })
  @Get('/')
  findAll() {
    return this.busDriverService.findAll();
  }

  @ApiResponse({
    status: 200,
    description: 'Get BusDriver',
  })
  @Get('/:id')
  findOne(@Param('id') id: string) {
    return this.busDriverService.findOne(+id);
  }

  @ApiResponse({
    status: 200,
    description: 'Update BusDriver',
  })
  @Patch('/:id')
  update(
    @Param('id') id: string,
    @Body() updateBusDriverDto: UpdateBusDriverDto,
  ) {
    return this.busDriverService.update(+id, updateBusDriverDto);
  }

  @ApiResponse({
    status: 204,
    description: 'Delete BusDriver',
  })
  @Delete('/:id')
  remove(@Param('id') id: string) {
    return this.busDriverService.remove(+id);
  }
}
