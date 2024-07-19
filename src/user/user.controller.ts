import { Controller, Post, Body } from "@nestjs/common";
import { Post as PostModel, User as UserModel } from "@prisma/client";
import { UserService } from "./user.service";
import { ApiTags } from "@nestjs/swagger";

@Controller("user")
export class UserController {
  constructor(private readonly userService: UserService) {}
}
