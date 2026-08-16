import { TypeAnimation } from "react-type-animation";

import { terminalCommands } from "../../data/terminalCommands";

function AnimatedTerminal() {
  const sequence = [];

  terminalCommands.forEach((item) => {
    sequence.push(`$ ${item.command}\n\n${item.output}`);
    sequence.push(2000);
  });

  return (
    <div className="card w-full terminal-font">
      <div className="mb-4 border-b border-gray-700 pb-3">
        <span className="text-green-500">●</span>
        <span className="ml-2 text-gray-400">terminal</span>
      </div>

      <TypeAnimation
        sequence={sequence}
        wrapper="pre"
        speed={70}
        repeat={Infinity}
        className="whitespace-pre-wrap text-green-500"
      />
    </div>
  );
}

export default AnimatedTerminal;
