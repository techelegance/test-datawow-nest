import { Test, TestingModule } from "@nestjs/testing";
import { INestApplication } from "@nestjs/common";
import * as request from "supertest";
import { PrismaModule } from "../src/prisma/prisma.module";
import { AuthModule } from "../src/auth/auth.module";

describe("AuthController (e2e)", () => {
  let app: INestApplication;
  let token = "";

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [PrismaModule, AuthModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it("/auth/login (Post)", async () => {
    const login = await request(app.getHttpServer())
      .post("/auth/login")
      .send({ email: "test@gmail.com" });
    token = login.body.access_token;
  });

  it("/auth/profile (Post)", async () => {
    const login = await request(app.getHttpServer())
      .post("/auth/profile")
      .set("Authorization", `Bearer ${token}`);
  });
});
