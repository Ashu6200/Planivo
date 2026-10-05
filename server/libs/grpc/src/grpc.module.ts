import { Module } from '@nestjs/common';
import { GrpcService } from './grpc.service.js';

@Module({
  providers: [GrpcService],
  exports: [GrpcService],
})
export class GrpcModule {}
