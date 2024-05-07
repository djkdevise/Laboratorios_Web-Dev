# CSS styles
# Diferentes tipos de selectores

* Al aplicar estilo a una página web, hay muchos tipos de selectores disponibles que permiten a los desarrolladores ser tan amplios o tan específicos como necesiten al seleccionar elementos HTML para aplicar reglas CSS.

## Selector de elementos
> El selector de elementos permite a los desarrolladores seleccionar elementos HTML en función de su tipo.
> Por ejemplo, si utiliza p como selector, la regla se aplicará a todos los elementos p de la página web.
### HTML
<pre><code>
p { 
  color: blue; 
}
</code></pre>

### CSS
<pre><code>
p { 
  color: blue; 
}
</code></pre>

## Selectores de ID
* El selector de ID utiliza el atributo id de un elemento HTML. Dado que el ID es único dentro de una página web, permite al desarrollador seleccionar un elemento específico para aplicarle estilo. Los selectores de ID tienen el prefijo #.

### HTML
<pre><code>
<span id="latest">New!</span>
</code></pre>

### CSS
<pre><code>
#latest { 
  background-color: purple; 
}
</code></pre>

## Selector de clase
* Los elementos también pueden seleccionarse en función del atributo de clase que se les aplique. La regla CSS se ha aplicado a todos los elementos con el nombre de clase especificado. El selector de clase lleva como prefijo un punto .

En el siguiente ejemplo, la regla CSS se aplica a ambos elementos, ya que tienen aplicada la clase CSS navigation.

### HTML
<pre><code>
<a class="navigation">Go Back</a>
<p class="navigation">Go Forward</p>
</code></pre>

### CSS
<pre><code>
.navigation { 
  margin: 2px;
}
</code></pre>

## Elemento con selector de clase
* Un método más específico para seleccionar elementos HTML consiste en seleccionar primero el elemento HTML y, a continuación, la clase CSS o ID.

El siguiente ejemplo selecciona todos los elementos p a los que se ha aplicado la clase CSS introduction.

### HTML
<pre><code>
<p class="introduction">Hola</p>
</code></pre>

### CSS
<pre><code>
p.introduction { 
  margin: 2px;
}
</code></pre>


## Selectores descendientes
* Los selectores descendientes son útiles si se necesita seleccionar elementos HTML que están contenidos dentro de otro selector.
Vamos a analizar un ejemplo.
Tenemos la siguiente estructura HTML y regla CSS.

### HTML
<pre><code>
<div id="blog">
  <h1>Latest News</h1>
  <div>
    <h1>Today's Weather</h1>
    <p>The weather will be sunny</p>
  </div>
  <p>Subscribe for more news</p>
</div>
<div>
  <h1>Archives</h1>
</div>
</code></pre>

### CSS
<pre><code>
#blog h1 {
  color: blue;
}
</code></pre>

* La regla CSS seleccionará todos los elementos h1 contenidos en el elemento con el ID blog. La regla CSS no se aplicará al elemento h1 que contenga el texto Archives (Archivos).

La estructura de un selector descendiente es un selector CSS, seguido de un único carácter de espacio, seguido de otro selector CSS.

También se pueden seleccionar varios descendientes. Por ejemplo, para seleccionar todos los elementos h1 que sean descendientes de elementos div que sean descendientes del elemento blog, el selector se especifica de la siguiente manera:

### CSS
<pre><code>
#blog div h1 {
  color: blue;
}
</code></pre>

## Selectores secundarios
* Los selectores secundarios son más específicos que los descendientes. Solo seleccionan elementos que son descendientes inmediatos (secundarios) de un selector (principal).

* Por ejemplo, tenemos la siguiente estructura HTML:

### HTML
<div id="blog">
  <h1>Latest News</h1>
  <div>
    <h1>Today's Weather</h1>
    <p>The weather will be sunny</p>
  </div>
  <p>Subscribe for more news</p>
</div>

### CSS
<pre><code>
#blog > h1 {
  color: blue;
}
</code></pre>

## Pseudoclase :hover
* Una palabra clave especial denominada "pseudoclase" permite a los desarrolladores seleccionar elementos en función de su estado. No se preocupe demasiado por lo que eso significa ahora mismo. Por ahora, veamos cómo la pseudoclase de desplazamiento le permite aplicar estilo a un elemento cuando el cursor del mouse pasa sobre este.

* El ejemplo más sencillo es cambiar el color de un hipervínculo cuando se pasa el mouse por encima. Para ello, añada la pseudoclase :hover al final del selector. En el siguiente ejemplo, al agregar :hover al elemento a cambiará el color del hipervínculo a naranja cuando se pase el cursor por encima.

* Así seleccionará el elemento con el ID blog (el principal), luego seleccionará todos los elementos h1 que estén contenidos directamente en ese elemento (los secundarios). La estructura del selector secundario es un selector CSS seguido del símbolo de combinador secundario > seguido de otro selector CSS.

* Tenga en cuenta que esto no irá más allá de un único nivel de profundidad. Por lo tanto, la regla CSS no se aplicará al elemento h1 que contenga el texto El tiempo de hoy.

### HTML
<div id="blog">
  <h1>Latest News</h1>
  <div>
    <h1>Today's Weather</h1>
    <p>The weather will be sunny</p>
  </div>
  <p>Subscribe for more news</p>
</div>

### CSS
<pre><code>
#blog > h1 {
  color: blue;
}
</code></pre>