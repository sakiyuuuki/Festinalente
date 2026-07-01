import { revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const secret = getSecret(request);

  if (
    !process.env.MICROCMS_WEBHOOK_SECRET ||
    secret !== process.env.MICROCMS_WEBHOOK_SECRET
  ) {
    return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
  }

  revalidateTag("articles");
  revalidateTag("categories");

  return NextResponse.json({ revalidated: true });
}

function getSecret(request: NextRequest) {
  const authHeader = request.headers.get("authorization");

  if (authHeader?.startsWith("Bearer ")) {
    return authHeader.slice("Bearer ".length);
  }

  return (
    request.headers.get("x-microcms-webhook-secret") ??
    request.headers.get("x-webhook-secret") ??
    request.nextUrl.searchParams.get("secret")
  );
}
