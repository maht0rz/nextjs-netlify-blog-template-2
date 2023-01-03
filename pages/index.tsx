import styles from "../styles/Home.module.css";
import md from "./../content/home.md";
import fs from "fs";
import matter from "gray-matter";

export const getStaticProps = () => {
  const files = fs.readdirSync("content");
  const cats = files.map((fileName) => {
    console.log("reading file name", fileName);
    const slug = fileName.replace(".md", "");
    const readFile = fs.readFileSync(`content/${fileName}`, "utf-8");
    const { data } = matter(readFile);

    return data;
  });

  return {
    props: {
      cats: cats[0],
    },
  };
};

export default function Home({ cats }: { cats: [] }) {
  console.log("cats", cats);
  return (
    <>
      <main className={styles.main}>
        <h1>Cats</h1>
        {cats.map((cat, i) => (
          <p key={i}>{cat.name}</p>
        ))}
      </main>
    </>
  );
}
