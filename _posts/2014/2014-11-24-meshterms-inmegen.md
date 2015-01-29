---
layout: jspost
title:  "MeSH TERMS @ INMEGEN"
date:   2014-11-24 16:26:36
description: Un mapa de temas importantes para la investigación en Medicina Genómica en México.
author: Alejandro Martínez y Rodrigo García
---

Red de términos en las publicaciones nivel III, IV y V del [INMEGEN](http://www.inmegen.gob.mx/). 

La construimos así: 

1. Conseguimos una lista de los artículos nivel II, IV y V publicados por el Instituto.
2. Buscamos esos artículos en [PubMed](http://www.ncbi.nlm.nih.gov/pubmed).
3. Tomamos los [MeSH terms](http://www.ncbi.nlm.nih.gov/mesh/68023281) de cada artículo encontrado.
4. Usamos [NetworkX](https://networkx.github.io/) para construir la red y [guardarla](http://networkx.github.io/documentation/networkx-1.9.1/reference/readwrite.json_graph.html) en el formato [json](http://www.json.org) que le gusta a [D3](http://d3js.org). Representamos los MeSH terms como aristas, los artículos en los que aparecen juntos hacen de vértices.

El resultado puede interpretarse como un mapa de los temas importantes para la investigación en Medicina Genómica en México.

<div id="chart">
</div>


<style>

.node {
stroke: #cce0ff;
fill: #ffc;
stroke-width: 1.9px;
}

.link {
stroke: #999;
stroke-opacity: 0.3;
}

#chart {
border: 0px solid #aaa;
width: 800px;
height: 800px;
background-color: #Fff;
}
</style>


<script src="http://cdnjs.cloudflare.com/ajax/libs/d3/3.4.13/d3.min.js"></script>

<script src="/static/rspi_mesh.js"></script>
