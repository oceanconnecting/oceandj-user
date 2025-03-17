import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { url } = await req.json();

    // Validate the URL
    if (!url) {
      return NextResponse.json({ error: "URL is required" }, { status: 400 });
    }

    // Replace with your actual IndexNow key
    const INDEXNOW_KEY = "961479793a7b4232a5fa3ec21aca7ddf";

    // Send the request to IndexNow
    const response = await fetch("https://www.bing.com/indexnow", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        host: "djstage.ma", // Replace with your website's host
        key: INDEXNOW_KEY,
        keyLocation: `https://djstage.ma/${INDEXNOW_KEY}.txt`, // Ensure this file exists
        urlList: [url],
      }),
    });

    // Handle the response
    if (!response.ok) {
      throw new Error("Failed to submit URL to IndexNow");
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("IndexNow submission error:", error);
    return NextResponse.json(
      { error: "Failed to submit URL to IndexNow" },
      { status: 500 }
    );
  }
}