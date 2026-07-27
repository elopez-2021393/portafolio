import { useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Home as HomeIcon,
    User,
    Cpu,
    FolderGit2,
    Download,
    Mail,
    Palette,
    Search,
    CornerDownLeft,
} from 'lucide-react';
import { useCommandPalette } from '../../context/CommandPaletteContext';

function buildCommands({ navigate, close, theme, toggleTheme }) {
    const goTo = (hash) => () => {
        navigate(`/${hash}`);
        close();
    };

    return [
        {
            id: 'home',
            label: 'Ir a Inicio',
            hint: '~/',
            icon: HomeIcon,
            keywords: 'inicio home top',
            run: goTo('#top'),
        },
        {
            id: 'about',
            label: 'Ir a Sobre mí',
            hint: 'about.jsx',
            icon: User,
            keywords: 'sobre mi about perfil',
            run: goTo('#about'),
        },
        {
            id: 'skills',
            label: 'Ver Tecnologías',
            hint: 'skills.json',
            icon: Cpu,
            keywords: 'tecnologias skills stack herramientas',
            run: goTo('#skills'),
        },
        {
            id: 'projects',
            label: 'Ver Proyectos',
            hint: 'projects/',
            icon: FolderGit2,
            keywords: 'proyectos projects portafolio repos',
            run: goTo('#projects'),
        },
        {
            id: 'cv',
            label: 'Descargar CV',
            hint: '.pdf',
            icon: Download,
            keywords: 'cv curriculum descargar download resume',
            run: () => {
                const link = document.createElement('a');
                link.href = '/esdrascv.pdf';
                link.download = 'Esdras-Lopez-CV.pdf';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                close();
            },
        },
        {
            id: 'contact',
            label: 'Ir a Contacto',
            hint: 'contact.sh',
            icon: Mail,
            keywords: 'contacto contact mensaje email',
            run: goTo('#contact'),
        },
        {
            id: 'theme',
            label: `Cambiar tema (${theme === 'blue' ? 'azul → rojo' : 'rojo → azul'})`,
            hint: '--toggle',
            icon: Palette,
            keywords: 'tema theme claro oscuro azul rojo dark light',
            run: () => {
                toggleTheme();
                close();
            },
        },
    ];
}

function CommandPalette({ theme, toggleTheme }) {
    const { open, close } = useCommandPalette();
    const navigate = useNavigate();
    const [query, setQuery] = useState('');
    const [activeIndex, setActiveIndex] = useState(0);
    const inputRef = useRef(null);
    const listRef = useRef(null);

    const commands = useMemo(
        () => buildCommands({ navigate, close, theme, toggleTheme }),
        [navigate, close, theme, toggleTheme]
    );

    const filtered = useMemo(() => {
        const q = query.trim().toLowerCase();
        if (!q) return commands;
        return commands.filter((cmd) => `${cmd.label} ${cmd.keywords}`.toLowerCase().includes(q));
    }, [commands, query]);

    useEffect(() => {
        if (!open) return undefined;
        setQuery('');
        setActiveIndex(0);
        const frame = requestAnimationFrame(() => inputRef.current?.focus());
        return () => cancelAnimationFrame(frame);
    }, [open]);

    useEffect(() => {
        setActiveIndex(0);
    }, [query]);

    useEffect(() => {
        listRef.current?.children[activeIndex]?.scrollIntoView({ block: 'nearest' });
    }, [activeIndex]);

    if (!open) return null;

    function handleKeyDown(event) {
        if (event.key === 'ArrowDown') {
            event.preventDefault();
            setActiveIndex((prev) => (filtered.length ? (prev + 1) % filtered.length : 0));
        } else if (event.key === 'ArrowUp') {
            event.preventDefault();
            setActiveIndex((prev) => (filtered.length ? (prev - 1 + filtered.length) % filtered.length : 0));
        } else if (event.key === 'Enter') {
            event.preventDefault();
            filtered[activeIndex]?.run();
        } else if (event.key === 'Escape') {
            event.preventDefault();
            close();
        }
    }

    return (
        <div
            className="fixed inset-0 z-[100] flex items-start justify-center bg-dark/60 px-4 pt-[12vh] backdrop-blur-sm"
            onMouseDown={(event) => {
                if (event.target === event.currentTarget) close();
            }}
        >
            <div
                role="dialog"
                aria-modal="true"
                aria-label="Paleta de comandos"
                onKeyDown={handleKeyDown}
                className="w-full max-w-xl overflow-hidden rounded-lg border border-border bg-surface shadow-2xl"
            >
                <div className="flex items-center gap-2 border-b border-border px-4 py-3">
                    <span className="font-mono text-sm text-accent" aria-hidden="true">
                        $
                    </span>
                    <Search className="h-4 w-4 shrink-0 text-muted" aria-hidden="true" />
                    <input
                        ref={inputRef}
                        type="text"
                        value={query}
                        onChange={(event) => setQuery(event.target.value)}
                        placeholder="Escribe un comando o busca una sección…"
                        aria-label="Buscar comando"
                        autoComplete="off"
                        spellCheck="false"
                        className="w-full bg-transparent font-mono text-sm text-ink outline-none placeholder:text-muted"
                    />
                    <kbd className="shrink-0 rounded border border-border px-1.5 py-0.5 font-mono text-[10px] text-muted">
                        esc
                    </kbd>
                </div>

                <ul ref={listRef} role="listbox" aria-label="Comandos disponibles" className="max-h-80 overflow-y-auto py-2">
                    {filtered.length === 0 && (
                        <li className="px-4 py-6 text-center font-mono text-sm text-muted">
                            zsh: command not found: {query || '""'}
                        </li>
                    )}
                    {filtered.map((cmd, index) => {
                        const Icon = cmd.icon;
                        const isActive = index === activeIndex;
                        return (
                            <li key={cmd.id} role="option" aria-selected={isActive}>
                                <button
                                    type="button"
                                    onClick={() => cmd.run()}
                                    onMouseEnter={() => setActiveIndex(index)}
                                    className={`flex w-full items-center gap-3 px-4 py-2.5 text-left font-mono text-sm transition-colors ${isActive ? 'bg-accent-soft text-ink' : 'text-muted hover:bg-accent-soft/60'
                                        }`}
                                >
                                    <Icon
                                        className={`h-4 w-4 shrink-0 ${isActive ? 'text-accent' : 'text-muted'}`}
                                        aria-hidden="true"
                                    />
                                    <span className="flex-1 truncate">{cmd.label}</span>
                                    <span className="hidden shrink-0 text-xs text-muted sm:inline">{cmd.hint}</span>
                                    {isActive && (
                                        <CornerDownLeft className="h-3.5 w-3.5 shrink-0 text-accent" aria-hidden="true" />
                                    )}
                                </button>
                            </li>
                        );
                    })}
                </ul>

                <div className="flex items-center justify-between border-t border-border px-4 py-2 font-mono text-[10px] text-muted">
                    <span>↑↓ navegar</span>
                    <span>↵ seleccionar</span>
                    <span>esc cerrar</span>
                </div>
            </div>
        </div>
    );
}

export default CommandPalette;