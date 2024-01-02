import { NextResponse } from "next/server";


import { connectToDB } from "../../../lib/mongoose";
import User from "@/lib/model/user.model";
// import { hash } from "bcrypt";
import { revalidateTag } from 'next/cache'

export async function GET (request: Request) {
  try {
    connectToDB();


    const user = await User.find()
    revalidateTag('user')
    return new Response(JSON.stringify(user), { status: 201 });
  } catch (e) {
    console.log({ e });
    return new Response("Failed to get user", { status: 500 });
  }

}


export async function POST(request: Request) {
  try {
    connectToDB();
    const { firstname, lastname, email, password } = await request.json();
    // validate email and password
    // console.log({ firstname, lastname, email, password });

    // const hashedPassword = await hash(password, 10);

    const newUser = new User({ firstname, lastname, email, password });

    await newUser.save();
    revalidateTag('user')
    return new Response(JSON.stringify(newUser), { status: 201 });
  } catch (e) {
    console.log({ e });
    return new Response("Failed to create a new user", { status: 500 });
  }

}
