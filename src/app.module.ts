import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { PostModule } from './post/post.module';
import { UserService } from "./user/user.service";
import { GroupModule } from './group/group.module';
import { CommentModule } from './comment/comment.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [PrismaModule, UserModule, PostModule, GroupModule, CommentModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
