# Receta para instalar el último Emacs en debianoides

Resulta que los emacsen precompilados de Debian y Ubuntu no funcionan bien con [MELPA](http://melpa.org). Por otro lado compilar e instalar [la versión oficial de GNU](https://www.gnu.org/software/emacs/) es realmente fácil. 

Hay que instalar algunas bibliotecas para que la compilación incluya soporte para el ambiente gráfico y para algunos formatos de archivo. Así:

     $ sudo apt-get build-dep emacs24

Ese encantamiento instala todas las bibliotecas que el gestor de paquetes del sistema operativo usaría para construir emacs24. Sólo que en vez de pedirle al sistema que nos instale emacs24, lo haremos desde el [tarball que distribuye GNU](http://ftpmirror.gnu.org/emacs/).  Usan autoconf o sea que una vez descargado y descomprimido:

     $ ./configure
     
     [ configura los makefiles...] 
     
     $ make
     [ compila, linkea, etc...]
     
     $ sudo make install

¡Ahora sí! Agregar el repositorio de MELPA a nuestro .emacs, M-X package-list-packages, superpoderes.
