export default function Expertise() {
  const expertise = [
    {
      category: 'Technical Skills',
      color: 'text-primary',
      items: ['MySQL & Database Design', 'Server Architecture', 'Backend Systems', 'API Development', 'System Optimization'],
    },
    {
      category: 'Gaming & RP',
      color: 'text-accent',
      items: ['MMORPG Development', 'Roleplay Systems', 'Player Economy Design', 'Faction Management', 'Custom Mechanics'],
    },
    {
      category: 'Tools & Platforms',
      color: 'text-primary',
      items: ['Godot 4', 'AndroidIDE', 'Node.js', 'React', 'MySQL'],
    },
    {
      category: 'Leadership',
      color: 'text-accent',
      items: ['Alliance Management', 'Community Building', 'Strategic Planning', 'Team Leadership', 'Conflict Resolution'],
    },
  ]

  return (
    <section id="expertise" className="py-20 px-6 bg-card/20">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-12">
          <div>
            <h2 className="heading-md mb-2">Expertise & Skills</h2>
            <div className="w-12 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {expertise.map((section) => (
              <div key={section.category} className="glass rounded-lg p-6">
                <p className={`${section.color} font-display font-bold text-lg mb-4`}>
                  {section.category}
                </p>
                <ul className="space-y-2">
                  {section.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-foreground/70">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
