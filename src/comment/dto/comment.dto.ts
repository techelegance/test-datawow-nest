import { ApiProperty } from "@nestjs/swagger";

export class CommentDto {
  @ApiProperty()
  message: string;
  @ApiProperty()
  postId: number;
  @ApiProperty()
  userId: number;
}
