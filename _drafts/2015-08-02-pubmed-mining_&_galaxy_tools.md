---
layout: jspost
title:  "Construcción de redes d3 apartir de búsquedas en PubMed"
date:   2015-08-02 17:00
description: "Construcción de redes utilizando queries a MongoDB, utilizando la librería networkX y guardando los resultados en archivos pickle o json; todo esto desde una instancia local de Galaxy."
author: Sergio Lezama
---

Dentro del desarrollo de mi servicio social en el INMEGEN, he estado colaborando en el LC3, en específico con la creación de herramientas, para la plataforma Galaxy, las cuales permitan construir redes d2 y d3 apartir de una búsqueda en PubMed, que el usuario deberá descargar con formato Medline y posteriormente, con el uso de las herramientas, deberá cargar a la base de datos en MongoDB para que sea posible hacer búsquedas dentro de esta base de datos por medio de queries, que permitan delimitar los contenidos de una red. La razón por la cual se eligió Galaxy, es debido a la facilidad que se puede tener para que los usuarios instalen nuestras herramientas en su instancia local.

Para iniciar con el desarrollo de las herramientas, se partió de programas y herramientas que ya habían sido creadas, pero que necesitaban corrección de algunos detalles para su correcto funcionamiento, esto se puede encontrar en [este repositorio](https://github.com/CSB-IG/literature).

## Desarrollo

La primer tarea por hacer fue integrar los programas ya existentes, para generar archivos de tipo pickle, apartir de una busqueda en formadto Medline, para esto se tomaron los programas que ya existían para generar redes de artículos y para generar redes con meshterms y posteriormente se integraron en un solo programa que decidiera qué tipo de red construir, todo esto dependiendo de el tipo de búsqueda que se hubiese realizado en PubMed. Al final se logró construir [este programa](https://github.com/LC3-INMEGEN/pubmed-mining/blob/master/query2mesh_network.py), que posteriormente fue integrado en [su respectiva Galaxy Tool](https://github.com/LC3-INMEGEN/pubmed-mining/blob/master/query2mesh_network.xml).

Posteriormente se instalaron todos los requerimentos necasarios para que los programas y herramientas pudieran se probados directamente desde una instancia local de Galaxy. Para esto se sigiuieron los pasos indicados [aquí](https://wiki.galaxyproject.org/Admin/GetGalaxy). La instalación llevó algo de tiempo y esfuerzo, ya que se encontraron diferencias en la instalación para Linux y la instalación para OSX (como los nombres de los paquetes requeridos).

Se continuó con la adaptación y mejora de los programas ya existentes, para generar [redes en d2](https://github.com/LC3-INMEGEN/pubmed-mining/blob/master/plot_pickled_graph.py) archivo pickle generado anteriormente; para esto también fue necesario entender el funcionamiento de Galaxy, en específico, que corre dentro de un ambiente virtual, en el cual se deben de instalar los paquetes (como networkx) para que las herramientas que se encuentren dentro de la instancia local puedan funcionar de manera correcta. Una vez entendido todo esto, fue más fácil seguir desarrollando los programas de python con los que las herramientas de Galaxy funcionan. Al igual, se mejoró el programa para convertir [archivos pickle a CSV](https://github.com/LC3-INMEGEN/pubmed-mining/blob/master/pickle2csv.py), y se creó su [respectivo código](https://github.com/LC3-INMEGEN/pubmed-mining/blob/master/pickle2csv.xml) para que funcionara en Galaxy.

Para finalizar se trabajó en los programas que permiten crear redes en d3 apartir de la búsqueda realizada, para esto fue necesario analizar cual era la forma más sencilla de lograrlo, así como decidir qué librería se utilizaría. Finalmente, se comenzó trabajando en el código existente para generar una red de tipo force directed y se mejoró para que se utilizara Jinja2 en lugar de Django, al final se obtuvo [este código](https://github.com/LC3-INMEGEN/pubmed-mining/blob/master/force_directed.py), el cual aún se tiene que mejorar para que trabaje de forma adecuada con el código html al que carga los datos. Es importante mencionar que el programa anterior, funciona con datos en formato json, por lo cúal para generar una red en este formato, se debe de utilizar la herramienta [query to json](https://github.com/LC3-INMEGEN/pubmed-mining/blob/master/query2_json.py). Por lo tanto, se puede decir que el [código hmtl](https://github.com/LC3-INMEGEN/pubmed-mining/blob/master/force_directed.html) funciona de manera correcta, ya que sí genera redes en d3, pero aún falta integrarlo correctamente con el código en python, para que los datos en formato json, sean cargados de manera automática cuando el usuario hace uso de la herramienta en Galaxy.

En conclusión, se puede decir que se tuvo un buen avance en la adaptación de todos los programas de python, para su uso en Galaxy, aunque se requiere un poco más de tiempo para terminar la herramienta que permite construir las redes en d3, la cuál apenas tiene las funcionalidades básicas.

# Referencias:

1. [NetworkX](http://networkx.github.io)
2. [Data Driven Documents](http://d3js.org)
3. [Jinja](http://jinja.pocoo.org)
4. [mongoDB](https://www.mongodb.org)
5. [Galaxy](https://usegalaxy.org)
