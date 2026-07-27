import SkillsTree from '../../shared/components/ui/SkillsTree';
import Typewriter from '../../shared/components/ui/Typewriter';

function Hero() {
    return (
        <section id="top" className="bg-dark px-6 py-20 text-white md:py-28">
            <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:items-center">
                <div>
                    <div>
                        <img
                            src="/profile.png"
                            alt="Foto de Esdras López"
                            className="h-32 w-32 rounded-2xl border border-white/10 object-cover shadow-lg md:h-40 md:w-40"
                        />
                        <div className="mt-4 inline-flex items-center gap-2 rounded-sm bg-accent px-3 py-1.5 font-mono text-sm font-semibold text-white">
                            <span>&gt;</span>
                            <Typewriter
                                words={['Full Stack Developer', 'React Developer', 'Node Developer']}
                            />
                        </div>
                    </div>

                    <h1 className="mt-6 font-display text-5xl font-semibold leading-tight md:text-6xl">
                        Esdras López
                    </h1>
                    <p className="mt-4 max-w-xl text-lg text-white/60">
                        Construyo aplicaciones full-stack con React, React Native, Node.js
                        y .NET — desde microservicios hasta la interfaz que los consume.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-4">
                        <a
                            href="#projects"
                            className="rounded-md bg-accent px-6 py-3 font-mono text-sm font-medium text-white transition-colors hover:bg-accent-dark"
                        >
                            Ver proyectos
                        </a>

                        <a
                            href="/esdrascv.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-md border border-white/20 px-6 py-3 font-mono text-sm font-medium text-white transition-colors hover:border-white/50"
                        >
                            Ver CV
                        </a>
                    </div>
                </div>

                <SkillsTree />
            </div>
        </section>
    );
}

export default Hero;