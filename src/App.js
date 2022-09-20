import Activities from "./components/Activities";
import Animals from "./components/Animals";
import Entrada from "./components/Entrada";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      <Entrada />
      <main>
        <Animals />
        <Activities />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}

export default App;
