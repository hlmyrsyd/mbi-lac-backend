import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsArray, IsDateString } from 'class-validator';

export class CreateConsultationDataDto {
    @IsString()
    consultationId: string;

    @ApiProperty({ description: 'The date of the consultation data entry', example: '2024-11-08T00:00:00Z' })
    @IsDateString()
    date: string;

    @ApiProperty({ description: 'Activity data', example: ['activity1', 'activity2'] })
    @IsArray()
    @IsString({ each: true })
    activity: string[];

    @ApiProperty({ description: 'Food and beverage intake data', example: ['water', 'juice'] })
    @IsArray()
    @IsString({ each: true })
    fnbIntake: string[];

    @ApiProperty({ description: 'Last medication information', example: ['med1', 'med2'] })
    @IsArray()
    @IsString({ each: true })
    lastMed: string[];

    @ApiProperty({ description: 'Opinions or observations', example: ['opinion1', 'opinion2'] })
    @IsArray()
    @IsString({ each: true })
    opinion: string[];

    @ApiProperty({ description: 'Anxiety levels or notes', example: ['anxiety1', 'anxiety2'] })
    @IsArray()
    @IsString({ each: true })
    anxiety: string[];

    @ApiProperty({ description: 'Pain levels or notes', example: ['pain1', 'pain2'] })
    @IsArray()
    @IsString({ each: true })
    pain: string[];
}
