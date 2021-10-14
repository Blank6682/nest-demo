import { prop } from '@typegoose/typegoose';
import { IsString } from 'class-validator';

export class Post {
  @IsString()
  @prop({ required: true })
  title: string;

  @IsString()
  @prop()
  context: string;
}
