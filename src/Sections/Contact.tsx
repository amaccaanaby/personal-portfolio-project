const Contact = () => {
  return (
    <div className="bg-black p-12 rounded-4xl flex flex-col gap-6">
        <p className="text-gray-400">Let's Connect</p>
        <h1 className="text-4xl font-medium text-white">Continuously exploring new technologies to create products that are both functional and meaningful for users.</h1>
        <div className="flex flex-wrap gap-6">
          <a href="mailto:amacca.anandanny@gmail.com" className="border-[0.5px] px-4 py-2 bg-white text-black hover:bg-black hover:text-white transition-colors duration-300 rounded-full">Email</a>
          <a href="https://www.linkedin.com/in/amaccaanandanny/" className="border-[0.5px] px-4 py-2 bg-black text-white hover:bg-white hover:text-black transition-colors duration-300 rounded-full">LinkedIn</a>
          <a href="https://github.com/amaccaanaby" className="border-[0.5px] px-4 py-2 bg-black text-white hover:bg-white hover:text-black transition-colors duration-300 rounded-full">GitHub</a>
        </div>
    </div>
  );
};

export default Contact;