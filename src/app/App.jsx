import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from '../shared/components/layouts/Navbar';
import Footer from '../shared/components/layouts/Footer';
import { useTheme } from '../shared/hooks/useTheme';
import { CommandPaletteProvider } from '../shared/context/CommandPaletteContext';
import CommandPalette from '../shared/components/ui/CommandPalette';
import Reveal from '../shared/components/ui/Reveal';
import Hero from '../features/hero/Hero';
import About from '../features/about/About';
import Skills from '../features/skills/Skills';
import Projects from '../features/projects/Projects';
import Contact from '../features/contact/Contact';
import NotFound from '../features/not-found/NotFound';

function HomePage({ theme, toggleTheme }) {
    const location = useLocation();

    useEffect(() => {
        if (!location.hash) return undefined;
        const target = document.querySelector(location.hash);
        if (!target) return undefined;
        const frame = requestAnimationFrame(() => {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
        return () => cancelAnimationFrame(frame);
    }, [location.hash]);

    return (
        <>
            <Navbar theme={theme} toggleTheme={toggleTheme} />
            <main>
                <Hero theme={theme} />
                <Reveal>
                    <About />
                </Reveal>
                <Reveal>
                    <Skills />
                </Reveal>
                <Reveal>
                    <Projects />
                </Reveal>
                <Reveal>
                    <Contact />
                </Reveal>
            </main>
            <Footer />
        </>
    );
}

function App() {
    const { theme, toggleTheme } = useTheme();

    return (
        <CommandPaletteProvider>
            <div className="min-h-screen bg-bg">
                <Routes>
                    <Route path="/" element={<HomePage theme={theme} toggleTheme={toggleTheme} />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
                <CommandPalette theme={theme} toggleTheme={toggleTheme} />
            </div>
        </CommandPaletteProvider>
    );
}

export default App;