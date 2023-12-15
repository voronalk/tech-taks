-- CreateTable
CREATE TABLE "menus" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255),
    "price" DECIMAL(10,2),
    "description" TEXT,

    CONSTRAINT "menus_pkey" PRIMARY KEY ("id")
);
