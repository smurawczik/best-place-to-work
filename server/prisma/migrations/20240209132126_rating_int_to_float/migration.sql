/*
  Warnings:

  - You are about to alter the column `rating` on the `CompanyReview` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Float`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_CompanyReview" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "rating" REAL NOT NULL,
    "comment" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "companyId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    CONSTRAINT "CompanyReview_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "CompanyReview_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_CompanyReview" ("comment", "companyId", "createdAt", "id", "rating", "updatedAt", "userId") SELECT "comment", "companyId", "createdAt", "id", "rating", "updatedAt", "userId" FROM "CompanyReview";
DROP TABLE "CompanyReview";
ALTER TABLE "new_CompanyReview" RENAME TO "CompanyReview";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
