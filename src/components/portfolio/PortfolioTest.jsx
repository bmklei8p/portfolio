import ProjectCard from "./PortfolioCard"




const PortfolioTest = () => {
    const projectsList = [
        {
            title: "Fomore",
            imageUrl: "",
            info: "lorem epsum blah blah blah",
            techStack: "React, FastApi, MongoDB",
            date: "December, 2022",
            url: "http://fomore.azurewebsites.net"
        },
        {
            title: "Formula 1 Pitstop",
            imageUrl: "",
            info: "lorem",
            techStack: "React, SpringBoot, Postgres",
            date: "July, 2023",
            url: "https://formula_1_pitstop.azurewebsites.net",
        },
        {
            title: "B.O.S.S. App",
            imageUrl: "",
            info: "Lorem",
            techStack: "React, Srping Boot, Postgres",
            date: "August, 2023",
            url: "",
        },
    ]

    return (
        <>
            {projectsList.map((project) => (
                <ProjectCard title={project.title} imageUrl={project.imageUrl}
                info={project.info} techStack={project.techStack} date={project.date} url={project.url} />
            ))
            }
        </>
    )
}

export default PortfolioTest