window.PROJECTS = [
  {
    id: "newton",
    url: "https://newton.com.py",
    type: "combo",
    desktop: "assets/projects/newton-desktop.png",
    mobile: "assets/projects/newton-mobile.png",
    featured: true,
    title: { es: "Newton", en: "Newton" },
    desc: {
      es: "Diseño y desarrollo web — desktop y móvil",
      en: "Web design & development — desktop and mobile",
    },
  },
  {
    id: "tucursillo",
    url: "https://tucursillo.com",
    type: "combo",
    desktop: "assets/projects/tucursillo-desktop.png",
    mobile: "assets/projects/tucursillo-mobile.png",
    featured: true,
    title: { es: "Tucursillo", en: "Tucursillo" },
    desc: {
      es: "Plataforma de cursos online — desktop y móvil",
      en: "Online courses platform — desktop and mobile",
    },
  },
  {
    id: "arquimedis",
    url: "https://arquimedis.com.py",
    type: "desktop",
    desktop: "assets/projects/arquimedis-desktop.png",
    featured: true,
    title: { es: "Arquimedis", en: "Arquimedis" },
    desc: {
      es: "Estudios preuniversitarios — diseño y desarrollo web",
      en: "Pre-university studies — web design & development",
    },
  },
  {
    id: "coral",
    url: "https://asocoralsanjavier.org.py",
    type: "desktop",
    desktop: "assets/projects/coral-desktop.png",
    featured: true,
    title: { es: "Coral San Javier", en: "Coral San Javier" },
    desc: {
      es: "Sitio institucional para la asociación coral de Encarnación",
      en: "Institutional website for the choral association in Encarnación",
    },
  },
  {
    id: "openmarket",
    url: "https://openmarket-fiuni.vercel.app/",
    type: "desktop",
    desktop: "assets/projects/openmarket-desktop.png",
    featured: true,
    title: { es: "OpenMarket", en: "OpenMarket" },
    desc: {
      es: "Marketplace full stack — colaborador en backend y frontend",
      en: "Full stack marketplace — backend & frontend contributor",
    },
  },
  {
    id: "automatizador",
    url: "https://github.com/DavidVillarM/Automatizador-de-Cuestionarios-para-LearnDash-LMS",
    type: "code",
    featured: true,
    title: { es: "Automatizador de Cuestionarios", en: "Quiz Automator" },
    desc: {
      es: "Plugin para automatizar cuestionarios en LearnDash LMS",
      en: "Plugin to automate quizzes in LearnDash LMS",
    },
    code: `<span class="cm">// LearnDash Quiz Bot</span><br>
<span class="kw">function</span> <span class="fn">autoQuiz</span>($course) {<br>
&nbsp;&nbsp;<span class="fn">generateQuestions</span>($course);<br>
&nbsp;&nbsp;<span class="fn">assignToStudents</span>();<br>
}`,
  },
  {
    id: "estrellas",
    url: "https://github.com/DavidVillarM/Registro-de-Estrellas",
    type: "code",
    featured: true,
    title: { es: "Registro de Estrellas", en: "Star Registry" },
    desc: {
      es: "Sistema full stack con API .NET, React y Docker",
      en: "Full stack system with .NET API, React and Docker",
    },
    code: `<span class="cm">// API .NET + React</span><br>
<span class="kw">public class</span> <span class="fn">Estrella</span> {<br>
&nbsp;&nbsp;<span class="kw">public string</span> Nombre { <span class="kw">get</span>; }<br>
&nbsp;&nbsp;<span class="kw">public int</span> Puntos { <span class="kw">get</span>; }<br>
}`,
  },
  {
    id: "newton-opm",
    url: "https://github.com/DavidVillarM/newton-opm",
    type: "code",
    featured: true,
    title: { es: "Newton OPM", en: "Newton OPM" },
    desc: {
      es: "Plugin WordPress: conducta, asistencia y exámenes",
      en: "WordPress plugin: conduct, attendance and exams",
    },
    code: `<span class="cm">&lt;!-- WordPress Plugin --&gt;</span><br>
<span class="kw">&lt;?php</span><br>
<span class="fn">register_post_type</span>(<span class="str">'conducta'</span>);<br>
<span class="fn">add_action</span>(<span class="str">'init'</span>, ...);<br>
<span class="kw">?&gt;</span>`,
  },
  {
    id: "tuc-academic",
    url: "https://github.com/DavidVillarM/tucursillo-academic-system",
    type: "code",
    featured: true,
    title: { es: "Tucursillo Academic", en: "Tucursillo Academic" },
    desc: {
      es: "Automatización académica para LearnDash",
      en: "Academic automation for LearnDash",
    },
    code: `<span class="cm">// LearnDash Automation</span><br>
<span class="kw">function</span> <span class="fn">syncCourses</span>() {<br>
&nbsp;&nbsp;<span class="kw">return</span> <span class="fn">fetch</span>(<span class="str">'/api/...'</span>);<br>
}`,
  },
  {
    id: "redeem",
    url: "https://github.com/DavidVillarM/tuc-redeem-codes",
    type: "code",
    featured: true,
    title: { es: "TUC Redeem Codes", en: "TUC Redeem Codes" },
    desc: {
      es: "Códigos de canje para LearnDash Groups",
      en: "Redeem codes for LearnDash Groups",
    },
    code: `<span class="cm">// Redeem Codes</span><br>
<span class="kw">function</span> <span class="fn">validateCode</span>($code) {<br>
&nbsp;&nbsp;<span class="kw">return</span> <span class="fn">wp_verify</span>($code);<br>
}`,
  },
  {
    id: "viborita",
    url: "https://github.com/DavidVillarM/Juego-de-la-Viborita",
    type: "phone-code",
    featured: false,
    title: { es: "Juego de la Viborita", en: "Snake Game" },
    desc: {
      es: "Snake clásico en ensamblador (EMU8086)",
      en: "Classic Snake in assembly (EMU8086)",
    },
    phoneContent: `<span style="color:#0f0;">SNAKE</span><br>
<span style="color:#fff;">########</span><br>
<span style="color:#fff;">#</span><span style="color:#0f0;">oo</span><span style="color:#fff;">  #</span><br>
<span style="color:#888;">SCORE: 12</span>`,
  },
  {
    id: "wordle",
    url: "https://github.com/DavidVillarM/wordlePPY.github.io",
    type: "phone-code",
    featured: false,
    title: { es: "Wordle PPY", en: "Wordle PPY" },
    desc: {
      es: "Clon del juego Wordle en JavaScript puro",
      en: "Wordle clone in vanilla JavaScript",
    },
    phoneContent: `<span style="display:inline-block;width:14px;height:14px;background:#538d4e;border-radius:2px;margin:1px;"></span>
<span style="display:inline-block;width:14px;height:14px;background:#b59f3b;border-radius:2px;margin:1px;"></span>
<span style="display:inline-block;width:14px;height:14px;background:#3a3a3c;border-radius:2px;margin:1px;"></span>`,
  },
  {
    id: "basal",
    url: "https://github.com/DavidVillarM/calculadoraBasal.github.io",
    type: "phone-code",
    featured: false,
    title: { es: "Calculadora Basal", en: "Basal Calculator" },
    desc: {
      es: "Calculadora de metabolismo basal en JavaScript",
      en: "Basal metabolic rate calculator in JavaScript",
    },
    phoneContent: `<span style="color:#888;font-size:8px;">Basal</span><br>
<span style="color:#fff;font-size:14px;font-weight:bold;">1,420</span>`,
  },
];

window.Projects = {
  lang() {
    return window.I18n?.lang || "es";
  },

  renderVisual(project) {
    if (project.type === "combo") {
      return `<div class="device-stage device-stage--combo">
        <div class="device-laptop">
          <div class="device-laptop-bezel">
            <img src="${project.desktop}" alt="" loading="lazy">
          </div>
          <div class="device-laptop-chin"></div>
          <div class="device-laptop-base"></div>
        </div>
        <div class="device-phone">
          <div class="device-phone-notch"></div>
          <div class="device-phone-screen">
            <img src="${project.mobile}" alt="" loading="lazy">
          </div>
        </div>
      </div>`;
    }

    if (project.type === "desktop") {
      return `<div class="device-stage device-stage--desktop">
        <div class="device-laptop">
          <div class="device-laptop-bezel">
            <img src="${project.desktop}" alt="" loading="lazy">
          </div>
          <div class="device-laptop-chin"></div>
          <div class="device-laptop-base"></div>
        </div>
      </div>`;
    }

    if (project.type === "code") {
      return `<div class="device-stage device-stage--desktop">
        <div class="device-laptop">
          <div class="device-laptop-bezel device-laptop-bezel--code">
            <div class="code-preview">${project.code}</div>
          </div>
          <div class="device-laptop-chin"></div>
          <div class="device-laptop-base"></div>
        </div>
      </div>`;
    }

    if (project.type === "phone-code") {
      return `<div class="device-stage device-stage--phone">
        <div class="device-phone device-phone--solo">
          <div class="device-phone-notch"></div>
          <div class="device-phone-screen device-phone-screen--code">
            <div class="phone-code-content">${project.phoneContent}</div>
          </div>
        </div>
      </div>`;
    }

    return "";
  },

  renderCard(project) {
    const lang = this.lang();
    const title = project.title[lang] || project.title.es;
    const desc = project.desc[lang] || project.desc.es;

    return `<article class="project-card">
      <a href="${project.url}" target="_blank" rel="noopener" class="project-card-link">
        <div class="project-card-visual">
          ${this.renderVisual(project)}
        </div>
        <div class="project-card-info">
          <h3>${title}</h3>
          <p>${desc}</p>
        </div>
      </a>
    </article>`;
  },

  renderAll() {
    const lang = this.lang();
    const carousel = document.getElementById("project-carousel");
    const grid = document.getElementById("work-grid");

    if (carousel) {
      const featured = window.PROJECTS.filter((p) => p.featured);
      const cards = featured.map((p) => this.renderCard(p)).join("");
      carousel.innerHTML = cards + cards;
      if (carousel._carouselCleanup) carousel._carouselCleanup();
      if (window.initCarousel) window.initCarousel(carousel);
    }

    if (grid) {
      grid.innerHTML = window.PROJECTS.map((p) => this.renderCard(p)).join("");
      grid.classList.add("fade-in");
    }
  },
};
