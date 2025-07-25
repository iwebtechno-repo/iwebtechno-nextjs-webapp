import type { Metadata } from "next";
import BlogClient from "./blog-client";

export const dynamic = "force-static";
export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Blog | iWebTechno",
  description:
    "Latest insights, trends and updates from iWebTechno on campus digitization",
};

const BlogPage = () => {
  return <BlogClient />;
};

export default BlogPage;
