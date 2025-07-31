import { dbConnect } from "@/lib/dbConnect";

export async function GET() {
    // bowser api/items marle eita dhekacce 

    // give your database name to the function 
    const data = await dbConnect('test_data').find().toArray();
    return Response.json({ data })
}

export async function POST(req) {
    // bowser api/items marle eita dhekacce 
    const postedData =await req.json();
    return Response.json({ postedData })
}