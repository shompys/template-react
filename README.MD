# Template Client-Side

## Comenzando 🚀

### Pre-requisitos 📋

* _Node.js > 16.9.0._</br>
* _Ejecutar :_

```bash
corepack enable
```
_Esto habilita el gestor de paquetes pnpm._

### Instalación 🔧

* _Crear el archivo .npmrc y ejecutar:_

```bash
pnpm install
```
* _Ahora tenemos los siguientes script para crear un archivo `.env` según ambiente:_

```bash
    pnpm dev:run-dev-ar
    pnpm dev:run-dev-br
    pnpm dev:run-prd-ar
    pnpm dev:run-prd-br 
```
* Si ya tenemos el `.env` solo ejecutamos esto

```bash
    pnpm vite
```

## Ejecutando las pruebas ⚙️

```bash
    pnpm test
    pnpm test:watch
```

## Commit 📦

_Cuando ejecutamos `git commit`_ tenemos el CLI commitizen.

## Estructura 🛠️

```bash
public/
├── fonts/
├── locales/            # Textos
│   ├── es-Ar/
│       ├── example.json
│   ├── pt-BR/
│       ├── example.json
src/
├── appProviders/
│   ├── Provider1Context.js
│   ├── Provider2Context.js
│   └── index.js
├── components/         # Aquí van los componentes reutilizables de tu aplicación
├── cookies/            # Aquí van los archivos relacionados con la gestión de cookies
├── styles/             # Aquí van los archivos de estilos de tu aplicación
├── pages/              # Aquí van los componentes para las páginas
│   ├── index.tsx       # Componente específico de la página index
│   └── components/     # Componentes específicos de la página index
│       ├── Component1.tsx
│       ├── Component2.tsx
│       └── Component3.tsx
├── routes/
├── services/
├── constants/
├── modals/             # Aquí van todos los modales
├── app.tsx             # Archivo principal de la aplicación
└── main.tsx            # Archivo de inicialización principal de la aplicación
```




