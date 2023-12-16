import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { PrismaClient } from "@prisma/client";

dotenv.config();
const prisma = new PrismaClient();

const app: Express = express();
const port = process.env.PORT || 3000;

app.get("/menus", async (req: Request, res: Response) => {
  try {
    const menus = await prisma.menu.findMany();
    res.json(menus);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "An error occurred while retrieving menus." });
  }
});

app.get("/", (req: Request, res: Response) => {
  res.json({
    menu: [
      {
        id: 1,
        name: "Pizza",
        price: 10.99,
        description: "Tasty pizza with tomato sauce and cheese",
        ingredients: ["Dough", "Tomato Sauce", "Cheese"],
      },
      {
        id: 2,
        name: "Burger",
        price: 8.99,
        description: "Juicy burger with lettuce, tomato, and cheese",
        ingredients: ["Bun", "Beef Patty", "Lettuce", "Tomato", "Cheese"],
      },
      {
        id: 3,
        name: "Pasta",
        price: 9.99,
        description: "Tasty pasta with tomato sauce and parmesan cheese",
        ingredients: ["Pasta", "Tomato Sauce", "Parmesan Cheese"],
      },
    ],
  });
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
