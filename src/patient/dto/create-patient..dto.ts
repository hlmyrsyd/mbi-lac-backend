// src/patient/dto/create-patient.dto.ts

import { IsString, IsNumber, IsNotEmpty, IsOptional } from 'class-validator';


export class CreatePatientDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    gender: string;

    @IsString()
    @IsNotEmpty()
    dob: string;

    @IsNumber()
    age: number;

    @IsString()
    status: string;

    @IsOptional()
    @IsString()
    guardianName?: string;

    @IsOptional()
    @IsString()
    guardianGender?: string;

    @IsOptional()
    @IsNumber()
    guardianAge?: number;

    @IsOptional()
    @IsString()
    guardianStatus?: string;
}
