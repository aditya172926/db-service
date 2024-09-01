import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Transaction } from './schemas/transaction.schema';
import { Model } from 'mongoose';
import { TransactionDto } from './dto/transactions.dto';

@Injectable()
export class TransactionsService {

    constructor(
        @InjectModel(Transaction.name) private transactionModel: Model<Transaction>
    ){}

    async createTransaction(transactiondto: TransactionDto) {
        const createTxn = new this.transactionModel(transactiondto);
        return createTxn.save();
    }

    async updateTransaction(data: any) {
        return this.transactionModel.updateOne({"sourceTransactionHash": data.sourceTransactionHash}, data);
    }

    async findTransaction() {

    }

    async findAll() {

    }

}
