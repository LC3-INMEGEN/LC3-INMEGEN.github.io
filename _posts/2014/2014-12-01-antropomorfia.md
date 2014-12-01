---
layout: post
title:  "Antropomorfía, obesidad y nutrición"
date:   2014-12-01 12:00
description: "Infograma sobre alimentos que se consumen y dimensiones corporales"
---

Tomamos datos de la
[Encuesta Nacional de Salud](http://ensanut.insp.mx/). Originalmente
los distribuyen en formato de SPSS, pero usamos la versión libre
[PSPP](http://www.gnu.org/software/pspp/) para convertirlos a
separados por comas, con este comando:

    GET FILE="/home/abc/bcs_vf.sav".
    SAVE TRANSLATE /OUTFILE='mydata.csv' /TYPE=CSV.

Acá los
[datos de antropometría](/data/antropometria/antropometria.csv). Por
otro lado cruzamos esos datos con los de frecuencia alimentaria,
descárgalos [acá](/data/antropometria/antro_freq_nutri_adulto_2012.csv).

Luego escribimos un script para convertirlos al formato
[json](http://json.org) que consume la biblioteca
[NVD3](http://nvd3.org) con la que está hecho el infograma.


<div class="chart-dash thirdfour" style="width:100%">

<div style='width:190px;font-size:21px;'>Hombres Adultos</div>
<div id="chart1"><svg style="height: 400px;"></svg></div>



<div style='width:190px;font-size:21px;'>Mujeres Adultas</div>
<div id="chart2"><svg style="height: 400px;"></svg></div>

</div>
<link href="https://inet.inmegen.gob.mx/tema/intragen/css/nv.d3.min.css" rel="stylesheet" type="text/css">
<script src="http://cdnjs.cloudflare.com/ajax/libs/d3/3.4.13/d3.min.js"></script>
<script src="/static/nv.d3.min.js"></script>
<script src="https://inet.inmegen.gob.mx/tema/intragen/scripts/nvd3/tooltip.js"></script>
<script src="/static/utils.js"></script>
<script src="/static/legend.js"></script>
<script src="/static/axis.js"></script>
<script src="/static/multiBar.js"></script>
<script src="/static/multiBarChart.js"></script>

<script src="/static/2014-12-01-antropomorfia.js"></script>
