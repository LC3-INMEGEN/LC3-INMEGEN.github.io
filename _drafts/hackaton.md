---
layout: post
title:  "Recapitulación de Hackatón PubMed-Mining"
description: "Hackeamos intensivamente, refinamos software para minería de datos."
author: Rodrigo García
---

El pasado 26 de mayo sostuvimos un ameno hackatón convocado para
refinar [unos programas](https://github.com/CSB-IG/literature) que tenemos escritos pero con poco uso.

Hubo tres aportaciones importantes:

1. [escribimos un script](https://github.com/CSB-IG/literature/commit/9c61e98beb0e4dce8b2bd3df1b29f496ac66d45d) que convierte *pickles* binarios a valores
separados por comas, lo que permite generar una red con nuestro
*pipeline* pero examinarla, por ejemplo, con [Cytoscape](http://cytoscape.org)

2. [escribimos un método](https://github.com/CSB-IG/literature/commit/803e96efe4fda5200db00a8f71a07adca14f8918)  para generar una red de artículos conectados
   por las palabras clave que comparten, que complementa al método
   existente que conecta palabras clave por los artículos donde
   aparecen juntas

3. [adaptamos el script](https://github.com/CSB-IG/literature/commit/111977f6c822341e4d8af4c65db73cd186e2f610)
   que carga referencias bibliográficas al [caché](http://mongodb.org)
   para que pueda usarse desde PSU Galaxy. La forma que tomó este
   componente me dejó pensando que hay que diseñar cuidadosamente el
   uso del caché para mantener la reproducibilidad que es fundamental
   a Galaxy.

Son contribuciones valiosas y el desarrollo sigue, hasta que tengamos
una interfaz pública y cualquiera pueda venir y crear redes de
literatura que le sean útiles.

Mientras tanto unas fotos:


<img src="/static/hackaton_20150526_0.jpg" width="30%">
<img src="/static/hackaton_20150526_1.jpg" width="30%">
<img src="/static/hackaton_20150526_2.jpg" width="30%">
