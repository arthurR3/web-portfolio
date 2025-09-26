
export default async function Index() {
  return (
    <section className="h-fit w-full transition-all duration-1000 bg-[#010d16]">
      <div className="container mx-auto px-6 py-12 flex flex-col items-center justify-center gap-8">
        <h1 className="text-4xl text-white font-bold">HABILIDADES</h1>

        <div className="relative w-full py-12">
          <div className="animate-slide flex h-12 w-full gap-12">
            {Array.from({ length: 4 }).map((_, idx) =>
              tools.map((tool, index) => (
                <div
                  key={`${idx}-${index}`}
                  className="relative flex items-center justify-center w-20 h-20 bg-gray-100/10 backdrop-blur-[1px] border border-green-400/20 rounded-2xl shadow-lg hover:scale-105 transition-transform"
                >
                  <img
                    src={tool.icon}
                    alt={tool.name}
                    className="w-14 h-14 object-contain"
                  />
                </div>
              )))}
          </div>
        </div>
        <div className="flex flex-col gap-6 items-center justify-center">
          <p className="text-gray-400 text-sm md:text-lg lg:text-xl text-center">
            Estas son algunas de las tecnologías y herramientas con las que he trabajado y
            continúo aprendiendo para mejorar mis habilidades como desarrollador Front-end.
          </p>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl">
            {softSkills.map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 border border-gray-400/40 rounded-full text-white text-sm md:text-lg font-medium hover:bg-gray-100/10 transition"
              >
                {skill.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}




const tools: {
  name: string, icon: string
}[] = [
    { name: "React", icon: "/images/react-icon.svg" },
    { name: "Next.js", icon: "/images/next2-icon.svg" },
    { name: "TypeScript", icon: "/images/ts-icon.svg" },
    { name: "JavaScript", icon: "/images/js-icon.svg" },
    { name: "HTML5", icon: "/images/html-icon.svg" },
    { name: "TailwindCSS", icon: "/images/tailwindcss-icon.svg" },
    { name: "Nest.js", icon: "/images/nest-icon.svg" },
    { name: "SQL", icon: "/images/sql-icon.svg" },
    { name: "Node.js", icon: "/images/nodejs-icon.svg" },
    { name: "Git", icon: "/images/git-icon.svg" },
    { name: "Express.js", icon: "/images/express.jpg" },
    /* { name: "Stripe API", icon: "/images/stripe.png" }, */
    { name: "JIRA", icon: "/images/jira-icon.svg" },
  ];

const softSkills: { name: string }[] = [
  { name: "Trabajo en equipo" },
  { name: "Comunicación efectiva" },
  { name: "Adaptabilidad" },
  { name: "Resolución de problemas" },
  { name: "Gestión del tiempo" },
  { name: "Colaboración" },
  { name: "TypeScript" },
  { name: "JavaScript" },
  { name: "Tailwind CSS" },
  { name: "React / Next.js" },
  { name: "Express.js" },
  { name: "Diseño responsivo" },
  { name: "Feature-based" },
  { name: "Git" },
  { name: "Jira" },
  { name: "Node.js" },
];
