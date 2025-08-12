-- CreateTable
CREATE TABLE "public"."submission" (
    "id" SERIAL NOT NULL,
    "aadhar" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "submission_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."otp" (
    "id" SERIAL NOT NULL,
    "otp" INTEGER NOT NULL,

    CONSTRAINT "otp_pkey" PRIMARY KEY ("id")
);
