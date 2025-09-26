import Image from "next/image";


export interface ProjectsProps {
    title: string;
    description: string;
    image: string;
    technologies: string[];
    liveUrl: string;
    githubUrl: string;
}[]


export default function ProjectCard({ project }: { project: ProjectsProps }) {
    return (
        <div className='group border border-gray-800 bg-gray-900/50 rounded-lg hover:shadow-lg transition-all duration-300 overflow-hidden backdrop-blur-md'>
            <div className='relative overflow-hidden'>
                <Image
                    alt={project.title}
                    src={'/images/estetica-project1.png'}
                    width={400}
                    height={200}
                    className='w-full h-52 object-contain group-hover:scale-105 transition-transform duration-300'
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className='p-6'>
                <h3 className="text-xl font-semibold text-green-500 mb-2">{project.title}</h3>
                <p className='text-white mb-4'>{project.description}</p>
                <div className='flex flex-wrap gap-2 mb-6'>
                    {project.technologies.map((tech, idx) => (
                        <span
                            key={idx}
                            className='px-3 py-1 text-sm bg-green-800/20 text-gray-300 rounded-full border border-gray-500/30 hover:bg-green-800/50 transition'>
                            {tech}
                        </span>
                    ))}
                </div>
                <div className='flex gap-3'>
                    <a href="#" className='px-4 py-2 bg-green-800 text-white rounded-lg hover:bg-blue-700 transition'>Ver Proyecto</a>
                    <a href="#" className='px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition'>Código Fuente</a>
                </div>
            </div>
        </div>
    )
}
