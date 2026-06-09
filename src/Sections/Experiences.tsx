const experiences = [
  {
    role: "Software Engineer Intern",
    company: "Inotech Group",
    period: "Feb 2026 – Present",
    desc: "Contributing to the frontend development of a Project Management & Task Management web app.",
  },
  {
    role: "Co-Founder",
    company: "Local Photo Project",
    period: "Jul 2022 – Feb 2026",
    desc: "Managed client communication, product styling, photography, and editing for F&B brands.",
  },
  {
    role: "Creative Media Team",
    company: "Binus Preneur",
    period: "2024",
    desc: "Designed promotional content and edited event videos for Instagram campaigns Bazaarian and Breeliance Event.",
  },
];

const Experiences = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <p className="text-sm text-gray-500">Career Journey</p>
        <h2 className="text-5xl font-medium">Experience</h2>
      </div>
      <div>
        {experiences.map((item, index) => (
          <div key={index} className="border-l-2 border-gray-300 pl-6 py-4 relative">
            <div className="absolute -left-2 top-4 w-4 h-4 bg-white border border-gray-200 rounded-full"></div>
            <h3 className="text-xl font-semibold">{item.role} @ {item.company}</h3>
            <p className="text-sm text-gray-500">{item.period}</p>
            <p className="text-gray-600 mt-2">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experiences;