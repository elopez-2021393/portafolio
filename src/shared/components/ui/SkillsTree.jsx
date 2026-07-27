import { skillGroups } from '../../../features/skills/skillsData';

function slugifyFolder(text) {
    return text
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/\s+/g, '-');
}

function buildTreeLines() {
    const lines = [{ text: '.', type: 'root' }];

    skillGroups.forEach((group, groupIndex) => {
        const isLastGroup = groupIndex === skillGroups.length - 1;
        const groupConnector = isLastGroup ? '└── ' : '├── ';
        const childPrefix = isLastGroup ? '    ' : '│   ';

        lines.push({
            key: `${group.category}-folder`,
            text: `${groupConnector}${slugifyFolder(group.category)}`,
            type: 'folder',
        });

        group.items.forEach((item, itemIndex) => {
            const isLastItem = itemIndex === group.items.length - 1;
            const itemConnector = isLastItem ? '└── ' : '├── ';
            lines.push({
                key: `${group.category}-${item}`,
                text: `${childPrefix}${itemConnector}${item}`,
                type: 'item',
            });
        });
    });

    return lines;
}

const LINE_STYLES = {
    root: 'text-white/40',
    folder: 'text-accent',
    item: 'text-white/60 transition-colors hover:text-white',
};

function SkillsTree() {
    const lines = buildTreeLines();

    return (
        <div className="overflow-hidden rounded-lg border border-white/10 bg-black/40 shadow-2xl">
            <div className="flex items-center gap-2 border-b border-white/10 bg-white/5 px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-[#EF4444]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#F59E0B]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#22C55E]" />
                <span className="ml-2 font-mono text-xs text-white/40">zsh — tree ./stack</span>
            </div>

            <div className="overflow-x-auto px-6 py-6 font-mono text-sm leading-relaxed">
                {lines.map((line, index) => (
                    <div
                        key={line.key ?? `root-${index}`}
                        className={`whitespace-pre ${LINE_STYLES[line.type]}`}
                    >
                        {line.text}
                    </div>
                ))}

                <div className="mt-3 flex items-center gap-1 text-accent">
                    <span>$</span>
                    <span className="animate-blink">▌</span>
                </div>
            </div>
        </div>
    );
}

export default SkillsTree;