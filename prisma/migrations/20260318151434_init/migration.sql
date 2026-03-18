-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "full_name" VARCHAR(30) NOT NULL,
    "email" VARCHAR(30) NOT NULL,
    "user_name" VARCHAR(30) NOT NULL,
    "password_hash" VARCHAR(100) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Event" (
    "id" SERIAL NOT NULL,
    "source" VARCHAR(30) NOT NULL,
    "name" VARCHAR(30) NOT NULL,
    "url" VARCHAR(30) NOT NULL,
    "categories" TEXT[],
    "venueName" TEXT[],
    "location" geometry NOT NULL,
    "venuePostalCode" TEXT NOT NULL,
    "venueCountry" TEXT NOT NULL,
    "venueStateName" TEXT NOT NULL,
    "venueStateCode" TEXT NOT NULL,
    "venueCityName" TEXT NOT NULL,
    "venueAddressLine1" TEXT NOT NULL,
    "venueAddressLine2" TEXT NOT NULL,

    CONSTRAINT "Event_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_full_name_key" ON "User"("full_name");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
