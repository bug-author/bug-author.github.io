import { useState } from "react";
import { Icon } from "@iconify/react";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [darkMode, setdarkMode] = useState(false);
  const switchTheme = () => {
    console.log(`current theme is ${darkMode}`);
    setdarkMode(!darkMode);
  };
  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="bg-white p-14 dark:bg-darkBg">
        <section className="min-h-screen">
          <ul className="flex flex-row-reverse">
            <li onClick={switchTheme}>
              <span className="iconStyle dark:text-slate-300">
                <Icon icon="ph:moon-bold" />
              </span>
            </li>
          </ul>
          <div className="w-full flex justify-center">
            <div className="border">
              <div className="perfil rounded overflow-hidden flex items-end justify-center">
                <img src="/avatar.png" alt="avatar" width={"120px"} />
              </div>
            </div>
          </div>
          <h1 className=" text-2xl font-bold text-center dark:text-slate-200">
            Abdullah
          </h1>
          <p className="text-sm font-semibold textColor text-center dark:text-slate-500">
            Software Developer
          </p>
          <ul className="mt-5 flex justify-center gap-4">
            <a
              href="https://github.com/bug-author"
              target="_blank"
              className="iconStyle dark:text-slate-300"
            >
              <Icon icon="icon-park-outline:github-one" />
            </a>
            <a
              href="https://stackoverflow.com/users/10934636/stuckoverflow"
              target="_blank"
              className="iconStyle dark:text-slate-300"
            >
              <Icon icon="ion:logo-stackoverflow" />
            </a>
          </ul>
          <ul className="pt-6 flex text-center justify-center font-semibold">
            <div className="p-5 text-slate-800">
              <h3 className="dark:text-slate-400">1</h3>
              <p className=" textColor text-xs dark:text-slate-400">
                year of <br />
                work
              </p>
            </div>

            <div className="p-5 text-slate-800">
              <h3 className="dark:text-slate-400">20+</h3>
              <p className=" textColor text-xs dark:text-slate-400">
                completed <br />
                projects
              </p>
            </div>

            <div className="p-5 text-slate-800">
              <h3 className="dark:text-slate-400">15+</h3>
              <p className=" textColor text-xs dark:text-slate-400">
                happy <br />
                customers
              </p>
            </div>
          </ul>
          <div className="pt-5 flex text-center justify-center gap-2 items-center">
            {/* inline because we want the style to take as much space as the content itself */}
            <div className="inline-flex items-center gap-2 text-white px-4 py-4 rounded-lg btn cursor-pointer">
              <p className="text-md font-medium dark:text-slate-900">
                Download Resume
              </p>
              <a download="" href="/Abdullah_Resume.pdf">
                <Icon
                  icon="material-symbols:download"
                  color={darkMode ? "rgba(15, 23, 42, 1)" : "white"}
                />
              </a>
            </div>
          </div>
          <div className="pt-16">
            <div className="text-center font-bold text-3xl dark:text-slate-400">
              Projects
              <div className="pt-5 flex gap-5">
                <Card
                  title="Feed Blast"
                  img="/flutter.png"
                  caption="A News app with AI-generated summaries."
                  tags={["Flutter", "Python", "Transformers"]}
                  repo={"https://github.com/bug-author/feed-blast"}
                  darkMode={darkMode}
                />

                <Card
                  title="Aura"
                  img="/web.png"
                  caption="A clone of the Momentum Dashboard extension."
                  tags={["ReactJS", "TailwindCSS"]}
                  repo={"https://github.com/bug-author/aura"}
                  darkMode={darkMode}
                />

                <Card
                  title="Quote Bee"
                  img="/flutter.png"
                  caption="A Flutter app archiving Mufti Menk's quotes over the years."
                  tags={["Flutter", "Python", "SQFlite"]}
                  repo={"https://github.com/bug-author/quote-bee"}
                  darkMode={darkMode}
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
