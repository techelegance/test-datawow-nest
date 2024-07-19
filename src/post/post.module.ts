import { Module } from '@nestjs/common';
import { PostService } from './post.service';
import { PostController } from './post.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { UserModule } from 'src/user/user.module';

@Module({
  exports: [PostService],
  imports: [PrismaModule, UserModule],
  providers: [PostService],
  controllers: [PostController]
})
export class PostModule {}
