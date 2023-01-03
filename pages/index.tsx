import styles from "../styles/Home.module.css";
import md from "./../content/home.md";
import fs from "fs";
import matter from "gray-matter";

export const getStaticProps = () => {
  const files = fs.readdirSync("content");
  const posts = files.map((fileName) => {
    console.log("reading file name", fileName);
    const slug = fileName.replace(".md", "");
    const readFile = fs.readFileSync(`content/${fileName}`, "utf-8");
    const { data } = matter(readFile);

    return {
      data,
    };
  });

  return {
    props: {
      posts,
    },
  };
};

export default function Home({ posts }: { posts: [] }) {
  console.log("posts", posts);
  return (
    <>
      <main className={styles.main}>hello</main>
    </>
  );
}
