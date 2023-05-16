import { NextResponse } from "next/server"

export async function GET (req:Request){
    const data = [
        {id:1,title:"Post 1"},
        {id:2,title:"Post 2"},
    ]
    return NextResponse.json({data})
}

export async function POST (req:Request){
    const data = await req.formData();
    const title = data.get("title")
    console.log(title)
    return NextResponse.json([{title}])
}