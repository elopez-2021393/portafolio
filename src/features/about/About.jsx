const FACTS = [
    { key: 'nombre', value: 'Esdras López' },
    { key: 'edad', value: '19 años' },
    { key: 'formacion', value: 'Perito en informática' },
    { key: 'lugarDeFormacion', value: 'Fundación Kinal' },
    { key: 'ubicacion', value: 'Ciudad de Guatemala' },
    { key: 'idiomas', value: 'Español' },
    { key: 'softSkills', value: 'Trabajo en equipo, liderazgo' },
];

function About() {
    return (
        <section id="about" className="bg-bg px-6 py-24">
            <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:gap-16">
                <div>
                    <p className="font-mono text-xs uppercase tracking-widest text-accent">about.jsx</p>
                    <h2 className="mt-3 font-display text-3xl font-semibold text-ink md:text-4xl">
                        Sobre mí
                    </h2>
                    <p className="mt-6 text-base leading-relaxed text-muted">
                        Soy estudiante de Perito en Informática en Fundación Kinal,
                        enfocado en construir proyectos con calidad de nivel profesional:
                        plataformas con arquitectura de microservicios, frontends en React
                        y React Native, y backends en Node.js y .NET 8.
                    </p>
                    <p className="mt-4 text-base leading-relaxed text-muted">
                        Me interesa todo el ciclo de una aplicación: desde diseñar el
                        esquema de una base de datos hasta pulir el último detalle de la
                        interfaz. Trabajo cómodo moviéndome entre varias tecnologías al
                        mismo tiempo dentro de un mismo proyecto.
                    </p>
                    <p className="mt-4 text-base leading-relaxed text-muted">
                        Fuera del código, me gusta divertirme jugando videojuegos y futbol,
                        soy una persona sociable y curiosa a la que le gusta hacer nuevos
                        amigos.
                    </p>
                </div>

                <div className="overflow-hidden rounded-lg border border-border bg-surface">
                    <div className="flex items-center gap-2 border-b border-border bg-bg px-4 py-3">
                        <span className="h-2.5 w-2.5 rounded-full bg-[#EF4444]" />
                        <span className="h-2.5 w-2.5 rounded-full bg-[#F59E0B]" />
                        <span className="h-2.5 w-2.5 rounded-full bg-[#22C55E]" />
                        <span className="ml-2 font-mono text-xs text-muted">perfil.json</span>
                    </div>
                    <pre className="overflow-x-auto p-6 font-mono text-sm leading-relaxed text-ink">
                        {'{\n'}
                        {FACTS.map((fact, index) => (
                            <span key={fact.key}>
                                {'  '}
                                <span className="text-accent">"{fact.key}"</span>
                                {': '}
                                <span className="text-muted">"{fact.value}"</span>
                                {index < FACTS.length - 1 ? ',' : ''}
                                {'\n'}
                            </span>
                        ))}
                        {'}'}
                    </pre>
                </div>
            </div>
        </section>
    );
}

export default About;