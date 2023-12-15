import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.menus.create({
    data: {
      name: "Pizza",
      price: 10.99,
      description: "Tasty pizza with tomato sauce and cheese",
    },
  });
  const allMenus = await prisma.menus.findMany();
  console.log(allMenus);
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
