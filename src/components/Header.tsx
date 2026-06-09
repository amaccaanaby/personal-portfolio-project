import { useState } from "react";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        ["About Me", "about"],
        ["Experiences", "experiences"],
        ["Projects", "projects"],
        ["Contact", "contact"],
    ];

    const scrollToSection = (id: string) => {
        document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
        });
    };

    return (
    <nav className="fixed top-4 left-0 right-0 z-50 px-4 m-4 rounded-2xl border-black/5 bg-white/70 backdrop-blur-sm shadow-md">
        <div className="p-4 flex items-center justify-between">
            <button
            onClick={() => scrollToSection("hero")}
            className="font-semibold text-gray-700 tracking-tight text-sm hover:opacity-60 transition">Amacca Anaby Anandanny</button>

            {/* Desktop menu */}
            <div className="hidden md:flex gap-2 text-sm text-gray-500">
            {navItems.map(([label, id]) => (
                <button
                    key={id}
                    onClick={() => scrollToSection(id)}
                    className="px-4 py-2 rounded-full hover:bg-black hover:text-white transition-all duration-300"
                    >
                    {label}
                </button>
            ))}
            </div>

            {/* Mobile hamburger */}
            <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col gap-1.5"
>
                <span className={`h-0.5 w-6 bg-black transition ${isOpen ? "translate-y-2 rotate-45" : ""}`} />
                <span className={`h-0.5 w-6 bg-black transition ${isOpen ? "opacity-0" : ""}`} />
                <span className={`h-0.5 w-6 bg-black transition ${isOpen ? "-translate-y-2 -rotate-45" : ""}`} />
            </button>
        </div>

    {/* Mobile dropdown */}
    {isOpen && (
        <div className="mx-6 mb-4 rounded-2xl bg-white p-3 shadow-lg md:hidden">
        {navItems.map(([label, id]) => (
            <button
            key={id}
            onClick={() => {
                scrollToSection(id);
                setIsOpen(false);
            }}
            className="block w-full rounded-xl px-4 py-3 text-left text-sm text-gray-600 hover:bg-gray-100 transition"
            >
            {label}
            </button>
        ))}
        </div>
    )}
    </nav>
    )
}

export default Header;