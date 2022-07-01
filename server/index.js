import express from "express";
import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();
const app = express();
const port = 3000;

app.post("/cars/create", async (req, res) => {
  const request = req.body;
  const speed = request.speed;
  let car;

  if (speed > 60) {
    car = {
      image: request.image,
      plate: request.plate || null,
      violation: {
        create: {
          speed: request.speed,
        },
      },
    };
  } else {
    car = {
      image: request.image,
      plate: request.plate || null,
    };
  }

  const createCar = await prisma.car.create({ data: car });
  res.send("Record successfully created.");
});

app.get("/cars/violations", async (req, res) => {
  const getCars = await prisma.violation.findMany();
  res.send(getCars);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
