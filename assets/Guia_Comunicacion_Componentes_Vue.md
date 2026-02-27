# 📘 Comunicación entre Componentes en Vue

------------------------------------------------------------------------

## 📊 Tabla Explicativa

  ------------------------------------------------------------------------
  Dirección          Mecanismo     Sintaxis                 Descripción
  ------------------ ------------- ------------------------ --------------
  Padre → Hijo       Props         `:prop="valor"`          Envía datos al
                                                            hijo

  Hijo → Padre       Emits         `emit('evento')`         Notifica al
                                                            padre

  Padre escucha      v-on / @      `@evento="metodo"`       Ejecuta
                                                            función en el
                                                            padre
  ------------------------------------------------------------------------

------------------------------------------------------------------------

## 🧠 Conceptos Clave

-   El flujo de datos en Vue es **unidireccional**.
-   Las **props son de solo lectura**.
-   El hijo **no debe modificar directamente una prop**.
-   El estado normalmente vive en el **componente padre**.
-   Vue actualiza automáticamente la interfaz cuando cambia el estado
    reactivo.

------------------------------------------------------------------------

## 🔁 Resumen del Flujo

1.  El padre define el estado.
2.  El padre pasa datos al hijo mediante props.
3.  El hijo emite eventos.
4.  El padre escucha esos eventos y actualiza el estado.
5.  Vue re-renderiza automáticamente.

------------------------------------------------------------------------

📚 Material ideal para comprender la comunicación entre componentes en
Vue 3.
