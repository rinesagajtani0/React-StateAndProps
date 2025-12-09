import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';

function App() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      <Header />
      <MainContent />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;