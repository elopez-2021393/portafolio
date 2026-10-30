export const projects = [
    {
        name: 'DebuggersEats',
        description:
            'Plataforma de pedidos y gestión de restaurantes con backend de microservicios en Node.js, un servicio de reportes en .NET 8 (EF Core + PostgreSQL), panel admin en React y app móvil en React Native/Expo. Persistencia en MongoDB, PostgreSQL y Redis, todo orquestado con Docker.',
        role: 'Mi rol: Scrum Master y desarrollador full-stack — panel admin (React), app móvil (React Native) y backend (Node.js).',
        tags: ['React', 'React Native', 'Node.js', '.NET 8', 'MongoDB', 'PostgreSQL', 'Redis', 'Docker'],
        status: 'Completado',
        image: null,
        gallery: [
            {
                label: 'Login',
                image: 'https://res.cloudinary.com/divzjcxko/image/upload/v1785103847/loginc_ro90up.png',
                mobileImage: 'https://res.cloudinary.com/divzjcxko/image/upload/v1785105030/screen_pguibc.png',
            },
            {
                label: 'Admin principal',
                image: 'https://res.cloudinary.com/divzjcxko/image/upload/v1785091166/MenuRes_qqftf8.png',
                mobileImage: 'https://res.cloudinary.com/divzjcxko/image/upload/v1785104771/screen_nui5o9.png',
            },
            {
                label: 'Admin de restaurante',
                image: 'https://res.cloudinary.com/divzjcxko/image/upload/v1785091239/ResRol_sa5nyq.png',
                mobileImage: 'https://res.cloudinary.com/divzjcxko/image/upload/v1785104919/screen_fqg4tr.png',
            },
            {
                label: 'Usuario',
                image: 'https://res.cloudinary.com/divzjcxko/image/upload/v1785091285/userRol_pognbe.png',
                mobileImage: 'https://res.cloudinary.com/divzjcxko/image/upload/v1785104982/screen_pf237y.png',
            },
        ],
        links: { demo: 'https://debuggerseats-6d650.web.app/' },
    },
    {
        name: 'ChapinBank',
        description:
            'Proyecto académico de banca con arquitectura de microservicios: autenticación en .NET 8 con EF Core y PostgreSQL, servicios de cuentas y productos en Node.js con MongoDB, y clientes admin/usuario en React con Tailwind. Containerizado con Docker.',
        role: 'Mi rol: colaborador en equipo — implementé el módulo de transferencias (frontend y backend) y documenté la arquitectura de rutas.',
        tags: ['.NET 8', 'Node.js', 'React', 'MongoDB', 'PostgreSQL', 'Docker', 'Microservicios'],
        status: 'Completado',
        image: null,
        gallery: [
            {
                label: 'Login',
                image: 'https://res.cloudinary.com/divzjcxko/image/upload/v1785108373/logincbk_jjqaf1.png',
                mobileImage: 'https://res.cloudinary.com/divzjcxko/image/upload/v1785108441/logincbkt_gkritr.png',
            },
            {
                label: 'Admin principal',
                image: 'https://res.cloudinary.com/divzjcxko/image/upload/v1785108390/superadminc_bwwusb.png',
                mobileImage: 'https://res.cloudinary.com/divzjcxko/image/upload/v1785108391/superadmint_hnaepf.png',
            },
            {
                label: 'Usuario',
                image: 'https://res.cloudinary.com/divzjcxko/image/upload/v1785108417/usuarioc_sbwoao.png',
                mobileImage: 'https://res.cloudinary.com/divzjcxko/image/upload/v1785108392/usercbk_d8dhoc.png',
            },
        ],
        links: { demo: 'https://chapin-bank.vercel.app/' },
    },
    {
        name: 'FeelWeell',
        description:
            'Plataforma de bienestar con microservicios en Node.js, un servicio en .NET 8 y RabbitMQ como cola de mensajes. Incluye un chat con IA (API de OpenAI), panel admin en React y app móvil en React Native con una mascota 3D construida en Three.js. Estado global con Zustand y persistencia en MongoDB.',
        role: 'Mi rol: colaborador en equipo — panel admin en React, autenticación y la mascota 3D interactiva (Tiyú) en Three.js.',
        tags: ['React', 'React Native', 'Node.js', '.NET 8', 'MongoDB', 'RabbitMQ', 'Three.js', 'OpenAI API'],
        status: 'En desarrollo',
        image: null,
        gallery: [
            {
                label: 'Login',
                image: 'https://res.cloudinary.com/divzjcxko/image/upload/v1785110979/loginfwl_idrj3e.png',
                mobileImage: 'https://res.cloudinary.com/divzjcxko/image/upload/v1785110246/screen_oakgxv.png',
            },
            {
                label: 'Admin principal',
                image: 'https://res.cloudinary.com/divzjcxko/image/upload/v1785110973/adminfwl_smovgf.png',
                mobileImage: 'https://res.cloudinary.com/divzjcxko/image/upload/v1785110369/screen_ht99mf.png',
            },
            {
                label: 'Usuario',
                image: 'https://res.cloudinary.com/divzjcxko/image/upload/v1785110984/userfwl_hiqqqj.png',
                mobileImage: 'https://res.cloudinary.com/divzjcxko/image/upload/v1785110434/screen_kyecjy.png',
            },
            {
                label: 'Tiyú',
                type: 'tiyu',
            },
        ],
        links: { demo: '' },
    },
];