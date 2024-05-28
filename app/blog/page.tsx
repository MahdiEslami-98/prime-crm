"use client";
import getPosts from "@/lib/allPosts";
import { RecordModel } from "pocketbase";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import PostCard from "@/components/postCard";

const BlogPage = () => {
  const [posts, setPosts] = useState<RecordModel[]>([]);

  const getResult = async () => {
    try {
      const res = await getPosts();
      res && setPosts(res);
    } catch (erorr) {
      console.log(erorr);
    }
  };

  useEffect(() => {
    getResult();
  });

  return (
    <>
      {posts.map((post) => (
        <motion.div
          key={post.id}
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5, ease: "easeInOut" }}
        >
          <PostCard post={post} />
        </motion.div>
      ))}
    </>
  );
};

export default BlogPage;
