import { Injectable } from "@nestjs/common";
import { Comment, Prisma } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class CommentService {
  constructor(private prisma: PrismaService) {}

  create(data: Prisma.CommentCreateInput): Promise<Comment> {
    return this.prisma.comment.create({
      data
    });
  }

  findAll() {
    return `This action returns all comment`;
  }

  findOne(id: number) {
    return `This action returns a #${id} comment`;
  }

  update(id: number) {
    return `This action updates a #${id} comment`;
  }

  async remove(where: any): Promise<Comment> {
    return this.prisma.comment.delete({
      where,
    });
  }
}
