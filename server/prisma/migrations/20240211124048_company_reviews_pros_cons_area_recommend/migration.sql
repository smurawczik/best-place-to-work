-- CreateTable
CREATE TABLE "CompanyReviewPros" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "description" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "companyReviewId" TEXT NOT NULL,
    CONSTRAINT "CompanyReviewPros_companyReviewId_fkey" FOREIGN KEY ("companyReviewId") REFERENCES "CompanyReview" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "CompanyReviewCons" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "description" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "companyReviewId" TEXT NOT NULL,
    CONSTRAINT "CompanyReviewCons_companyReviewId_fkey" FOREIGN KEY ("companyReviewId") REFERENCES "CompanyReview" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "CompanyReviewTags" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "companyReviewId" TEXT NOT NULL,
    CONSTRAINT "CompanyReviewTags_companyReviewId_fkey" FOREIGN KEY ("companyReviewId") REFERENCES "CompanyReview" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "CompanyArea" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_CompanyReview" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "rating" REAL NOT NULL,
    "title" TEXT,
    "description" TEXT,
    "recommend" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "companyAreaId" TEXT,
    "companyId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    CONSTRAINT "CompanyReview_companyAreaId_fkey" FOREIGN KEY ("companyAreaId") REFERENCES "CompanyArea" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "CompanyReview_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "CompanyReview_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_CompanyReview" ("companyId", "createdAt", "description", "id", "rating", "title", "updatedAt", "userId") SELECT "companyId", "createdAt", "description", "id", "rating", "title", "updatedAt", "userId" FROM "CompanyReview";
DROP TABLE "CompanyReview";
ALTER TABLE "new_CompanyReview" RENAME TO "CompanyReview";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
