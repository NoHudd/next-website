const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://blog.dmyproduct.com';
const STRAPI_API_TOKEN = process.env.STRAPI_API_TOKEN;

export interface BlogPost {
  id: number;
  attributes: {
    title: string;
    slug: string;
    content: string;
    description?: string;
    featuredimage?: {
      data?: {
        attributes: {
          url: string;
          alternativeText?: string;
        };
      };
    };
    author?: {
      data?: {
        attributes: {
          name: string;
        };
      };
    };
    publisheddate?: string;
    publishedAt: string;
    category?: {
      data?: {
        attributes: {
          name: string;
          slug: string;
        };
      };
    };
    tags?: {
      data?: Array<{
        attributes: {
          name: string;
          slug: string;
        };
      }>;
    };
  };
}

interface ImageFormat {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path: string | null;
  width: number;
  height: number;
  size: number;
  url: string;
}

export async function fetchAPI<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  if (!STRAPI_API_TOKEN) {
    console.error('STRAPI_API_TOKEN is not defined');
    throw new Error('STRAPI_API_TOKEN is not defined');
  }

  const defaultOptions = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${STRAPI_API_TOKEN}`,
    },
  };

  const mergedOptions = {
    ...defaultOptions,
    ...options,
    headers: {
      ...defaultOptions.headers,
      ...options.headers,
    },
  };

  try {
    console.log(`Fetching from Strapi: ${STRAPI_URL}/api/${endpoint}`);
    console.log('Authorization header present:', !!STRAPI_API_TOKEN);
    console.log('First 8 chars of token:', STRAPI_API_TOKEN.substring(0, 8) + '...');
    
    const response = await fetch(`${STRAPI_URL}/api/${endpoint}`, mergedOptions);
    console.log(`Strapi response status: ${response.status}`);
    
    if (response.status === 403) {
      console.error('Received 403 Forbidden from Strapi. This usually means the API token is invalid or lacks proper permissions.');
      throw new Error('Forbidden: Please check API token permissions');
    }

    const data = await response.json();

    if (!response.ok) {
      console.error('Strapi API Error:', {
        status: response.status,
        statusText: response.statusText,
        error: data.error,
        url: `${STRAPI_URL}/api/${endpoint}`
      });
      throw new Error(data.error?.message || `API Error: ${response.status}`);
    }

    return data;
  } catch (error) {
    console.error('Error in fetchAPI:', error);
    throw error;
  }
}

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  try {
    if (!STRAPI_API_TOKEN) {
      console.error('STRAPI_API_TOKEN is not defined');
      return [];
    }

    console.log('Current STRAPI_URL:', STRAPI_URL);
    console.log('Fetching blog posts from:', `${STRAPI_URL}/api/blog-posts?populate=*`);
    
    const response = await fetchAPI<{ data: BlogPost[] }>('blog-posts?populate=*');
    
    if (!response.data) {
      console.error('No data received from Strapi. Response:', response);
      return [];
    }

    console.log(`Received ${response.data.length} blog posts`);
    return response.data;
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    if (!STRAPI_API_TOKEN) {
      console.error('STRAPI_API_TOKEN is not defined');
      return null;
    }

    console.log(`Fetching blog post with slug: ${slug}`);
    const response = await fetchAPI<{ data: BlogPost[] }>(`blog-posts?filters[slug][$eq]=${slug}&populate=*`);
    
    if (!response.data || response.data.length === 0) {
      console.error(`No blog post found with slug: ${slug}`);
      return null;
    }

    console.log(`Found blog post with slug: ${slug}`);
    return response.data[0];
  } catch (error) {
    console.error(`Error fetching blog post with slug: ${slug}`, error);
    return null;
  }
} 