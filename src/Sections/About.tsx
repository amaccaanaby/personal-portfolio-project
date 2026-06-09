const About = () => {
  return (
    <div className="grid md:grid-cols-[2fr_1fr] gap-8 ">
      <div className="shadow-[0_0_10px_rgba(0,0,0,0.10)] flex flex-col gap-4 bg-white rounded-4xl p-6 hover:scale-102 transition-transform duration-300">
        <p className="text-sm text-gray-500">About me</p>
        <h2 className="text-4xl font-medium">Building products that feel simple, modern, and human.</h2>
        <p>I enjoy transforming Figma designs into scalable and reusable frontend systems. My background in photography also shapes how I approach visual storytelling, spacing, and aesthetics.</p>
      </div>
      <div className="flex flex-col gap-8 rounded-4xl bg-black text-white p-6 hover:scale-102 transition-transform duration-300">
        <p className="text-gray-400 text-sm">Focus Area</p>
        <h2 className="text-4xl font-medium">Frontend + UI/UX</h2>
            <ul className="text-gray-300 list-disc pl-5 flex flex-col gap-4">
                <li>React + TypeScript</li>
                <li>Tailwind CSS</li>
                <li>Figma to Code</li>
                <li>Visual Storytelling</li>
            </ul>
        </div>
    </div>
  );
};

export default About;