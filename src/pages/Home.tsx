import { Mail, Phone, Linkedin, Code, Briefcase, Globe } from "lucide-react";

/**
 * CV Tech - Juan Pablo Castilla Rodríguez
 * Backend Developer
 * 
 * Design: Cyberpunk Profesional
 * - Tema oscuro con acentos cyan/azul eléctrico
 * - Tipografía: Space Mono para títulos, Inter para body
 * - Animaciones suaves y efectos de glow
 * - Layout asimétrico con sidebar lateral
 */

export default function Home() {
  const skills = [
    "Java", "Spring Boot", "APIs RESTful", "JPA", "Oracle",
    "SQL", "Apache CXF", "JUnit", "Git", "Lombok",
    "Mockito", "Maven", "Testing", "Microservicios"
  ];

  const experience = [
    {
      period: "2024 – Presente",
      title: "Backend Developer",
      company: "Rural Servicios Informáticos (RSI)",
      description: "Desarrollando microservicios en Java, ciclo de vida, mantenimiento de APIs y servicios backend para el sector bancario (grupo Caja Rural)"
    },
    {
      period: "2019 – 2024",
      title: "Gestor de cartera de clientes",
      company: "Segopi S.L.",
      description: "Gestionando la cartera de clientes. Realizando labores de facturación, gestión de cobro, remesas, mailing y phoning."
    },
    {
      period: "2018 – 2019",
      title: "Redactor de contenidos web",
      company: "Formación Castilla y León",
      description: "Redactor de contenidos web (E-learning & SCORM)"
    },
    {
      period: "2016 – 2018",
      title: "Auxiliar Administrativo",
      company: "Nanta S.A.",
      description: "Realizando labores de atención al cliente, archivo, elaboración de albaranes en el departamento de producción"
    }
  ];

  const education = [
    {
      period: "2022 – 2024",
      title: "TÉCNICO SUPERIOR EN DAM",
      institution: "UNIVERSIDAD ALFONSO X EL SABIO"
    },
    {
      period: "2018 – 2019",
      title: "TÉCNICO SUPERIOR EN ADMINISTRACIÓN Y FINANZAS",
      institution: "IES Núñez de Arce"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section 
        className="relative w-full h-96 bg-cover bg-center overflow-hidden"
        style={{
          backgroundImage: `url('${import.meta.env.BASE_URL}images/hero-backend.jpg')`,
          backgroundAttachment: "fixed"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background"></div>
        <div className="relative h-full flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-2 animate-fade-in-up" style={{ fontFamily: "'Space Mono', monospace" }}>
            JUAN PABLO CASTILLA
          </h1>
          <p className="text-2xl md:text-3xl text-accent mb-4" style={{ fontFamily: "'Space Mono', monospace" }}>
            Backend Developer
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl">
            2+ años diseñando y manteniendo microservicios y APIs REST en Java/Spring Boot
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto px-4 py-16">
        
        {/* Sidebar */}
        <aside className="lg:w-80 flex-shrink-0">
          {/* Profile Photo */}
          <div className="mb-8 animate-fade-in-up" style={{ animationDelay: "0.05s" }}>
            <div className="tech-card glow-border p-4 flex justify-center">
              <img 
                src={`${import.meta.env.BASE_URL}images/perfilJuanPa.JPG`}
                alt="Juan Pablo Castilla" 
                className="w-full max-w-xs rounded-lg object-cover"
                style={{ maxHeight: "300px" }}
              />
            </div>
          </div>

          {/* Contact Card */}
          <div className="tech-card glow-border mb-8 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Code size={20} className="text-accent" />
              Contacto
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-accent flex-shrink-0" />
                <span className="text-sm">622 411 616</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-accent flex-shrink-0" />
                <a href="mailto:juanpacasrod@gmail.com" className="text-sm hover:text-accent transition-colors">
                  juanpacasrod@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Linkedin size={18} className="text-accent flex-shrink-0" />
                <a 
                  href="https://linkedin.com/in/juanpablocastilla" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm hover:text-accent transition-colors"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Languages Card */}
          <div className="tech-card glow-border mb-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Globe size={20} className="text-accent" />
              Idiomas
            </h3>
            <div className="space-y-3">
              <div>
                <p className="font-semibold text-accent mb-1">Inglés</p>
                <div className="w-full bg-secondary rounded-full h-2">
                  <div className="bg-accent h-2 rounded-full" style={{ width: "85%" }}></div>
                </div>
              </div>
              <div>
                <p className="font-semibold text-accent mb-1">Francés</p>
                <div className="w-full bg-secondary rounded-full h-2">
                  <div className="bg-accent h-2 rounded-full" style={{ width: "40%" }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* About Card */}
          <div className="tech-card glow-border animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Briefcase size={20} className="text-accent" />
              Perfil
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Backend Developer con enfoque en calidad, rendimiento y testing. Perfil colaborativo, responsable y resolutivo, orientado a resultados. Más de 8 años en administración aportan visión transversal del negocio.
            </p>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 min-w-0">
          
          {/* Skills Section */}
          <section className="mb-16 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <div className="section-title">Competencias Técnicas</div>
            <div className="relative">
              <div 
                className="absolute inset-0 rounded-lg opacity-30"
                style={{
                  backgroundImage: `url('${import.meta.env.BASE_URL}images/skills-pattern.jpg')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center"
                }}
              ></div>
              <div className="relative bg-card/80 backdrop-blur-sm rounded-lg p-8 border border-border">
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill) => (
                    <span key={skill} className="tech-badge">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Experience Section */}
          <section className="mb-16 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
            <div className="section-title">Experiencia Laboral</div>
            <div className="space-y-6">
              {experience.map((job, idx) => (
                <div 
                  key={idx} 
                  className="tech-card glow-border group"
                  style={{ animationDelay: `${0.6 + idx * 0.1}s` }}
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                    <div>
                      <h4 className="text-xl font-bold text-accent">{job.title}</h4>
                      <p className="text-sm font-semibold text-muted-foreground">{job.company}</p>
                    </div>
                    <span className="text-sm text-muted-foreground mt-2 md:mt-0 md:text-right">
                      {job.period}
                    </span>
                  </div>
                  <p className="text-sm text-foreground leading-relaxed">
                    {job.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Education Section */}
          <section className="animate-fade-in-up" style={{ animationDelay: "0.9s" }}>
            <div className="section-title">Formación</div>
            <div className="space-y-6">
              {education.map((edu, idx) => (
                <div 
                  key={idx} 
                  className="tech-card glow-border"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                    <div>
                      <h4 className="text-lg font-bold text-accent">{edu.title}</h4>
                      <p className="text-sm font-semibold text-muted-foreground">{edu.institution}</p>
                    </div>
                    <span className="text-sm text-muted-foreground mt-2 md:mt-0 md:text-right">
                      {edu.period}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Formación Complementaria */}
          <section className="mt-16 animate-fade-in-up" style={{ animationDelay: "1.0s" }}>
            <div className="section-title">Formación Complementaria</div>
            <div className="tech-card glow-border">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                <div>
                  <p className="text-accent font-semibold mb-2">
                    Certificado de Profesionalidad en Desarrollo de Aplicaciones con Tecnologías Web
                  </p>
                  <p className="text-sm text-muted-foreground font-semibold">Formación Castilla y León</p>
                </div>
              </div>
              <p className="text-sm text-foreground leading-relaxed">
                Especialización en desarrollo web con tecnologías modernas
              </p>
            </div>
          </section>

        </main>
      </div>

      {/* Footer */}
      <footer className="border-t border-border mt-20 py-8 px-4">
        <div className="max-w-7xl mx-auto text-center text-sm text-muted-foreground">
          <p>© 2026 Juan Pablo Castilla Rodríguez • Backend Developer</p>
        </div>
      </footer>
    </div>
  );
}

