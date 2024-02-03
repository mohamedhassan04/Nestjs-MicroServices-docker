import { Body, Controller, Get, Post } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrdersRequest } from './dto/create-order.request';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  async createOrder(@Body() request: CreateOrdersRequest) {
    return await this.ordersService.createOrder(request);
  }

  @Get()
  async getOrders() {
    return await this.ordersService.getOrders();
  }
}
