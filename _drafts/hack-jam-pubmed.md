---
layout: post
title:  "Hackaton Pubmed-Mining"
description: "Hackea con nosotros software para minería de ubmed."
author: Rodrigo García
---

[PubMed](http://www.ncbi.nlm.nih.gov/pubmed/) es una base de datos de
referencias bibliográficas acerca de ciencia biomédica y biológica. Es
un recurso excelente, mucha investigación de vanguardia empieza aquí,
con una revisión de bibliografía.

Un aspecto interesante de las referencias bibliográficas de PubMed es
que van categorizadas con
[MeSH-terms](http://www.nlm.nih.gov/mesh/meshhome.html): un
vocabulario controlado que consiste de conjuntos de términos
especializados, organizados por expertos.

Además de por su interfaz web se puede consultar la base de datos a
través de su
[interfáz programática](http://www.ncbi.nlm.nih.gov/books/NBK25497/).


El año pasado publicamos
[este artículo](http://journals.plos.org/plosone/article?id=10.1371/journal.pone.0092639)
acerca de redes de palabras clave en artículos en PubMed.
Desarrollamos software para extraer fichas bibliográficas y a partir
de ellas conectar MeSH-terms para consturir redes de conceptos. Usamos
esas redes para estudiar la estructura y dinámica de la investigación
en torno a genómica durante los últimos 25 años.

Ese software podría tener más uso. Por ejemplo, podría usarse para
construir redes de artículos conectados por las palabras clave que
comparten. Una red así podría servir para ubicar qué artículos son
importantes respecto de algún tema específico, o de una búsqueda
particular.

Pero le falta refinación, algunos de los scripts están totalmente
acoplados a los datos que fuimos generando, la mayoría sólo tienen
interfaces de línea de comandos. Con relativamente poco esfuerzo
podríamos generalizar y hacer más fácil el uso de nuestro conjunto de
herramientas.

Por eso el LC3 convoca a un hackatón-datajam abierto en el que nos
reuniremos y examinaremos el estado de esos programas, trazaremos un
plan y nos pondremos a trabajar en refinarlos.

¿De qué consiste el hackatón? 

Nuestro compromiso es dar las explicaciones necesarias sobre todos los
temas relevantes, hasta que los asistentes puedan involucrarse
efectivamente en el desarrollo del proyecto. Esperemos que las
explicaciones no tomen más de la mitad del tiempo, para que usemos la
segunda mitad como taller y todos tengan oportunidad de participar
directamente creando código, documentación, probando, etc.

Aprende a minar PubMed, Python y la interesante biblioteca
[NetworkX](https://networkx.github.io/), aprende a
[crear módulos de PSU Galaxy](https://wiki.galaxyproject.org/Admin/Tools/AddToolTutorial).

