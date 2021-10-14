import {
  Controller,
  Get,
  Post,
  Put,
  Param,
  Body,
  Delete,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreatePostsDto } from './model/createPost.dto';
import { ResultModel } from './model/common.model';
import { PostsService } from './posts.service';

@Controller('posts')
@ApiTags('资源CRUD')
export class PostsController {
  constructor(private readonly postService: PostsService) {}

  @Get()
  @ApiOperation({ summary: '资源列表' })
  async findAll(): Promise<ResultModel> {
    const result = new ResultModel();
    result.data = await this.postService.findAll();
    result.success = true;
    return result;
  }

  @Post()
  @ApiOperation({ summary: '创建资源' })
  async create(@Body() data: CreatePostsDto): Promise<ResultModel> {
    const result = new ResultModel();
    result.data = await this.postService.create(data);
    result.success = true;
    return result;
  }

  @Get(':id')
  @ApiOperation({ summary: '资源详情' })
  async findOne(@Param('id') id: string): Promise<ResultModel> {
    const result = new ResultModel();
    result.data = await this.postService.getInfo(id);
    result.success = true;
    return result;
  }

  @Put(':id')
  @ApiOperation({ summary: '更新资源' })
  async update(
    @Param('id') id: string,
    @Body() data: CreatePostsDto,
  ): Promise<ResultModel> {
    const result = new ResultModel();
    result.data = await this.postService.updateInfo(id, data);
    result.success = true;
    result.message = '操作成功';
    return result;
  }

  @Delete(':id')
  @ApiOperation({ summary: '删除资源' })
  async remove(@Param('id') id: string): Promise<ResultModel> {
    const result = new ResultModel();
    result.data = await this.postService.remove(id);
    result.success = true;
    result.message = '删除成功';
    return result;
  }
}
