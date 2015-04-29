---
layout: jspost
title: Apps para expediente clínico electrónico
description: Revisión aplicaciones existentes
author: Aldric Lopez
---

# Resumen de Aplicaciones

Soy Aldric López y como parte de mi servicio social, me he dedicado a
participar en [este proyecto](https://github.com/LC3-INMEGEN/ECEP)
para desarrollar una nueva aplicación móvil.

Revisé
[distintas aplicaciones](https://github.com/LC3-INMEGEN/ECEP/blob/master/aplicaciones.md)
para encontrar las mejores funcionalidades que tengan en común, así
como características sobresalientes que se pudieran aplicar para la
nuestra.

Hay básicamente tres partes importantes en todas las aplicaciones: la
interacción con el paciente (en general el principal usuario de la
aplicación), la interacción con el médico y en algunos casos poner en
contacto a médico y paciente.

## Interacción con el paciente (usuario)

La mayor parte de estas aplicaciones cuentan con alguna forma de
agendar el consumo de medicinas y en algunos casos las consultas al
médico. La mayoría de estas tienen la capacidad de monitorear a varios
usuarios dentro de la familia. Esto tiene una razón de ser importante:
que casi siempre el usuario final es el padre o madre de una familia
responsable por los hijos y en algunos casos por los abuelos. Las
aplicaciones manejan los recordatorios de citas de diferentes maneras
que se resumen a distintos tipos alarmas programables en el teléfono.
Un par de funcionalidades muy interesantes que se pueden aplicar
dentro de este rubro de recordatorios de medicinas y de futuras
consultas, son el monitoreo de gastos acumulados que se tienen a lo
largo del tiempo. Esto es de mucha ayuda ya que se puede saber que
tanto se ha gastado en medicamentos, consultas, etc. Por otro lado una
de las aplicaciones incluye una base de datos para encontrar
medicamentos similares que puedan ser mucho mas económicos que los que
receta el médico.

## Interacción con el médico

La otra parte esencial es la interacción con el médico. Todas las
aplicaciones manejan de diferente forma esta interacción. Lo que
tienen en común es contar con un historial médico para cada uno de los
miembros de la familia (o usuarios registrados en esa cuenta). Casi
todas ellas cuentan con campos básicos de historial médico como edad,
peso, altura, tipo de sangre, alergias, etc. Sin embargo algunas de
ellas van mas allá teniendo a la mano el registro de enfermedades
recientes, un historial de los medicamentos que se han tomado, análisis de
sangre por fecha y resultados gráficos de todos estos datos.

Lo que mas diferencía a las aplicaciones es la forma en que se le
presentan estos datos al médico. Una manera es conectarse a una base
de datos a la que el médico tiene acceso para revisar los datos de
cada paciente. Esto significa que debe contar con la aplicación al
igual que el paciente y con una cuenta con permisos especiales como
médico. Otra manera es utilizando un
[código QR](https://es.wikipedia.org/wiki/C%C3%B3digo_QR) para que el
médico pueda descargar rápidamente los datos de la historia clínica
del paciente. Algunas aplicaciones brindan la opción de enviar al
médico por correo electrónico la historia más reciente antes de una
consulta. Por último existe también la posibilidad de utilizar el
seguro social (en el caso de médicos adscritos), con un sistema similar
al que utiliza Medicare en Estados Unidos de Norteamérica.


## Contacto paciente y médico

Una funcionalidad muy interesante que ha sido implementada por algunas
de estas aplicaciones, es poner a médico y paciente en contacto. Como
funciona es que el usuario de la aplicación puede seleccionar en el
campo de búsqueda el tipo de médico que desea contactar, ya sea
cardiólogo, neurólogo, pediatra, etc.. El mismo teléfono utilizando el
GPS, se conecta a la base de datos de los médicos suscritos y le envía
al usuario la información de contacto de los médicos mas cercanos a su
ubicación actual (o a su domicilio) que cumplan con los requisitos.
