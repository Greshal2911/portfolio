import type { ReactNode } from "react";
import {
  ArrowRight,
  Download,
  Github,
  Mail,
  MapPin,
  PhoneCall,
} from "lucide-react";

import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  aboutPoints,
  achievements,
  additionalLinks,
  contactLinks,
  education,
  hero,
  experience,
  navItems,
  projects,
  resumeHighlights,
  skillGroups,
  stats,
} from "@/data/portfolio";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <header className="border-b border-white/10 bg-slate-950/95">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a
            href="#home"
            className="font-display text-lg font-semibold tracking-tight text-white"
          >
            {hero.name}
          </a>
          <nav className="hidden items-center gap-5 text-sm text-slate-300 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <Button asChild size="sm" variant="outline">
            <a href="#contact">Let's Connect</a>
          </Button>
        </div>
      </header>

      <section
        id="home"
        className="mx-auto max-w-7xl px-4 pb-10 pt-12 sm:px-6 lg:px-8 lg:pb-16 lg:pt-20"
      >
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-sm font-medium uppercase tracking-[0.35em] text-slate-400">
                Hi, I'm {hero.name}
              </p>
              <h1 className="font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
                {hero.role}
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-300">
                {hero.tagline}
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg">
                <a href="#projects">
                  View My Projects <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="#contact">
                  Get In Touch <Mail className="h-4 w-4" />
                </a>
              </Button>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {stats.map((stat) => (
                <Card
                  key={stat.label}
                  className="border-white/10 bg-white/5 p-5 shadow-none"
                >
                  <CardTitle className="text-3xl text-white">
                    {stat.value}
                  </CardTitle>
                  <CardDescription className="mt-2 text-sm text-slate-300">
                    {stat.label}
                  </CardDescription>
                </Card>
              ))}
            </div>
          </div>

          <Card className="border-white/10 bg-white/5 shadow-none">
            <CardContent className="space-y-5 p-6 sm:p-8">
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-[0.32em] text-slate-400">
                  WHO I AM
                </p>
                <h2 className="font-display text-2xl font-semibold text-white">
                  Third Year Computer Science student with a full-stack focus.
                </h2>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <InfoPill
                  icon={<MapPin className="h-4 w-4" />}
                  label={hero.location}
                />
                <InfoPill
                  icon={<Github className="h-4 w-4" />}
                  label="MERN stack builder"
                />
                <InfoPill
                  icon={<Download className="h-4 w-4" />}
                  label="QA and automation exposure"
                />
                <InfoPill
                  icon={<PhoneCall className="h-4 w-4" />}
                  label="Open to internships"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section
        id="about"
        className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8"
      >
        <SectionHeading
          eyebrow="About Me"
          title="What I bring to the table"
          description="A clearer snapshot of my background, technical focus, and how I approach building software."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <Card className="border-white/10 bg-white/5 shadow-none">
            <CardHeader>
              <CardTitle className="text-2xl text-white">Who I Am</CardTitle>
              <CardDescription>Computer Science undergraduate</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {aboutPoints.map((point) => (
                <p key={point} className="text-sm leading-7 text-slate-300">
                  {point}
                </p>
              ))}
            </CardContent>
          </Card>
          <div className="grid gap-4">
            <Card className="border-white/10 bg-white/5 shadow-none">
              <CardContent className="space-y-3 p-6">
                <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                  What I Build
                </p>
                <p className="text-sm leading-7 text-slate-300">
                  Responsive full-stack applications using React, Next.js,
                  Node.js, and MongoDB.
                </p>
              </CardContent>
            </Card>
            <Card className="border-white/10 bg-white/5 shadow-none">
              <CardContent className="space-y-3 p-6">
                <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                  How I Work
                </p>
                <p className="text-sm leading-7 text-slate-300">
                  I combine engineering discipline with a clean UI mindset so
                  the final product feels reliable, polished, and easy to use.
                </p>
              </CardContent>
            </Card>
            <Card className="border-white/10 bg-white/5 shadow-none">
              <CardContent className="space-y-3 p-6">
                <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                  What I’m Exploring
                </p>
                <p className="text-sm leading-7 text-slate-300">
                  Internship opportunities, collaborations, and project work in
                  web development, QA, and automation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section
        id="skills"
        className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8"
      >
        <SectionHeading
          eyebrow="Skills"
          title="What I know"
          description="A grouped skills area that matches the reference layout style while staying easy to scan."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group) => (
            <Card
              key={group.title}
              className="border-white/10 bg-white/5 shadow-none"
            >
              <CardHeader>
                <CardTitle className="text-white">{group.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-3">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-slate-900/60 px-3 py-1 text-sm text-slate-100"
                  >
                    {item}
                  </span>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section
        id="projects"
        className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8"
      >
        <SectionHeading
          eyebrow="Projects"
          title="What I've built"
          description="The main projects that show full-stack thinking, problem solving, and implementation quality."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <Card
              key={project.name}
              className="flex h-full flex-col border-white/10 bg-white/5 shadow-none"
            >
              <CardHeader>
                <CardTitle className="text-white">{project.name}</CardTitle>
                <CardDescription className="text-slate-300">
                  {project.summary}
                </CardDescription>
              </CardHeader>
              <CardContent className="mt-auto space-y-4">
                <p className="text-sm leading-6 text-slate-300">
                  {project.impact}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-slate-900/60 px-3 py-1 text-xs font-medium text-slate-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section
        id="experience"
        className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8"
      >
        <SectionHeading
          eyebrow="Experience"
          title="Where I’ve applied the work"
          description="A concise professional experience block to match the reference site’s structure."
        />
        <div className="mt-10 grid gap-6">
          {experience.map((item) => (
            <Card
              key={item.title}
              className="border-white/10 bg-white/5 shadow-none"
            >
              <CardHeader>
                <CardDescription className="text-slate-400">
                  {item.period}
                </CardDescription>
                <CardTitle className="text-white">{item.title}</CardTitle>
                <CardDescription className="text-slate-300">
                  {item.place}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm leading-7 text-slate-300">{item.note}</p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-slate-900/60 px-3 py-1 text-xs text-slate-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section
        id="education"
        className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8"
      >
        <SectionHeading eyebrow="Academic Background" title="Education" />
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {education.map((item) => (
            <Card
              key={item.title}
              className="border-white/10 bg-white/5 shadow-none"
            >
              <CardHeader>
                <CardDescription className="text-slate-400">
                  {item.period}
                </CardDescription>
                <CardTitle className="text-white">{item.title}</CardTitle>
                <CardDescription className="text-slate-300">
                  {item.place}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-7 text-slate-300">{item.note}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section
        id="achievements"
        className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8"
      >
        <SectionHeading
          eyebrow="Recognition & Learning"
          title="Achievements & Certifications"
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {achievements.map((item) => (
            <Card
              key={item}
              className="border-white/10 bg-white/5 p-5 shadow-none"
            >
              <p className="text-sm leading-6 text-slate-300">{item}</p>
            </Card>
          ))}
        </div>
      </section>

      <section
        id="resume"
        className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8"
      >
        <SectionHeading
          eyebrow="My Profile"
          title="Resume"
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Card className="border-white/10 bg-white/5 shadow-none">
            <CardHeader>
              <CardTitle className="text-white">Career Snapshot</CardTitle>
              <CardDescription className="text-slate-300">
                Summary of my academic background, technical skills, and project
                focus.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {resumeHighlights.map((item) => (
                <div
                  key={item}
                  className="flex gap-3 text-sm leading-7 text-slate-300"
                >
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-slate-200" />
                  <span>{item}</span>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="border-white/10 bg-white/5 shadow-none">
            <CardHeader>
              <CardTitle className="text-white">Request Full Resume</CardTitle>
              <CardDescription className="text-slate-300">
                Replace this action with a PDF link when you add the file.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-4 text-sm text-slate-300">
                This section mirrors the reference portfolio’s compact profile
                card and request CTA.
              </div>
              <Button asChild className="w-full" variant="accent">
                <a href="#contact">
                  Request Resume <Download className="h-4 w-4" />
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <section
        id="contact"
        className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8"
      >
        <SectionHeading
          eyebrow="Contact Me"
          title="Let's connect"
          description="Direct contact details for reaching out."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-1">
          <Card className="border-white/10 bg-white/5 shadow-none">
            <CardHeader>
              <CardTitle className="text-white">Contact Me</CardTitle>
              <CardDescription className="text-slate-300">
                I’m open to internships, collaborations, and project
                opportunities.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {contactLinks.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-white/10 bg-slate-900/60 p-4"
                >
                  <p className="text-xs uppercase tracking-[0.28em] text-slate-400">
                    {item.label}
                  </p>
                  <p className="mt-2 text-sm text-slate-100">{item.value}</p>
                </div>
              ))}
              <div className="flex gap-3 pt-2">
                <Button asChild variant="outline" className="flex-1">
                  <a href={`mailto:${hero.email}`}>
                    <Mail className="h-4 w-4" /> Email
                  </a>
                </Button>
                <Button asChild variant="outline" className="flex-1">
                  <a href="#home">
                    <PhoneCall className="h-4 w-4" /> Back to Top
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="border-t border-white/10 py-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>Built with Next.js, Tailwind CSS, and shadcn-style components.</p>
          <p>
            {hero.role} · {hero.location}
          </p>
        </div>
      </footer>

      <section
        id="links"
        className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8"
      >
        <SectionHeading
          eyebrow="Additional Links"
          title="Quick navigation shortcuts"
          description="A small extra links block to mirror the reference portfolio’s footer navigation area."
        />
        <div className="mt-8 flex flex-wrap gap-3">
          {additionalLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 transition-colors hover:border-white/30 hover:bg-slate-800/80"
            >
              {item.label}
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}

function BadgeCard({ label }: { label: string }) {
  return (
    <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.28em] text-muted-foreground">
      {label}
    </div>
  );
}

function InfoPill({ icon, label }: { icon: ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-100">
      <span className="text-emerald-300">{icon}</span>
      <span>{label}</span>
    </div>
  );
}
