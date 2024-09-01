export enum TransactionStatus {
    pending = 'PENDING',
    success = 'SUCCESS',
    fail = 'FAIL'
}

export class TransactionDto {
    sourceTransactionHash: string;
    createdAt: string;
    updatedAt: string;
    status: string;
    destinationTransactionHash: string;
}