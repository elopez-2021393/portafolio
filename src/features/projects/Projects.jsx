import ProjectCard from '../../shared/components/ui/ProjectCard';
import { projects } from './projectsData';

function Projects() {
    return (
        <section id="projects" className="bg-bg px-6 py-24">
            <div className="mx-auto max-w-6xl">
                <p className="font-mono text-xs uppercase tracking-widest text-accent">projects/</p>
                <h2 className="mt-3 font-display text-3xl font-semibold text-ink md:text-4xl">
                    Proyectos
                </h2>

                <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project) => (
                        <ProjectCard key={project.name} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;