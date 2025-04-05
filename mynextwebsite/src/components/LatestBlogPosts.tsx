'use client';

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BlogPost } from "@/lib/strapi";

export default function LatestBlogPosts() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setError(null);
        const response = await fetch('/api/blog-posts');
        if (!response.ok) {
          throw new Error('Failed to fetch blog posts');
        }
        const data = await response.json();
        console.log('Fetched blog posts data:', data);
        // Strapi returns data in a format like { data: [{ id, attributes }, ...] }
        setPosts(data.data || []);
      } catch (error) {
        console.error('Error fetching blog posts:', error);
        setError('Failed to load blog posts. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return (
      <div className="rounded-2xl bg-white p-6 shadow dark:bg-black dark:shadow-dark">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-6">
          <h3 className="text-2xl font-semibold dark:text-light">Latest Blog Posts</h3>
          <div className="h-5 w-24 animate-pulse bg-gray-200 dark:bg-gray-700 rounded"></div>
        </div>
        <div className="space-y-8">
          {[1, 2].map((i) => (
            <div key={i} className="group overflow-hidden rounded-xl bg-gray-50 dark:bg-gray-800/50">
              <div className="aspect-[16/9] w-full relative">
                <div className="h-full w-full animate-pulse bg-gray-200 dark:bg-gray-700"></div>
              </div>
              <div className="p-4">
                <div className="h-4 w-3/4 animate-pulse bg-gray-200 dark:bg-gray-700 rounded mb-3"></div>
                <div className="h-3 w-1/2 animate-pulse bg-gray-200 dark:bg-gray-700 rounded"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="rounded-2xl bg-white p-6 shadow dark:bg-black dark:shadow-dark">
        <h3 className="text-2xl font-semibold dark:text-light mb-4">Latest Blog Posts</h3>
        <p className="text-red-500 dark:text-red-400">{error}</p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl bg-white p-6 shadow dark:bg-black dark:shadow-dark">
      <div className="flex flex-wrap items-center justify-between gap-2 mb-6">
        <h3 className="text-2xl font-semibold dark:text-light">Latest Blog Posts</h3>
        <Link href="/blog" className="inline-flex items-center justify-center gap-2 border-b text-center text-base text-primary transition hover:border-b-primary dark:border-b-muted dark:hover:border-b-primary">
          <span>All Posts</span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" className="h-5 w-5">
            <path d="M4.167 10h11.666m-4.999 5 5-5m-5-5 5 5" />
          </svg>
        </Link>
      </div>

      <div className="space-y-8">
        {posts.length === 0 ? (
          <p className="text-gray-500 dark:text-gray-400">No blog posts found.</p>
        ) : (
          posts.slice(0, 2).map((post) => {
            const imageUrl = post.attributes.featuredimage?.data?.attributes?.url
              ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${post.attributes.featuredimage.data.attributes.url}`
              : '/images/portfolio/placeholder-image.jpg';

            return (
              <Link
                key={post.id}
                href={`/blog/${post.attributes.slug}`}
                className="group block transform transition-all duration-300 hover:scale-[1.02] hover:shadow-lg dark:hover:shadow-primary/30 rounded-xl"
              >
                <article className="overflow-hidden rounded-xl bg-gray-50 transition-all duration-300 hover:shadow-lg dark:bg-gray-800/50">
                  <div className="aspect-[16/9] w-full relative">
                    <Image
                      src={imageUrl}
                      alt={post.attributes.title || 'Blog post image'}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 800px"
                      className="object-cover"
                      priority={true}
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="text-lg font-medium text-gray-900 dark:text-light group-hover:text-primary dark:group-hover:text-primary">
                      {post.attributes.title}
                    </h4>
                    <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                      {post.attributes.description || post.attributes.content.substring(0, 150) + '...'}
                    </p>
                  </div>
                </article>
              </Link>
            );
          })
        )}
      </div>
    </div>
  );
} 