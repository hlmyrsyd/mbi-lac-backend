import { ConsultationDataModule } from './consultationData/consultaationData.module';
import { ConsultationHistoryModule } from './consultationHistory/consultationHistory.module';
import { APP_PIPE } from '@nestjs/core';
import { PatientModule } from './patient/patient.module';
import { Module, ValidationPipe } from '@nestjs/common';
import { TestController } from './test/test.controller';

@Module({
  imports: [
    PatientModule,
    ConsultationHistoryModule,
    ConsultationDataModule
  ],
  controllers: [TestController],
  providers: [
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
      useFactory: () => new ValidationPipe({ transform: true }),
    },
],
})
export class AppModule {}
