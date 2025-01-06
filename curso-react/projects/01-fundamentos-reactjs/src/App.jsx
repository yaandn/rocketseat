import { Header } from "./components/Header/Header";
import { Post } from "./components/Post/Post.jsx";
import { SideBar } from "./components/SideBar/SideBar";

import styles from "./App.module.css";
import "./global.css";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/yaandn.png",
      name: "Yan Di Nápoli",
      role: "Web Developer Macall",
    },
    content: [
      {
        type: "paragraph",
        content:
          "Finalmente finalizei meu novo site/portfólio. Foi um baita desafio criar todo o design e codar na unha, mas consegui 💪🏻",
      },
      { type: "paragraph", content: "Acesse e deixe seu feedback 👉" },
      { type: "link", content: "devonlane.design" },
    ],
    publishedAt: new Date("2022-05-03  20:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/diego3g.png",
      name: "Diego Fernandes",
      role: "CTO @Rocketseat",
    },
    content: [
      {
        type: "paragraph",
        content:
          "Finalmente finalizei meu novo site/portfólio. Foi um baita desafio criar todo o design e codar na unha, mas consegui 💪🏻",
      },
      { type: "paragraph", content: "Acesse e deixe seu feedback 👉" },
      { type: "link", content: "devonlane.design" },
    ],
    publishedAt: new Date("2022-05-10  20:00:00"),
  },
];

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <SideBar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id.toString()}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}

export default App;
