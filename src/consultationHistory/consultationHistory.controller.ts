import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ConsultationHistoryService } from './consultationHistory.service';
import { CreateConsultationHistoryDto } from './dto/create-consultationHistory.dto';

@Controller('consultation-history')
export class ConsultationHistoryController {
    constructor(private readonly consultationHistoryService: ConsultationHistoryService) {}

    @Post()
    create(@Body() createConsultationHistoryDto: CreateConsultationHistoryDto) {
        return this.consultationHistoryService.create(createConsultationHistoryDto);
    }

    @Get(':patientId')
    findByPatientId(@Param('patientId') patientId: string) {
        return this.consultationHistoryService.findByPatientId(patientId);
    }
}
