function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="border-t border-border bg-surface px-6 py-8">
            <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 font-mono text-xs text-muted md:flex-row">
                <p>© {year} elopez — Los Debuggers</p>
                <p className="text-muted/70">Construido con React, Vite y Tailwind CSS</p>
            </div>
        </footer>
    );
}

export default Footer;