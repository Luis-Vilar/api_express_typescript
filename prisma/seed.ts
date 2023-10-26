import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient()

const userData: Prisma.UserCreateInput[] = [
  {
    name: 'Jose',
    email: 'jose@prisma.io',
    posts: {
      create: [
        {
          title: 'Primer post',
          content : 'Contenido del primer post',
          published: true,
        },
      ],
    },
  },
  {
    name: 'Federico',
    email: 'fede@prisma.io',
    posts: {
      create: [
        {
          title: 'Hello word',
          content: 'Contenido del primer post',
          published: false,
        },
      ],
    },
  },
  {
    name: 'Maria',
    email: 'maria@prisma.io',
    posts: {
      create: [
        {
            title : 'Primer post',
            content : 'Contenido del primer post',
            published: true,
        
        },{
            title : 'Segundo post sin publicar',
            content : 'Contenido del segundo post',
            published: false,
        },
        {
            title : 'Tercer post sin publicar',
            content : 'Contenido del tercer post',
            published : false
        }
      ],
    },
  },
]

async function main() {
  console.log(`Start seeding ...`)
  for (const u of userData) {
    const user = await prisma.user.create({
      data: u,
    })
    console.log(`Created user with id: ${user.id}`)
  }
  console.log(`Seeding finished.`)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })