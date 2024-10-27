import { Controller, Get, Post, Param, Body, Put, Delete, BadRequestException } from '@nestjs/common';
import { PatientService } from './patient.service';
import { Patient } from './patient.model';
import { Prisma } from '@prisma/client';
import { CreatePatientDto } from './dto/create-patient..dto';

@Controller('patients')
export class PatientController {
    constructor(private readonly patientService: PatientService) {}

    @Post()
    async createPatient(@Body() createPatientDto: CreatePatientDto) {
        try {
            return await this.patientService.createPatient(createPatientDto);
        } catch (error) {
            throw new BadRequestException('Invalid patient data');
        }
    }

    @Get()
    async getPatients(): Promise<Patient[]> {
        return this.patientService.getPatients();
    }

    @Get(':id')
    async getPatientById(@Param('id') id: string): Promise<Patient | null> {
        return this.patientService.getPatientById(id);
    }

    @Put(':id')
    async updatePatient(
        @Param('id') id: string,
        @Body() data: Prisma.PatientUpdateInput
    ): Promise<Patient> {
        return this.patientService.updatePatient(id, data);
    }

    @Delete(':id')
    async deletePatient(@Param('id') id: string): Promise<Patient> {
        return this.patientService.deletePatient(id);
    }
}
