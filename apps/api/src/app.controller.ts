import { Body, Controller, Get, Post, ValidationPipe } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';
import { CreateUserDto, UserResponseDto } from './dto/user.dto';

@ApiTags('App')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOperation({ summary: 'Get hello message' })
  @ApiResponse({
    status: 200,
    description: 'Returns a hello message',
    type: String,
  })
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('users')
  @ApiOperation({ summary: 'Create a new user' })
  @ApiResponse({
    status: 201,
    description: 'The user has been successfully created.',
    type: UserResponseDto,
  })
  @ApiResponse({
    status: 400,
    description: 'Invalid input data.',
  })
  async createUser(@Body(ValidationPipe) createUserDto: CreateUserDto): Promise<UserResponseDto> {
    // This would typically call a service method
    return {
      id: '123',
      ...createUserDto,
      createdAt: new Date(),
    };
  }
}
