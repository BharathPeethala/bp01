import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Customer } from '../interface/customer.interface';
import { CreateCustomerDTO, CustomerParamDTO } from '../dto/customer.dto';

@Injectable()
export class CustomerService {
  constructor(
    @InjectModel('Customer') private readonly customerModel: Model<Customer>,
  ) {}
  public async createCustomer(customer: CreateCustomerDTO): Promise<Customer> {
    const newCustomer = new this.customerModel(customer);
    return newCustomer.save();
  }

  public getAllCustomers() {
    return this.customerModel.find({});
  }

  public getCustomerById(id: CustomerParamDTO) {
    return this.customerModel.findById(id);
  }

  public deleteCustomerById(id: CustomerParamDTO) {
    return this.customerModel.findByIdAndDelete(id);
  }

  public updateCustomerById(id: CustomerParamDTO, customer: CreateCustomerDTO) {
    return this.customerModel.findByIdAndUpdate(id, customer);
  }
}
