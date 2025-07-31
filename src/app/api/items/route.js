export async function GET() {
    // bowser api/items marle eita dhekacce 
    const data = {
        message: "api is succesfull",
        error: false,
        status: 200
    }
    return Response.json({ data })
}

export async function POST(req) {
    // bowser api/items marle eita dhekacce 
    const postedData =await req.json();
    return Response.json({ postedData })
}