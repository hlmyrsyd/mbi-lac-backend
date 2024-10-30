import { IsString, IsDateString, IsArray } from 'class-validator';

export class CreateConsultationHistoryDto {
    @IsString()
    patientId: string;

    @IsDateString()
    date: string;
}