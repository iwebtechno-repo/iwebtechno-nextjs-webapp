"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { MagnifyingGlass, CaretRight } from "@phosphor-icons/react";
import { GradientText } from "@/components/ui/gradient-text";
import Footer from "@/components/footer";

// Sample blog posts data
const blogPosts = [
  {
    id: "digital-transformation-education",
    title: "Digital Transformation in Education: Trends for 2025",
    excerpt:
      "Explore the latest digital transformation trends that are reshaping the education landscape in 2025 and beyond.",
    category: "Digital Transformation",
    author: "Dr. Rajesh Kumar",
    date: "May 15, 2025",
    readTime: "8 min read",
    image: "/placeholder.svg?height=300&width=600",
    featured: true,
  },
  {
    id: "ai-in-education",
    title: "How AI is Revolutionizing Campus Administration",
    excerpt:
      "Artificial Intelligence is changing how educational institutions manage their operations. Learn about the practical applications and benefits.",
    category: "Artificial Intelligence",
    author: "Priya Sharma",
    date: "May 10, 2025",
    readTime: "6 min read",
    image: "/placeholder.svg?height=300&width=600",
    featured: true,
  },
  {
    id: "mobile-learning-trends",
    title: "Mobile Learning: Engaging the Modern Student",
    excerpt:
      "Mobile learning is becoming the preferred method for today's students. Discover how institutions can leverage this trend.",
    category: "EdTech",
    author: "Amit Patel",
    date: "May 5, 2025",
    readTime: "5 min read",
    image: "/placeholder.svg?height=300&width=600",
    featured: true,
  },
  {
    id: "data-security-education",
    title: "Ensuring Data Security in Educational Institutions",
    excerpt:
      "With increasing digitization comes the responsibility of protecting sensitive data. Learn best practices for educational institutions.",
    category: "Security",
    author: "Sanjay Gupta",
    date: "April 28, 2025",
    readTime: "7 min read",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: "paperless-campus",
    title: "The Journey to a Paperless Campus: Success Stories",
    excerpt:
      "Discover how leading institutions have successfully implemented paperless initiatives and the benefits they've realized.",
    category: "Sustainability",
    author: "Neha Verma",
    date: "April 22, 2025",
    readTime: "9 min read",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: "student-engagement-digital",
    title: "Boosting Student Engagement with Digital Tools",
    excerpt:
      "Digital tools can significantly enhance student engagement. Explore practical strategies and tools for educators.",
    category: "Student Success",
    author: "Dr. Rajesh Kumar",
    date: "April 15, 2025",
    readTime: "6 min read",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: "cloud-computing-education",
    title: "Cloud Computing in Education: Benefits and Implementation",
    excerpt:
      "Cloud computing offers numerous advantages for educational institutions. Learn about the benefits and implementation strategies.",
    category: "Cloud Technology",
    author: "Vikram Singh",
    date: "April 8, 2025",
    readTime: "7 min read",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: "digital-assessment",
    title: "Digital Assessment: Beyond Online Exams",
    excerpt:
      "Digital assessment goes beyond just moving exams online. Discover innovative approaches to evaluating student learning.",
    category: "Assessment",
    author: "Priya Sharma",
    date: "April 1, 2025",
    readTime: "8 min read",
    image: "/placeholder.svg?height=200&width=400",
  },
];

// Categories for filtering
const categories = [
  "All",
  "Digital Transformation",
  "Artificial Intelligence",
  "EdTech",
  "Security",
  "Sustainability",
  "Student Success",
  "Cloud Technology",
  "Assessment",
];

const BlogClient = () => {
  const featuredPosts = blogPosts.filter((post) => post.featured);
  const regularPosts = blogPosts.filter((post) => !post.featured);

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-10 py-20 px-4">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute left-1/4 top-0 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 h-64 w-64 rounded-full bg-purple-500/10 blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h1 className="mb-6 text-4xl font-bold md:text-5xl">
              The iWebTechno <GradientText>Blog</GradientText>
            </h1>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">
              Insights, trends, and updates on campus digitization and
              educational technology.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <Input
                type="text"
                placeholder="Search articles..."
                className="w-full pl-12"
              />
              <MagnifyingGlass className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            </div>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? "gradient" : "outline"}
                size="sm"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Featured Posts */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {featuredPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden">
                <CardContent className="p-0">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-56 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-semibold uppercase text-blue-600 dark:text-blue-400">
                        {post.category}
                      </span>
                      <span className="text-xs text-gray-400">•</span>
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        {post.date}
                      </span>
                      <span className="text-xs text-gray-400">•</span>
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        {post.readTime}
                      </span>
                    </div>
                    <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {post.excerpt}
                    </p>
                    <Link
                      href={`/blog/${post.id}`}
                      className="inline-flex items-center text-blue-600 dark:text-blue-400 font-semibold hover:underline"
                    >
                      Read More <CaretRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Regular Posts */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden">
                <CardContent className="p-0">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-4">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-semibold uppercase text-blue-600 dark:text-blue-400">
                        {post.category}
                      </span>
                      <span className="text-xs text-gray-400">•</span>
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        {post.date}
                      </span>
                      <span className="text-xs text-gray-400">•</span>
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold mb-1">{post.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-2">
                      {post.excerpt}
                    </p>
                    <Link
                      href={`/blog/${post.id}`}
                      className="inline-flex items-center text-blue-600 dark:text-blue-400 font-semibold hover:underline"
                    >
                      Read More <CaretRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <div className="pb-32 lg:pb-40">
        <Footer />
      </div>
    </main>
  );
};

export default BlogClient;
