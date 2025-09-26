
interface NavbarListItemProps {
    url: string;
    label: string;
    className?: string;
}


export const NavbarListItem: NavbarListItemProps[] = [
    {
        url: "/",
        label: "Inicio",
    },
    {
        url: "/skills",
        label: "Hablidades",
    },
    {
        url: "/projects",
        label: "Proyectos",
    },
    {
        url: "#experience",
        label: "Experiencia",
    },
    {
        url: "#contact",
        label: "Contacto",
    },
]