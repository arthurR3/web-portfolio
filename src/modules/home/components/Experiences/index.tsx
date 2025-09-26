
export default async function index() {

    const Jobs = [
        {
            jobTitle: "Frontend Developer Trainee",
            company: "BluePixel Strategic Innovation S.A. de C.V. | Enero 2025 - Junio 2025",
            desc:"Desarrollo de aplicaciones web utilizando React.js, Next.js, Tailwind CSS y otras tecnologías modernas. Colaboración en equipos ágiles para crear soluciones innovadoras y eficientes."
            
        },
        {
            jobTitle: "Developer React Native | Practicante nivel TSU",
            company: "Innego - Soluciones con Tecnología | Enero 2023 - Mayo 2023",
            desc:"Desarrollo de aplicaciones móviles multiplataforma utilizando React Native. Implementación de interfaces de usuario atractivas y funcionales, optimización del rendimiento y colaboración con diseñadores y otros desarrolladores."
        },
    ];

    return (
        <section className=' min-h-screen py-16 px-4 sm:px-6 lg:px-8 bg-[#000205]'>
            {/* text-transparent bg-clip-text font-bold bg-linear-to-r from-cyan-600 to-emerald-500 */}
            <h1 className="text-4xl text-center mb-12 font-bold text-white">
                EXPERIENCIA
            </h1>
            <div className="container relative mx-auto flex flex-col items-center justify-center gap-10">
                <div className="absolute left-1/2 top-0 h-full w-1 animation-lineFlow"></div>
                {Jobs.map((job, i) => (
                    <div
                        key={i}
                        className={`mb-12 flex items-center w-full ${i % 2 === 0 ? "justify-start" : "justify-end"
                            }`}
                    >
                        <div className="w-1/2 px-6">
                            <div className="bg-[#010d16]  p-4 rounded-lg shadow-md relative">
                                <div
                                    className="absolute w-4 h-4 bg-red-500 rounded-full top-1/2 -translate-y-1/2 border border-white"
                                    style={{ [i % 2 === 0 ? "right" : "left"]: "-30px" }}
                                ></div>

                                <h3 className="font-bold text-lg md:text-xl text-green-500">{job.jobTitle}</h3>
                                <p className="text-white text-sm">{job.company}</p>
                                <p className="text-white mt-2 text-lg">{job.desc}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
