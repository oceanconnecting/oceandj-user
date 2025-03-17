import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { url } = await req.json();
    if (!url) return NextResponse.json({ error: "URL is required" }, { status: 400 });

    const INDEXNOW_KEY = "961479793a7b4232a5fa3ec21aca7ddf"; // Replace with your key

    const response = await fetch("https://www.bing.com/indexnow", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        host: "djstage.ma",
        key: INDEXNOW_KEY,
        keyLocation: "https://djstage.ma/indexnow.txt",
        urlList: [url],
      }),
    });

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: "Failed to submit URL" }, { status: 500 });
  }
}
