const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';
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
    const response = await fetch(`${STRAPI_URL}/api/${endpoint}`, mergedOptions);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error?.message || `API Error: ${response.status}`);
    }

    return data;
  } catch (error) {
    throw error;
  }
}

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  try {
    const response = await fetchAPI<{ data: any[] }>('blog-posts?populate=*');
    
    if (!response.data) {
      return [];
    }

    const transformedPosts = response.data.map(post => {
      if (!post.title || !post.slug || !post.content) {
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
          category: post.catagory,
          tags: post.tags
        }
      };

      return transformedPost;
    }).filter((post): post is BlogPost => post !== null);

    return transformedPosts;
  } catch (error) {
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
        category: post.catagory,
        tags: post.tags
      }
    };

    return transformedPost;
  } catch (error) {
    return null;
  }
} 