import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { EventPattern, MessagePattern } from '@nestjs/microservices';
import { TransactionsService } from './transactions/transactions.service';
import { TransactionDto } from './transactions/dto/transactions.dto';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private transactionService: TransactionsService
  ) {}

  @EventPattern('save_data')
  async saveData(data: TransactionDto) {
    console.log("Data to save ", data);
    this.transactionService.createTransaction(data);
  }

  @EventPattern('update_data')
  async updateData(data: any) {
    console.log("Data to update ", data);
    this.transactionService.updateTransaction(data);
  }
}
