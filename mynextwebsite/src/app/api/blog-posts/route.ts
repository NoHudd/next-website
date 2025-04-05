import { NextResponse } from "next/server";

export async function GET() {
  const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL;
  const STRAPI_API_TOKEN = process.env.STRAPI_API_TOKEN;

  if (!STRAPI_URL || !STRAPI_API_TOKEN) {
    console.error('Missing environment variables:', { 
      STRAPI_URL: !!STRAPI_URL, 
      STRAPI_API_TOKEN: !!STRAPI_API_TOKEN 
    });
    return NextResponse.json(
      { error: 'Server configuration error' },
      { status: 500 }
    );
  }

  try {
    console.log(`Fetching from Strapi: ${STRAPI_URL}/api/blog-posts?populate=*`);
    
    const response = await fetch(`${STRAPI_URL}/api/blog-posts?populate=*`, {
      headers: {
        'Authorization': `Bearer ${STRAPI_API_TOKEN}`,
      },
    });

    console.log(`Strapi response status: ${response.status}`);
    
    if (!response.ok) {
      console.error('Strapi API Error:', {
        status: response.status,
        statusText: response.statusText,
        url: `${STRAPI_URL}/api/blog-posts?populate=*`
      });
      return NextResponse.json(
        { error: `API Error: ${response.status}` },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return NextResponse.json(
      { error: 'Failed to fetch blog posts' },
      { status: 500 }
    );
  }
} 