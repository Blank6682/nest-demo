import { Injectable } from '@nestjs/common';
import { ReturnModelType } from '@typegoose/typegoose';
import { InjectModel } from 'nestjs-typegoose';
import { Post } from './model/post.model';
import { CreatePostsDto } from './model/createPost.dto';

@Injectable()
export class PostsService {
  constructor(
    @InjectModel(Post) private readonly postModel: ReturnModelType<typeof Post>,
  ) {}

  //创建资源
  async create(createPostsDto: CreatePostsDto): Promise<Post> {
    const createdPost = new this.postModel(createPostsDto);
    return await createdPost.save();
  }

  //资源列表
  async findAll(): Promise<Post[] | null> {
    return await this.postModel.find();
  }

  //资源详情
  async getInfo(id: string): Promise<Post> {
    return await this.postModel.findById(id);
  }

  //更新资源
  async updateInfo(id: string, createPostsDto: CreatePostsDto): Promise<Post> {
    return await this.postModel.findByIdAndUpdate(id, createPostsDto);
  }

  //删除资源
  async remove(id: string): Promise<Post> {
    return await this.postModel.findByIdAndDelete(id);
  }
}
