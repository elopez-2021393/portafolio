import { skillGroups } from './skillsData';
import SkillsCarousel from '../../shared/components/ui/SkillsCarousel';

function Skills() {
    return (
        <section id="skills" className="bg-surface px-6 py-24">
            <div className="mx-auto max-w-6xl">
                <p className="font-mono text-xs uppercase tracking-widest text-accent">skills.json</p>
                <h2 className="mt-3 font-display text-3xl font-semibold text-ink md:text-4xl">Stack</h2>

                <div className="mt-12 grid gap-8 md:grid-cols-2">
                    {skillGroups.map((group) => (
                        <div key={group.category} className="rounded-lg border border-border p-6">
                            <p className="font-mono text-xs text-muted">// {group.category.toLowerCase()}</p>
                            <ul className="mt-4 flex flex-wrap gap-2">
                                {group.items.map((item) => (
                                    <li
                                        key={item}
                                        className="rounded-md border border-border bg-bg px-3 py-1.5 font-mono text-sm text-ink transition-colors hover:border-accent hover:text-accent"
                                    >
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="mt-12">
                    <p className="mb-4 font-mono text-xs text-muted">// prácticas y conceptos que aplico</p>
                    <SkillsCarousel />
                </div>
            </div>
        </section>
    );
}

export default Skills;