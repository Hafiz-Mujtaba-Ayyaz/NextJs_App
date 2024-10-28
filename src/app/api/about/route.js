import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ message: "We make the best movies/films" });
}