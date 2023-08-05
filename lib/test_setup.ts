import { NextApiRequest, NextApiResponse } from "next";
import { createMocks, RequestMethod, createResponse } from 'node-mocks-http';
type APiResponse = NextApiResponse & ReturnType<typeof createResponse>;
export function mockRequestResponse({method = "POST", query = {}, body={}}: { method?: RequestMethod, query?: any, body?: any })
{
  const {
    req,
    res,
  }: { req: NextApiRequest; res: APiResponse } = createMocks({method});
  req.headers = {
    'Content-Type': 'application/json',
  };
  req.query = query;
  req.body = body;
  return {req, res};
}
