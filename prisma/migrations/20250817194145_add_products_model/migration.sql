-- CreateTable
CREATE TABLE "public"."products" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(50),
    "price" DECIMAL(10,2),

    CONSTRAINT "products_pkey" PRIMARY KEY ("id")
);
