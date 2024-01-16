import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://bharathpeethala97:Janu1406@jobski.vg8g9dh.mongodb.net/CUSTOMERS?retryWrites=true&w=majority',
    ),
  ],
  controllers: [],
  providers: [],
})
export class DatabaseModule {}
