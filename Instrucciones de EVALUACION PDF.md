# 📘 Evaluación del Módulo 6

## Desarrollo de Interfaces Interactivas con Vue.js

---

## 💻 Proyecto: BookList SPA

### Gestor de Libros Interactivo

---

## 📍 Situación Inicial

**Unidad solicitante:** Área de Desarrollo Frontend – Editorial Nova

La **Editorial Nova** busca modernizar su sistema de gestión de libros, actualmente limitado a formularios estáticos en HTML sin navegación entre pantallas.

La solución propuesta es una **SPA (Single Page Application)** desarrollada con Vue.js que permita:

* Registrar libros
* Visualizar catálogo
* Filtrar por autor o categoría
* Editar y eliminar entradas

Todo dentro de una experiencia fluida, interactiva y profesional.

El equipo front-end debe desarrollar un **prototipo funcional escalable**, aplicando progresivamente los conceptos del módulo.

---

## 📋 Objetivo del Proyecto

Desarrollar una SPA llamada **BookList** para gestionar un listado interactivo de libros.

### 🎯 Resultados esperados

* Comprender y aplicar fundamentos de Vue.js
* Usar templates, eventos y formularios reactivos
* Implementar navegación con Vue Router
* Construir una aplicación modular y escalable

---

## 🤝 Requerimientos

* Permitir añadir libros con:

  * Título
  * Autor
  * Categoría
* Formulario con actualización reactiva en tiempo real
* Lista de libros dinámica con opción de eliminación
* Al menos **3 vistas**:

  * Inicio
  * Lista de libros
  * Detalle del libro
* Implementar:

  * Rutas estáticas y dinámicas
* Código modular y reutilizable

---

## 👣 Paso a Paso

Este proyecto corresponde al **Módulo 6** y se divide en **5 lecciones progresivas**.

Se recomienda complementar con estudio asincrónico y resolución de dudas en instancias grupales.

---

## 🧩 Lecciones y Tareas

---

### 1️⃣ Introducción a Vue.js

**📌 Objetivo:**
Comprender la estructura base de un componente Vue.

**📍 Tareas:**

* Crear `App.vue` con:

  * `<template>`
  * `<script>`
  * `<style>`
* Implementar un contador reactivo (`data`, `methods`)
* Aplicar patrón **MVVM**
* Mostrar el nombre de usuario dinámicamente

---

### 2️⃣ Templates y Rendering

**📌 Objetivo:**
Representar datos con directivas de Vue.

**📍 Tareas:**

* Crear componente `Libro.vue`
* Usar:

  * `v-bind`
  * `v-if`
  * `v-show`
  * `v-for`
* Mostrar mensaje cuando no haya libros

---

### 3️⃣ Binding de Formularios

**📌 Objetivo:**
Crear formularios reactivos.

**📍 Tareas:**

* Implementar formulario con:

  * `input`
  * `select`
  * `textarea`
* Usar `v-model` para vinculación bidireccional
* Mostrar datos en tiempo real

---

### 4️⃣ Manejo de Eventos

**📌 Objetivo:**
Modificar el estado mediante interacción del usuario.

**📍 Tareas:**

* Usar `@click` para:

  * Agregar libros
  * Eliminar libros
* Aplicar modificadores:

  * `.prevent`
  * `.once`
* Implementar eventos de teclado (`Enter`)

---

### 5️⃣ Manejo de Rutas (Vue Router)

**📌 Objetivo:**
Implementar navegación SPA.

**📍 Tareas:**

* Configurar Vue Router
* Definir rutas:

  * `/`
  * `/libros`
  * `/libros/:id`
* Crear vistas:

  * `InicioView.vue`
  * `ListaLibros.vue`
  * `DetalleLibro.vue`
* Usar rutas dinámicas con props

---

## 🔍 Criterios de Evaluación

* Uso correcto de componentes Vue
* Implementación de `v-model` en formularios
* Uso adecuado de directivas (`v-if`, `v-for`, `v-show`)
* Manejo de eventos y modificadores
* Implementación funcional de Vue Router
* Modularidad y claridad del código
* Navegación fluida
* Aplicación del patrón MVVM

---

## 🦺 Referencias

* [https://vuejs.org/guide/introduction.html](https://vuejs.org/guide/introduction.html)
* [https://router.vuejs.org/](https://router.vuejs.org/)
* Documentación Vue CLI
* Vue Devtools
* Materiales del módulo

---

## 🎁 Recursos

* Playground oficial: [https://play.vuejs.org](https://play.vuejs.org)

---

## ✅ Entregables

* Proyecto con estructura Vue:

  ```
  /components
  /views
  /router
  App.vue
  main.js
  ```
* Código funcional y modular
* Capturas o video demostrativo
* Documento explicativo (decisiones técnicas)
* ZIP o repositorio en GitHub

---

## 💼 Portafolio

Este proyecto es una **pieza clave de portafolio como Front-End Developer**.

### Incluye:

* Descripción del proyecto
* Funcionalidades implementadas
* Arquitectura de componentes
* Uso de Vue Router
* Manejo de estado y eventos

### Links recomendados:

* Repositorio en GitHub
* Deploy (Netlify / Vercel)

---
