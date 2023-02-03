-- CreateTable
CREATE TABLE "pedals" (
    "id" SERIAL NOT NULL,
    "model" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "value" DECIMAL NOT NULL,

    CONSTRAINT "pedals_pk" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sales" (
    "id" SERIAL NOT NULL,
    "pedalId" INTEGER NOT NULL,
    "sale_date" DATE NOT NULL DEFAULT '2023-01-26'::date,
    "customer" TEXT NOT NULL,

    CONSTRAINT "sales_pk" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "stock" (
    "id" SERIAL NOT NULL,
    "pedalId" INTEGER NOT NULL,
    "quantity" DECIMAL NOT NULL,

    CONSTRAINT "stock_pk" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "sales" ADD CONSTRAINT "sales_fk0" FOREIGN KEY ("pedalId") REFERENCES "pedals"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "stock" ADD CONSTRAINT "stock_fk0" FOREIGN KEY ("pedalId") REFERENCES "pedals"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
