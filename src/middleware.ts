import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
    const res = NextResponse.next();

    const cookie = req.cookies.get("sessionId")

    if (!cookie) {
        res.cookies.set("sessionId", Date.now().toString() + crypto.randomUUID(), {
            maxAge: 60 * 60 * 24 * 365,
        })
    }

    return res
}