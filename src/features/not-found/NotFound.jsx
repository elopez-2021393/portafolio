import { Link, useLocation } from 'react-router-dom';

function NotFound() {
    const location = useLocation();
    const path = `${location.pathname}${location.search}` || '/';

    return (
        <main className="flex min-h-screen flex-col items-center justify-center bg-dark px-6 py-20 text-white">
            <div className="w-full max-w-2xl overflow-hidden rounded-lg border border-white/10 bg-black/40 shadow-2xl">
                <div className="flex items-center gap-2 border-b border-white/10 bg-white/5 px-4 py-3">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#EF4444]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#F59E0B]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#22C55E]" />
                    <span className="ml-2 font-mono text-xs text-white/50">zsh — 80x24</span>
                </div>

                <div className="space-y-1.5 p-6 font-mono text-sm leading-relaxed sm:text-base">
                    <p className="text-white/50">
                        <span className="text-accent">tiyu</span>
                        <span className="text-white/40">@losdebuggers</span>
                        <span className="text-white/40"> ~ $</span> cd {path}
                    </p>
                    <p className="text-red-400">zsh: no such file or directory: {path}</p>

                    <p className="mt-4 text-white/50">
                        <span className="text-accent">tiyu</span>
                        <span className="text-white/40">@losdebuggers</span>
                        <span className="text-white/40"> ~ $</span> curl -I {path}
                    </p>
                    <p className="text-red-400">Error 404</p>
                    <p className="text-red-400">cd: no such file or directory</p>

                    <p className="mt-4 text-white/40">
                        La ruta que buscas no existe o fue movida a otro directorio.
                    </p>
                    <p className="text-white/50">
                        <span className="text-accent">tiyu</span>
                        <span className="text-white/40">@losdebuggers</span>
                        <span className="text-white/40"> ~ $</span>{' '}
                        <span className="animate-blink" aria-hidden="true">
                            ▌
                        </span>
                    </p>
                </div>
            </div>

            <Link
                to="/"
                className="mt-8 inline-flex items-center gap-2 rounded-md border border-white/20 px-6 py-3 font-mono text-sm text-white transition-colors hover:border-accent hover:text-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-dark"
            >
                <span className="text-accent">$</span> cd ~/
            </Link>
        </main>
    );
}

export default NotFound;