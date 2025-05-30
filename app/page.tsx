"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, Github, Code, Database, Server, Palette, Languages } from "lucide-react"

type Language = "pt" | "en"

const translations = {
  pt: {
    nav: {
      about: "Sobre",
      skills: "Habilidades",
      contact: "Contato",
    },
    hero: {
      title: "Desenvolvedor Full-Stack",
      subtitle: "Especialista em Next.js",
      description:
        "Criando experiências web modernas e escaláveis com as mais recentes tecnologias. Apaixonado por código limpo e soluções inovadoras.",
      cta: "Ver Projetos",
    },
    about: {
      title: "Sobre Mim",
      description:
        "Sou um desenvolvedor full-stack apaixonado por tecnologia, com foco em criar aplicações web modernas e performáticas. Tenho experiência tanto no front-end quanto no back-end, sempre buscando as melhores práticas e tecnologias mais atuais do mercado.",
    },
    skills: {
      title: "Habilidades Técnicas",
      frontend: {
        title: "Front-end",
        description: "Tecnologias para criar interfaces modernas e responsivas",
      },
      backend: {
        title: "Back-end",
        description: "Desenvolvimento de APIs e sistemas robustos",
      },
      database: {
        title: "Banco de Dados",
        description: "Gerenciamento e modelagem de dados",
      },
      tools: {
        title: "Ferramentas & Bibliotecas",
        description: "Frameworks e bibliotecas para desenvolvimento eficiente",
      },
    },
    contact: {
      title: "Vamos Conversar",
      description: "Interessado em trabalhar juntos? Entre em contato!",
      email: "Enviar Email",
      github: "Ver GitHub",
      linkedin: "Conectar no LinkedIn",
    },
  },
  en: {
    nav: {
      about: "About",
      skills: "Skills",
      contact: "Contact",
    },
    hero: {
      title: "Full-Stack Developer",
      subtitle: "Next.js Specialist",
      description:
        "Building modern and scalable web experiences with cutting-edge technologies. Passionate about clean code and innovative solutions.",
      cta: "View Projects",
    },
    about: {
      title: "About Me",
      description:
        "I'm a full-stack developer passionate about technology, focused on creating modern and performant web applications. I have experience in both front-end and back-end development, always seeking best practices and the latest market technologies.",
    },
    skills: {
      title: "Technical Skills",
      frontend: {
        title: "Front-end",
        description: "Technologies for creating modern and responsive interfaces",
      },
      backend: {
        title: "Back-end",
        description: "API development and robust systems",
      },
      database: {
        title: "Database",
        description: "Data management and modeling",
      },
      tools: {
        title: "Tools & Libraries",
        description: "Frameworks and libraries for efficient development",
      },
    },
    contact: {
      title: "Let's Talk",
      description: "Interested in working together? Get in touch!",
      email: "Send Email",
      github: "View GitHub",
      linkedin: "Connect on LinkedIn",
    },
  },
}

const skillsData = {
  frontend: [
    "Next.js",
    "React",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "CSS3",
    "HTML5",
    "Shadcn/ui",
    "Aceternity UI",
    "Framer Motion",
    "Responsive Design",
  ],
  backend: [
    "Node.js",
    "TypeScript",
    "JavaScript",
    "MJS",
    "Next.js API Routes",
    "Fastify",
    "Express.js",
    "RESTful APIs",
    "GraphQL",
    "Server Actions",
  ],
  database: [
    "Prisma ORM",
    "PostgreSQL",
    "MongoDB",
    "MySQL",
    "Database Design",
    "Query Optimization",
    "Migrations",
  ],
  tools: ["Git", "GitHub", "Vercel", "VS Code", "Figma", "ESLint", "Webpack"],
}

export default function Portfolio() {
  const [language, setLanguage] = useState<Language>("pt")
  const t = translations[language]

  const toggleLanguage = () => {
    setLanguage(language === "pt" ? "en" : "pt")
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center justify-between">
          <div className="flex items-center space-x-2 ml-4">
            <Code className="h-6 w-6" />
            <span className="font-bold">Portfolio</span>
          </div>

          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <a href="#about" className="transition-colors hover:text-foreground/80">
              {t.nav.about}
            </a>
            <a href="#skills" className="transition-colors hover:text-foreground/80">
              {t.nav.skills}
            </a>
            <a href="#contact" className="transition-colors hover:text-foreground/80">
              {t.nav.contact}
            </a>
          </nav>

          <Button variant="outline" size="sm" onClick={toggleLanguage} className="flex items-center space-x-2">
            <Languages className="h-4 w-4" />
            <span>{language === "pt" ? "EN" : "PT"}</span>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container px-4 py-24 md:py-32">
        <div className="flex flex-col items-center text-center space-y-6">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">{t.hero.title}</h1>
            {/*<p className="text-xl text-muted-foreground md:text-2xl">{t.hero.subtitle}</p> */}
          </div>

          <p className="max-w-[700px] text-lg text-muted-foreground md:text-xl">{t.hero.description}</p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="text-lg px-8">
              {t.hero.cta}
            </Button>
            <a href="mailto:matheusnonatomoreira@gmail.com">
              <Button variant="outline" size="lg" className="text-lg px-8">
                <Mail className="mr-2 h-5 w-5" />
                {t.contact.email}
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container px-4 py-16">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">{t.about.title}</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">{t.about.description}</p>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="container px-4 py-16">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">{t.skills.title}</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
            {/* Frontend Skills */}
            <Card className="h-full">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Palette className="h-6 w-6 text-blue-500" />
                  <CardTitle>{t.skills.frontend.title}</CardTitle>
                </div>
                <CardDescription>{t.skills.frontend.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skillsData.frontend.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-sm">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Backend Skills */}
            <Card className="h-full">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Server className="h-6 w-6 text-green-500" />
                  <CardTitle>{t.skills.backend.title}</CardTitle>
                </div>
                <CardDescription>{t.skills.backend.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skillsData.backend.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-sm">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Database Skills */}
            <Card className="h-full">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Database className="h-6 w-6 text-purple-500" />
                  <CardTitle>{t.skills.database.title}</CardTitle>
                </div>
                <CardDescription>{t.skills.database.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skillsData.database.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-sm">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Tools & Libraries */}
            <Card className="h-full">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Code className="h-6 w-6 text-orange-500" />
                  <CardTitle>{t.skills.tools.title}</CardTitle>
                </div>
                <CardDescription>{t.skills.tools.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skillsData.tools.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-sm">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container px-4 py-16">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">{t.contact.title}</h2>
            <p className="text-lg text-muted-foreground">{t.contact.description}</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:matheusnonatomoreira@gmail.com">
              <Button size="lg" className="flex items-center space-x-2">
                <Mail className="h-5 w-5" />
                <span>{t.contact.email}</span>
              </Button>
            </a>
            <a href="https://github.com/mahtewz" target="_blank" >
              <Button variant="outline" size="lg" className="flex items-center space-x-2">
                <Github className="h-5 w-5" />
                <span>{t.contact.github}</span>
              </Button>
            </a>
            {/* <Button variant="outline" size="lg" className="flex items-center space-x-2">
              <Linkedin className="h-5 w-5" />
              <span>{t.contact.linkedin}</span>
            </Button> */}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t">
        <div className="container px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2">
              <Code className="h-5 w-5" />
              <span className="text-sm text-muted-foreground">
                © 2024 Portfolio. Built with Next.js & Tailwind CSS.
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <a href="https://github.com/mahtewz" target="_blank" >
              <Button variant="ghost" size="sm">
                <Github className="h-4 w-4" />
              </Button>
              </a>
              {/* <Button variant="ghost" size="sm">
                <Linkedin className="h-4 w-4" />
              </Button> */}
              <Button variant="ghost" size="sm">
                <Mail className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
