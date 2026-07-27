import { useEffect, useRef, useState } from 'react';

/**
 * Observa un elemento y marca `visible = true` la primera vez que entra
 * en el viewport. Pensado para animaciones de aparición al hacer scroll.
 */
export function useReveal({ threshold = 0.15, rootMargin = '0px 0px -10% 0px' } = {}) {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const node = ref.current;
        if (!node) return undefined;

        // Si el navegador no soporta IntersectionObserver, mostramos el
        // contenido de inmediato en lugar de dejarlo oculto.
        if (typeof IntersectionObserver === 'undefined') {
            setVisible(true);
            return undefined;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.unobserve(node);
                }
            },
            { threshold, rootMargin }
        );

        observer.observe(node);
        return () => observer.disconnect();
    }, [threshold, rootMargin]);

    return [ref, visible];
}

export default useReveal;