import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { EventPattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @EventPattern('save_data')
  async saveData(data: string) {
    console.log("Data to save ", JSON.parse(data));
  }

  @EventPattern('update_data')
  async updateData(data: string) {
    console.log("Data to update ", JSON.parse(data));
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
