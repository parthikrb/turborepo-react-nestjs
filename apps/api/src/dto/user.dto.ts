import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEmail, IsOptional, MinLength } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    description: 'The name of the user',
    example: 'John Doe',
  })
  @IsString()
  @MinLength(2)
  name!: string;

  @ApiProperty({
    description: 'The email of the user',
    example: 'john@example.com',
  })
  @IsEmail()
  email!: string;

  @ApiProperty({
    description: 'Optional bio of the user',
    example: 'Software engineer passionate about TypeScript',
    required: false,
  })
  @IsString()
  @IsOptional()
  bio?: string;
}

export class UserResponseDto {
  @ApiProperty()
  id!: string;

  @ApiProperty()
  name!: string;

  @ApiProperty()
  email!: string;

  @ApiProperty({ required: false })
  bio?: string;

  @ApiProperty()
  createdAt!: Date;
}
