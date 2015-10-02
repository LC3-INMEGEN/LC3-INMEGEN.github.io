---
layout: jspost
title:  "Factores Maestros de Transcripción en Cáncer de Mama"
date:   2015-10-02 11:00
description: "Infograma sobre regulación transcripcional en cancer de mama"
author: Alejandro Martínez, Rodrigo García y Hugo Tovar
---

Parte del trabajo de [este grupo](http://csbig.inmegen.gob.mx/) está
relacionado con modelar la biología del cáncer. En
[este artículo](http://dx.doi.org/10.1016/j.compbiolchem.2015.08.007)
buscamos reconstruir a partir de datos experimentales de expresión la
red de regulación genética de células de cáncer de mama.

Una pregunta fundamental para conocer el cáncer de mama es: ¿cómo se
regula la expresión genética en esta enfermedad?

Las redes de regulación genética son responsables de los delicados
mecanismos que controlan la expresión genética. Bajo ciertas
circunstancias, los programas de regulación genética pueden dar lugar
a cascadas de amplificación. Tales cascadas de transcripción son
eventos en los que la activación de factores de transcripción
(proteínas que prenden y apagan otros genes, FT) clave, que son
llamados Reguladores Transcripcionales Maestros (TMRs) desencadenan
una serie de eventos de expresión génica. La acción de los reguladores
maestros de la transcripción es entonces importante para el
establecimiento de ciertos programas como el de desarrollo y de
diferenciación celular. Sin embargo, tales cascadas también se han
relacionado con la aparición y establecimiento de fenotipos
cancerosos. Este trabajo busca estos FT que afectan, directa o
indirectamente, aquellos genes fundamentales para la expresión de
cierto tipo celular específico (firma molecular), en este caso, el del
cancer de mama.

Para analizar los flujos de interacción entre los factores de
transcripción y sus blancos hemos creado este diagrama de flujo
conocido como
[diagrama de Sankey](https://es.wikipedia.org/wiki/Diagrama_de_Sankey).

En la extrema izquierda de la gráfica se encuentran todos los factores
de transcripción y del lado derecho están los genes que forman la
firma molecular. En el centro podemos ver algunas de las
características de estos FT: la segunda columna nos dice en qué parte
de la célula se encuentra y la tercera con qué fenómeno biológico está
asociado.

Este es un trabajo en desarrollo. Por ejemplo: nos falta usar el
grosor de las conexiones para representar la proporción de elementos
que interactúan entre un extremo y otro de la gráfica. También tenemos
una versión en la que usamos color para distinguir los estadíos
intermedios en el flujo.
[Acá está el código fuente](https://github.com/CSB-IG/breast_cancer_networks/tree/master/sankey).
¡Vuelve pronto para ver la versión final!

<style>
#chart {
  height: 2800px;
}

.node rect {
  cursor: move;
  fill-opacity: .9;
  shape-rendering: crispEdges;
}

.node text {
  pointer-events: none;
  text-shadow: 0 1px 0 #fff;
}

.link {
  fill: none;
  stroke: #000;
  stroke-opacity: .2;
}

.link:hover {
  stroke-opacity: .5;
}

html {
  min-width: 1040px;
}

.ocks-org body {
  background: #fcfcfa;
  color: #333;
  font-family: "PT Serif", serif;
  /*margin: 1em auto 4em auto;*/
  position: relative;
  width: 1300px;
}

.ocks-org header,
.ocks-org footer,
.ocks-org aside,
.ocks-org h1,
.ocks-org h2,
.ocks-org h3,
.ocks-org h4 {
  font-family: "PT Sans", sans-serif;
}

.ocks-org h1,
.ocks-org h2,
.ocks-org h3,
.ocks-org h4 {
  color: #000;
}

.ocks-org header,
.ocks-org footer {
  color: #636363;
}

h1 {
  font-size: 64px;
  font-weight: 300;
  letter-spacing: -2px;
  margin: .3em 0 .1em 0;
}

h2 {
  margin-top: 2em;
}

h1, h2 {
  text-rendering: optimizeLegibility;
}

h2 a[name],
h2 a[id] {
  color: #ccc;
  right: 100%;
  padding: 0 .3em;
  position: absolute;
}

header,
footer {
  font-size: small;
}

.ocks-org header aside,
.ocks-org footer aside {
  float: left;
  margin-right: .5em;
}

.ocks-org header aside:after,
.ocks-org footer aside:after {
  padding-left: .5em;
  content: "/";
}

footer {
  margin-top: 8em;
}

h1 ~ aside {
  font-size: small;
  right: 0;
  position: absolute;
  width: 180px;
}

.attribution {
  font-size: small;
  margin-bottom: 2em;
}

body > p, li > p {
  line-height: 1.5em;
}

body > p {
  width: 720px;
}

body > blockquote {
  width: 640px;
}

blockquote q {
  display: block;
  font-style: oblique;
}

ul {
  padding: 0;
}

li {
  width: 690px;
  margin-left: 30px;
}

a {
  color: steelblue;
}

a:not(:hover) {
  text-decoration: none;
}

pre, code, textarea {
  font-family: "Menlo", monospace;
}

code {
  line-height: 1em;
}

textarea {
  font-size: 100%;
}

body > pre {
  border-left: solid 2px #ccc;
  padding-left: 18px;
  margin: 2em 0 2em -20px;
}

.html .value,
.javascript .string,
.javascript .regexp {
  color: #756bb1;
}

.html .tag,
.css .tag,
.javascript .keyword {
  color: #3182bd;
}

.comment {
  color: #636363;
}

.html .doctype,
.javascript .number {
  color: #31a354;
}

.html .attribute,
.css .attribute,
.javascript .class,
.javascript .special {
  color: #e6550d;
}

svg {
  font: 10px sans-serif;
}

.axis path, .axis line {
  fill: none;
  stroke: #000;
  shape-rendering: crispEdges;
}

sup, sub {
  line-height: 0;
}

q:before {
  content: "â€œ";
}

q:after {
  content: "â€";
}

blockquote q {
  line-height: 1.5em;
  display: inline;
}

blockquote q:before,
blockquote q:after {
  content: "";
}


</style>
<body>


<p id="chart"></p>

<script src="http://d3js.org/d3.v3.min.js"></script>
<script src="http://bost.ocks.org/mike/sankey/sankey.js"></script>
<script>

var margin = {top: 1, right: 1, bottom: 6, left: 1},
    width = 800 - margin.left - margin.right,
    height = 2800 - margin.top - margin.bottom;

var formatNumber = d3.format(",.2f"),
    format = function(d) { return formatNumber(d); },
    color = d3.scale.category20();

var svg = d3.select("#chart").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var sankey = d3.sankey()
    .nodeWidth(15)
    .nodePadding(10)
    .size([width, height]);

var path = sankey.link();

d3.json("/data/sankey_tmr/sankey.json", function(energy) {

  sankey
      .nodes(energy.nodes)
      .links(energy.links)
      .layout(32);

  var link = svg.append("g").selectAll(".link")
      .data(energy.links)
    .enter().append("path")
      .attr("class", "link")
      .attr("d", path)
        .on("click", function(d) {console.log(d);})
      .style("stroke-width", function(d) { return Math.max(1, d.dy); })
      .sort(function(a, b) { return b.dy - a.dy; });

  link.append("title")
      .text(function(d) { return d.source.name + " → " + d.target.name + "\n" + format(d.value); });

  var node = svg.append("g").selectAll(".node")
      .data(energy.nodes)
    .enter().append("g")
      .attr("class", "node")
      .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; })
      //.on("click", function(d) {console.log(d);})
    .call(d3.behavior.drag()
      .origin(function(d) { return d; })
      .on("dragstart", function() { this.parentNode.appendChild(this); })
      .on("drag", dragmove));

  node.append("rect")
      .attr("height", function(d) { return d.dy; })
      .attr("width", sankey.nodeWidth())
      .style("fill", function(d) { return d.color = color(d.name.replace(/ .*/, "")); })
      .style("stroke", function(d) { return d3.rgb(d.color).darker(2); })
    .append("title")
      .text(function(d) { return d.name + "\n" + format(d.value); });

  node.append("text")
      .attr("x", -6)
      .attr("y", function(d) { return d.dy / 2; })
      .attr("dy", ".35em")
      .attr("text-anchor", "end")
      .attr("transform", null)
      .text(function(d) { return d.name; })
    .filter(function(d) { return d.x < width / 2; })
      .attr("x", 6 + sankey.nodeWidth())
      .attr("text-anchor", "start");

  function dragmove(d) {
    d3.select(this).attr("transform", "translate(" + d.x + "," + (d.y = Math.max(0, Math.min(height - d.dy, d3.event.y))) + ")");
    sankey.relayout();
    link.attr("d", path);
  }
});

</script>
