import { callTiDBService } from "@/lib/tidb";
import { NextResponse } from "next/server";


export async function GET(
  request: Request,
  { params}: { params: { endpoint: string[] }},

) {
  const endpoint = params.endpoint.join("/")
  const {searchParams} = new URL(request.url)
  const res = await callTiDBService('get', endpoint, searchParams.toString())
  return NextResponse.json(res)
}
