import { draftMode } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const secret = searchParams.get("secret");
  const id = searchParams.get("id");
  const draftKey = searchParams.get("draftKey");

  if (!process.env.DRAFT_SECRET || secret !== process.env.DRAFT_SECRET) {
    return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
  }

  if (!id || !draftKey) {
    return NextResponse.json(
      { message: "id and draftKey are required" },
      { status: 400 }
    );
  }

  (await draftMode()).enable();

  const redirectUrl = new URL(`/articles/${id}`, request.url);
  redirectUrl.searchParams.set("draftKey", draftKey);

  return NextResponse.redirect(redirectUrl);
}
