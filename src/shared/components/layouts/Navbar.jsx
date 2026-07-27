import { useMemo, useState } from 'react';
import { Search } from 'lucide-react';
import ThemeToggle from '../ui/ThemeToggle';
import { useCommandPalette } from '../../context/CommandPaletteContext';

const NAV_ITEMS = [
    { label: 'about.jsx', href: '#about' },
    { label: 'skills.json', href: '#skills' },
    { label: 'projects/', href: '#projects' },
    { label: 'contact.sh', href: '#contact' },
];

function Navbar({ theme, toggleTheme }) {
    const [open, setOpen] = useState(false);
    const { setOpen: setPaletteOpen } = useCommandPalette();
    const isMac = useMemo(
        () => typeof navigator !== 'undefined' && navigator.platform?.toUpperCase().includes('MAC'),
        []
    );

    return (
        <header className="sticky top-0 z-50 border-b border-border bg-surface/90 backdrop-blur">
            <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
                <a href="#top" className="font-display text-lg font-semibold text-ink">
                    <span className="font-mono text-muted">~/</span>elopez
                </a>

                <ul className="hidden items-center gap-8 font-mono text-sm md:flex">
                    {NAV_ITEMS.map((item) => (
                        <li key={item.href}>
                            <a href={item.href} className="text-muted transition-colors hover:text-accent">
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>

                <div className="hidden items-center gap-3 md:flex">
                    <button
                        type="button"
                        onClick={() => setPaletteOpen(true)}
                        className="flex items-center gap-2 rounded-md border border-border bg-surface px-3 py-1.5 font-mono text-xs text-muted transition-colors hover:border-accent hover:text-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                        aria-label="Abrir paleta de comandos"
                    >
                        <Search className="h-3.5 w-3.5" aria-hidden="true" />
                        <span>Buscar</span>
                        <kbd className="rounded border border-border bg-bg px-1.5 py-0.5 text-[10px] text-muted">
                            {isMac ? '⌘K' : 'Ctrl K'}
                        </kbd>
                    </button>
                    <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
                </div>

                <button
                    type="button"
                    className="flex flex-col gap-1.5 p-2 md:hidden"
                    aria-label="Abrir menú"
                    aria-expanded={open}
                    onClick={() => setOpen((prev) => !prev)}
                >
                    <span className="h-0.5 w-6 bg-ink" />
                    <span className="h-0.5 w-6 bg-ink" />
                </button>
            </nav>

            {open && (
                <div className="border-t border-border bg-surface px-6 py-4 md:hidden">
                    <ul className="flex flex-col gap-4 font-mono text-sm">
                        {NAV_ITEMS.map((item) => (
                            <li key={item.href}>
                                <a
                                    href={item.href}
                                    onClick={() => setOpen(false)}
                                    className="text-muted transition-colors hover:text-accent"
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <div className="mt-4 flex items-center gap-3">
                        <button
                            type="button"
                            onClick={() => {
                                setOpen(false);
                                setPaletteOpen(true);
                            }}
                            className="flex items-center gap-2 rounded-md border border-border bg-surface px-3 py-1.5 font-mono text-xs text-muted transition-colors hover:border-accent hover:text-ink"
                            aria-label="Abrir paleta de comandos"
                        >
                            <Search className="h-3.5 w-3.5" aria-hidden="true" />
                            <span>Buscar</span>
                        </button>
                        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
                    </div>
                </div>
            )
            }
        </header >
    );
}

export default Navbar;