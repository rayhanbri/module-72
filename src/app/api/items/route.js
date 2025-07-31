export async function GET() {
    // bowser api/items marle eita dhekacce 
  const data = {
    message:"api is succesfull",
    error:false,
    status:200
  } 
  return Response.json({ data })
}