import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
  res.json({
    menu: [
      {},
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
