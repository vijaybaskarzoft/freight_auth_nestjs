import { Module } from '@nestjs/common';
import { ShipmentReqApiController } from './controllers/shipmentReqApi.controller';
//import { AppService } from './app.service';

@Module({
  //imports: [],
  controllers: [ShipmentReqApiController]
  //providers: [AppService],
})
export class ShipmentReqApiModule {}

