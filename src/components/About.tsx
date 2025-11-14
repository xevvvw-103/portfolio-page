import React, { useState, useEffect } from "react";

const AboutSection: React.FC = () => {
  const [typedText, setTypedText] = useState<string>("");

  const fullText = `cat experience.txt

EDUCATION:
University of British Columbia | 2019/09 - 2024/05
BSc. Computer Science

WORK EXPERIENCE:
Androvega Software Ltd. | 2025/03 - Present
Software Developer | Vancouver, BC

Learnwise Solutions Inc.| 2024/07 - 2024/12
Software System Administrator | Vancouver, BC

Copperleaf Technologies Inc. (IFS) | 2022/09 - 2023/05
Software Developer Co-op | Vancouver, BC`;

  const typingSpeed = 30;

  useEffect(() => {
    if (typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1));
      }, typingSpeed);
      return () => clearTimeout(timeout);
    } else {
      const restartTimeout = setTimeout(() => {
        setTypedText("");
      }, 10000);
      return () => clearTimeout(restartTimeout);
    }
  }, [typedText, fullText]);

  return (
    <section id="about" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <div className="bg-gray-900 text-gray-100 h-[550px] rounded-xl overflow-hidden shadow-lg border border-gray-700 transition-all duration-300 ease-out hover:shadow-xl hover:-translate-y-1 flex flex-col">
            <div className="relative flex items-center p-4 bg-gray-800 rounded-t-xl">
              <div className="flex space-x-2 z-10">
                <span className="w-3 h-3 bg-red-400 rounded-full"></span>
                <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
                <span className="w-3 h-3 bg-green-400 rounded-full"></span>
              </div>
              <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center">
                <span className="text-sm font-mono text-green-400">
                  spike@website: ~/portfolio
                </span>
              </div>
            </div>

            <div className="flex-grow p-6 font-mono text-green-400 text-sm overflow-auto">
              <pre className="whitespace-pre-wrap">
                <span className="text-green-400">spike@website</span>:
                <span className="text-blue-400">~</span>$ {typedText}
                <span className="animate-blink">_</span>
              </pre>
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                About Me
              </h2>
            </div>

            <div className="space-y-6 text-gray-700">
              <p className="text-lg leading-relaxed">
                I graduated from UBC with a BSc. in Computer Science, where my
                coursework spanned from low-level computer fundamentals to
                high-level programming principles. Embracing the AI revolution,
                I proactively integrate cutting-edge AI tools into my daily
                development workflow to enhance productivity and code quality.
              </p>

              <p className="text-lg leading-relaxed">
                As a professional software developer, I've successfully launched
                a commercial website at{" "}
                <a
                  href="https://www.pizzagarden.ca/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-600 underline"
                >
                  pizzagarden.ca
                </a>
                , handling over 500K+ visits weekly. I've built and restructured
                enterprise platforms for operations management and sales
                analytics, streamlining business operations and supporting
                data-driven decision-making. Throughout my academic and
                professional journey, I've built diverse projects leveraging a
                wide range of technologies, allowing me to transform complex
                problems into elegant, real-world solutions.
              </p>

              <p className="text-lg leading-relaxed">
                Beyond coding, I stay active at the gym, enjoy cinema
                experiences of all genres, and voluntarily contribute to online
                gaming communities through open-source development.
              </p>

              <div className="mt-8 w-20 h-1 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 rounded-full"></div>
            </div>

            <div className="pt-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center bg-blue-500 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-600 transition-colors duration-200 shadow-sm hover:shadow-md"
                >
                  View Projects
                </a>
                <a
                  href="/Kerry_Zhang_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center border-2 border-blue-500 text-blue-500 py-3 px-6 rounded-lg font-medium hover:bg-blue-50 transition-colors duration-200"
                >
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
