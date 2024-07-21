import { Test, TestingModule } from "@nestjs/testing";
import { INestApplication } from "@nestjs/common";
import * as request from "supertest";
import { PrismaModule } from "../src/prisma/prisma.module";
import { GroupModule } from "../src/group/group.module";

const dateGroupMock = [
  {
    id: 1,
    title: "History",
  },
  {
    id: 2,
    title: "Food",
  },
  {
    id: 3,
    title: "Pets",
  },
  {
    id: 4,
    title: "Health",
  },
  {
    id: 5,
    title: "Fashion",
  },
  {
    id: 6,
    title: "Exercise",
  },
  {
    id: 7,
    title: "Others",
  },
];

describe("GroupController (e2e)", () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [PrismaModule, GroupModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it("/group (GET)", () => {
    return request(app.getHttpServer()).get("/group").expect(200).expect(dateGroupMock);
  });
});
