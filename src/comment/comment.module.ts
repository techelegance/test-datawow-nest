import { Module } from "@nestjs/common";
import { CommentService } from "./comment.service";
import { CommentController } from "./comment.controller";
import { PrismaModule } from "../prisma/prisma.module";
import { AuthModule } from "../auth/auth.module";

@Module({
  exports: [CommentService],
  imports: [PrismaModule, AuthModule],
  controllers: [CommentController],
  providers: [CommentService],
})
export class CommentModule {}
