import { Module } from "@nestjs/common";
import { OrderModule } from "./api/order/order.module";
import { UserModule } from "./api/user/user.module";
import { ConfigModule } from "@nestjs/config";

@Module({
  imports: [
    OrderModule,
    UserModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
})
export class AppModule {}
