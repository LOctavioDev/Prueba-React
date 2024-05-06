export default function Post() {
  return (
    <>
      <section className="post">
        <article>
          <h2>Titulo del Articulo</h2>
          <p>
            Observamos que partimos de la hoja izquierda en este caso 5 luego
            subimos en la inclinación derecha el 6 pero no iremos a la raíz así
            q iremos a la hoja 9 de ahí a la dos y como no se puede subir mas y
            mantener la inclinación hacia la derecha pasamos a la hoja 11 y como
            completamos el lado izquierdo iremos a la raíz el 2 y de ahí se
            invertirá de arriba hacia abajo y mantenido la inclinación a la
            derecha pasamos al 7 como no puede bajar a la izquierda para
            mantener la inclinación derecha pasamos al 8 y como este si puede
            bajar a izquierda y mantener la inclinación bajamos a el 3
            concluyendo el recorrido podemos ver que se tiene una inclinación
            fija siempre a pesar del cambio de lado.
          </p>
        </article>
      </section>
    </>
  );
}
