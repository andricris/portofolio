import HeroImage from "/assets/hero-img.webp";

const Image = {
  HeroImage,
};

export default Image;

import Tools1 from "/assets/tools/vscode.png";
import Tools2 from "/assets/tools/reactjs.png";
import Tools3 from "/assets/tools/nextjs.png";
import Tools4 from "/assets/tools/tailwind.png";
import Tools5 from "/assets/tools/bootstrap.png";
import Tools6 from "/assets/tools/js.png";
import Tools7 from "/assets/tools/nodejs.png";
import Tools8 from "/assets/tools/github.png";
import Tools9 from "/assets/tools/ai.png";
import Tools10 from "/assets/tools/canva.png";
import Tools11 from "/assets/tools/figma.png";
import Tools12 from "/assets/tools/kotlin.png";
import Tools13 from "/assets/tools/firebase.png";
import Tools14 from "/assets/tools/html.png";
import Tools15 from "/assets/tools/css.png";
import Tools16 from "/assets/tools/ts.png";
import Tools17 from "/assets/tools/php.png";
import Tools18 from "/assets/tools/vite.png";
import Tools19 from "/assets/tools/mysql.png";

const projectStack = ["React", "Vite", "Tailwind"];
const projectScreenshot =
  "https://placehold.co/600x400/0f172a/ffffff?text=Project+Preview";

export const listCertificates = [
  {
    id: 1,
    title: "AI for Everyone",
    issuer: "DeepLearning.AI",
    date: "Feb 5, 2026",
    image: "/assets/certificates/certificate (1).png",
    url: "https://learn.deeplearning.ai/certificates/a6540322-ef58-40cb-9ac8-2a1fa983cff0?usp=sharing",
    alt: "Sertifikat AI for Everyone dari DeepLearning.AI.",
  },
  {
    id: 2,
    title: "Generative AI for Everyone",
    issuer: "DeepLearning.AI",
    date: "Feb 3, 2026",
    image: "/assets/certificates/certificate (2).png",
    url: "https://learn.deeplearning.ai/certificates/a8ef65e7-bf00-4ae2-ba15-8617e5329019?usp=sharing",
    alt: "Sertifikat Generative AI for Everyone dari DeepLearning.AI.",
  },
  {
    id: 3,
    title: "Build with Andrew",
    issuer: "DeepLearning.AI",
    date: "Feb 3, 2026",
    image: "/assets/certificates/certificate (3).png",
    url: "https://learn.deeplearning.ai/certificates/6f14a665-f7ad-4ede-bdf4-ff4701af776a?usp=sharing",
    alt: "Sertifikat Build with Andrew dari DeepLearning.AI.",
  },
];

export const listTools = [
  {
    id: 1,
    gambar: Tools1,
    nama: "Visual Studio Code",
    ket: "Code Editor",
    dad: "100",
  },
  {
    id: 2,
    gambar: Tools2,
    nama: "React JS",
    ket: "Framework",
    dad: "200",
  },
  {
    id: 3,
    gambar: Tools3,
    nama: "Next JS",
    ket: "Framework",
    dad: "300",
  },
  {
    id: 4,
    gambar: Tools4,
    nama: "Tailwind CSS",
    ket: "Framework",
    dad: "400",
  },
  {
    id: 5,
    gambar: Tools5,
    nama: "Bootstrap",
    ket: "Framework",
    dad: "500",
  },
  {
    id: 6,
    gambar: Tools6,
    nama: "Javascript",
    ket: "Language",
    dad: "600",
  },
  {
    id: 7,
    gambar: Tools7,
    nama: "Node JS",
    ket: "Javascript Runtime",
    dad: "700",
  },
  {
    id: 8,
    gambar: Tools8,
    nama: "Github",
    ket: "Repository",
    dad: "800",
  },
  {
    id: 9,
    gambar: Tools9,
    nama: "Adobe Illustrator",
    ket: "Design App",
    dad: "900",
  },
  {
    id: 10,
    gambar: Tools10,
    nama: "Canva",
    ket: "Design App",
    dad: "1000",
  },
  {
    id: 11,
    gambar: Tools11,
    nama: "Figma",
    ket: "Design App",
    dad: "1100",
  },
  {
    id: 12,
    gambar: Tools12,
    nama: "Kotlin",
    ket: "Language",
    dad: "1200",
  },
  {
    id: 13,
    gambar: Tools13,
    nama: "Firebase",
    ket: "Framework",
    dad: "1300",
  },
  {
    id: 14,
    gambar: Tools14,
    nama: "HTML",
    ket: "Language",
    dad: "1400",
  },
  {
    id: 15,
    gambar: Tools15,
    nama: "CSS",
    ket: "Language",
    dad: "1500",
  },
  {
    id: 16,
    gambar: Tools16,
    nama: "TypeScript",
    ket: "Language",
    dad: "1600",
  },
  {
    id: 17,
    gambar: Tools17,
    nama: "PHP",
    ket: "Language",
    dad: "1700",
  },
  {
    id: 18,
    gambar: Tools18,
    nama: "Vite",
    ket: "Framework",
    dad: "1800",
  },
  {
    id: 19,
    gambar: Tools19,
    nama: "MySql",
    ket: "Framework",
    dad: "1900",
  },
];

export const listProyek = [
  {
    id: 2,
    image: "https://cdn-icons-png.flaticon.com/512/745/745752.png",
    title: "SteamBox",
    subtitle: "Portal utilitas dan tools SteamBox",
    fullDescription: "Portal utilitas dan tools SteamBox",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://dracin-babyland.vercel.app/",
    screenshot: projectScreenshot,
    stack: projectStack,
    repoLabel: "Private repo",
    dad: "200",
  },
  {
    id: 10,
    image: "https://cdn-icons-png.flaticon.com/512/2000/2000047.png",
    title: "Fake Strava",
    subtitle: "Generator GPX lari simulasi",
    fullDescription: "Generator GPX lari simulasi",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://fakeh3.netlify.app/",
    screenshot: projectScreenshot,
    stack: projectStack,
    repoLabel: "Private repo",
    dad: "1000",
  },
  {
    id: 12,
    image: "https://cdn-icons-png.flaticon.com/512/1162/1162456.png",
    title: "H3 Store",
    subtitle: "Toko online solusi digital",
    fullDescription: "Toko online solusi digital",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://newh3store.netlify.app/",
    screenshot: projectScreenshot,
    stack: projectStack,
    repoLabel: "Private repo",
    dad: "1200",
  },
  {
    id: 16,
    image: "https://cdn-icons-png.flaticon.com/512/15790/15790666.png",
    title: "Qris Pembayaran",
    subtitle: "Generator QRIS pembayaran",
    fullDescription: "Generator QRIS pembayaran",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://qrish3.netlify.app/",
    screenshot: projectScreenshot,
    stack: projectStack,
    repoLabel: "Private repo",
    dad: "1600",
  },
  {
    id: 18,
    image: "https://cdn-icons-png.flaticon.com/512/303/303812.png",
    title: "Excel Line Converter",
    subtitle: "Baris Excel → satu baris",
    fullDescription: "Tools konversi baris Excel menjadi satu baris",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://line2baru.netlify.app/",
    screenshot: projectScreenshot,
    stack: projectStack,
    repoLabel: "Private repo",
    dad: "1800",
  },
  {
    id: 20,
    image: "https://cdn-icons-png.flaticon.com/512/2838/2838912.png",
    title: "Kalkulator menghitung ED produk",
    subtitle: "Menghitung sisa umur produk",
    fullDescription: "Tools untuk menghitung sisa umur produk",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://kalkuede.netlify.app/",
    screenshot: projectScreenshot,
    stack: projectStack,
    repoLabel: "Private repo",
    dad: "2000",
  },
];
