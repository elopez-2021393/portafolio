import { useState } from 'react';
import { Code2, ExternalLink } from 'lucide-react';
import DeviceMockup from './DeviceMockup';
import GalleryThumbs from './GalleryThumbs';
import ProjectLightbox from './ProjectLightbox';

function ProjectCard({ project }) {
    const { name, description, role, tags, status, links, image, mobileImage, gallery } = project;
    const [activeIndex, setActiveIndex] = useState(0);
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxView, setLightboxView] = useState('desktop');

    const hasVisual = Boolean(image) || Boolean(gallery && gallery.length > 0);
    const shots = gallery && gallery.length > 0 ? gallery : [{ label: name, image, mobileImage }];
    const activeShot = shots[activeIndex] || shots[0];
    const is3D = activeShot.type === 'tiyu';
    const laptopImage = activeShot.image;
    const phoneImage = activeShot.mobileImage || mobileImage || laptopImage;

    const navigate = (dir) => {
        setActiveIndex((prev) => (prev + dir + shots.length) % shots.length);
    };

    const openLightbox = (view) => {
        setLightboxView(view);
        setLightboxOpen(true);
    };

    return (
        <article className="flex flex-col overflow-hidden rounded-lg border border-border bg-surface transition-shadow hover:shadow-lg hover:shadow-black/5">
            <div className="relative flex items-center justify-center bg-gradient-to-br from-bg to-surface px-8 pb-10 pt-10">
                <DeviceMockup
                    name={name}
                    image={laptopImage}
                    mobileImage={phoneImage}
                    is3D={is3D}
                    onExpandDesktop={hasVisual ? () => openLightbox('desktop') : null}
                    onExpandPhone={hasVisual ? () => openLightbox('phone') : null}
                />
            </div>

            <GalleryThumbs
                name={name}
                gallery={gallery}
                activeIndex={activeIndex}
                onSelect={setActiveIndex}
            />

            <div className="flex flex-1 flex-col gap-4 p-6">
                <div className="flex items-start justify-between gap-3">
                    <h3 className="font-display text-xl font-semibold text-ink">{name}</h3>
                    {status && (
                        <span className="shrink-0 rounded-full border border-border px-2.5 py-1 font-mono text-[11px] text-muted">
                            {status}
                        </span>
                    )}
                </div>

                <p className="text-sm leading-relaxed text-muted">{description}</p>

                {role && (
                    <p className="font-mono text-xs text-accent-dark">{role}</p>
                )}

                <ul className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                        <li
                            key={tag}
                            className="rounded-md bg-accent-soft px-2.5 py-1 font-mono text-[11px] text-accent-dark"
                        >
                            {tag}
                        </li>
                    ))}
                </ul>

                {links && (links.repo || links.demo) && (
                    <div className="mt-auto flex gap-3 pt-2">
                        {links.repo && (
                            <a
                                href={links.repo}
                                target="_blank"
                                rel="noreferrer"
                                aria-label={`Código de ${name}`}
                                title="Código"
                                className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-ink transition-colors hover:border-accent hover:text-accent"
                            >
                                <Code2 className="h-4 w-4" />
                            </a>
                        )}
                        {links.demo && (
                            <a
                                href={links.demo}
                                target="_blank"
                                rel="noreferrer"
                                aria-label={`Demo de ${name}`}
                                title="Demo"
                                className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent text-white transition-colors hover:bg-accent-dark"
                            >
                                <ExternalLink className="h-4 w-4" />
                            </a>
                        )}
                    </div>
                )}
            </div>

            {lightboxOpen && (
                <ProjectLightbox
                    shots={shots}
                    index={activeIndex}
                    view={lightboxView}
                    onView={setLightboxView}
                    onClose={() => setLightboxOpen(false)}
                    onNavigate={navigate}
                />
            )}
        </article>
    );
}

export default ProjectCard;