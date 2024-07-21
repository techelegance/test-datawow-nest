import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Patch,
  Delete,
  UseGuards,
} from "@nestjs/common";
import { PostService } from "./post.service";
// import { UserService } from "src/user/user.service";
import { Post as PostModel, User as UserModel } from "@prisma/client";
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from "@nestjs/swagger";
import { AuthGuard } from "../auth/auth.guard";
import { CreatePostDto } from "./dto/create-post.dto";
import { UpdatePostDto } from "./dto/update-group.dto";
import { CommentService } from "../comment/comment.service";

@ApiTags("Post")
@Controller("post")
export class PostController {
  constructor(
    private readonly commentService: CommentService,
    private readonly postService: PostService
  ) {}

  @Get(":id")
  async getPostById(@Param("id") id: string): Promise<PostModel> {
    return this.postService.post({ id: Number(id) });
  }

  @Get()
  async getPublishedPosts() {
    return this.postService.posts({
      where: { published: true },
    });
  }

  @Get("author/:id")
  async getPublishedPostsByUser(@Param("id") id: string) {
    return this.postService.posts({
      where: { published: true, author: { id: Number(id) } },
    });
  }

  @UseGuards(AuthGuard)
  @Post()
  async createDraft(
    @Body()
    postData: CreatePostDto
  ): Promise<PostModel> {
    const { title, content, authorId, groupId } = postData;
    return this.postService.createPost({
      title,
      content,
      author: {
        connect: { id: Number(authorId) },
      },
      group: {
        connect: { id: Number(groupId) },
      },
    });
  }

  @UseGuards(AuthGuard)
  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body()
    postData: UpdatePostDto
  ) {
    return this.postService.update({
      where: { id: Number(id) },
      data: postData,
    });
  }

  @UseGuards(AuthGuard)
  @Delete(":id")
  async deletePost(@Param("id") id: string): Promise<any> {
    await this.commentService.deleteComments({ postId: Number(id) });
    return this.postService.deletePost({ id: Number(id) });
  }
}
