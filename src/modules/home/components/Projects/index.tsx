import Image from 'next/image'
import ProjectCard, { ProjectsProps } from './ProjectCard'

export default async function Index() {
    return (
        <section className='h-auto py-16 px-4 sm:px-6 lg:px-8 bg-[#000205]'>
            <div className="container mx-auto flex flex-col items-center justify-center gap-10">
                <h1 className="text-4xl text-white font-bold">PROYECTOS</h1>
                <div className='grid md:grid-cols-2 gap-8'>
                    {projects.map((project, index) => (
                        <ProjectCard  key={index}  project={project}/>
                    ))}
                </div>
            </div>
        </section>
    )
}

const projects: ProjectsProps[] = [
    {
        title: "Sistema de Gestión de Citas y Reservaciones para Salón de Belleza",
        description: "Enfocada en optimizar la gestión de citas, promociones y clientes. El sistema permite a los usuarios agendar servicios en línea, recibir recordatorios automáticos y realizar pagos de manera segura.",
        image: "/modern-ecommerce-interface.png",
        technologies: ["React.js", "TypeScript", "Tailwind CSS", "Express.js", "Node.js", "Stripe API", "MySQL", "Cloudinary", "Jest", "React Native", "Expo Go", "PWA"],
        liveUrl: "#",
        githubUrl: "#",
    },
    {
        title: "E-commerce de Accesorios para Mascotas",
        description: "Aplicación web full-stack para la venta de accesorios de mascotas, con funcionalidades de catálogo de productos, carrito de compras, gestión de usuarios y procesamiento de pedidos simulando el flujo real de una tienda en línea.",
        image: "/analytics-dashboard.png",
        technologies: ["Laravel", "PHP", "MySQL", "Boostrap", "Cloudinary"],
        liveUrl: "#",
        githubUrl: "#",
    },
    /* {
        title: "Task Management App",
        description: "Aplicación de gestión de tareas con colaboración en tiempo real y notificaciones push.",
        image: "/task-management-app.png",
        technologies: ["Vue.js", "Firebase", "PWA", "Tailwind"],
        liveUrl: "#",
        githubUrl: "#",
    },
    {
        title: "Portfolio Website",
        description: "Sitio web de portafolio responsive con animaciones suaves y optimización SEO.",
        image: "/modern-portfolio-website.png",
        technologies: ["Gatsby", "GraphQL", "Framer Motion", "CMS"],
        liveUrl: "#",
        githubUrl: "#",
    }, */
]
