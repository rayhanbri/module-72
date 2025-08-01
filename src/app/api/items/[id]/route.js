import { dbConnect } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

export async function GET(req,{params}) {
    // give your database name to the function 
   
    // const params = await req.params;

    // console.log('hiiii',req)

    const p = await params.id;
    // console.log( 'heelooo',p)
    const singleData= await dbConnect('test_data').findOne({_id : new ObjectId(p)});
    return Response.json({singleData})
}

export async function DELETE(req, params) {

    const p = await params;
    console.log(p)

    return Response.json({ p })
}
export async function PATCH(req, params) {

    const p = await params;
    console.log(p)

    return Response.json({ p })
}