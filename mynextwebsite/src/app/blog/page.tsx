import { BlogPost, getAllBlogPosts } from "@/lib/strapi";
import Link from "next/link";
import Image from "next/image";
import Intro from "@/components/Intro";
import AnimatedSection from "@/components/ui/animated-section";
export default async function BlogPage() {
  const posts = await getAllBlogPosts();

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Intro Section */}
          <div className="lg:col-span-1">
            <Intro />
          </div>

          {/* Blog Posts Section */}
          <AnimatedSection delay={0.2} className="lg:col-span-2">
          <div className="lg:col-span-2 bg-white dark:bg-black rounded-xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {posts.map((post) => {
                const firstImage = post.attributes.featuredimage?.[0];
                const imageUrl = firstImage
                  ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${firstImage.url}`
                  : '/placeholder-image.jpg';

                return (
                  <Link
                    key={post.id}
                    href={`/blog/${post.attributes.slug}`}
                    className="group"
                  >
                    <article className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl transition-all duration-300 hover:shadow-primary/20 hover:scale-[1.02] dark:bg-black/20 dark:border dark:border-white/10">
                      <div className="relative h-48 w-full bg-gray-100 dark:bg-gray-800">
                        <Image
                          src={imageUrl}
                          alt={firstImage?.alternativeText || post.attributes.title || 'Blog post image'}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          priority={posts.indexOf(post) < 4}
                        />
                      </div>
                      <div className="p-6">
                        <h2 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100 group-hover:text-primary transition-colors">
                          {post.attributes.title}
                        </h2>
                        <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-4">
                          <span>
                            {new Date(post.attributes.publisheddate || post.attributes.publishedAt).toLocaleDateString()}
                          </span>
                          {post.attributes.author?.data?.attributes?.name && (
                            <>
                              <span className="mx-2">•</span>
                              <span>{post.attributes.author.data.attributes.name}</span>
                            </>
                          )}
                        </div>
                        {post.attributes.category?.data?.attributes?.name && (
                          <div className="flex flex-wrap gap-2">
                            <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                              {post.attributes.category.data.attributes.name}
                            </span>
                          </div>
                        )}
                      </div>
                    </article>
                  </Link>
                );
              })}
            </div>

            {/* Empty State */}
            {posts.length === 0 && (
              <div className="text-center py-20">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                  No blog posts yet
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Check back soon for new content!
                </p>
              </div>
            )}
          </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}