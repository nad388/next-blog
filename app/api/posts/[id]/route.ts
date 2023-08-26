// import { redirect } from "next/navigation";
import { cookies, headers } from "next/headers";
import { NextResponse } from "next/server";

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;

  const headerList = headers();
  const type = headerList.get("Content-Type");

  const cookiesList = cookies();
  const coo1 = cookiesList.get("Cookie_1")?.value;

  // logic delete post
  // redirect("/blog"); // Либо редирект, либо что-то возвращаем: return NextResponse.json({ id });

  return NextResponse.json({ id, type, coo1 });
}
