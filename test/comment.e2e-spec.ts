import { Test, TestingModule } from "@nestjs/testing";
import { INestApplication } from "@nestjs/common";
import * as request from "supertest";
import { PrismaModule } from "../src/prisma/prisma.module";
import { CommentModule } from "../src/comment/comment.module";

describe("CommentController (e2e)", () => {
  let app: INestApplication;
  let postId = 1;
  let userId = 1;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [PrismaModule, CommentModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  describe("/comment (POST)", () => {
    it("create not jwt", async () => {
      return request(app.getHttpServer()).post("/comment").expect(401).send({
        postId,
        userId,
        message: "test comment",
      });
    });

    it("create auth", async () => {
      const login = await request(app.getHttpServer())
        .post("/auth/login")
        .send({ email: "test@gmail.com" });
      const token = login.body.access_token;

      return request(app.getHttpServer())
        .post("/comment")
        .set("Authorization", `Bearer ${token}`)
        .expect(201)
        .send({
          postId,
          userId,
          message: "test comment",
        });
     
    });
  });
});
