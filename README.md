# M.H. Alberto - Studio Personal

Un archivo digital minimalista dedicado a la documentación de lecturas y notas técnicas en matemáticas e inteligencia artificial.

## Visión

Este es un espacio personal donde la curiosidad se transforma en registro. Un archivo digital limpio y funcional donde el conocimiento puede ser consultado con la misma calma con la que fue adquirido.

## Estructura del Proyecto

```
.
├── index.html              # Landing page
├── README.md              # Este archivo
├── assets/
│   └── logo.svg           # Logotipo del proyecto
├── css/
│   └── styles.css         # Estilos compartidos
├── js/
│   ├── ui.js              # Lógica de UI (navbar, search)
│   └── viewer.js          # Visor de documentos
└── pages/
    ├── acerca.html        # Página "Acerca de"
    ├── notas.html         # Hub de temas
    └── temas/             # Carpetas temáticas
        ├── probabilidad/
        │   ├── index.html
        │   ├── data.js
        │   └── pdfs/
        └── analisis/
            ├── index.html
            ├── data.js
            └── pdfs/
```

## Características

**Diseño Minimalista**  
Estética "White Studio" con tipografía premium (Inter + Noto Serif) y animaciones sutiles.

**Navegación Inteligente**  
Navbar responsive que se oculta al hacer scroll hacia abajo y reaparece al subir, con menú hamburguesa en móvil.

**Búsqueda en Tiempo Real**  
Filtrado dinámico de temas por título, descripción o categoría.

**Presentación de Archivo**  
Sistema numerado para notas individuales con visor de documentos integrado.

**Completamente Responsive**  
Optimizado para desktop, tablet y móvil con breakpoints inteligentes.

## Despliegue

Este sitio se despliega automáticamente a GitHub Pages mediante GitHub Actions.

### Configuración Local

1. Clona el repositorio
2. Abre `index.html` en tu navegador
3. Los archivos son estáticos, no requieren servidor

### GitHub Pages

1. Sube el proyecto a un repositorio de GitHub
2. Ve a Settings > Pages
3. Selecciona "GitHub Actions" como fuente
4. El sitio se publicará automáticamente en cada push a main

## Agregar Contenido

### Nuevo Tema

1. Crea una carpeta en `pages/temas/[nombre-tema]`
2. Copia `data.js` de otro tema y actualiza:
   ```javascript
   const themeData = {
       title: "Nombre del Tema",
       description: "Descripción breve del tema",
       notes: []
   };
   export default themeData;
   ```
3. Copia `index.html` de otro tema
4. Agrega el tema al array en `pages/notas.html`:
   ```javascript
   {
       title: "Nombre del Tema",
       description: "Descripción para la tarjeta",
       path: "temas/nombre-tema/index.html",
       meta: "Categoría"
   }
   ```

### Nueva Nota

Edita el archivo `data.js` del tema correspondiente:

```javascript
notes: [
    {
        id: 1,
        title: "Título de la Nota",
        summary: "Resumen breve del contenido",
        date: "Mes Año",
        pdf: "pdfs/archivo.pdf"
    }
]
```

Coloca el archivo PDF en la carpeta `pdfs/` dentro del tema.

## Tecnologías

- HTML5 / CSS3
- JavaScript ES6+ Modules
- GitHub Pages
- GitHub Actions

## Estructura de Estilos

El proyecto utiliza CSS moderno con:
- Variables CSS para temas consistentes
- Animaciones con cubic-bezier para suavidad
- Flexbox y Grid para layouts responsive
- Media queries optimizadas para móvil

## Licencia

Proyecto personal. Todos los derechos reservados.

---

**M.H. Alberto**  
Matemático explorando la Inteligencia Artificial
