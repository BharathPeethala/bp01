import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Req,
  Res,
  UsePipes,
  ValidationPipe,
  Put,
} from '@nestjs/common';
import { CustomerService } from '../services/customer.service';
import { Request, Response } from 'express';
import { Customer } from '../interface/customer.interface';
import { CreateCustomerDTO, CustomerParamDTO } from '../dto/customer.dto';

@Controller('customers')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  async createCustomer(
    @Req() req: Request,
    @Res() res: Response,
    @Body() customer: CreateCustomerDTO,
  ) {
    const savedCustomer = await this.customerService.createCustomer(customer);
    res.status(200).json({ data: savedCustomer });
  }

  @Get()
  async getAllUsers(@Req() req: Request, @Res() res: Response) {
    const allCustomers = await this.customerService.getAllCustomers();
    res.status(200).json({ data: allCustomers });
  }

  @Get('/:customer_id')
  async getUser(
    @Req() req: Request,
    @Res() res: Response,
    @Param('customer_id') id: CustomerParamDTO,
  ) {
    const customer = await this.customerService.getCustomerById(id);
    res.status(200).json({ data: customer });
  }

  @Delete('/:customer_id')
  async deleteUser(
    @Req() req: Request,
    @Res() res: Response,
    @Param('customer_id') id: CustomerParamDTO,
  ) {
    const deletedCustomer = await this.customerService.deleteCustomerById(id);
    res.status(200).json({ data: deletedCustomer });
  }

  @Put('/:customer_id')
  async updateUser(
    @Req() req: Request,
    @Res() res: Response,
    @Param('customer_id') id: CustomerParamDTO,
    @Body() customer: CreateCustomerDTO,
  ) {
    const updateCustomer = await this.customerService.updateCustomerById(
      id,
      customer,
    );
    res.status(200).json({ data: updateCustomer });
  }
}
