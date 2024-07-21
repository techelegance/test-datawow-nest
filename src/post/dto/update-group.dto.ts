import { PartialType } from "@nestjs/swagger";
import { CreatePostDto } from "./create-post.dto";
import { ApiProperty } from "@nestjs/swagger";

export class UpdatePostDto extends PartialType(CreatePostDto) {
  @ApiProperty()
  title: string;
  @ApiProperty()
  content: string;
  @ApiProperty()
  groupId: number;
}
