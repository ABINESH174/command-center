import { FaGithub, FaLinkedin, FaEnvelope, FaTerminal } from "react-icons/fa";
import { socialLinks } from "../../data/socialLinks";

function FooterSection() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="section-container py-16">
      {/* Inline CSS for fast blinking caret */}
      <style>{`
        @keyframes terminal-blink {
          0%, 49%   { opacity: 1; }
          50%, 100% { opacity: 0; }
        }
        .terminal-cursor {
          display: inline-block;
          width: 2px;          /* thin caret */
          height: 1.25em;      /* match text height */
          background: #4ade80; /* green-400 equivalent */
          margin-left: 2px;
          animation: terminal-blink 0.8s step-end infinite;
          vertical-align: text-bottom;
        }
      `}</style>

      {/* Footer Terminal - Grounded CLI frame without Mac window buttons */}
      <div className="terminal-font rounded-xl border border-gray-800 bg-[#111827]/90 p-6 backdrop-blur-md shadow-xl">
        {/* Alternative Header: Minimalist Server Info Bar */}
        <div className="mb-4 flex flex-wrap items-center justify-between border-b border-gray-800/80 pb-3 text-xs">
          <div className="flex items-center gap-3 text-gray-400">
            <span className="flex items-center gap-1.5 text-green-400 font-semibold">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              SYS_ONLINE
            </span>
            <span className="text-gray-600">|</span>
            <span>TTY1</span>
            <span className="text-gray-600">|</span>
            <span className="text-gray-500">LATENCY: 14ms</span>
          </div>

          <div className="text-gray-500 flex items-center gap-1 mt-1 sm:mt-0">
            <FaTerminal className="text-xs text-green-500" />
            <span>bash 5.2</span>
          </div>
        </div>

        {/* Terminal Output Body */}
        <div className="space-y-3 text-sm">
          <p className="text-gray-300">
            <span className="text-green-400">abinesh@command-center</span>
            <span className="text-gray-500">:</span>
            <span className="text-blue-400">~</span>$ exit
          </p>

          {/* Error Line with Blinking Caret Cursor */}
          <p className="text-red-400 font-medium flex items-center gap-1 flex-wrap">
            <span>
              [ERROR] Session termination denied: process 'CONTINUOUS_LEARNING'
              active.
            </span>

            {/* Classic fast terminal blink caret */}
            <span className="terminal-cursor" aria-hidden="true" />
          </p>

          {/* Footer Bottom Bar */}
          <div className="text-gray-400 pt-4 border-t border-gray-800/60 flex flex-wrap items-center justify-between gap-4">
            <p className="text-xs text-gray-500">
              [SYSTEM LOG] &copy; {currentYear} Abinesh. All systems
              operational.
            </p>

            {/* Icons & Tux Easter Egg */}
            <div className="flex items-center gap-4">
              <a
                href={"mailto:" + socialLinks.email}
                className="text-gray-400 hover:text-green-400 transition-colors"
                title="Send Email"
              >
                <FaEnvelope size={18} />
              </a>

              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-400 transition-colors"
                title="GitHub"
              >
                <FaGithub size={18} />
              </a>

              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-400 transition-colors"
                title="LinkedIn"
              >
                <FaLinkedin size={18} />
              </a>

              <div
                title="System Uptime: ∞"
                className="cursor-pointer text-2xl transition-transform hover:scale-125"
              >
                🐧
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterSection;
