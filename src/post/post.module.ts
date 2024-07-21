import { Module } from "@nestjs/common";
import { PostService } from "./post.service";
import { PostController } from "./post.controller";
import { PrismaModule } from "../prisma/prisma.module";
import { UserModule } from "../user/user.module";
import { CommentModule } from "../comment/comment.module";
import { AuthModule } from "../auth/auth.module";

@Module({
  exports: [PostService],
  imports: [PrismaModule, UserModule, CommentModule,AuthModule],
  providers: [PostService],
  controllers: [PostController],
})
export class PostModule {}
