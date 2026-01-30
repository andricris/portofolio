import { useRef, useState, useEffect } from "react";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import ShinyText from "./components/ShinyText/ShinyText";
import BlurText from "./components/BlurText/BlurText";
import ScrambledText from "./components/ScrambledText/ScrambledText";
import SplitText from "./components/SplitText/SplitText";
import Lanyard from "./components/Lanyard/Lanyard";
import GlassIcons from "./components/GlassIcons/GlassIcons";
import { listTools, listProyek, listCertificates } from "./data";
import ChromaGrid from "./components/ChromaGrid/ChromaGrid";
import Aurora from "./components/Aurora/Aurora";
import AOS from 'aos';
import ChatRoom from "./components/ChatRoom";
import ContactForm from "./components/ContactForm";
import { hasWebGLSupport } from "./utils/webgl";
import 'aos/dist/aos.css'; // You can also use <link> for styles

function App() {
  const baseUrl = import.meta.env.BASE_URL || "/";
  const aboutRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [webglSupported, setWebglSupported] = useState(true);
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  useEffect(() => {

    setWebglSupported(hasWebGLSupport());
  }, []);

  useEffect(() => {

    AOS.init();
  }, []);

  useEffect(() => {
    const refreshIntervalMs = 5 * 60 * 1000;
    const intervalId = window.setInterval(() => {
      window.location.reload();
    }, refreshIntervalMs);

    return () => window.clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const isReload =
      performance.getEntriesByType("navigation")[0]?.type === "reload";

    if (isReload) {
      const baseUrl = new URL(import.meta.env.BASE_URL, window.location.origin);
      if (window.location.pathname !== baseUrl.pathname) {
        window.location.replace(baseUrl.toString());
      }
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="absolute top-0 left-0 w-full h-full -z-10 ">
        {webglSupported ? (
          <Aurora
            colorStops={["#577870", "#1F97A6", "#127B99"]}
            blend={0.5}
            amplitude={1.0}
            speed={0.5}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-b from-[#0a0a0a] via-[#111111] to-[#1a1a1a]" />
        )}
      </div>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1">
          <div className="animate__animated animate__fadeInUp animate__delay-3s">
            <div className="flex items-center gap-3 mb-6 bg bg-zinc-800 w-fit p-4 rounded-2xl">
              <img src={`${baseUrl}assets/faris1.png`} className="w-10 rounded-md" />
              <q>Avoid or just undertake it</q>
            </div>
            <h1 className="text-5xl font-bold mb-6">
              <ShinyText text="Hi I'm Andri Chris" disabled={false} speed={3} className='custom-class' />
            </h1>
            <BlurText
              text="Saya fokus pada data analytics dan data storytelling untuk membantu bisnis mengambil keputusan yang lebih tepat melalui insight yang actionable dan workflow data yang efisien."
              delay={150}
              animateBy="words"
              direction="top"
              className=" mb-6"
            />
            <div className="flex items-center sm:gap-4 gap-2">
              <a 
                href={`${baseUrl}assets/CV.pdf`} 

                download="Andri_Chris_CV.pdf" 
                className="font-semibold bg-[#1a1a1a] p-4 px-6 rounded-full border border-gray-700 hover:bg-[#222] transition-colors"
              >
                <ShinyText text="Download CV" disabled={false} speed={3} className="custom-class" />
              </a>

              <a href="#project" className="font-semibold bg-[#1a1a1a] p-4 px-6 rounded-full border border-gray-700 hover:bg-[#222] transition-colors">
                <ShinyText text="Explore My Projects" disabled={false} speed={3} className="custom-class" />
              </a>
            </div>

          </div>
          <div className="md:ml-auto animate__animated animate__fadeInUp animate__delay-4s">
            <ProfileCard
              name="Andri Chris"
              title="Data Analyst"
              handle="andrichris"
              status="Online"
              contactText="Contact Me"
              avatarUrl={`${baseUrl}assets/faris.png`}
              showUserInfo={true}
              enableTilt={true}
              enableMobileTilt={false}
              onContactClick={() => console.log('Contact clicked')}
            />
          </div>
        </div>
        {/* tentang */}
        <div className="mt-15 mx-auto w-full max-w-[1600px] rounded-3xl border-[5px] border-violet-500/40 shadow-[0_0_30px_rgba(168,85,247,0.4)] bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#1a1a1a] p-6" id="about">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10 pt-0 px-8" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
            <div className="basis-full md:basis-7/12 pr-0 md:pr-8 border-b md:border-b-0 md:border-r border-violet-500/30">
              {/* Kolom kiri */}
              <div className="flex-1 text-left">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
                  About Me
                </h2>

                <div className="text-base md:text-[17px] leading-relaxed text-gray-300 space-y-8 mb-10">
                  <div className="space-y-2">
                    <h3 className="text-lg md:text-xl font-semibold tracking-wide text-white">✨ Tentang Saya</h3>
                    <p className="text-gray-300">
                      Saya fokus pada data analytics dan data storytelling untuk membantu bisnis mengambil keputusan
                      yang lebih tepat. Saya suka membangun dashboard yang rapi, insight yang actionable, dan workflow
                      data yang efisien.
                    </p>
                    <p className="text-sm md:text-base italic text-violet-200">
                      "Data yang baik bukan hanya rapi, tapi juga berdampak."
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-lg md:text-xl font-semibold tracking-wide text-white">Fokus Saat Ini</h3>
                    <ul className="space-y-2 text-sm md:text-base">
                      <li className="flex items-start gap-2">
                        <span className="text-base">📊</span>
                        <span>Advanced Data Analytics & Business Intelligence.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-base">🤖</span>
                        <span>Machine Learning & AI Fundamentals.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-base">📈</span>
                        <span>Data Visualization Best Practices.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-base">🐍</span>
                        <span>Python for Data Science.</span>
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-lg md:text-xl font-semibold tracking-wide text-white">Portfolio Highlight</h3>
                    <ul className="space-y-2 text-sm md:text-base">
                      <li className="flex gap-2">
                        <span className="text-violet-400">•</span>
                        <span>Dashboard & Reporting — merapikan metrik inti agar cepat dibaca dan mudah dipresentasikan.</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-violet-400">•</span>
                        <span>Exploratory Data Analysis (EDA) — menemukan pola, anomali, dan peluang yang tersembunyi.</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-violet-400">•</span>
                        <span>Data Automation — pipeline sederhana untuk mempercepat proses analisis.</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-violet-400">•</span>
                        <span>Visualization & Storytelling — visual yang enak dilihat dan mudah dipahami.</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center sm:justify-between text-center sm:text-left gap-y-8 sm:gap-y-0 mb-4 w-full">
                  <div>
                    <h1 className="text-3xl md:text-4xl mb-1">
                      20<span className="text-violet-500">+</span>
                    </h1>
                    <p>Project Finished</p>
                  </div>
                  <div>
                    <h1 className="text-3xl md:text-4xl mb-1">
                      3<span className="text-violet-500">+</span>
                    </h1>
                    <p>Years of Experience</p>
                  </div>
                  <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600" data-aos-once="true">
                    <h1 className="text-3xl md:text-4xl mb-1">
                      3.81<span className="text-violet-500">/4.00</span>
                    </h1>
                    <p>GPA</p>
                  </div>
                </div>


                <ShinyText
                  text="Working with heart, creating with mind."
                  disabled={false}
                  speed={3}
                  className="text-sm md:text-base text-violet-400"
                />
              </div>
            </div>

            {/* Kolom kanan */}
            <div className="basis-full md:basis-5/12 pl-0 md:pl-8 overflow-hidden max-w-full flex justify-center ">
              <Lanyard position={[0, 0, 15]} gravity={[0, -40, 0]} />
            </div>
          </div>

        </div>
        <div className="tools mt-32">
          <h1 className="text-4xl/snug font-bold mb-4" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true" >Tools & Technologies</h1>
          <p className="w-2/5 text-base/loose opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">My Profesional Skills</p>
          <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">

            {listTools.map((tool) => (
              <div
                key={tool.id} data-aos="fade-up" data-aos-duration="1000" data-aos-delay={tool.dad} data-aos-once="true"
                className="flex items-center gap-4 p-4 border border-zinc-700 rounded-xl bg-zinc-900/60 backdrop-blur-md hover:bg-zinc-800/80 transition-all duration-300 group shadow-lg"
              >
                <img
                  src={tool.gambar}
                  alt="Tools Image"
                  className="w-16 h-16 object-contain bg-zinc-800 p-2 rounded-lg group-hover:bg-zinc-900 transition-all duration-300"
                />
                <div className="flex flex-col overflow-hidden">
                  <div className="truncate">
                    <ShinyText
                      text={tool.nama}
                      disabled={false}
                      speed={3}
                      className="text-lg font-semibold block"
                    />
                  </div>
                  <p className="text-sm text-zinc-400 truncate">{tool.ket}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="certificates mt-32" id="certificates">
          <h1
            className="text-4xl/snug font-bold mb-4"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            Certificates & Achievements
          </h1>
          <p
            className="w-full md:w-3/5 text-base/loose opacity-50"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
            data-aos-once="true"
          >
            Bukti pengalaman dan pencapaian yang bisa kamu klik untuk melihat
            detail sertifikat.
          </p>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
            {listCertificates.map((certificate, index) => (
              <button
                key={certificate.id}
                type="button"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay={200 + index * 150}
                data-aos-once="true"
                className="group rounded-xl border border-zinc-700 bg-zinc-900/70 p-3 shadow-lg transition hover:border-violet-500/60 hover:bg-zinc-800/70"
                onClick={() => setSelectedCertificate(certificate)}
              >
                <div className="aspect-square overflow-hidden rounded-lg border border-zinc-800 bg-zinc-950">
                  <img
                    src={certificate.image}
                    alt={certificate.alt}
                    className="h-full w-full object-contain transition duration-300 group-hover:scale-105"
                    loading="lazy"
                    onError={(event) => {
                      if (certificate.fallbackImage) {
                        event.currentTarget.src = certificate.fallbackImage;
                      }
                    }}
                  />
                </div>
              </button>
            ))}
          </div>
        </div>
        {selectedCertificate ? (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
            role="dialog"
            aria-modal="true"
          >
            <div className="relative w-full max-w-4xl rounded-2xl border border-zinc-700 bg-zinc-900 p-4 shadow-xl">
              <button
                type="button"
                className="absolute right-4 top-4 rounded-full border border-zinc-700 bg-zinc-800 px-3 py-1 text-sm text-white transition hover:bg-zinc-700"
                onClick={() => setSelectedCertificate(null)}
              >
                Close
              </button>
              <img
                src={selectedCertificate.image}
                alt={selectedCertificate.alt}
                className="max-h-[80vh] w-full rounded-xl object-contain"
                onError={(event) => {
                  if (selectedCertificate.fallbackImage) {
                    event.currentTarget.src = selectedCertificate.fallbackImage;
                  }
                }}
              />
              <div className="mt-4 text-left">
                <h3 className="text-xl font-semibold text-white">
                  {selectedCertificate.title}
                </h3>
                <p className="text-sm text-zinc-400">
                  {selectedCertificate.issuer}
                </p>
                <p className="text-xs text-zinc-500">
                  {selectedCertificate.date}
                </p>
              </div>
            </div>
          </div>
        ) : null}
        {/* tentang */}

        {/* Proyek */}
        <div className="proyek mt-32 py-10" id="project" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true"></div>
        <h1 className="text-center text-4xl font-bold mb-2" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Project</h1>
        <p className="text-base/loose text-center opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">Showcasing a selection of projects that reflect my skills, creativity, and passion for building meaningful digital experiences.</p>
        <div className="proyek-box mt-14" >

          <div style={{ height: 'auto', position: 'relative' }} data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400" data-aos-once="true" >
            <ChromaGrid
              items={listProyek}
            />
          </div>
        </div>
        {/* Proyek */}


        {/* Kontak */}
        <div className="kontak mt-32 sm:p-10 p-0" id="contact">
          <h1
            className="text-4xl mb-2 font-bold text-center"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            Contact & Chat
          </h1>
          <p
            className="text-base/loose text-center mb-10 opacity-50"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
            data-aos-once="true"
          >
            Get in touch with me or chat in real-time
          </p>

          {/* Container dua kolom */}
          <div className="flex flex-col md:flex-row gap-8">
            {/* Chat Room di kiri */}
            <div className="flex-1 bg-zinc-800 p-6 rounded-md" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400" data-aos-once="true">
              <ChatRoom />
            </div>

            {/* Contact Form di kanan */}
            <div className="flex-1" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500" data-aos-once="true">
              <ContactForm />
            </div>
          </div>
        </div>
        {/* Kontak */}
      </main>

    </>
  )
}

export default App
