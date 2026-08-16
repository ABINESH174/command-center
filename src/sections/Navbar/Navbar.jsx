import { FaGithub, FaLinkedin } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-gray-800 bg-[#111827]/90 backdrop-blur-md">
      <div className="section-container flex items-center justify-between py-5">
        <h1 className="text-xl font-bold">COMMAND CENTER</h1>

        <div className="flex gap-6">
          <a href="#projects">Projects</a>

          <a href="#experience">Experience</a>

          <a href="#roadmap">Roadmap</a>

          <a href="#">
            <FaGithub />
          </a>

          <a href="#">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
