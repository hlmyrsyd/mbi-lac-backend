import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateConsultationDataDto } from './dto/create-consultationData.dto';

@Injectable()
export class ConsultationDataService {
    constructor(private prisma: PrismaService) {}

    async create(data: CreateConsultationDataDto) {
        return this.prisma.consultationData.create({ data });
    }

    async findByConsultationId(consultationId: string) {
        return this.prisma.consultationData.findMany({
        where: { consultationId },
        });
    }
}
