"use client";

const divider = "· ".repeat(42);

const asciiArt = String.raw`
   _         _             _              
  /_\   __ _| | ____ _ ___| |__           
 //_\\ / _\` | |/ / _\` / __| '_ \          
/  _  \ (_| |   < (_| \__ \ | | |         
\_/ \_/\__,_|_|\_\__,_|___/_| |_|         
                                          
   ___           _    __       _ _        
  / _ \___  _ __| |_ / _| ___ | (_) ___   
 / /_)/ _ \| '__| __| |_ / _ \| | |/ _ \  
/ ___/ (_) | |  | |_|  _| (_) | | | (_) | 
\/    \___/|_|   \__|_|  \___/|_|_|\___/  
`;

const terminalCommands = [
  {
    command: "$ aakash --intro",
    output: "MS AI @ Carnegie Mellon, \nBS Statistics & Data Science + Mathematics Minor @ UC Santa Barbara",
  },
  {
    command: "$ aakash --focus",
    output: "AI tooling, full-stack systems, ML workflows",
  },
  {
    command: "$ aakash --building",
    output:
      "Developer tools, agent workflows, and web-apps",
  },
];

const HeroSection = () => {
  return (
    <section id="home" className="terminal-hero" aria-label="Aakash Portfolio">
      <div className="terminal-panel terminal-panel-large">
        <div className="terminal-chrome">
          <span className="bg-[#e56f5d]" />
          <span className="bg-[#e7b85f]" />
          <span className="bg-[#6fbf73]" />
          <p>aakash@portfolio:~</p>
        </div>

        <div className="terminal-body terminal-body-large">
          <p className="terminal-welcome">Welcome... v.2026</p>
          <pre className="terminal-divider" aria-hidden="true">{divider}</pre>
          <pre className="terminal-ascii" aria-label="Abstract terminal art">
            {asciiArt}
          </pre>
          <pre className="terminal-divider" aria-hidden="true">{divider}</pre>

          <div className="terminal-command-list">
            {terminalCommands.map((item, index) => (
              <div className="terminal-command" key={item.command}>
                <code className="terminal-prompt">{item.command}</code>
                <code>
                  {item.output}
                  {index === terminalCommands.length - 1 && (
                    <span className="terminal-cursor" aria-hidden="true" />
                  )}
                </code>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
