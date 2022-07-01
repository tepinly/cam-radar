import express from "express";
import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();
const app = express();
app.use(express.json());
const port = 3000;

app.post("/cars/create", async (req, res) => {
  const request = req.body;
  const speed = request.speed;
  let car;

  if (speed > 60) {
    car = {
      image: request.image || null,
      plate: request.plate || null,
      violation: {
        create: {
          speed: request.speed,
        },
      },
    };
  } else {
    car = {
      image: request.image || null,
      plate: request.plate || null,
    };
  }

  const createCar = await prisma.car.upsert({
    where: {
      id: request.id,
    },
    update: car,
    create: car
  });
  res.send("Record successfully created.");
});

app.get("/cars/violations", async (req, res) => {
  const getCars = await prisma.violation.findMany();
  res.send(getCars);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
