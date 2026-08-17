import { FaGithub, FaLinkedin } from "react-icons/fa";
import { socialLinks } from "../../data/socialLinks";
import SystemClock from "../../components/ui/SystemClock";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-gray-800 bg-[#111827]/90 backdrop-blur-md">
      <div className="section-container flex items-center justify-between py-5">
        <div>
          <h1 className="text-xl font-bold">ENGINEERING COMMAND CENTER</h1>

          <p className="terminal-font text-xs text-green-500">STATUS: ONLINE</p>
        </div>

        <div className="flex gap-6">
          <a href="#projects">Projects</a>

          <a href="#experience">Experience</a>

          <a href="#roadmap">Roadmap</a>

          <a
            href={socialLinks.github}
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaGithub />
          </a>

          <a
            href={socialLinks.linkedin}
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaLinkedin />
          </a>
          <SystemClock />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
