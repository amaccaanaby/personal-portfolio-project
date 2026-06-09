type HeroSectionProps = {
  text1: string;
  text2: string;
  text3: string;
};

const HeroSection = ({text1, text2, text3 }: HeroSectionProps) => {

    return(
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 md:h-125">

      <div className="flex flex-col justify-center gap-6 md:pr-8 p-4 w-full order-1 md:order-1 md:h-full">
        <p className="mx-auto md:mx-0 rounded-full min-h-7 w-fit px-4 flex justify-center items-center bg-white text-xs sm:text-sm font-light shadow-sm">
          {text1}
        </p>
        <h1 className="text-gray-700 font-medium text-5xl md:text-6xl">
          {text2}
        </h1>
        <p className="font-light leading-8 max-w-xl">
          {text3}
        </p>
      </div>

      <div className="order-2 md:order-2 flex justify-center md:justify-end">
        <div className="relative flex justify-center w-full max-w-105 aspect-square overflow-hidden rounded-4xl hover:scale-102 transition-transform duration-300 shadow-lg">
          <img
            className="w-full h-full border-12 border-white object-cover rounded-4xl shadow-lg"
            src="/images/amaccapic.jpeg"
            alt="Amacca"
          />
          <div className="absolute bottom-6 left-6 flex flex-col gap-2">
            <p className="text-white font-medium">Currently</p>
            <p className="text-white text-2xl font-semibold">Software Engineering Intern</p>
            <p className="text-white font-medium">Inotech Group</p>
          </div>
        </div>
      </div>
    </div>
    )
}

export default HeroSection;