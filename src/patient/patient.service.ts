import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Patient } from './patient.model';
import { Prisma } from '@prisma/client';

@Injectable()
export class PatientService {
    constructor(private readonly prisma: PrismaService) {}

    async createPatient(data: Prisma.PatientCreateInput): Promise<Patient> {
        return this.prisma.patient.create({ data });
    }

    async getPatients(): Promise<Patient[]> {
        return this.prisma.patient.findMany();
    }

    async getPatientById(id: string): Promise<Patient | null> {
        return this.prisma.patient.findUnique({ where: { id } });
    }

    async updatePatient(id: string, data: Prisma.PatientUpdateInput): Promise<Patient> {
        return this.prisma.patient.update({
        where: { id },
        data,
        });
    }

    async deletePatient(id: string): Promise<Patient> {
        return this.prisma.patient.delete({ where: { id } });
    }
}
