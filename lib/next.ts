import { NextResponse } from "next/server";

export const NextErrorResponse = (status, body) => {
    return new NextResponse(JSON.stringify(body), {
        status,
        headers: {
            'Content-Type': 'application/json',
        },
    });
}
