/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';

export class ResultModel {
  @ApiProperty({ description: '返回状态码', type: String })
  code?: string;

  @ApiProperty({ description: '是否成功', type: Boolean })
  success?: boolean;

  @ApiProperty({ description: '返回消息', type: String })
  message?: string;

  @ApiProperty({ description: '返回数据' })
  data: any;
}
