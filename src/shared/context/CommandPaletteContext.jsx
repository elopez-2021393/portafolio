import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

const CommandPaletteContext = createContext(null);

export function CommandPaletteProvider({ children }) {
    const [open, setOpen] = useState(false);

    const close = useCallback(() => setOpen(false), []);
    const toggle = useCallback(() => setOpen((prev) => !prev), []);

    useEffect(() => {
        function handleKeyDown(event) {
            const isMac = navigator.platform?.toUpperCase().includes('MAC');
            const modifierPressed = isMac ? event.metaKey : event.ctrlKey;

            // Ctrl/Cmd + K abre o cierra la paleta desde cualquier parte del sitio.
            if (modifierPressed && event.key.toLowerCase() === 'k') {
                event.preventDefault();
                toggle();
            }
        }

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [toggle]);

    const value = useMemo(() => ({ open, setOpen, close, toggle }), [open, close, toggle]);

    return (
        <CommandPaletteContext.Provider value={value}>
            {children}
        </CommandPaletteContext.Provider>
    );
}

export function useCommandPalette() {
    const context = useContext(CommandPaletteContext);
    if (!context) {
        throw new Error('useCommandPalette debe usarse dentro de <CommandPaletteProvider>');
    }
    return context;
}