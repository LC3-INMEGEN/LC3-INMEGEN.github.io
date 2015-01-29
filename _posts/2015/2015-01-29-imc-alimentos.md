---
layout: jspost
title:  "IMC y alimentación"
date:   2015-01-29 11:00
description: "Infograma sobre Índice de Masa Corporal y Alimentación"
author: Alejandro Martínez y Rodrigo García
---

La primera gráfica permite filtrar por sexo y estado de la república.

Cada punto verde en la gráfica de Edad corresponde a una persona, su
lugar en la escala vertical representa su
[Índice de Masa Corporal](https://es.wikipedia.org/wiki/%C3%8Dndice_de_masa_corporal)
(IMC). Los puntos verdes sobre la línea gris representan personas con
sobrepeso y se convierten en diamantes. Más arriba de la línea negra
representan personas con obesidad. El eje horizontal representa la
edad.

Por ejemplo: observa cómo las mujeres guerrerenses de menos de 20 años
en su mayoría tienen un IMC saludable, pero cerca de los treinta y en
adelante tienen casi todas sobrepeso.

La gráfica de Alimentos muestra qué alimentos son más consumidos por
edad, de acuerdo con los filtros elegidos. Si pones el puntero sobre
los colores de la clave a la derecha de la gráfica, la línea del tipo
de alimento en cuestión se hace más visible.

Nos pareció simpático cómo la población entera parece dejar de beber
llegando a los 70 años de edad, y aparece un enorme pico de consumo de
verduras y leguminosas. ¿Quizá por que cobran consciencia de que hay
que cuidar la salud? Y justo después, como desde los 75, ¡retoman la
bebida hasta su punto máximo! Mexicano: cuida tu salud *siempre*.





<div id="mx-chart-imc" style="width: 50%">

<h4>Estado</h4>

<a class="reset" href="javascript:mxChartIMC.filterAll();dc.redrawAll();" style="display: none;">reset</a>
<span class="reset" style="display: none;"> | Current filter: <span class="filter"></span></span>

<div class="clearfix"></div>

</div>


<div id="pie-chart-status" style="width: 41%; margin-left: 40px">

<h4>Sexo</h4>
<a class="reset" href="javascript:pieChartStatus.filterAll();dc.redrawAll();" style="display: none;">reset</a>

<div class="clearfix"></div>

</div>




<div id="edad-chart" style="width: 100%">
<h4>Edad</h4>
<a class="reset" href="javascript:edadChart.filterAll();dc.redrawAll();" style="display: none;">reset</a>

<div class="clearfix"></div>
</div>




<div id="industry-chart" style="width: 100%">
<h4>Alimentos</h4>
<a class="reset" href="javascript:alimentosChart.filterAll();dc.redrawAll();" style="display: none;">reset</a>

<div class="clearfix"></div>
</div>

<div class="clearfix"></div>


<a href="javascript:dc.filterAll(); dc.renderAll();">Reset All</a>




<script type="text/javascript" src="/static/crossfilter.js"></script>
<script type="text/javascript" src="/static/dc.js"></script>
<script src="http://d3js.org/topojson.v0.min.js"></script>
<script src="/static/2015-01-29-imc-alimentos.js"></script>






# Materiales y Métodos

Tomamos datos de la
[Encuesta Nacional de Salud](http://ensanut.insp.mx/). Originalmente
los distribuyen en formato de SPSS, pero usamos la versión libre
[PSPP](http://www.gnu.org/software/pspp/) para convertirlos a
separados por comas, igual que en [este post](/2014/12/01/antropomorfia.html).


Acá los
[datos de antropometría](/data/antropometria/antropometria.csv).

Estos otros son datos de 
[antropometría con frecuencia alimentaria](/data/antropometria/antro_freq_nutri_adulto_2012.csv).

Cargamos esos archivos de valores separados por comas a la base de
datos libre [Postgres](http://postgresql.org).

Hicimos un *join* de la tabla de antropometría con la de frecuencia
alimentaria. El resultado del query es
[este archivo](/data/2015-01-29-imc-alimentos.csv).
