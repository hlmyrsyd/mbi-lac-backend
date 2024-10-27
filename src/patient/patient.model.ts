import { Prisma } from "@prisma/client";

export class Patient implements Prisma.PatientCreateInput {
    id: string;
    name: string;
    gender: string;
    dob: string | Date;
    age: number;
    status: string;
    createdAt?: string | Date;
    updatedAt?: string | Date;
}