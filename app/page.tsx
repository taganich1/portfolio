import Hero from '@/components/Hero';
import Experience from '@/components/Experience';
import Tech from '@/components/Tech';
import Contact from '@/components/Contact';
import { About } from '@/components';
import Footer from '@/components/Footer';

export default function Home() {
    return (
        <main className="h-full w-full">
            <Hero />
            <About />
            <Experience />
            <Tech />
            <Contact />
            <Footer />
        </main>
    );
}
