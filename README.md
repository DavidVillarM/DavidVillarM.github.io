# David Villar — Portfolio

Portfolio profesional de David Villar, desarrollador de software. Diseño minimalista inspirado en [gabrielvaldivia.com](https://www.gabrielvaldivia.com).

## Estructura

```
├── index.html      # Página principal
├── work.html       # Galería de proyectos
├── about.html      # Sobre mí
├── css/styles.css  # Estilos
├── js/main.js      # Interactividad
└── assets/         # Imágenes
```

## Despliegue en GitHub Pages

1. Crea un repositorio en GitHub llamado `DavidVillarM.github.io` (o el nombre que prefieras).

2. Sube todos los archivos de esta carpeta al repositorio:

```bash
git init
git add .
git commit -m "Portfolio profesional"
git branch -M main
git remote add origin https://github.com/DavidVillarM/DavidVillarM.github.io.git
git push -u origin main
```

3. En GitHub, ve a **Settings → Pages** y configura:
   - **Source:** Deploy from a branch
   - **Branch:** `main` / `/ (root)`

4. Tu sitio estará disponible en `https://davidvillarm.github.io`

> Si usas otro nombre de repositorio, la URL será `https://davidvillarm.github.io/nombre-del-repo`

## Desarrollo local

Abre `index.html` directamente en el navegador, o usa un servidor local:

```bash
npx serve .
```

## Tecnologías

- HTML5, CSS3, JavaScript vanilla
- Sin dependencias externas (excepto Google Fonts)
- Compatible con GitHub Pages
