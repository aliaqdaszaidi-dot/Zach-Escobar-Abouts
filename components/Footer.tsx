export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-white/5 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-display font-bold mb-3">Zach Escobar</h3>
            <p className="text-foreground/60 text-sm">
              Gaming developer and MMORPG specialist crafting immersive experiences.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-3 text-sm">Quick Links</h4>
            <ul className="space-y-2 text-foreground/60 text-sm">
              <li>
                <a href="#about" className="hover:text-primary transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#expertise" className="hover:text-primary transition-colors">
                  Expertise
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-primary transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-3 text-sm">Connect</h4>
            <ul className="space-y-2 text-foreground/60 text-sm">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Discord
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  GitHub
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-foreground/60 text-sm">
            © {currentYear} King of Escobars. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-foreground/60">
            <a href="#" className="hover:text-primary transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
