import { Maximize2 } from 'lucide-react';
import { cld } from '../../utils/cloudinary';
import TiyuMascot from './TiyuMascot';

function Screen({ name, image, transform, placeholderClass = 'text-sm', is3D = false, mascotSize = 120 }) {
    if (is3D) {
        return (
            <div className="flex h-full w-full items-center justify-center bg-bg">
                <TiyuMascot size={mascotSize} greet />
            </div>
        );
    }

    const src = transform ? cld(image, transform) : image;
    return src ? (
        <img
            src={src}
            alt={`Vista previa de ${name}`}
            className="h-full w-full object-cover"
            loading="lazy"
        />
    ) : (
        <div
            className={`flex h-full items-center justify-center px-2 text-center font-display font-semibold leading-snug text-border ${placeholderClass}`}
        >
            {name}
        </div>
    );
}

function DeviceMockup({ name, image, mobileImage, is3D = false, onExpandDesktop, onExpandPhone }) {
    return (
        <div className="relative w-full max-w-[340px]">
            {/* Laptop */}
            <div className="rounded-t-md border-[5px] border-ink bg-ink p-1 shadow-xl">
                <div className="aspect-[16/10.5] w-full overflow-hidden rounded-[3px] bg-bg">
                    <Screen
                        name={name}
                        image={image}
                        transform="f_auto,q_auto,w_1000"
                        placeholderClass="text-base"
                        is3D={is3D}
                        mascotSize={150}
                    />
                </div>
            </div>
            <div className="relative h-[8px] rounded-b-[7px] bg-ink">
                <div className="absolute left-1/2 top-0 h-[3px] w-14 -translate-x-1/2 rounded-b-sm bg-black/30" />
            </div>
            <div className="mx-auto h-[3px] w-[72%] rounded-b-md bg-ink/60" />

            {onExpandDesktop && (
                <button
                    type="button"
                    onClick={onExpandDesktop}
                    aria-label={`Ampliar vista de computadora de ${name}`}
                    title="Ampliar computadora"
                    className="absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-lg bg-ink/70 text-white backdrop-blur transition-colors hover:bg-ink"
                >
                    <Maximize2 className="h-3.5 w-3.5" />
                </button>
            )}

            {/* Phone overlay */}
            <button
                type="button"
                onClick={onExpandPhone}
                aria-label={onExpandPhone ? `Ampliar vista de teléfono de ${name}` : undefined}
                title={onExpandPhone ? 'Ampliar teléfono' : undefined}
                className={`absolute -bottom-4 -left-7 w-[78px] shrink-0 rounded-[15px] border-[3px] border-ink bg-ink text-left shadow-lg transition-transform ${onExpandPhone ? 'cursor-pointer hover:scale-[1.03]' : ''
                    }`}
            >
                <div className="absolute left-1/2 top-0 z-10 h-[7px] w-7 -translate-x-1/2 rounded-b-sm bg-ink" />
                <div className="aspect-[9/19] w-full overflow-hidden rounded-[11px] bg-bg">
                    <Screen
                        name={name}
                        image={mobileImage}
                        transform="f_auto,q_auto,c_fill,ar_9:19,g_auto,w_600"
                        placeholderClass="text-[9px]"
                        is3D={is3D}
                        mascotSize={70}
                    />
                </div>
                <div className="absolute bottom-[3px] left-1/2 h-[3px] w-5 -translate-x-1/2 rounded-full bg-white/50" />
            </button>
        </div>
    );
}

export default DeviceMockup;