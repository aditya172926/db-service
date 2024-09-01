import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type TransactionDocument = HydratedDocument<Transaction>;

@Schema()
export class Transaction {
    @Prop({required: true, unique: true})
    sourceTransactionHash: string;

    @Prop()
    createdAt: string;

    @Prop()
    updatedAt: string;

    @Prop()
    status: string;

    @Prop()
    destinationTransactionHash: string;
}

export const TransactionSchema = SchemaFactory.createForClass(Transaction);