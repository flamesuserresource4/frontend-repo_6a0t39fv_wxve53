import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-[#0b7285]/30 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Projects />
        {/* More sections like Services, Case Studies, About, Testimonials, FAQ, Blog, Contact can be iterated next */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
