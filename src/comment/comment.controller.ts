import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from "@nestjs/common";
import { CommentService } from "./comment.service";
import { ApiTags } from "@nestjs/swagger";
import { Post as PostModel, User as UserModel } from "@prisma/client";
import { AuthGuard } from "../auth/auth.guard";
import { CommentDto } from "./dto/comment.dto";

@ApiTags("Comment")
@Controller("comment")
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @UseGuards(AuthGuard)
  @Post()
  create(@Body() data: CommentDto) {
    const { message, postId, userId } = data;
    return this.commentService.create({
      message,
      post: {
        connect: { id: Number(postId) },
      },
      user: {
        connect: { id: Number(userId) },
      },
    });
  }
}
