-- CreateTable
CREATE TABLE "Emails" (
    "id" INTEGER NOT NULL,
    "email" VARCHAR(50) NOT NULL,

    CONSTRAINT "Emails_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Emails_email_key" ON "Emails"("email");
