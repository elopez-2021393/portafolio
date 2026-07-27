function ThemeToggle({ theme, toggleTheme }) {
    const isBlue = theme === 'blue';

    return (
        <button
            type="button"
            onClick={toggleTheme}
            aria-label={`Cambiar a tema ${isBlue ? 'rojo' : 'azul'}`}
            className="flex items-center gap-2 rounded-md border border-border bg-surface px-3 py-1.5 font-mono text-xs text-muted transition-colors hover:border-accent hover:text-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
        >
            <span className="text-muted">theme:</span>
            <span
                className="inline-block h-2.5 w-2.5 rounded-full transition-colors"
                style={{ backgroundColor: 'var(--color-accent)' }}
            />
            <span className="text-ink">{isBlue ? 'blue' : 'red'}</span>
        </button>
    );
}

export default ThemeToggle;