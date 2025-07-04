
# Guía Técnica – ESPE Task Manager

## 1. Introducción
Este documento describe la estructura técnica del proyecto **ESPE Task Manager**, una aplicación web construida con **LitElement** y **Webpack** que gestiona tareas de forma modular utilizando Web Components y el estilo de la Universidad de las Fuerzas Armadas ESPE Sede Santo Domingo.

## 2. Requisitos Previos
- Node.js (v18 o superior)
- npm (v9 o superior)
- Navegador moderno (Chrome, Edge, Firefox)
- Editor de código recomendado: VS Code

## 3. Instalación del Proyecto
1. Clonar el repositorio:
   ```bash
   git clone https://github.com/JordanGuevara/task-manager-Lab2U2.git
   cd task-manager-Lab2U2
   ```
2. Instalar dependencias:
   
   ```bash
   npm init
   npm install lit-element
   npm install webpack webpack-cli --save-dev
   npm install webpack webpack-dev-server --save-dev
   npm install --save-dev html-webpack-plugin
   ```
## 4. Estructura del Proyecto
```
├── src/
│   ├── components/
│   │   ├── app-container.js
│   │   ├── espe-task-list.js
│   │   ├── espe-task-items.js
│   │   ├── espe-add-task-button.js
│   │   └── espe-header.js
│   ├── styles/
│   │   └── style.css
│   └── docs/
│       ├── capturas/
│       └── guia-tecnica.md
├── index.js
├── index.html
├── webpack.config.js
├── package-lock.json
├── package.json
└── README.md

```

## 5. Comandos de Desarrollo
- Ejecutar en modo desarrollo:
  ```bash
  npm run serve
  ```
  Esto abre `http://localhost:8080` y recarga automáticamente al guardar cambios.

## 6. Componentes Principales
- `<app-container>`: componente raíz de la aplicación.
- `<espe-task-list>`: lista dinámica de tareas con edición y eliminación.
- `<espe-add-task-button>`: botón flotante que abre el formulario para agregar nuevas tareas.
- `<espe-task-items>`: para obtener o mostrar los diferentes items dentro de la tarea del mismo.
- `<espe-header>`: encabezado de la pagina web donde se encuentra el cambio de tema de la página web.
## 7. Estilos y Temas
La aplicación soporta dos temas: claro y oscuro. Estos temas cambian usando CSS Variables (`--bg-primary`, `--text-primary`, etc.) y un evento personalizado desde el header.

## 8. Compilación para Producción
Para generar los archivos optimizados:
```bash
npm run build
```
Esto crea la carpeta `dist/` con los recursos listos para despliegue.

## 9. Problemas Comunes
- **MIME type error de CSS**: asegurarse de importar el CSS desde el `index.js` usando:
  ```js
  import './css/style.css';
  ```
- **Error 'already been defined'**: no definir dos veces un componente con el mismo nombre.
