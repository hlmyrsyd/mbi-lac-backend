import { APP_PIPE } from '@nestjs/core';
import { PatientModule } from './patient/patient.module';
import { Module, ValidationPipe } from '@nestjs/common';

@Module({
  imports: [PatientModule],
  controllers: [],
  providers: [
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
      useFactory: () => new ValidationPipe({ transform: true }),
    },
],
})
export class AppModule {}
