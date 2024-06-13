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
import { BusConductorService } from './bus-conductor.service';
import { CreateBusConductorDto } from './dto/create-bus-conductor.dto';
import { UpdateBusConductorDto } from './dto/update-bus-conductor.dto';

@ApiTags('Bus Conductors API')
@Controller({
  path: 'bus-conductors',
  version: '1',
})
export class BusConductorController {
  constructor(private readonly busConductorService: BusConductorService) {}

  @ApiResponse({
    status: 201,
    description: 'Created BusConductor',
  })
  @Post('/')
  create(@Body() createBusConductorDto: CreateBusConductorDto) {
    return this.busConductorService.create(createBusConductorDto);
  }

  @ApiResponse({
    status: 200,
    description: 'Get all BusConductor',
  })
  @Get('/')
  findAll() {
    return this.busConductorService.findAll();
  }

  @ApiResponse({
    status: 200,
    description: 'Get BusConductor',
  })
  @Get('/:id')
  findOne(@Param('id') id: string) {
    return this.busConductorService.findOne(+id);
  }

  @ApiResponse({
    status: 200,
    description: 'Update BusConductor',
  })
  @Patch('/:id')
  update(
    @Param('id') id: string,
    @Body() updateBusConductorDto: UpdateBusConductorDto,
  ) {
    return this.busConductorService.update(+id, updateBusConductorDto);
  }

  @ApiResponse({
    status: 204,
    description: 'Delete BusConductor',
  })
  @Delete('/:id')
  remove(@Param('id') id: string) {
    return this.busConductorService.remove(+id);
  }
}
