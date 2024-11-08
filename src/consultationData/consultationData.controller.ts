import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ConsultationDataService } from './consultationData.service';
import { CreateConsultationDataDto } from './dto/create-consultationData.dto';

@Controller('consultation-data')
@ApiTags('consultation-data')
export class ConsultationDataController {
    constructor(private readonly consultationDataService: ConsultationDataService) {}

    @Post()
    @ApiOperation({ summary: 'Create a new consultation data entry' })
    @ApiResponse({ status: 201, description: 'Consultation data created successfully.' })
    create(@Body() createConsultationDataDto: CreateConsultationDataDto) {
        return this.consultationDataService.create(createConsultationDataDto);
    }

    @Get(':consultationId')
    @ApiOperation({ summary: 'Get consultation data by consultation ID' })
    @ApiParam({ name: 'patientId', description: 'The ID of the consultation' })
    findByConsultationId(@Param('consultationId') consultationId: string) {
        return this.consultationDataService.findByConsultationId(consultationId);
    }
}
