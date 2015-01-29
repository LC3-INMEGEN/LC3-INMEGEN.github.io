---
layout: jspost
title:  "IMC y alimentación"
date:   2015-01-29 11:00
description: "Infograma sobre Índice de Masa Corporal y Alimentación"
---

lorem ipsum



<div id="mx-chart-imc">
<strong>IMC</strong>
<a class="reset" href="javascript:mxChartIMC.filterAll();dc.redrawAll();" style="display: none;">reset</a>
<span class="reset" style="display: none;"> | Current filter: <span class="filter"></span></span>

<div class="clearfix"></div>
</div>

<div id="pie-chart-status">
<strong>Sexo</strong>
<a class="reset" href="javascript:pieChartStatus.filterAll();dc.redrawAll();" style="display: none;">reset</a>

<div class="clearfix"></div>
</div>

<div id="edad-chart">
<strong>Edad</strong>
<a class="reset" href="javascript:edadChart.filterAll();dc.redrawAll();" style="display: none;">reset</a>

<div class="clearfix"></div>
</div>

<div id="industry-chart">
<strong>Alimentos</strong>
<a class="reset" href="javascript:alimentosChart.filterAll();dc.redrawAll();" style="display: none;">reset</a>

<div class="clearfix"></div>
</div>

<div class="clearfix"></div>

<div>
<a href="javascript:dc.filterAll(); dc.renderAll();">Reset All</a>
</div>




<script type="text/javascript" src="/static/crossfilter.js"></script>
<script type="text/javascript" src="/static/dc.js"></script>
<script src="http://d3js.org/topojson.v0.min.js"></script>
<script src="/static/2015-01-29-imc-alimentos.js"></script>
