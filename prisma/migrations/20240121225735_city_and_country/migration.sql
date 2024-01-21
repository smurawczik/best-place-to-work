/*
  Warnings:

  - You are about to drop the column `city` on the `Salary` table. All the data in the column will be lost.
  - You are about to drop the column `country` on the `Salary` table. All the data in the column will be lost.
  - Added the required column `cityId` to the `Salary` table without a default value. This is not possible if the table is not empty.
  - Added the required column `countryId` to the `Salary` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "Country" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "City" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "countryId" TEXT NOT NULL,
    CONSTRAINT "City_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "Country" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Salary" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "amount" REAL NOT NULL,
    "currencyId" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "countryId" TEXT NOT NULL,
    "cityId" TEXT NOT NULL,
    "remote" BOOLEAN NOT NULL,
    "userId" TEXT,
    "companyId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Salary_currencyId_fkey" FOREIGN KEY ("currencyId") REFERENCES "Currency" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Salary_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "Country" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Salary_cityId_fkey" FOREIGN KEY ("cityId") REFERENCES "City" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Salary_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Salary_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Salary" ("amount", "category", "companyId", "createdAt", "currencyId", "id", "remote", "updatedAt", "userId") SELECT "amount", "category", "companyId", "createdAt", "currencyId", "id", "remote", "updatedAt", "userId" FROM "Salary";
DROP TABLE "Salary";
ALTER TABLE "new_Salary" RENAME TO "Salary";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
