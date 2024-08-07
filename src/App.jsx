import "./App.css";
import { contents } from "./assets/data/data";
import Content from "./components/Content";
import Header from "./components/Header";

function App() {
  return (
    <main className="bg-black text-white">
      <Header />
      {/* 
      <section>
        {contents.map((el) => (
          <Content key={el.id} content={el} />
        ))}
      </section> 
      */}
      <section className="flex flex-wrap justify-center gap-5 p-5 md:p-10">
        {contents.map((el) => (
          <Content key={el.id} content={el} />
        ))}
      </section>
    </main>
  );
}

export default App;
