import { useRef } from 'react';
import { Sprout } from 'lucide-react';
import { cld } from '../../utils/cloudinary';

function GalleryThumbs({ name, gallery, activeIndex, onSelect }) {
    const trackRef = useRef(null);
    const drag = useRef({ active: false, startX: 0, startScroll: 0, moved: false });

    if (!gallery || gallery.length < 2) return null;

    const onPointerDown = (e) => {
        const track = trackRef.current;
        if (!track) return;
        drag.current = { active: true, startX: e.clientX, startScroll: track.scrollLeft, moved: false };
        track.setPointerCapture(e.pointerId);
    };

    const onPointerMove = (e) => {
        const track = trackRef.current;
        if (!track || !drag.current.active) return;
        const delta = e.clientX - drag.current.startX;
        if (Math.abs(delta) > 3) drag.current.moved = true;
        track.scrollLeft = drag.current.startScroll - delta;
    };

    const endDrag = () => {
        drag.current.active = false;
    };

    const onWheel = (e) => {
        const track = trackRef.current;
        if (!track) return;
        if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
            track.scrollLeft += e.deltaY;
            e.preventDefault();
        }
    };

    return (
        <div className="marquee-mask border-t border-border bg-bg/60">
            <div
                ref={trackRef}
                onPointerDown={onPointerDown}
                onPointerMove={onPointerMove}
                onPointerUp={endDrag}
                onPointerLeave={endDrag}
                onWheel={onWheel}
                className="no-scrollbar flex snap-x cursor-grab gap-2.5 overflow-x-auto px-6 py-3.5 active:cursor-grabbing"
            >
                {gallery.map((shot, index) => (
                    <button
                        key={shot.label || index}
                        type="button"
                        onClick={() => {
                            if (!drag.current.moved) onSelect(index);
                        }}
                        title={shot.label}
                        aria-label={`Ver ${shot.label || `vista ${index + 1}`} de ${name}`}
                        aria-pressed={index === activeIndex}
                        className={`h-16 w-24 shrink-0 snap-start overflow-hidden rounded-md border-2 transition-colors ${index === activeIndex
                            ? 'border-accent'
                            : 'border-border opacity-70 hover:opacity-100'
                            }`}
                    >
                        {shot.type === 'tiyu' ? (
                            <div className="flex h-full w-full items-center justify-center bg-bg text-accent">
                                <Sprout className="h-6 w-6" />
                            </div>
                        ) : (
                            <img
                                src={cld(shot.image, 'f_auto,q_auto,c_fill,g_auto,w_200,h_140')}
                                alt={shot.label || `Vista ${index + 1} de ${name}`}
                                className="h-full w-full object-cover"
                                loading="lazy"
                                draggable={false}
                            />
                        )}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default GalleryThumbs;