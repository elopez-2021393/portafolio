import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X, ChevronLeft, ChevronRight, Laptop, Smartphone } from 'lucide-react';
import { cld } from '../../utils/cloudinary';
import TiyuMascot from './TiyuMascot';

function ProjectLightbox({ shots, index, view, onView, onClose, onNavigate }) {
    useEffect(() => {
        const handleKey = (e) => {
            if (e.key === 'Escape') onClose();
            if (e.key === 'ArrowRight') onNavigate(1);
            if (e.key === 'ArrowLeft') onNavigate(-1);
        };
        document.addEventListener('keydown', handleKey);
        document.body.style.overflow = 'hidden';
        return () => {
            document.removeEventListener('keydown', handleKey);
            document.body.style.overflow = '';
        };
    }, [onClose, onNavigate]);

    const current = shots[index];
    const is3D = current.type === 'tiyu';
    const hasPhone = is3D || Boolean(current.mobileImage);
    const src = view === 'phone' && !is3D ? current.mobileImage : current.image;

    const modal = (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4"
            onClick={onClose}
        >
            <button
                type="button"
                onClick={onClose}
                aria-label="Cerrar"
                className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white transition-colors hover:bg-white/20"
            >
                <X className="h-5 w-5" />
            </button>

            {hasPhone && (
                <div
                    className="absolute left-4 top-4 flex gap-1 rounded-lg bg-white/10 p-1"
                    onClick={(e) => e.stopPropagation()}
                >
                    <button
                        type="button"
                        onClick={() => onView('desktop')}
                        aria-pressed={view === 'desktop'}
                        title="Ver computadora"
                        className={`flex h-8 w-8 items-center justify-center rounded-md transition-colors ${view === 'desktop' ? 'bg-white text-ink' : 'text-white hover:bg-white/20'
                            }`}
                    >
                        <Laptop className="h-4 w-4" />
                    </button>
                    <button
                        type="button"
                        onClick={() => onView('phone')}
                        aria-pressed={view === 'phone'}
                        title="Ver teléfono"
                        className={`flex h-8 w-8 items-center justify-center rounded-md transition-colors ${view === 'phone' ? 'bg-white text-ink' : 'text-white hover:bg-white/20'
                            }`}
                    >
                        <Smartphone className="h-4 w-4" />
                    </button>
                </div>
            )}

            {shots.length > 1 && (
                <>
                    <button
                        type="button"
                        onClick={(e) => {
                            e.stopPropagation();
                            onNavigate(-1);
                        }}
                        aria-label="Anterior"
                        className="absolute left-4 flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white transition-colors hover:bg-white/20"
                    >
                        <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button
                        type="button"
                        onClick={(e) => {
                            e.stopPropagation();
                            onNavigate(1);
                        }}
                        aria-label="Siguiente"
                        className="absolute right-4 flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white transition-colors hover:bg-white/20"
                    >
                        <ChevronRight className="h-5 w-5" />
                    </button>
                </>
            )}

            {is3D ? (
                view === 'phone' ? (
                    <div
                        onClick={(e) => e.stopPropagation()}
                        className="relative h-[420px] w-[210px] max-h-[70vh] rounded-[28px] border-[6px] border-ink bg-ink p-1.5 shadow-2xl"
                    >
                        <div className="absolute left-1/2 top-2.5 z-10 h-[9px] w-16 -translate-x-1/2 rounded-b-md bg-ink" />
                        <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-[22px] bg-white">
                            <TiyuMascot size={160} greet />
                        </div>
                    </div>
                ) : (
                    <div
                        onClick={(e) => e.stopPropagation()}
                        className="flex h-[320px] w-[320px] max-h-[70vh] max-w-full items-center justify-center rounded-md bg-white shadow-2xl"
                    >
                        <TiyuMascot size={260} greet />
                    </div>
                )
            ) : view === 'phone' ? (
                <div
                    onClick={(e) => e.stopPropagation()}
                    className="relative h-[70vh] max-h-[640px] w-auto aspect-[9/19] rounded-[28px] border-[6px] border-ink bg-ink p-1.5 shadow-2xl"
                >
                    <div className="absolute left-1/2 top-2.5 z-10 h-[9px] w-16 -translate-x-1/2 rounded-b-md bg-ink" />
                    <img
                        src={cld(src, 'f_auto,q_auto,c_fill,g_auto,w_900')}
                        alt={current.label || 'Vista ampliada'}
                        className="h-full w-full overflow-hidden rounded-[22px] object-cover"
                    />
                </div>
            ) : (
                <img
                    src={cld(src, 'f_auto,q_auto,w_1800')}
                    alt={current.label || 'Vista ampliada'}
                    onClick={(e) => e.stopPropagation()}
                    className="max-h-[85vh] max-w-full rounded-md object-contain shadow-2xl"
                />
            )}

            {current.label && (
                <span className="absolute bottom-6 left-1/2 -translate-x-1/2 rounded-md bg-black/60 px-3 py-1 font-mono text-xs text-white">
                    {current.label}
                </span>
            )}
        </div>
    );

    return createPortal(modal, document.body);
}

export default ProjectLightbox;