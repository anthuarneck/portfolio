import { RevealOnScroll } from "./RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-28"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition transition-all">
              <h3 className="text-xl font-bold mb-2">Travel Diary</h3>
              <p className="text-gray-400 mb-4 ">
                Travel Diary is a web application that allows users to create
                and manage their travel experiences. Users can register an
                account, log in, and then explore a collection of destinations
                and memories.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "TailwindCSS", "Bootstrap", "bcrypt"].map(
                  (skill, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {skill}
                    </span>
                  )
                )}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://travel-diary-app.netlify.app/"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project
                </a>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition transition-all">
              <h3 className="text-xl font-bold mb-2">AceIt</h3>
              <p className="text-gray-400 mb-4 ">
                AceIt is a community-based mock interviewing web application
                that consolidates the booking, conducting, and feedback
                processes into a single, user-friendly platform.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "TailwindCSS", "ZoomAPI", "CalendlyAPI"].map(
                  (skill, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {skill}
                    </span>
                  )
                )}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://aceitapp.netlify.app/"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project
                </a>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition transition-all">
              <h3 className="text-xl font-bold mb-2">AudioSight</h3>
              <p className="text-gray-400 mb-4 ">AudioSight is a web application integrating the Spotify API to provide users with real-time, dynamic visual representations synchronized with audio features such as bass and melody.</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "TailwindCSS", "Bootstrap", "SpotifyAPI"].map(
                  (skill, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {skill}
                    </span>
                  )
                )}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://audiosightdemo.netlify.app/"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
