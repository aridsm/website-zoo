import Activities from "./components/Activities";
import Animals from "./components/Animals";
import EmailSection from "./components/EmailSection";
import Entrada from "./components/Entrada";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Entrada />
        <Animals />
        <Activities />
        <Faq />
        <EmailSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
