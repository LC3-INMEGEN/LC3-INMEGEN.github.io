---
layout:jspost
title: Uso de Galaxy con las herramientas Pubmed-Mining
date: 2015-03-08
description: Avances en la optimización de las herramientas de Pubmed-Mining con Galaxy
author: Eduardo Rueda Cartín
---

En mi servicio social en el INMEGEN colaboré con el LC3 en el repositorio [Pubmed-Mining](https://github.com/LC3-INMEGEN/pubmed-mining). 
Se inició revisando el repositorio llamado Literature, se fueron copiando los programas 
que funcionaban correctamente al nuevo repositorio (Pubmed-Mining), arreglando
algunos programas. El objetivo principal era encontrar una manera simple de utilizar Galaxy 
con las herramientas creadas por LC3. 

##Desarrollo

Al principio se revisaron los programas Docker y Vagrant, que funcionan
de manera similar. En ambos programas se crean contenedores virtuales, de esta manera
no importando el sistema operativo de la computadora se puede utilizar Ubuntu para sobre
éste instalar Galaxy. La importancia de utilizar Docker o Vagrant es que lo que funciona 
en una computadora funcionará en cualquier otra, ya que se está corriendo virtualmente y
este ambiente virtual es el mismo en todas las computadoras que tengan instalados estos 
programas.

Después se encontró una imagen en Docker en la que ya tenía instalado Galaxy ([Galaxy Docker](https://github.com/bgruening/docker-galaxy-stable)), 
para utilizarla se siguen los siguientes pasos:

1.- Descargar Docker

2.- En la terminal escribir el siguiente comando:

docker run -d -p 8080:80 -p 8021:21 bgruening/galaxy-stable

Con esto se iniciará la descarga de la imagen (sólo la primera vez); una vez descargada 
se tendrá una instancia local de Galaxy corriendo en el puerto 8080.

3.- En cualquier navegador ir a http://localhost:8080

Una vez teniendo la imagen de Galaxy se decidió hacer una extensión de la misma instalando 
las herramientas de Pubmed-Mining. Se realizaron varias pruebas, pero hasta el momento 
no se lograron instalar las herramientas en una nueva imagen.
Al final también se revisó el Galaxy Tool Shed y pienso que el camino a seguir es primero 
subir las herramientas de Pubmed-Mining al Tool Shed y desde ahí descargarlas e instalarlas 
sobre la imagen de Galaxy Docker.

##Referencias:

1.[Galaxy Docker Image](https://github.com/bgruening/docker-galaxy-stable)

2.[Docker](https://www.docker.com/)

3.[Vagrant](https://www.vagrantup.com/)

4.[Galaxy Wiki](https://wiki.galaxyproject.org/Admin/GetGalaxy)
