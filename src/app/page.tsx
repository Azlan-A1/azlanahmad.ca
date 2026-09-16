import Image from 'next/image';
import { FaGithub, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';
import { HiOutlineChevronDown, HiOutlineEnvelope, HiOutlineTrophy } from 'react-icons/hi2';

const experiences = [
  {
    logo: '/img/logos/esa-logo.svg',
    company: 'Electrical Safety Authority',
    role: 'Data Science Intern',
    period: 'Sep 2025 — Present',
    location: 'Mississauga, ON',
  },
  {
    logo: '/img/logos/brucepower-logo.png',
    company: 'Bruce Power',
    role: 'Data Science Intern',
    period: 'Sep 2024 — Apr 2025',
    location: 'Tiverton, ON',
  },
  {
    logo: '/img/logos/dartmouth-logo.png',
    company: 'Dartmouth College',
    role: 'Data Engineering & BI Intern',
    period: 'May 2024 — Aug 2024',
    location: 'Hanover, NH',
  },
  {
    logo: '/img/logos/uoft-logo.png',
    company: 'University of Toronto',
    role: 'Machine Learning Engineer Intern',
    period: 'Jan 2024 — Apr 2024',
    location: 'Toronto, ON',
  },
  {
    logo: '/img/logos/uwo-logo.png',
    company: 'Western University',
    role: 'Data Science Researcher',
    mentor: 'Under the guidance of Dr. Jibran Khokhar',
    period: 'May 2023 — Apr 2024',
    location: 'London, ON',
  },
];

const hackathons = [
  {
    name: 'ETHGlobal',
    logo: '/img/logos/hackathons/ethglobal.png',
    href: 'https://ethglobal.com/',
  },
  {
    name: 'Hack the North',
    logo: '/img/logos/hackathons/hack-the-north.png',
    href: 'https://hackthenorth.com/',
  },
  {
    name: 'SpurHacks',
    logo: '/img/logos/hackathons/spurhacks.jpg',
    href: 'https://spurhacks.com/',
  },
  {
    name: 'EasyA × Consensus Toronto',
    logo: '/img/logos/hackathons/easya.png',
    href: 'https://www.easya.io/events/easya-consensus-toronto-hackathon',
  },
];

const skills = [
  ['Languages', 'Python, SQL, R, Java, JavaScript, TypeScript'],
  ['Machine learning', 'PyTorch, TensorFlow, XGBoost, LightGBM, scikit-learn'],
  ['Data systems', 'Spark, BigQuery, Redshift, PostgreSQL, Snowflake'],
];

export default function HomePage() {
  return (
    <>
      <a className="skipLink" href="#main">
        Skip to content
      </a>

      <div className="pageShell">
        <header className="siteHeader" id="top">
          <a className="wordmark" href="#top" aria-label="Go to top">
            Azlan Ahmad
          </a>

          <nav className="desktopNav" aria-label="Primary navigation">
            <a href="#experience">Experience</a>
            <a href="#about">About</a>
            <a href="/resume.pdf" target="_blank" rel="noreferrer">
              Résumé ↗
            </a>
          </nav>

          <details className="mobileMenu">
            <summary>Menu</summary>
            <nav aria-label="Mobile navigation">
              <a href="#experience">Experience</a>
              <a href="#about">About</a>
              <a href="#contact">Contact</a>
              <a href="/resume.pdf" target="_blank" rel="noreferrer">
                Résumé ↗
              </a>
            </nav>
          </details>
        </header>

        <main id="main">
          <section className="intro" aria-labelledby="intro-title">
            <p className="overline">Data science · Software engineering · Ontario, Canada</p>
            <h1 id="intro-title">
              I build clear, useful systems from complex information.
            </h1>
            <div className="introGrid">
              <p className="introCopy">
                I&apos;m a Data Science and Software Engineering student at{' '}
                <a href="https://www.uwo.ca/" target="_blank" rel="noreferrer">
                  Western University
                </a>
                , currently working in data science at the{' '}
                <a href="https://esasafe.com/" target="_blank" rel="noreferrer">
                  Electrical Safety Authority
                </a>
                .
              </p>
              <div className="introLinks" aria-label="Profile links">
                <a href="https://github.com/Azlan-A1" target="_blank" rel="noreferrer">
                  <FaGithub aria-hidden="true" />
                  <span>GitHub</span>
                </a>
                <a href="https://www.linkedin.com/in/azlan-ahmad-/" target="_blank" rel="noreferrer">
                  <FaLinkedinIn aria-hidden="true" />
                  <span>LinkedIn</span>
                </a>
                <a href="https://x.com/azlanahmad__" target="_blank" rel="noreferrer">
                  <FaXTwitter aria-hidden="true" />
                  <span>X</span>
                </a>
                <a href="mailto:aahma232@uwo.ca">
                  <HiOutlineEnvelope aria-hidden="true" />
                  <span>Email</span>
                </a>
              </div>
            </div>
          </section>

          <section className="contentSection" id="experience" aria-labelledby="experience-title">
            <div className="sectionHeader">
              <h2 id="experience-title">Experience</h2>
              <span>2023 — Present</span>
            </div>

            <div className="experienceList">
              {experiences.map((experience) => (
                <article className="experienceRow" key={`${experience.company}-${experience.period}`}>
                  <div className="experienceMark">
                    <Image
                      src={experience.logo}
                      alt=""
                      width={48}
                      height={48}
                      sizes="48px"
                    />
                  </div>
                  <div className="experienceRole">
                    <h3>{experience.company}</h3>
                    <p>{experience.role}</p>
                    {experience.mentor && (
                      <span className="experienceMentor">{experience.mentor}</span>
                    )}
                  </div>
                  <div className="experienceTime">
                    <p>{experience.period}</p>
                    <span>{experience.location}</span>
                  </div>
                </article>
              ))}
            </div>

            <details className="hackathonDropdown">
              <summary>
                <span className="hackathonMark" aria-hidden="true">
                  <HiOutlineTrophy />
                </span>
                <span className="hackathonSummaryCopy">
                  <strong>Hackathons</strong>
                  <span>Four events · Selected experiences</span>
                </span>
                <span className="hackathonAction">
                  <span>Explore</span>
                  <HiOutlineChevronDown aria-hidden="true" />
                </span>
              </summary>
              <div className="hackathonBody">
                <div className="hackathonGrid">
                  {hackathons.map((hackathon) => (
                    <a
                      className="hackathonCard"
                      href={hackathon.href}
                      target="_blank"
                      rel="noreferrer"
                      key={hackathon.name}
                    >
                      <span className="hackathonLogo">
                        <Image
                          src={hackathon.logo}
                          alt=""
                          width={48}
                          height={48}
                          sizes="48px"
                        />
                      </span>
                      <span className="hackathonName">
                        <strong>{hackathon.name}</strong>
                        <span>Hackathon experience</span>
                      </span>
                      <span className="hackathonArrow" aria-hidden="true">
                        ↗
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </details>
          </section>

          <section className="contentSection" id="about" aria-labelledby="about-title">
            <div className="sectionHeader">
              <h2 id="about-title">About</h2>
              <span>More than a résumé</span>
            </div>

            <div className="aboutGrid">
              <div className="editorialCopy">
                <p>
                  My work sits where data, software, and product thinking meet. I&apos;ve built data
                  pipelines, machine learning models, dashboards, and AI tools that make information
                  easier to understand and act on.
                </p>
                <p>
                  I&apos;m especially interested in practical machine learning: systems that leave the
                  notebook, reach real users, and improve how decisions get made.
                </p>
                <p>
                  Away from the screen, you&apos;ll usually find me playing badminton, lifting weights,
                  or analyzing market trends.
                </p>
              </div>

              <aside className="skills" aria-label="Technical skills">
                {skills.map(([label, value]) => (
                  <div className="skillGroup" key={label}>
                    <h3>{label}</h3>
                    <p>{value}</p>
                  </div>
                ))}
                <a className="inlineLink" href="/resume.pdf" target="_blank" rel="noreferrer">
                  Full résumé ↗
                </a>
              </aside>
            </div>
          </section>

          <footer className="siteFooter" id="contact">
            <p className="overline">Get in touch</p>
            <h2>
              Have a good problem?{' '}
              <a href="mailto:aahma232@uwo.ca">Let&apos;s talk.</a>
            </h2>
            <div className="footerMeta">
              <span>© {new Date().getFullYear()} Azlan Ahmad</span>
              <a href="#top">Back to top ↑</a>
            </div>
          </footer>
        </main>
      </div>
    </>
  );
}
