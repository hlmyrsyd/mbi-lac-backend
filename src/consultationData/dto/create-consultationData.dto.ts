import { IsString, IsArray, IsDateString } from 'class-validator';

export class CreateConsultationDataDto {
    @IsString()
    consultationId: string;

    @IsDateString()
    date: string;

    @IsArray()
    @IsString({ each: true })
    activity: string[];

    @IsArray()
    @IsString({ each: true })
    fnbIntake: string[];

    @IsArray()
    @IsString({ each: true })
    lastMed: string[];

    @IsArray()
    @IsString({ each: true })
    opinion: string[];

    @IsArray()
    @IsString({ each: true })
    anxiety: string[];

    @IsArray()
    @IsString({ each: true })
    pain: string[];
}
