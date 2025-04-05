import { NextResponse } from "next/server";

export async function GET() {
  const strapiUrl = process.env.STRAPI_URL || 'https://blog.dmyproduct.com';
  const STRAPI_API_TOKEN = process.env.STRAPI_API_TOKEN;

  if (!strapiUrl || !STRAPI_API_TOKEN) {
    console.error('Missing environment variables:', { 
      STRAPI_URL: !!strapiUrl, 
      STRAPI_API_TOKEN: !!STRAPI_API_TOKEN 
    });
    return NextResponse.json(
      { error: 'Server configuration error' },
      { status: 500 }
    );
  }

  try {
    console.log(`Fetching from Strapi: ${strapiUrl}/api/blog-posts?populate=*`);
    console.log('Using API token (first 8 chars):', STRAPI_API_TOKEN.substring(0, 8) + '...');
    
    const response = await fetch(`${strapiUrl}/api/blog-posts?populate=*`, {
      headers: {
        'Authorization': `Bearer ${STRAPI_API_TOKEN}`,
        'Content-Type': 'application/json',
      },
    });

    console.log(`Strapi response status: ${response.status}`);
    console.log(`Strapi response headers:`, Object.fromEntries(response.headers.entries()));
    
    if (!response.ok) {
      let errorBody;
      try {
        errorBody = await response.text();
        console.error('Error response body:', errorBody);
      } catch (e) {
        console.error('Could not read error response body:', e);
      }
      
      console.error('Strapi API Error:', {
        status: response.status,
        statusText: response.statusText,
        url: `${strapiUrl}/api/blog-posts?populate=*`,
        headers: Object.fromEntries(response.headers.entries()),
        body: errorBody
      });
      
      return NextResponse.json(
        { error: `API Error: ${response.status}`, details: errorBody },
        { status: response.status }
      );
    }

    const data = await response.json();
    console.log(`Successfully fetched ${data.data?.length || 0} blog posts`);
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    
    // Log detailed error information
    if (error instanceof Error) {
      console.error('Error details:', {
        message: error.message,
        name: error.name,
        stack: error.stack,
        cause: error.cause
      });
    } else {
      console.error('Unknown error type:', error);
    }
    
    return NextResponse.json(
      { error: 'Failed to fetch blog posts', details: error instanceof Error ? error.message : String(error) },
      { status: 500 }
    );
  }
} 