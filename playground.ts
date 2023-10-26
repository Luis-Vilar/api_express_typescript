import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.create({
    data : {
      email : 'email@dominio.com'
    }
  })
    console.log(user)
  //   const post = await prisma.post.create({
  //     data: {
  //       title: "Primer post",
  //       content: "Contenido del primer post",
  //       authorId: 1,
  //       published: true,
  //     },
  //   });
  //   const post_luis = await prisma.post.findMany({
  //     where: {
  //       authorId: 1,
  //     },
  //   });
  //   console.log(post_luis);
  // const users_posts = await prisma.user.findMany({
  //   include: {
  //     posts: true,
  //   },
  // });
  // users_posts.forEach((user) => {
  //   console.log(`User: ${user.name}`);
  //   console.log(`Posts: ${user.posts.length}`);
  //   user.posts.forEach((post) => {
  //     console.log(
  //       `Title: ${post.title} - Content: ${post.content} - Published: ${post.published}`
  //     );
  //   });
  // });

  // const post_publicados = await prisma.post.findMany({
  //   where: {
  //     published: true,
  //   },
  // });
  // const post_no_publicados = await prisma.post.findMany({
  //   where: {
  //     published: false,
  //   },
  // });

  // console.log("Posts publicados");
  // post_publicados.forEach((post) => {
  //   console.log(
  //     `Id : ${post.id} - Titulo : ${post.title} - Contenido ${post.content}`
  //   );
  // });

  // console.log("Posts no publicados");
  // post_no_publicados.forEach((post) => {
  //   console.log(
  //     `Id : ${post.id} - Titulo : ${post.title} - Contenido ${post.content}`
  //   );
  // });
}


main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
