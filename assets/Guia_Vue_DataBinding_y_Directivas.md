# 📘 Guía Esencial de Directivas y Data Binding en Vue 3

------------------------------------------------------------------------

# 1️⃣ Data Binding en Vue

Documentación oficial:
https://vue3-spanish-docs.netlify.app/guide/essentials/forms.html

## 📊 Tabla Explicativa

  ----------------------------------------------------------------------------------------------------------
  Tipo de Binding Sintaxis               Dirección   ¿Qué hace?                 Ejemplo
  --------------- ---------------------- ----------- -------------------------- ----------------------------
  Interpolación   {{ variable }}         JS → HTML   Muestra datos en pantalla  `<h1>{{ mensaje }}</h1>`

  Binding de      :atributo="variable"   JS → HTML   Conecta variables a        `<img :src="url">`
  atributo                                           atributos HTML             

  Two-Way Binding v-model="variable"     JS ↔ HTML   Sincroniza input y estado  `<input v-model="nombre">`
                                                     automáticamente            

  Event Binding   @evento="metodo"       HTML → JS   Ejecuta funciones al       `<button @click="sumar">`
                                                     ocurrir eventos            
  ----------------------------------------------------------------------------------------------------------

------------------------------------------------------------------------

## 🧠 Resumen Mental

-   **Interpolación** → Solo muestra datos.
-   **v-bind (:)** → Enlaza atributos dinámicos.
-   **v-model** → Sincronización automática bidireccional.
-   **@event** → Conecta eventos con lógica.

👉 En Vue, el estado controla la vista. Si el estado cambia, la interfaz
cambia automáticamente.

------------------------------------------------------------------------

# 2️⃣ Directiva de Renderizado basada en CSS -- v-show

Documentación oficial:
https://vue3-spanish-docs.netlify.app/api/built-in-directives.html#v-show

## 📊 Tabla Comparativa

  --------------------------------------------------------------------------------------------
  Directiva   Tipo            ¿Modifica el     ¿Usa CSS?   ¿Destruye el      Caso ideal
                              DOM?                         nodo?             
  ----------- --------------- ---------------- ----------- ----------------- -----------------
  v-show      Visualización   ❌ No            ✅ Sí       ❌ No             Mostrar/ocultar
                                               (display)                     frecuentemente

  --------------------------------------------------------------------------------------------

------------------------------------------------------------------------

## 🔍 ¿Qué hace realmente?

`v-show` NO elimina el elemento. Solo cambia su propiedad CSS:

-   Si la condición es `true` → `display: original`
-   Si la condición es `false` → `display: none`

### Ejemplo conceptual:

``` vue
<div v-show="visible">Contenido</div>
```

Equivale aproximadamente a:

``` html
<div style="display: none;">Contenido</div>
```

------------------------------------------------------------------------

## ⚖ Comparación rápida con v-if

  Característica                     v-if   v-show
  ---------------------------------- ------ --------
  Elimina del DOM                    ✅     ❌
  Cambia display CSS                 ❌     ✅
  Bueno para toggles frecuentes      ❌     ✅
  Bueno para render pesado inicial   ✅     ❌

------------------------------------------------------------------------

## 🎯 Conclusión

-   **v-show = Controla VISIBILIDAD (CSS)**
-   **v-if = Controla EXISTENCIA (DOM)**

------------------------------------------------------------------------

# 3️⃣ Directivas v-if, v-else, v-for

Documentación oficial:
https://vue3-spanish-docs.netlify.app/api/built-in-directives.html#v-if

## 📊 Tabla Explicativa

  ----------------------------------------------------------------------------
  Directiva   Tipo             ¿Es Data     ¿Qué controla?      ¿Qué hace
                               Binding?                         realmente?
  ----------- ---------------- ------------ ------------------- --------------
  v-if        Directiva        ❌ No        Renderizado         Crea o
              estructural                   condicional         destruye el
                                                                nodo del DOM
                                                                según una
                                                                condición

  v-else      Directiva        ❌ No        Renderizado         Renderiza un
              estructural                   alternativo         bloque cuando
                                                                v-if es falso

  v-for       Directiva        ❌ No        Renderizado de      Repite un
              estructural                   listas              elemento según
                                                                un array o
                                                                rango
  ----------------------------------------------------------------------------

------------------------------------------------------------------------

## 🧠 Comentarios Importantes

-   Estas directivas NO sincronizan datos con la vista.
-   No conectan variables a atributos HTML.
-   Modifican directamente la estructura del DOM.
-   Dependen de datos reactivos, pero no son binding.

------------------------------------------------------------------------

## 🧪 Ejemplos rápidos

### v-if

``` vue
<p v-if="activo">Visible</p>
```

### v-else

``` vue
<p v-else>No visible</p>
```

### v-for

``` vue
<li v-for="item in items" :key="item.id">{{ item }}</li>
```

------------------------------------------------------------------------

## 🏁 Conclusión Final

-   **Data Binding → Muestra o sincroniza datos**
-   **Directivas estructurales → Construyen o destruyen el DOM**

------------------------------------------------------------------------

📚 Material ideal para repaso de Vue 3 -- Directivas y Reactividad.
