"use client"

import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    title: 'Getting Started with Next.js',
    description: 'Learn how to build modern web applications with Next.js',
    date: 'April 1, 2023',
    tags: ['Next.js', 'React', 'Web Development'],
  },
  {
    title: 'The Power of Tailwind CSS',
    description: 'Discover how Tailwind CSS can streamline your styling workflow',
    date: 'March 15, 2023',
    tags: ['CSS', 'Tailwind', 'Web Design'],
  },
  {
    title: 'Mastering TypeScript',
    description: 'Tips and tricks to level up your TypeScript skills',
    date: 'February 28, 2023',
    tags: ['TypeScript', 'JavaScript', 'Programming'],
  },
];

const Blog = () => {
  return (
    <section id="blog" className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-8 text-center"
        >
          Latest Blog Posts
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>{post.title}</CardTitle>
                  <CardDescription>{post.date}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{post.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">{tag}</Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;