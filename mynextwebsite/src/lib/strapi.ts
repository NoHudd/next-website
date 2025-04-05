const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://blog.dmyproduct.com';
const STRAPI_API_TOKEN = process.env.STRAPI_API_TOKEN;

export interface BlogPost {
  id: number;
  attributes: {
    title: string;
    slug: string;
    content: string;
    featuredimage: Array<{
      id: number;
      name: string;
      alternativeText: string | null;
      width: number;
      height: number;
      formats: {
        thumbnail: ImageFormat;
        small: ImageFormat;
        medium: ImageFormat;
        large: ImageFormat;
      };
      url: string;
    }>;
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
    if (!STRAPI_URL) {
      console.error('STRAPI_URL is not defined');
      return [];
    }

    console.log('Current STRAPI_URL:', STRAPI_URL);
    console.log('Fetching blog posts from:', `${STRAPI_URL}/api/blog-posts?populate=*`);
    
    const response = await fetchAPI<{ data: any[] }>('blog-posts?populate=*');
    
    if (!response.data) {
      console.error('No data received from Strapi. Response:', response);
      return [];
    }

    console.log(`Received ${response.data.length} blog posts`);
    const transformedPosts = response.data.map(post => {
      if (!post.title || !post.slug || !post.content) {
        console.error('Invalid post data:', post);
        return null;
      }

      const transformedPost: BlogPost = {
        id: post.id,
        attributes: {
          title: post.title,
          slug: post.slug,
          content: post.content,
          publishedAt: post.publishedAt,
          publisheddate: post.publisheddate,
          featuredimage: post.featuredimage,
          author: post.author,
          category: post.category,
          tags: post.tags
        }
      };

      return transformedPost;
    }).filter((post): post is BlogPost => post !== null);

    console.log(`Successfully transformed ${transformedPosts.length} blog posts`);
    return transformedPosts;
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    // Log the full error details
    if (error instanceof Error) {
      console.error('Error details:', {
        message: error.message,
        stack: error.stack,
        name: error.name
      });
    }
    return [];
  }
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const response = await fetchAPI<{ data: any[] }>(`blog-posts?filters[slug][$eq]=${slug}&populate=*`);
    
    if (!response.data || response.data.length === 0) {
      return null;
    }

    const post = response.data[0];

    const transformedPost: BlogPost = {
      id: post.id,
      attributes: {
        title: post.title,
        slug: post.slug,
        content: post.content,
        publishedAt: post.publishedAt,
        publisheddate: post.publisheddate,
        featuredimage: post.featuredimage,
        author: post.author,
        category: post.category,
        tags: post.tags
      }
    };

    return transformedPost;
  } catch (error) {
    return null;
  }
} 