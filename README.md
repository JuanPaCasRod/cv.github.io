# CV Online - Juan Pablo Castilla

Currículum Vitae profesional en línea desarrollado con React, TypeScript y Tailwind CSS.

## 🚀 Características

- Diseño moderno con tema cyberpunk/tech
- Totalmente responsive
- Optimizado para GitHub Pages
- Animaciones suaves y efectos visuales
- Tema oscuro con acentos cyan/azul eléctrico

## 📋 Requisitos Previos

- Node.js 18+ 
- npm

## 🛠️ Instalación

1. Instala las dependencias:
```bash
npm install
```

## 🏃 Desarrollo

Para ejecutar el proyecto en modo desarrollo:

```bash
npm run dev
```

El proyecto estará disponible en `http://localhost:5173`

## 📦 Construcción

Para crear la versión de producción:

```bash
npm run build
```

Los archivos se generarán en la carpeta `dist/`

## 🌐 Despliegue en GitHub Pages

El proyecto está configurado para desplegarse automáticamente en GitHub Pages cuando se hace push a la rama `main`.

1. Ve a Settings > Pages en tu repositorio de GitHub
2. Selecciona "GitHub Actions" como fuente
3. El workflow se ejecutará automáticamente en cada push a `main`

## 📁 Estructura del Proyecto

```
cv.github.io/
├── public/
│   └── images/          # Imágenes estáticas
├── src/
│   ├── components/      # Componentes reutilizables
│   ├── contexts/        # Contextos de React
│   └── pages/           # Páginas del sitio
├── App.tsx              # Componente principal
├── index.html           # HTML base
├── index.css            # Estilos globales
└── package.json         # Dependencias
```

## 🎨 Personalización

### Cambiar colores del tema

Edita las variables CSS en `index.css` dentro de `:root` y `.dark`:

```css
--accent: #00d9ff;  /* Color principal */
--background: #0a0e27;  /* Fondo */
```

### Modificar contenido

Edita el archivo `src/pages/Home.tsx` para actualizar:
- Información personal
- Experiencia laboral
- Educación
- Habilidades técnicas
- Contacto

## 📝 Licencia

Este proyecto es de uso personal.
