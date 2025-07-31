import { dbConnect } from "@/lib/dbConnect";

export async function GET() {
    // bowser api/items marle eita dhekacce 

    // give your database name to the function 
    const data = await dbConnect('test_data').find().toArray();
    return Response.json({ data })
}

export async function POST(req) {
    // bowser api/items marle eita dhekacce 
     
    const item = {
    name: "Running Shoes",
    price: 59.99,
    category: "Sports",
    inStock: true,
    tags: ["run", "fitness", "shoes"],
    createdAt: new Date()
  };
    const postedData =await req.json();
    const result=await dbConnect('test_data').insertOne(item)
    return Response.json({ postedData })
}