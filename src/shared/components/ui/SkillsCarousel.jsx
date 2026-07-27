import { practices } from '../../../features/skills/skillsData';

function SkillsCarousel() {
    return (
        <div className="marquee-mask overflow-hidden">
            <div className="flex w-max animate-marquee gap-4 hover:[animation-play-state:paused]">
                {[...practices, ...practices].map((item, index) => (
                    <span
                        key={`${item}-${index}`}
                        className="shrink-0 whitespace-nowrap rounded-md border border-border bg-surface px-4 py-2 font-mono text-sm text-ink"
                    >
                        {item}
                    </span>
                ))}
            </div>
        </div>
    );
}

export default SkillsCarousel;