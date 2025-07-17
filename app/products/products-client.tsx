"use client";

import { Card } from "@/components/ui/card";

const ProductsClient = () => {
  return (
    <main className="min-h-screen py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Our Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Example Product Card */}
          <Card variant="blue" showRipple className="p-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">
                Admission Management
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Streamline student enrollment with our comprehensive admission
                management system.
              </p>
            </div>
          </Card>
          {/* Add more product cards as needed */}
        </div>
      </div>
    </main>
  );
};

export default ProductsClient;
