---
layout: jspost
title:  "Seguridad de datos personales en Expediente Clínico Electrónico Personal"
date:   2015-04-08 12:00
description: "Algunos métodos y consideraciones de seguridad dentro de la aplicación móvil del ECEP"
author: Sergio Lezama
---

Como parte de mi servicio social en el INMEGEN he estado colaborando en el LC3, con una tarea que
nos fue encomendada, el desarrollo y creación de una [aplicación para dispositivos móviles] (https://github.com/LC3-INMEGEN/ECEP).
Para esto se tuvo que decidir el enfoque que se le daría, considerando los posibles usos que la aplicación pudiera
tener. Al principio se pensó en una aplicación que ayudara a recolectar datos útiles para futuras
investigaciones en el área de genómica nutricional, todo esto con el enfoque de una aplicación para
jugar y competir con otros usuarios. También se consideró realizar un Expediente Clínico Electrónico
Personal (ECEP) debido a que sería de gran utilidad para las personas que quisieran llevar de una forma
más ordenada su información médica. Se terminó por elegir el ECEP ya que se pensó que aparte de ser una
buena herramienta para los usuarios, y al igual se podía integrar la parte de recolección de datos, para
el monitoreo constante de la salud del usuario o su posible uso en investigaciones de salud.

Para iniciar con el desarrollo de esta aplicación se realizó un investigación bibliográfica dentro de
la cual se consideraron varios aspectos que debía contener la aplicación, siendo uno de los más relevantes
el tema de la seguridad de los datos de usuarios. Después de hacer la revisión de varios artículos
relacionados, se pueden mencionar los puntos más importantes a ser considerados, y de los cuales se
habla a continuación.

Con el desarrollo de nuevas tecnologías como el almacenaje de datos en la nube y el incremento del uso de
dispositivos móviles como celulares inteligentes y tabletas, hoy en día los investigadores tienen otra opción
para realizar estudios de una manera más eficiente en cuanto a la recolección de datos y una manera más cómoda
para los usuarios. En este caso, con el desarrollo del ECEP, se han encontrado una serie de inconvenientes
en cuanto a la seguridad de los datos que son recolectados en los dispositivos móviles y posteriormente
enviados a través de una conexión a internet para su posterior análisis. El mayor problema que tiene este
modelo, es la seguridad que tienen los datos al momento de ser enviados, ya que se requiere de un sistema
muy eficiente, debido a la limitada capacidad computacional de este tipo de dispositivos; pero a la vez este
debe de ser lo más seguro posible.

Se ha encontrado que el mejor método para garantizar la seguridad de los datos, es mediante el uso de datos
biométricos (como huellas digitales, imágenes del iris del ojo, etc.), sin embargo, en un primer acercamiento
se encontró que el uso de este tipo de datos era muy complicado con el uso de un dispositivo móvil, por esto
mismo, se propuso el uso de una tarjeta que almacenara toda la información biométrica, y que pudiera ser leída
por el dispositivo móvil de alguna manera. Se comprobó que este acercamiento tiene algunas fallas y posibles
riesgos al momento de transmitir la información, y es por esto que se han realizado otras propuestas más
sencillas.

Posteriormente, se determinaron los puntos de seguridad que un sistema de autenticación para la transmisión
de datos personales debe tener, y los cuales se mencionan a continuación:

- Autenticación mutua: El servidor debe de comprobar que el usuario remoto es un usuario autorizado para
ingresar a los datos; asimismo, el usuario debe de creer que el servidor al que se está intentando conectar
es realmente el servidor al que quiere conectarse.

- El servidor debe de desconocer los datos biométricos y/o contraseñas: El servidor no tiene que contener
información de registro de ningún usuario, esto es necesario, ya que varios usuarios podrían llegar a tener
la misma contraseña para acceder a diferentes servicios, lo que resultaría en un posible robo de identidad
si las contraseñas son robadas y posteriormente se utilizan para ingresar a otros servicios.

- Libertad para cambiar la contraseña y/o datos biométricos: Los usuarios deben de ser libres para hacer
cambios en sus datos de registro sin tener que conectarse al servidor, al igual, el servidor debe de desconocer
estos cambios realizados por el usuario.

- Seguridad de tres factores: En el modelo de autenticación de tres factores, un posible adversario puede
tener el control total de un canal de comunicación entre el usuario y el servidor durante la sesión, pero
debe de ser incapaz de obtener más de dos datos de los tres disponibles (datos de la tarjeta de
identificación, contraseña o datos biométricos).

Con estos puntos mencionados, es posible tener un sistema seguro para ingresar a los datos, esto debido a
que se desvincula la información personal de los datos que son recolectados, y solo es posible que el
usuario al que pertenecen dichos datos pueda ingresar a estos, o si el usuario lo permite, también estarían
disponibles para profesionales de la salud e investigadores.

# Referencias:

1. [A Secure User Anonymity-Preserving Three-Factor Remote User Authentication Scheme for the Telecare Medicine Information Systems.](http://www.ncbi.nlm.nih.gov/pubmed/25677956)
2. [Cryptanalysis and Improvement of a User Authentication Scheme Preserving Uniqueness and Anonymity for Connected Health Care.](http://link.springer.com/article/10.1007%2Fs10916-014-0179-x)
3. [A standard-based model for the sharing of patient-generated health information with electronic health records.](http://link.springer.com/article/10.1007%2Fs00779-014-0806-z)
4. [Efficient Secure-Channel Free Public Key Encryption with Keyword Search for EMRs in Cloud Storage.](http://link.springer.com/article/10.1007%2Fs10916-014-0178-y)