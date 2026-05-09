export default function Projects() {
  const projects = [
    {
      title: 'Medieval Fantasy MMORPG Server',
      description: 'Led development of a large-scale RP server with complex hierarchy systems, custom mechanics, and immersive lore.',
      tags: ['MySQL', 'Node.js', 'Game Design', 'Server Admin'],
      status: 'Active',
    },
    {
      title: 'Player Economy System',
      description: 'Designed and implemented a comprehensive virtual economy with trading, taxation, and resource management.',
      tags: ['MySQL', 'Economics', 'Game Balance', 'Systems Design'],
      status: 'Completed',
    },
    {
      title: 'Mobile Gaming Experience',
      description: 'Created mobile-optimized gaming experiences using Godot 4 and AndroidIDE for seamless cross-platform play.',
      tags: ['Godot 4', 'AndroidIDE', 'Mobile Dev', 'Optimization'],
      status: 'Active',
    },
    {
      title: 'Custom Faction System',
      description: 'Built a dynamic faction management system enabling player-driven politics, wars, and alliance mechanics.',
      tags: ['Game Systems', 'Backend', 'Player Engagement', 'Strategic Gameplay'],
      status: 'Active',
    },
    {
      title: 'Community Dashboard',
      description: 'Developed a web-based dashboard for managing server statistics, player data, and administrative controls.',
      tags: ['React', 'Web Development', 'Admin Tools', 'Analytics'],
      status: 'Completed',
    },
    {
      title: 'Lore & UI Design Library',
      description: 'Created a comprehensive custom UI/UX library with medieval-themed components and immersive visual systems.',
      tags: ['UI/UX Design', 'Custom Graphics', 'Brand Design', 'Lore Integration'],
      status: 'Active',
    },
  ]

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-12">
          <div>
            <h2 className="heading-md mb-2">Notable Projects</h2>
            <div className="w-12 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <div
                key={project.title}
                className="glass rounded-lg p-6 hover:bg-card/80 transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="heading-md text-lg group-hover:text-primary transition-colors">{project.title}</h3>
                  <span className={`text-xs font-bold px-2 py-1 rounded ${
                    project.status === 'Active'
                      ? 'bg-primary/20 text-primary'
                      : 'bg-accent/20 text-accent'
                  }`}>
                    {project.status}
                  </span>
                </div>

                <p className="text-foreground/70 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs px-2 py-1 rounded-full bg-card border border-white/10">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
