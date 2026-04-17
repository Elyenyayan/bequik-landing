"use client"

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

// ==================== SITE DATA ====================
const site = {
  name: "BeQuik Information Solutions Inc.",
  brandShort: "BeQuik",
  tagline: "Data Center Colocation • Enterprise Infrastructure • Cybersecurity • Physical Security • Managed Services",
  ctaPrimary: "Request a Free Assessment",
  ctaSecondary: "Explore Services",
  contact: {
    email: "sales@bequik.com.ph",
    phone: "+63 2 8888 8888",
    website: "https://bequik.com.ph",
  },

  heroStats: [
    { value: "Tier-ready", label: "Colocation options" },
    { value: "N+1/2N", label: "Redundancy design" },
    { value: "Carrier", label: "Connectivity-ready" },
    { value: "Secure", label: "Facility controls" },
  ],

  services: [
    {
      tag: "COLOCATION",
      title: "Data Center Colocation (Beeinfotech Partner)",
      desc: "Host critical workloads in secure facilities with redundant power/cooling and carrier-neutral connectivity—built for enterprise uptime.",
      bullets: [
        "Rack, cage, or custom footprint",
        "Redundant power & cooling options",
        "Connectivity & cross-connect readiness",
        "Security-first facility operations"
      ],
      image: "/images/services/colocation.jpg",
      imageAlt: "Modern data center with server racks"
    },
    {
      tag: "COMPUTE",
      title: "Hyperconverged Infrastructure",
      desc: "Software-defined compute + storage that scales linearly—from 3 nodes upward—built for enterprise operations.",
      bullets: [
        "VMware / Nutanix-ready",
        "Rolling upgrades",
        "Simplified operations"
      ],
      image: "/images/services/hyper.png",
      imageAlt: "Hyperconverged infrastructure servers"
    },
    {
      tag: "CYBERSEC",
      title: "Cybersecurity & SOC Services",
      desc: "Monitoring-led security posture with SOC services, SIEM/SOAR options, and response playbooks.",
      bullets: [
        "24/7 monitoring options",
        "MITRE-aligned approach",
        "Incident response support"
      ],
      image: "/images/services/cyber.jpg",
      imageAlt: "Security operations center monitoring"
    },
    {
      tag: "PHYSICAL",
      title: "Physical Security (Verkada)",
      desc: "Unified physical security—video, access control, alarms—centrally managed with modern analytics.",
      bullets: [
        "Centralized management",
        "Fast deployment",
        "Enterprise visibility"
      ],
      image: "/images/services/physical-security.png",
      imageAlt: "Verkada security camera system"
    },
    {
      tag: "ENDPOINT",
      title: "Managed Endpoint Services",
      desc: "Device lifecycle support—patching, EDR coordination, helpdesk workflows, reporting and governance.",
      bullets: [
        "Patch & lifecycle ops",
        "EDR readiness",
        "SLA-led support"
      ],
      image: "/images/services/end.jpg",
      imageAlt: "Managed endpoint devices"
    },
  ],

  whyUs: [
    {
      title: "Unified Accountability",
      desc: "One SLA and one escalation path across infrastructure, security, and operations.",
    },
    {
      title: "Assessment-led Delivery",
      desc: "Discovery first, then a roadmap—built around risk, uptime, and TCO.",
    },
    {
      title: "Scalable Options",
      desc: "From single rack to hybrid architecture—designed to grow without lock-in.",
    },
    {
      title: "Security-first Mindset",
      desc: "Hardening, monitoring, and governance baked into how we architect and operate.",
    },
  ],

  results: [
    { kpi: "Faster recovery", quote: "40% reduction in recovery time after implementing BeQuik's colocation solutions." },
    { kpi: "Cleaner operations", quote: "99.99% uptime achieved with redundant power and cooling infrastructure." },
    { kpi: "Predictable scaling", quote: "Scaled from 3 to 20 nodes without any infrastructure disruption." },
  ],

  partners: ["Beeinfotech", "Nutanix", "VMware", "Microsoft", "CrowdStrike", "Verkada", "Fortinet"],
}

// Types
interface Service {
  imageAlt: string;
  image: any;
  tag: string;
  title: string;
  desc: string;
  bullets: string[];
}

interface WhyUsItem {
  title: string;
  desc: string;
}

interface Result {
  kpi: string;
  quote: string;
}

interface FieldProps {
  label: string;
  name: string;
  placeholder: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  required?: boolean;
}

// Navigation items
const nav = [
  { href: "#services", label: "Services" },
  { href: "#why", label: "Why BeQuik" },
  { href: "#results", label: "Results" },
  { href: "#partners", label: "Partners" },
]

// ==================== COMPONENTS ====================

// Navbar Component
function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 pt-4">
      <div className="mx-auto max-w-7xl">
        <div className="glass-nav rounded-2xl px-5 py-3 flex items-center justify-between backdrop-blur-xl bg-white/5 border border-white/10">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center text-white font-bold shadow-lg transition-transform group-hover:scale-105">
              BQ
            </div>
            <span className="font-semibold tracking-wide text-white/90 hidden sm:inline">{site.brandShort}</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-sm">
            {nav.map((i) => (
              <Link 
                key={i.href} 
                href={i.href} 
                className="text-white/60 hover:text-cyan-400 transition-all duration-300 font-medium"
              >
                {i.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Link href="#contact" className="px-4 py-2 text-white/70 hover:text-cyan-400 transition-all duration-300 font-medium">Talk to Us</Link>
            <Link href="#contact" className="btn-primary">{site.ctaPrimary}</Link>
          </div>

          <button 
            className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-all"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden mt-2 glass-nav rounded-2xl p-4 backdrop-blur-xl bg-black/60 border border-white/10">
            <nav className="flex flex-col gap-2">
              {nav.map((i) => (
                <Link 
                  key={i.href} 
                  href={i.href} 
                  className="text-white/70 hover:text-cyan-400 hover:bg-white/10 transition-all px-4 py-3 rounded-xl"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {i.label}
                </Link>
              ))}
              <Link 
                href="#contact" 
                className="btn-primary w-full text-center mt-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {site.ctaPrimary}
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

// Hero Component
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 opacity-70 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.3),transparent_55%)] animate-pulse-slow" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(6,182,212,0.2),transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.05)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 pt-32 pb-20 text-center">
        <div className="tag mb-6 justify-center mx-auto w-fit animate-fade-in-up border-cyan-400/50">
          <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
          BeQuik x Beeinfotech • Colocation • Infrastructure • Security
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.1] tracking-tight animate-fade-in-up animation-delay-200">
          Enterprise-grade{" "}
          <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600 bg-clip-text text-transparent italic">
            colocation & infrastructure
          </span>{" "}
          built for uptime.
        </h1>

        <p className="mt-6 text-base sm:text-lg md:text-xl text-white/60 max-w-2xl mx-auto animate-fade-in-up animation-delay-300">
          {site.tagline}
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animation-delay-400">
          <Link href="#contact" className="btn-primary w-full sm:w-auto group">
            {site.ctaPrimary}
            <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
          </Link>
          <Link href="#services" className="btn-secondary w-full sm:w-auto">{site.ctaSecondary}</Link>
        </div>

        <div className="mt-16 glass-card rounded-2xl px-5 py-6 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto animate-fade-in-up animation-delay-500">
          {site.heroStats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-1">
              <div className="text-xl sm:text-2xl font-bold text-cyan-400">{stat.value}</div>
              <div className="text-xs text-white/50 text-center">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-cyan-400/30 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-cyan-400/50 rounded-full mt-2 animate-scroll" />
        </div>
      </div>
    </section>
  )
}

// Services Component
function Services() {
  return (
    <section id="services" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="tag mb-4 w-fit">// SERVICES</div>
            <h2 className="section-title">
              Every layer of your stack. <span className="text-cyan-400 italic">One partner.</span>
            </h2>
          </div>
          <p className="text-white/60 max-w-md md:text-right">
            Built to integrate vertically—less vendor friction, faster outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {site.services.map((service: Service, index: number) => (
            <div 
              key={service.title} 
              className="glass-card rounded-2xl overflow-hidden hover:bg-blue-500/10 transition-all duration-500 group cursor-pointer animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-56 w-full overflow-hidden bg-gradient-to-br from-blue-500/20 to-cyan-500/20">
                {service.image ? (
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-5xl mb-2">📷</div>
                      <div className="text-sm text-white/60">No image</div>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="p-7">
                <div className="tag mb-4 w-fit group-hover:bg-cyan-500/20 transition-all">
                  {service.tag}
                </div>
                <h3 className="text-xl font-semibold group-hover:text-cyan-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-white/60 mt-3 text-sm leading-relaxed">
                  {service.desc}
                </p>

                <ul className="mt-6 space-y-2">
                  {service.bullets.map((bullet: string) => (
                    <li key={bullet} className="text-sm flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                      <span className="text-white/60">{bullet}</span>
                    </li>
                  ))}
                </ul>

                <Link 
                  href="#contact" 
                  className="mt-6 inline-flex items-center gap-2 text-cyan-400 font-semibold hover:gap-3 transition-all group-hover:text-blue-400"
                >
                  Learn more <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// WhyUs Component
function WhyUs() {
  return (
    <section id="why" className="py-24 sm:py-32 bg-gradient-to-b from-transparent via-blue-900/10 to-transparent">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="max-w-3xl mb-12">
          <div className="tag mb-4 w-fit">// WHY BEQUIK</div>
          <h2 className="section-title">
            Infrastructure that <span className="text-cyan-400 italic">delivers outcomes</span>.
          </h2>
          <p className="text-white/60 mt-4 text-lg">
            Reliability, security posture, and operational simplicity—before anything else.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {site.whyUs.map((item: WhyUsItem, index: number) => (
            <div 
              key={item.title} 
              className="glass-card rounded-2xl p-7 hover:bg-blue-500/10 transition-all duration-300 group animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-cyan-400 transition-colors">{item.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Results Component
function Results() {
  return (
    <section id="results" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center mb-12">
          <div className="tag mb-4 mx-auto w-fit">// RESULTS</div>
          <h2 className="section-title">
            Real infrastructure. <span className="text-cyan-400 italic">Real outcomes.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {site.results.map((result: Result, index: number) => (
            <div 
              key={result.kpi} 
              className="glass-card rounded-2xl p-7 hover:bg-blue-500/10 transition-all duration-300 text-center group animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-4xl font-bold text-cyan-400 mb-4 group-hover:scale-105 transition-transform">
                {result.kpi === "Faster recovery" && "⚡"}
                {result.kpi === "Cleaner operations" && "🎯"}
                {result.kpi === "Predictable scaling" && "📈"}
              </div>
              <div className="tag mb-4 mx-auto w-fit">{result.kpi}</div>
              <p className="text-white/60 italic text-sm leading-relaxed">“{result.quote}”</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Partners Component
function Partners() {
  return (
    <section id="partners" className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center mb-12">
          <div className="tag mb-4 mx-auto w-fit">// PARTNERS</div>
          <h2 className="text-3xl sm:text-4xl font-bold">
            Built on <span className="text-cyan-400">proven technology</span>.
          </h2>
        </div>

        <div className="flex flex-wrap gap-3 justify-center">
          {site.partners.map((partner: string, index: number) => (
            <div 
              key={partner} 
              className="glass-card rounded-xl px-6 py-3 text-sm font-semibold text-cyan-300 hover:bg-blue-500/20 hover:text-cyan-200 transition-all duration-300 hover:scale-105 cursor-pointer animate-fade-in-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {partner}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Contact Component
function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise(resolve => setTimeout(resolve, 1000))
    console.log('Form submitted:', formData)
    alert('Thank you for your interest! We will contact you within 1 business day.')
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      message: ''
    })
    setIsSubmitting(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="animate-fade-in-up">
            <div className="tag mb-4 w-fit">// START HERE</div>
            <h2 className="section-title">
              Let&apos;s plan your <span className="text-cyan-400 italic">colocation & infrastructure</span>.
            </h2>
            <p className="text-white/60 mt-4 text-lg">
              Book a 30-minute assessment. We&apos;ll map your environment and recommend a roadmap.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3 p-4 glass-card rounded-xl hover:bg-blue-500/10 transition-all">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center">
                  <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-white/50">Email</div>
                  <div className="text-sm font-semibold text-cyan-300">{site.contact.email}</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 glass-card rounded-xl hover:bg-blue-500/10 transition-all">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center">
                  <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-white/50">Phone</div>
                  <div className="text-sm font-semibold text-cyan-300">{site.contact.phone}</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 glass-card rounded-xl hover:bg-blue-500/10 transition-all">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center">
                  <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.66 0 3-4 3-9s-1.34-9-3-9m0 18c-1.66 0-3-4-3-9s1.34-9 3-9" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-white/50">Website</div>
                  <div className="text-sm font-semibold text-cyan-300">{site.contact.website}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-card rounded-2xl p-8 animate-fade-in-up animation-delay-200">
            <form onSubmit={handleSubmit} className="space-y-5">
              <h3 className="text-2xl font-semibold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Request Free Assessment</h3>
              <p className="text-sm text-white/50">Response within 1 business day.</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field label="Full Name" name="name" placeholder="Juan Dela Cruz" value={formData.name} onChange={handleChange} required />
                <Field label="Work Email" name="email" placeholder="juan@company.com" type="email" value={formData.email} onChange={handleChange} required />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field label="Company" name="company" placeholder="Company Name" value={formData.company} onChange={handleChange} required />
                <Field label="Mobile" name="phone" placeholder="+63 ..." value={formData.phone} onChange={handleChange} required />
              </div>
              <div>
                <label className="block text-xs font-medium text-white/50 mb-2">Message</label>
                <textarea 
                  name="message"
                  className="w-full rounded-xl px-4 py-3 text-sm outline-none glass-card focus:bg-white/[0.08] transition-all resize-none"
                  rows={4}
                  placeholder="Tell us your current setup or requirement..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button className="btn-primary w-full group disabled:opacity-50 disabled:cursor-not-allowed" type="submit" disabled={isSubmitting}>
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Submitting...
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    Request My Free Assessment
                    <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
                  </span>
                )}
              </button>
              <p className="text-xs text-center text-white/40">No spam. For assessment scheduling only.</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

// Field Component
function Field({ label, name, placeholder, type = "text", value, onChange, required = false }: FieldProps) {
  return (
    <div>
      <label htmlFor={name} className="block text-xs font-medium text-white/50 mb-2">{label}</label>
      <input 
        id={name}
        type={type} 
        name={name}
        className="w-full rounded-xl px-4 py-3 text-sm outline-none glass-card focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all" 
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
      />
    </div>
  )
}

// Footer Component
function Footer() {
  return (
    <footer className="border-t border-white/10 mt-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-8 sm:py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-white/40 text-sm text-center md:text-left">
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-6 text-sm text-white/40">
            <Link className="hover:text-cyan-400 transition" href="#services">Services</Link>
            <Link className="hover:text-cyan-400 transition" href="#contact">Contact</Link>
            <Link className="hover:text-cyan-400 transition" href="#">Privacy</Link>
            <Link className="hover:text-cyan-400 transition" href="#">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

// ==================== MAIN PAGE ====================
export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-950 to-slate-900">
      <Navbar />
      <Hero />
      <Services />
      <WhyUs />
      <Results />
      <Partners />
      <Contact />
      <Footer />
      
      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes scroll {
          0% {
            opacity: 1;
            transform: translateY(0);
          }
          100% {
            opacity: 0;
            transform: translateY(10px);
          }
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        .animation-delay-200 {
          animation-delay: 200ms;
          opacity: 0;
        }
        
        .animation-delay-300 {
          animation-delay: 300ms;
          opacity: 0;
        }
        
        .animation-delay-400 {
          animation-delay: 400ms;
          opacity: 0;
        }
        
        .animation-delay-500 {
          animation-delay: 500ms;
          opacity: 0;
        }
        
        .animate-scroll {
          animation: scroll 1.5s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        /* Glass Card Styles */
        .glass-card {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(6, 182, 212, 0.2);
          transition: all 0.3s ease;
        }
        
        .glass-card:hover {
          background: rgba(59, 130, 246, 0.1);
          border-color: rgba(6, 182, 212, 0.4);
          box-shadow: 0 0 20px rgba(6, 182, 212, 0.15);
        }
        
        .glass-nav {
          background: rgba(0, 0, 0, 0.4);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(6, 182, 212, 0.2);
        }
        
        /* Button Styles */
        .btn-primary {
          @apply px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl font-semibold text-white transition-all hover:shadow-lg hover:scale-105 inline-flex items-center justify-center gap-2;
        }
        
        .btn-primary:hover {
          box-shadow: 0 0 25px rgba(6, 182, 212, 0.4);
        }
        
        .btn-secondary {
          @apply px-6 py-3 border border-cyan-400/50 rounded-xl font-semibold text-cyan-300 hover:bg-cyan-500/20 hover:border-cyan-400 transition-all inline-flex items-center justify-center;
        }
        
        /* Tag Styles */
        .tag {
          @apply inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-blue-500/20 text-cyan-300 border border-cyan-500/30;
        }
        
        /* Section Title */
        .section-title {
          @apply text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white;
        }
      `}</style>
    </main>
  )
}