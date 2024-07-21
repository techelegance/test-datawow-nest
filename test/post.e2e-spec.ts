import { Test, TestingModule } from "@nestjs/testing";
import { INestApplication } from "@nestjs/common";
import * as request from "supertest";
import { PrismaModule } from "../src/prisma/prisma.module";
import { PostModule } from "../src/post/post.module";

describe("PostController (e2e)", () => {
  let app: INestApplication;
  let postId = 1;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [PrismaModule, PostModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it("/post (GET)", () => {
    return request(app.getHttpServer()).get("/post").expect(200);
  });

  it("/post/{id} (GET)", async () => {
    return request(app.getHttpServer()).get(`/post/${postId}`).expect(200);
  });

  it("/post/author/{id} (GET)", async () => {
    return request(app.getHttpServer())
      .get(`/post/author/${postId}`)
      .expect(200);
  });

  describe("/post (POST)", () => {
    it("create not jwt", async () => {
      return request(app.getHttpServer()).post("/post").expect(401).send({
        title: "The Big Short War",
        content:
          "Tall, athletic, handsome with cerulean eyes, he was the kind of hyper-ambitious kid other kids loved to hate and just the type to make a big wager with no margin for error. But on the night before the S.A.T., his father took pity on him and canceled the bet. “I would’ve lost it,” Ackman concedes. He got a 780 on the verbal and a 750 on the math. “One wrong on the verbal, three wrong on the math,” he muses. “I’m still convinced some of the questions were wrong.”",
        authorId: 1,
        groupId: 1,
      });
    });

    it("create auth", async () => {
      const login = await request(app.getHttpServer())
        .post("/auth/login")
        .send({ email: "test@gmail.com" });
      const token = login.body.access_token;

      return request(app.getHttpServer())
        .post("/post")
        .set("Authorization", `Bearer ${token}`)
        .expect(201)
        .send({
          title: "The Big Short War",
          content:
            "Tall, athletic, handsome with cerulean eyes, he was the kind of hyper-ambitious kid other kids loved to hate and just the type to make a big wager with no margin for error. But on the night before the S.A.T., his father took pity on him and canceled the bet. “I would’ve lost it,” Ackman concedes. He got a 780 on the verbal and a 750 on the math. “One wrong on the verbal, three wrong on the math,” he muses. “I’m still convinced some of the questions were wrong.”",
          authorId: 1,
          groupId: 1,
        });
    });
  });

  describe("/post/{id} (PATCH)", () => {
    it("update not jwt", async () => {
      return request(app.getHttpServer())
        .patch(`/post/${postId}`)
        .expect(401)
        .send({
          title: "The Big Short War",
          content:
            "Tall, athletic, handsome with cerulean eyes, he was the kind of hyper-ambitious kid other kids loved to hate and just the type to make a big wager with no margin for error. But on the night before the S.A.T., his father took pity on him and canceled the bet. “I would’ve lost it,” Ackman concedes. He got a 780 on the verbal and a 750 on the math. “One wrong on the verbal, three wrong on the math,” he muses. “I’m still convinced some of the questions were wrong.”",
          groupId: 1,
        });
    });

    it("update auth", async () => {
      const login = await request(app.getHttpServer())
        .post("/auth/login")
        .send({ email: "test@gmail.com" });
      const token = login.body.access_token;
      return request(app.getHttpServer())
        .patch(`/post/${postId}`)
        .expect(200)
        .set("Authorization", `Bearer ${token}`)
        .send({
          title: "The Big Short War",
          content:
            "Tall, athletic, handsome with cerulean eyes, he was the kind of hyper-ambitious kid other kids loved to hate and just the type to make a big wager with no margin for error. But on the night before the S.A.T., his father took pity on him and canceled the bet. “I would’ve lost it,” Ackman concedes. He got a 780 on the verbal and a 750 on the math. “One wrong on the verbal, three wrong on the math,” he muses. “I’m still convinced some of the questions were wrong.”",
          groupId: 1,
        });
    });
  });

  // describe("/post/{id} (DELETE)", () => {
  //   it("delete not jwt", async () => {
  //     return request(app.getHttpServer()).delete(`/post/${postId}`).expect(401);
  //   });

  //   it("delete auth", async () => {
  //     const login = await request(app.getHttpServer())
  //       .post("/auth/login")
  //       .send({ email: "test@gmail.com" });
  //     const token = login.body.access_token;
  //     return request(app.getHttpServer())
  //       .delete(`/post/${postId}`)
  //       .expect(200)
  //       .set("Authorization", `Bearer ${token}`);
  //   });
  // });
});
