import { NextResponse } from "next/server";

import { PrismaClient } from "../../../generated/prisma";

const prisma = new PrismaClient();
export const POST = async (req) => {
  try {
    const body = await req.json();
    const submision = await prisma.submission.create({
      data: {
        name: body.name,
        aadhar: body.aadhar,
        checked: body.checked,
      },
    });
    console.log(submision);

    return NextResponse.json(
      {
        message: "Hello from Next.js API!",
      },
      { status: 200 }
    );
  } catch (err) {
    console.log(err);

    return NextResponse.json(
      {
        message: err,
      },
      { status: 400 }
    );
  }
};
