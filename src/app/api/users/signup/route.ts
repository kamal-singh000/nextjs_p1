import { connect } from "@/dbConfig/db";
import User from "@/modals/userModal";
import { NextRequest, NextResponse } from "next/server";
import { bcryptjs } from "bcryptjs";

connect();

export async function POST(request: NextRequest) {
  try {
    console.log("POST request", request.json());

    // const newUser = new User()
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
