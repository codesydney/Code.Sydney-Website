import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

export async function POST(request) {
  const body = await request.json();
  console.log("Recieved webhook:", body);
  // Check for secret to confirm this is a valid request
  if (body.secret !== process.env.SANITY_WEBHOOK_SECRET) {
    return NextResponse.json({ message: "Invalid token" }, { status: 401 });
  }

  try {
    if (body._type === "homepage") {
      console.log("Revalidating homepage tag");
      revalidateTag("homepage");
      console.log("Revalidation completed");
      return NextResponse.json({
        revalidated: true,
        now: Date.now(),
        tag: "homepage",
      });
    }

    return NextResponse.json({
      revalidated: true,
      now: Date.now(),
      tag: "homepage",
    });
  } catch (err) {
    // If there was an error, Next.js will continue
    // to show the last successfully generated page
    console.error("Error during revalidation:", err);
    return NextResponse.json(
      { message: "Error revalidating" },
      { status: 500 }
    );
  }
}
