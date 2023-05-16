import { log } from "console";
import { NextResponse } from "next/server";

export async function POST(req:Request) {
    const fd = await req.formData();
    let body = Object.fromEntries(fd);
    log(body)
    return NextResponse.json({body});
}