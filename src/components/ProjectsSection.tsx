import { ProjectCard } from ".";
import fieldbosstracker from "../assets/fieldbosstracker.png";
import towerdefense from "../assets/towerdefense.png";
import gamesetmatch from "../assets/gamesetmatch.png";
import dsl from "../assets/dsl.png";

const ProjectsSection: React.FC = () => {
  const projects = [
    {
      title: "Field Boss Tracker",
      description:
        "A free open-source collaborative tool for an online game community that allows multiple users to edit and share boss spawn timers in real-time.",
      image: fieldbosstracker,
      alt: "Field Boss Tracker",
      tech: ["Vue", "TypeScript", "Node", "Firebase", "Realtime Database"],
      link: "https://xevvvw-103.github.io/tosmEventTracker/",
    },
    {
      title: "Tower Defense Game",
      description:
        "A console-based tower defense game involving a tower defending against waves of enemies. The tower can automatically fire at enemies or shoot manually.",
      image: towerdefense,
      alt: "Tower Defense Game",
      tech: ["C++", "CMake"],
      link: "https://github.com/xevvvw-103/Tower-Defense-Game",
    },
    {
      title: "DSL-A-Language-For-Building-Architecture-Blueprint",
      description:
        "A domain-specific language for architectural blueprint design that simplifies coding for non-programmers through intuitive syntax and real-time visual feedback.",
      image: dsl,
      alt: "Game Set Match",
      tech: [
        "Svelte",
        "JavaScript",
        "ANTLR"
      ],
      link: "https://github.com/xevvvw-103/DSL-A-Language-For-Building-Architecture-Blueprint",
    },
    {
      title: "Game Set Match",
      description:
        "A full-stack SaaS platform to streamline the process of tournament organization and optimize schedules in order to maximize employee engagement in company wide social events.",
      image: gamesetmatch,
      alt: "Game Set Match",
      tech: [
        "React",
        "JavaScript",
        "Java",
        "SpringBoot",
        "Firebase",
        "OAuth",
        "MySQL",
        "Cron Job",
      ],
      link: "https://docs.google.com/document/d/1gPb981baGnvIKa6T4EY-_Ztgl-L1-r41KC1hpq1pUcg/edit?usp=sharing",
    },
  ];

  return (
    <section id="projects" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            My Projects
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Here are some of my academic and personal projects.
          </p>
          <div className="mt-8 w-20 h-1 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 rounded-full mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              alt={project.alt}
              tech={project.tech}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
