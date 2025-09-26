export default function Index() {
    return (
        <section className="h-fit w-full transition-all duration-1000 bg-[#010d16]">
            <div className="container mx-auto px-6 py-12 flex flex-col items-center justify-center gap-8">
                <h1 className="text-sm md:text-lg lg:text-3xl text-white font-bold">SOBRE MÍ</h1>
                
                <p className="paragraph">
                    Soy <span className="highlight">desarrollador frontend en crecimiento</span>, con experiencia en{" "}
                    <span className="highlight">React, Next.js, TypeScript y Tailwind CSS</span>, y conocimientos en{" "}
                    <span className="highlight">Node.js, Express.js, Nest.js y bases de datos SQL</span> para el backend.
                </p>

                <p className="paragraph">
                    He <span className="highlight">colaborado en el desarrollo y mantenimiento de componentes en entornos reales</span>, participando en proyectos en producción,
                    trabajando en equipo para entregar interfaces modernas, optimizadas y
                    alineadas a requerimientos de negocio.
                </p>
                <p className="paragraph">
                    Me mantengo en constante aprendizaje, explorando nuevas herramientas y metodologías para aportar
                    <span className="highlight"> soluciones creativas, escalables y fáciles de mantener</span>.
                </p>
            </div>
        </section>
    )
}
