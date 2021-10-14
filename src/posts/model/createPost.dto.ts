/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreatePostsDto {
  @ApiProperty({ description: '标题', type: String,example:"标题1" })
  @IsNotEmpty({ message: '请填写标题' })
  title: string;

  @ApiProperty({ description: '主体内容', type: String ,example:"内容1"})
  context: string;
}
