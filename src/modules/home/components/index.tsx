import Image from "next/image";

export default function Index() {
    return (
        <div className="min-h-screen w-full px-4 pt-20  md:pt-36 md:px-20 bg-[#000205]">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-10 md:gap-6">
                <div className="flex flex-col md:gap-4 max-w-2xl text-center md:text-left">
                    <p className="text-xl text-gray-500">Hola, yo soy</p>
                    <h1 className="text-4xl md:text-5xl font-extrabold">
                        <span className="bg-gradient-to-br bg-clip-text text-transparent to-[#00b162] from-gray-200">
                            José Arturo!
                        </span>
                    </h1>
                    <h1 className="text-xl md:text-3xl text-white font-bold">
                        Desarrollador Front-end
                    </h1>
                    <p className="text-gray-400 text-lg lg:text-xl">
                        Frontend Developer en crecimiento, transformando ideas en proyectos reales
                        y listo para aportar, aprender y superar nuevos desafíos.
                    </p>
                </div>
                <div className="relative flex justify-center md:justify-end md:pr-20">
                    <div className="relative w-60 h-60 md:w-72 md:h-72 rounded-lg shadow-lg hover:scale-105 transition-transform">
                        <Image
                            alt="Foto de perfil"
                            src="https://res.cloudinary.com/dnm7asoe3/image/upload/t_Img_logo/v1756177364/Image_Estetica/3948e0a7-9edd-4144-8d86-9a6c2610c390.png"
                            width={300}
                            height={300}
                            className="object-cover rounded-lg"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
