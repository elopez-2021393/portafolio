import { useState } from 'react';
import { User, Mail, Pencil, Send, Copy, MapPin } from 'lucide-react';

const CONTACT_EMAIL = 'esdras14lopez@gmail.com';

function GitHubIcon({ className }) {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
            <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.09 3.29 9.4 7.86 10.93.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.71.08-.71 1.16.08 1.78 1.19 1.78 1.19 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.76.12 3.05.74.8 1.19 1.83 1.19 3.09 0 4.42-2.69 5.4-5.25 5.68.41.36.78 1.08.78 2.18 0 1.57-.01 2.84-.01 3.23 0 .31.21.68.8.56A10.52 10.52 0 0 0 23.5 12c0-6.27-5.23-11.5-11.5-11.5Z" />
        </svg>
    );
}

function LinkedInIcon({ className }) {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
            <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM2.5 9h5v13h-5V9ZM10 9h4.8v1.78h.07c.67-1.26 2.3-2.6 4.73-2.6 5.06 0 6 3.33 6 7.66V22h-5v-6.1c0-1.46-.03-3.34-2.04-3.34-2.04 0-2.35 1.6-2.35 3.24V22h-5V9Z" />
        </svg>
    );
}

const CONTACT_METHODS = [
    {
        label: 'Correo',
        value: CONTACT_EMAIL,
        href: `mailto:${CONTACT_EMAIL}`,
        icon: Mail,
        copy: true,
    },
    {
        label: 'GitHub',
        value: '@elopez-2021393',
        href: 'https://github.com/elopez-2021393',
        icon: GitHubIcon,
    },
    {
        label: 'LinkedIn',
        value: '@esdras-lópez',
        href: 'https://www.linkedin.com/in/esdras-lópez-457b083a7/',
        icon: LinkedInIcon,
    },
    {
        label: 'Ubicación',
        value: 'Ciudad de Guatemala',
        icon: MapPin,
    },
];

function Contact() {
    const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
    const [copied, setCopied] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const subject = encodeURIComponent(form.subject || `Contacto desde el portafolio — ${form.name}`);
        const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
        window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    };

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(CONTACT_EMAIL);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch {
        }
    };

    return (
        <section id="contact" className="bg-surface px-6 py-24">
            <div className="mx-auto max-w-5xl">
                <p className="font-mono text-xs uppercase tracking-widest text-accent">contact.sh</p>
                <h2 className="mt-3 font-display text-3xl font-semibold text-ink md:text-4xl">
                    Contacto
                </h2>
                <p className="mt-4 max-w-xl text-muted">
                    ¿Tenés un proyecto en mente o una oportunidad para conversar?
                    Escribime y te respondo lo antes posible.
                </p>
                <p className="mt-2 font-mono text-sm text-muted">
                    Ubicación: <span className="text-ink">Ciudad de Guatemala</span>
                </p>

                <form onSubmit={handleSubmit} className="mt-10 grid gap-5 md:grid-cols-2">
                    <div className="flex flex-col gap-5">
                        <label className="flex items-center gap-3 rounded-md border border-border bg-bg px-4 py-3 transition-colors focus-within:border-accent">
                            <User className="h-5 w-5 shrink-0 text-muted" />
                            <input
                                name="name"
                                type="text"
                                required
                                value={form.name}
                                onChange={handleChange}
                                placeholder="Nombre *"
                                className="w-full bg-transparent text-ink outline-none placeholder:text-muted"
                            />
                        </label>

                        <label className="flex items-center gap-3 rounded-md border border-border bg-bg px-4 py-3 transition-colors focus-within:border-accent">
                            <Mail className="h-5 w-5 shrink-0 text-muted" />
                            <input
                                name="email"
                                type="email"
                                required
                                value={form.email}
                                onChange={handleChange}
                                placeholder="E-mail *"
                                className="w-full bg-transparent text-ink outline-none placeholder:text-muted"
                            />
                        </label>

                        <label className="flex items-center gap-3 rounded-md border border-border bg-bg px-4 py-3 transition-colors focus-within:border-accent">
                            <Pencil className="h-5 w-5 shrink-0 text-muted" />
                            <input
                                name="subject"
                                type="text"
                                required
                                value={form.subject}
                                onChange={handleChange}
                                placeholder="Asunto *"
                                className="w-full bg-transparent text-ink outline-none placeholder:text-muted"
                            />
                        </label>
                    </div>

                    <textarea
                        name="message"
                        required
                        rows={7}
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Mensaje *"
                        className="resize-none rounded-md border border-border bg-bg px-4 py-3 text-ink outline-none transition-colors focus:border-accent placeholder:text-muted"
                    />

                    <button
                        type="submit"
                        className="mt-2 inline-flex w-fit items-center gap-2 rounded-full bg-accent px-6 py-3 font-mono text-sm font-medium text-white transition-colors hover:bg-accent-dark md:col-span-2"
                    >
                        <Send className="h-4 w-4" />
                        Enviar mensaje
                    </button>
                </form>

                <div className="mt-16">
                    <h3 className="font-display text-xl font-semibold text-ink">
                        O si prefieres...
                    </h3>

                    <div className="mt-6 grid gap-4 sm:grid-cols-2">
                        {CONTACT_METHODS.map((method) => {
                            const Icon = method.icon;
                            const isExternal = method.href && !method.href.startsWith('mailto:');
                            const cardClassName =
                                'flex items-center gap-4 rounded-lg border border-border bg-bg/40 p-4 transition-colors' +
                                (method.href ? ' hover:border-accent' : '');

                            const content = (
                                <>
                                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-bg text-ink">
                                        <Icon className="h-5 w-5" />
                                    </span>
                                    <span>
                                        <span className="block font-mono text-xs text-muted">{method.label}</span>
                                        <span className="mt-0.5 flex items-center gap-1.5 font-mono text-sm text-accent">
                                            {method.value}
                                            {method.copy && (
                                                <button
                                                    type="button"
                                                    onClick={(event) => {
                                                        event.preventDefault();
                                                        handleCopy();
                                                    }}
                                                    className="text-muted transition-colors hover:text-accent"
                                                    aria-label="Copiar correo"
                                                >
                                                    <Copy className="h-3.5 w-3.5" />
                                                </button>
                                            )}
                                        </span>
                                    </span>
                                </>
                            );

                            if (!method.href) {
                                return (
                                    <div key={method.label} className={cardClassName}>
                                        {content}
                                    </div>
                                );
                            }

                            return (
                                <a
                                    key={method.label}
                                    href={method.href}
                                    target={isExternal ? '_blank' : undefined}
                                    rel={isExternal ? 'noreferrer' : undefined}
                                    className={cardClassName}
                                >
                                    {content}
                                </a>
                            );
                        })}
                    </div>

                    {copied && (
                        <p className="mt-3 font-mono text-xs text-accent">Correo copiado ✓</p>
                    )}
                </div>
            </div>
        </section>
    );
}

export default Contact;