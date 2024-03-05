import Hero from './Hero';
import Navbar from './Navbar';

export default function Header() {
  return (
    <div className="container mx-auto">
      <Navbar />
      <Hero />
    </div>
  );
}
