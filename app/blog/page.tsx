import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { GradientText } from "@/components/ui/gradient-text";
import { CardContent } from "@/components/ui/card";
import { GlassCard } from "@/components/ui/glass-card";
import { CalendarDays, Clock, ChevronRight, Search } from "lucide-react";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Blog | iWebTechno",
  description:
    "Latest insights, trends and updates from iWebTechno on campus digitization",
};

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

export default function BlogPage() {
  const featuredPosts = blogPosts.filter((post) => post.featured);
  const regularPosts = blogPosts.filter((post) => !post.featured);

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute left-1/4 top-0 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 h-64 w-64 rounded-full bg-purple-500/10 blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              iWebTechno <GradientText variant="multi">Blog</GradientText>
            </h1>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">
              Insights, trends, and updates on campus digitization and
              educational technology.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full px-4 py-3 pl-12 rounded-lg border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-900 dark:text-gray-100"
              />
              <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                className={
                  index === 0
                    ? "bg-gradient-to-r from-blue-600 to-blue-500"
                    : "glass-effect hover:bg-gray-100 dark:hover:bg-gray-700"
                }
                size="sm"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Featured Posts */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {featuredPosts.map((post, index) => (
              <Link
                key={post.id}
                href={`/blog/${post.id}`}
                className="block group"
              >
                <GlassCard className="h-full transition-all duration-300 hover:-translate-y-2 hover:shadow-lg overflow-hidden">
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white text-xs font-medium px-2.5 py-1 rounded">
                      {post.category}
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                      <CalendarDays className="h-4 w-4 mr-1" />
                      <span className="mr-4">{post.date}</span>
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{post.readTime}</span>
                    </div>
                    <h2 className="text-xl font-bold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {post.author}
                      </span>
                      <span className="text-blue-600 dark:text-blue-400 text-sm font-medium inline-flex items-center group-hover:translate-x-1 transition-transform duration-300">
                        Read more <ChevronRight className="ml-1 h-4 w-4" />
                      </span>
                    </div>
                  </CardContent>
                </GlassCard>
              </Link>
            ))}
          </div>

          {/* Regular Posts */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {regularPosts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.id}`}
                className="block group"
              >
                <GlassCard className="h-full transition-all duration-300 hover:-translate-y-2 hover:shadow-lg overflow-hidden">
                  <div className="relative h-40 w-full overflow-hidden">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-3 left-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white text-xs font-medium px-2 py-0.5 rounded">
                      {post.category}
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <div className="flex items-center text-xs text-gray-500 dark:text-gray-400 mb-2">
                      <CalendarDays className="h-3 w-3 mr-1" />
                      <span className="mr-3">{post.date}</span>
                      <Clock className="h-3 w-3 mr-1" />
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-lg font-bold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <span className="text-blue-600 dark:text-blue-400 text-sm font-medium inline-flex items-center group-hover:translate-x-1 transition-transform duration-300">
                      Read article <ChevronRight className="ml-1 h-4 w-4" />
                    </span>
                  </CardContent>
                </GlassCard>
              </Link>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-12">
            <div className="flex space-x-2">
              <Button
                variant="outline"
                size="sm"
                disabled
                className="glass-effect"
              >
                Previous
              </Button>
              <Button
                variant="default"
                size="sm"
                className="bg-blue-600 hover:bg-blue-700"
              >
                1
              </Button>
              <Button variant="outline" size="sm" className="glass-effect">
                2
              </Button>
              <Button variant="outline" size="sm" className="glass-effect">
                3
              </Button>
              <Button variant="outline" size="sm" className="glass-effect">
                Next
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-purple-50/50 dark:from-blue-950/30 dark:to-purple-950/30"></div>
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Subscribe to Our{" "}
            <GradientText variant="blue">Newsletter</GradientText>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Stay updated with the latest trends, insights, and news in
            educational technology and campus digitization.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-900 dark:text-gray-100"
            />
            <Button className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
