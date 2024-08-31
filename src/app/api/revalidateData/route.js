import { NextResponse } from "next/server";

// export async function POST(request) {
//   const body = await request.json();
//   console.log("Recieved webhook:", body);
//   // Check for secret to confirm this is a valid request
//   if (body.secret !== process.env.SANITY_WEBHOOK_SECRET) {
//     return NextResponse.json({ message: "Invalid token" }, { status: 401 });
//   }

//   try {
//     if (body._type === "homepage") {
//       console.log("Revalidating homepage tag");
//       revalidateTag("homepage");
//       console.log("Revalidation completed");
//       return NextResponse.json({
//         revalidated: true,
//         now: Date.now(),
//         tag: "homepage",
//       });
//     }

//     return NextResponse.json({
//       revalidated: true,
//       now: Date.now(),
//       tag: "homepage",
//     });
//   } catch (err) {
//     // If there was an error, Next.js will continue
//     // to show the last successfully generated page
//     console.error("Error during revalidation:", err);
//     return NextResponse.json(
//       { message: "Error revalidating" },
//       { status: 500 }
//     );
//   }
// }
import { isValidSignature, SIGNATURE_HEADER_NAME } from "@sanity/webhook";
import { revalidateTag, revalidatePath } from "next/cache";

const secret = process.env.SANITY_WEBHOOK_SECRET;

export async function POST(request) {
  const body = await request.json();
  console.log("Received webhook:", body);

  try {
    switch (body._type) {
      case "homepage":
        console.log("Revalidating homepage tag");
        revalidateTag("homepage");
        return NextResponse.json({
          revalidated: true,
          now: Date.now(),
          type: "homepage",
        });

      case "dynamicPage":
        if (!body.slug) {
          throw new Error("Slug is required for dynamicPage revalidation");
        }
        console.log(`Revalidating dynamic page: ${body.slug}`);
        revalidateTag(body.slug);
        return NextResponse.json({
          revalidated: true,
          now: Date.now(),
          type: "dynamicPage",
          slug: body.slug,
        });

      case "navigation":
        console.log("Revalidating navigation tag");
        revalidateTag("navigation");
        return NextResponse.json({
          revalidated: true,
          now: Date.now(),
          type: "navigation",
        });

      default:
        console.log(`Unhandled document type: ${body._type}`);
        return NextResponse.json({
          revalidated: false,
          now: Date.now(),
          type: body._type,
        });
    }
  } catch (err) {
    console.error("Error during revalidation:", err);
    return NextResponse.json(
      { message: "Error revalidating", error: err.message },
      { status: 500 }
    );
  }
}
