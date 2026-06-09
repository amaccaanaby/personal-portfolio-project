import ProjectSlider from "../components/ProjectSlider";

const projects = [
  {
    title: "Organode: Internal Task & User Management Platform (Inotech Group)",
    status: "In Progress",
    desc: "Frontend development for a project management platform using React, TypeScript, Tailwind CSS, and Vite.",
    images: [
      "/images/organode1.png",
      "/images/organode2.png",
      "/images/organode3.png",
    ]
  },
  {
    title: "VSTravel - University Project",
    status: "Aug 2025",
    desc: "web-based platform for booking travel destinations online. Users can explore destinations, check details, and make reservations easily. Designed with a focus on simplicity and user experience, this project streamlines travel planning into one seamless platform.",
    link: "https://github.com/amaccaanaby/VSTravel",

    images: [
      "/images/vstravel1.png",
      "/images/vstravel2.png",
      "/images/vstravel3.png",
    ]

  },
  {
    title: "Kode Scent - Personal Project",
    status: "Feb 2026 - Mar 2026",
    desc: "Managed client communication, product styling, photography, and editing for F&B brands.",
    link: "https://github.com/amaccaanaby/kode-scent",

    images: [
      "/images/kodescent1.png",
      "/images/kodescent2.png",
      "/images/kodescent3.png",
    ]
  },
];  

const Projects = () => {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-sm text-gray-500">Selected Work</p>
        <h1 className="text-5xl font-medium">Featured Projects</h1>

        <div className="mt-12 flex gap-6 overflow-x-auto hide-scrollbar pb-6">
          {projects.map((project, index) => (
            <div key={index}className="min-w-[85%] md:min-w-130 overflow-hidden p-6 rounded-[2rem] bg-white shadow-sm border border-black/5">

              <div className="relative overflow-hidden h-72 rounded-4xl bg-gray-200">
                {project.images.length > 0 ? (
                  <ProjectSlider images={project.images} />
                ):(
                  <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                    Coming Soon
                  </div>
                )}

                  <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-white/50 shadow-4xl p-5 backdrop-blur-sm">
                    <p className="text-gray-500">{project.status}</p>
                    <p className="font-bold">{project.title}</p>
                  </div>
                </div>

                <div className="p-8 flex flex-col gap-4">
                  <p>{project.desc}</p>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline"
                    >
                      View on GitHub
                    </a>
                  )}
                </div>
            </div>
          ))}
        </div>
    </div>
  );
};

export default Projects;