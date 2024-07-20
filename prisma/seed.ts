import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.upsert({
    where: {
      id: 1,
    },
    update: {},
    create: {
      name: "Prisma Adds",
      email: "test@gmail.com",
    },
  });

  const group = await prisma.group.upsert({
    where: {
      id: 1,
    },
    update: {},
    create: {
      id: 1,
      title: "History",
    },
  });

  const group2 = await prisma.group.upsert({
    where: {
      id: 2,
    },
    update: {},
    create: {
      id: 2,
      title: "Food",
    },
  });

  const group3 = await prisma.group.upsert({
    where: {
      id: 3,
    },
    update: {},
    create: {
      id: 3,
      title: "Pets",
    },
  });

  const group4 = await prisma.group.upsert({
    where: {
      id: 4,
    },
    update: {},
    create: {
      id: 4,
      title: "Health",
    },
  });

  const group5 = await prisma.group.upsert({
    where: {
      id: 5,
    },
    update: {},
    create: {
      id: 5,
      title: "Fashion",
    },
  });

  const group6 = await prisma.group.upsert({
    where: {
      id: 6,
    },
    update: {},
    create: {
      id: 6,
      title: "Exercise",
    },
  });

  const group7 = await prisma.group.upsert({
    where: {
      id: 7,
    },
    update: {},
    create: {
      id: 7,
      title: "Others",
    },
  });

  const post = await prisma.post.upsert({
    where: {
      id: 1,
    },
    update: {},
    create: {
      title: "The Big Short War",
      content:
        "Tall, athletic, handsome with cerulean eyes, he was the kind of hyper-ambitious kid other kids loved to hate and just the type to make a big wager with no margin for error. But on the night before the S.A.T., his father took pity on him and canceled the bet. “I would’ve lost it,” Ackman concedes. He got a 780 on the verbal and a 750 on the math. “One wrong on the verbal, three wrong on the math,” he muses. “I’m still convinced some of the questions were wrong.”",
      authorId: 1,
      groupId: 1,
      published: true,
    },
  });

  const comment = await prisma.comment.upsert({
    where: {
      id: 1,
    },
    update: {},
    create: {
      id: 1,
      message: "Test comment",
      postId: 1,
      userId: 1,
    },
  });

  console.debug(
    user,
    group,
    group2,
    group3,
    group4,
    group5,
    group6,
    group7,
    post,
    comment
  );
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });
