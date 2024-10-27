// src/patient/dto/create-patient.dto.ts

import { IsString, IsDate, IsNumber, IsNotEmpty } from 'class-validator';
import { Type } from 'class-transformer';

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
}