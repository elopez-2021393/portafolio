import { useReveal } from '../../hooks/useReveal';

/**
 * Envuelve una sección para que aparezca con un fade + slide sutil al
 * entrar en pantalla. Respeta `prefers-reduced-motion` (ver index.css).
 */
function Reveal({ children, as: Tag = 'div', delay = 0, className = '' }) {
    const [ref, visible] = useReveal();

    return (
        <Tag
            ref={ref}
            className={`reveal ${visible ? 'reveal-visible' : ''} ${className}`.trim()}
            style={{ transitionDelay: visible ? `${delay}ms` : '0ms' }}
        >
            {children}
        </Tag>
    );
}

export default Reveal;