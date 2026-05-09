'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="py-20 px-6 bg-card/20">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="heading-md">Let&apos;s Connect</h2>
            <p className="text-foreground/70 max-w-xl mx-auto">
              Interested in collaborating on gaming projects, discussing MMORPG systems, or exploring new opportunities? I&apos;d love to hear from you.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="glass rounded-lg p-8 space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-bold">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-background border border-white/10 focus:border-primary focus:outline-none transition-colors"
                  placeholder="Your name"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-bold">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-background border border-white/10 focus:border-primary focus:outline-none transition-colors"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-bold">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-background border border-white/10 focus:border-primary focus:outline-none transition-colors resize-none"
                  rows={5}
                  placeholder="Tell me about your project..."
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-primary to-accent text-black font-bold hover:shadow-lg hover:shadow-primary/30 transition-all"
              >
                Send Message
              </button>
            </form>

            <div className="mt-12 grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <p className="text-primary font-display font-bold mb-2">Discord</p>
                <p className="text-foreground/70 text-sm">Join the community and connect with other developers</p>
              </div>
              <div className="text-center">
                <p className="text-accent font-display font-bold mb-2">GitHub</p>
                <p className="text-foreground/70 text-sm">Check out my projects and contributions</p>
              </div>
              <div className="text-center">
                <p className="text-primary font-display font-bold mb-2">Email</p>
                <p className="text-foreground/70 text-sm">Direct correspondence for inquiries</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
