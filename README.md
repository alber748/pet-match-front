# Proyecto Fullstack

¡Bienvenido al proyecto fullstack! Este repositorio contiene el código para la parte frontend en React y la parte backend en Java.

## Frontend - React

El frontend de nuestra aplicación está construido con React. Puedes encontrar el código correspondiente en el repositorio actual. Asegúrate de explorar el código para ver cómo se crean las interfaces de usuario impresionantes.

## Backend - Java

Nuestro backend potencia toda la lógica de negocio detrás de la aplicación. El código Java está disponible en el repositorio [nombre-del-repositorio-backend](https://github.com/Moscarena/PetMatch.git). Sumérgete en el código para descubrir cómo manejamos los datos y las solicitudes del cliente.

## ¿Cómo funcionan juntos?

El backend y el frontend trabajan en armonía para ofrecer una experiencia de usuario perfecta. Siéntete libre de explorar ambos repositorios y ver cómo se comunican entre sí para proporcionar la funcionalidad completa de la aplicación.

¡Gracias por tu interés en nuestro proyecto! Nos motiva mucho trabajar en esta Hackaton.


# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
