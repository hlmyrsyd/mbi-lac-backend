import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ConsultationDataService } from './consultationData.service';
import { CreateConsultationDataDto } from './dto/create-consultationData.dto';

@Controller('consultation-data')
export class ConsultationDataController {
    constructor(private readonly consultationDataService: ConsultationDataService) {}

    @Post()
    create(@Body() createConsultationDataDto: CreateConsultationDataDto) {
        return this.consultationDataService.create(createConsultationDataDto);
    }

    @Get(':consultationId')
    findByConsultationId(@Param('consultationId') consultationId: string) {
        return this.consultationDataService.findByConsultationId(consultationId);
    }
}
