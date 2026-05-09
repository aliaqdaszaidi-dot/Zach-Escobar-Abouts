export default function About() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-1">
            <h2 className="heading-md mb-2">About Me</h2>
            <div className="w-12 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
          </div>

          <div className="md:col-span-2 space-y-6">
            <p className="text-lg text-foreground/70 leading-relaxed">
              I am a passionate gamer and dedicated developer deeply immersed in the world of online gaming. My expertise lies in the MMORPG and Roleplay (RP) sectors, where I focus on building and managing immersive, community-driven environments.
            </p>

            <p className="text-lg text-foreground/70 leading-relaxed">
              Whether it&apos;s navigating complex virtual economies or leading large-scale alliances, I thrive on the strategy and social dynamics that only massive multiplayer worlds can offer. My technical foundation in server administration, database management, and system design enables me to bring ambitious visions to life.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 pt-6">
              <div className="glass rounded-lg p-4">
                <p className="text-primary font-display font-bold mb-2">Server Administration</p>
                <p className="text-sm text-foreground/60">
                  Expert in managing complex backend systems, MySQL databases, and server configurations.
                </p>
              </div>
              <div className="glass rounded-lg p-4">
                <p className="text-accent font-display font-bold mb-2">Project Leadership</p>
                <p className="text-sm text-foreground/60">
                  Leading gaming syndicates and alliances through strategic management and community building.
                </p>
              </div>
              <div className="glass rounded-lg p-4">
                <p className="text-primary font-display font-bold mb-2">Custom Design</p>
                <p className="text-sm text-foreground/60">
                  Crafting unique UI/UX and lore-heavy systems for medieval and modern roleplay servers.
                </p>
              </div>
              <div className="glass rounded-lg p-4">
                <p className="text-accent font-display font-bold mb-2">Mobile Development</p>
                <p className="text-sm text-foreground/60">
                  Active in mobile gaming with Godot 4 and AndroidIDE for optimized gaming experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
