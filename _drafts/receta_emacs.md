# Receta para instalar emacs 24.5 en debianoides

Resulta que los emacsen precompilados de Debian y Ubuntu no funcionan bien con [MELPA](http://melpa.org). Por otro instalar [la versión oficial de GNU](https://www.gnu.org/software/emacs/) es realmente fácil, usan autoconf o sea que: ./configure; make; make install. Pero antes conviene instalar algunas bibliotecas para que la compilación incluya soporte para el ambiente gráfico y para algunos formatos de archivo.

Luego entonces:
    $ sudo apt-get install 
    

