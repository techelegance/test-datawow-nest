import { Injectable } from "@nestjs/common";
import { Comment, Prisma } from "@prisma/client";
import { PrismaService } from "../prisma/prisma.service";

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

  async deleteComments(where: any): Promise<any> {
    return this.prisma.comment.deleteMany({
      where,
    });
  }
}
