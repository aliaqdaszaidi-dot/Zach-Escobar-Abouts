export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="space-y-4">
            <div className="inline-block px-4 py-2 rounded-lg bg-card border border-white/10">
              <span className="text-xs font-display font-bold text-accent">King of Escobars</span>
            </div>
            <h1 className="heading-display text-balance">
              Gaming Developer &<br />
              <span className="text-accent-blue">MMORPG Specialist</span>
            </h1>
            <p className="text-lg text-foreground/70 leading-relaxed max-w-lg">
              Crafting immersive multiplayer worlds. Building communities. Leading with strategy and vision.
            </p>
          </div>

          <div className="flex gap-4 pt-4">
            <a
              href="#projects"
              className="px-6 py-3 rounded-lg bg-primary text-black font-bold hover:bg-primary/90 transition-colors"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-lg border border-primary/30 text-primary hover:bg-primary/10 transition-colors"
            >
              Get in Touch
            </a>
          </div>

          <div className="flex gap-6 pt-8 text-sm">
            <div>
              <p className="text-primary font-bold text-xl">5+</p>
              <p className="text-foreground/60">Years Gaming Dev</p>
            </div>
            <div>
              <p className="text-primary font-bold text-xl">10K+</p>
              <p className="text-foreground/60">Players Managed</p>
            </div>
            <div>
              <p className="text-primary font-bold text-xl">50+</p>
              <p className="text-foreground/60">Projects Led</p>
            </div>
          </div>
        </div>

        <div className="relative hidden md:block">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-3xl" />
          <div className="relative glass rounded-2xl p-8 space-y-4">
            <div className="space-y-2">
              <p className="text-primary font-display font-bold">Current Focus</p>
              <p className="text-foreground/70">
                Leading high-fantasy MMORPG communities with complex server architectures and immersive RP systems.
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-accent font-display font-bold">Tech Stack</p>
              <div className="flex flex-wrap gap-2">
                {['MySQL', 'Node.js', 'Godot 4', 'AndroidIDE', 'React'].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs bg-card rounded-full border border-white/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
