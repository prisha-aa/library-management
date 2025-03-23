// import ImageKit from "imagekit";
// import config from "@/lib/config";
// import { NextResponse } from "next/server";

// const {
//   env: {
//     imagekit: { publicKey, privateKey, urlEndpoint },
//   },
// } = config;

// const imagekit = new ImageKit({ publicKey, privateKey, urlEndpoint });

// export async function GET() {
//   return NextResponse.json(imagekit.getAuthenticationParameters());
// }


import ImageKit from "imagekit";
import config from "@/lib/config";
import { NextResponse } from "next/server";

const {
  env: {
    imagekit: { publicKey, privateKey, urlEndpoint },
  },
} = config;

const imagekit = new ImageKit({ publicKey, privateKey, urlEndpoint });

export async function GET() {
  const response = NextResponse.json(imagekit.getAuthenticationParameters(), {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*", // Change this to your frontend domain if needed
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    },
  });

  return response;
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    },
  });
}
