import { Injectable, UnauthorizedException } from "@nestjs/common";
import { UserService } from "../user/user.service";
import _ from "lodash";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService
  ) {}

  async signIn(email: string): Promise<any> {
    const user = await this.usersService.user(email);

    if (!user) {
      throw new UnauthorizedException();
    }

    const payload = {
      id: user?.id,
      email: user?.email,
      name: user?.name,
    };

    // return payload

    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
