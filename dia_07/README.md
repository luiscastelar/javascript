# Día 7: Los eventos

Empezamos en septiembre con el contenido semántico de internet, el **HTML**.

Después continuamos poniendo las bases de como maquillamos ese contenido con el **CSS**.

Además incidimos en un mundo moderno e hiperconectado donde cada persona se conecta desde donde quiere (pc, móvil, tablet...) y que nuestra información debe ser atractiva SIEMPRE con **FLEX** y **GRID**.

Y dimos paso a las bases de Javascript que nos han llevado a este momento: interacción con el usuario con los **eventos**.

Existen 3 modos de asociar eventos a funciones:
1. En las etiquetas html. **NUNCA** ya que queremos la separación contenido-presentación-acción.
2. En el código `elemento.onclick = metodo;`. Esto asocia un único método para cada evento y no permite opciones. NO usar.
3. La buena: ``elemento.addEventListener(evento, metodo, [opciones]);`.

Aunque nosotros vamos a realizar una operativa simple, emplearemos **SIEMPRE** el método 3, `addEventListener()`, no considerándose correctos ninguno de los dos anteriores.

El [índice](index.html).
