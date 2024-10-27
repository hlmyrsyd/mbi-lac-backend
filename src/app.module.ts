import { PatientModule } from './patient/patient.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [PatientModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
