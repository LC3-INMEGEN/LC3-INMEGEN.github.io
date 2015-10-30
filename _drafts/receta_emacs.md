# El último Emacs en debianoides

Emacs es como un sistema operativo disfrazado de editor pero más bien es un estilo de vida y una religión. En el LC3 pugnamos por alcanzar el Estado de Gracia en la Iglesia de Emacs. Naturalmente, hay obstáculos. Resulta que los emacsen precompilados de Debian y sus derivados no funcionan bien con [MELPA](http://melpa.org). Por otro lado compilar e instalar [la versión oficial de GNU](https://www.gnu.org/software/emacs/) es realmente fácil. A continuación algunas notas de cómo hacerle.

## Bibliotecas de soporte

Hay que instalar algunas bibliotecas para que la compilación incluya soporte para el ambiente gráfico y para algunos formatos de archivo. Así:

     $ sudo apt-get build-dep emacs24

Ese encantamiento instala todas las bibliotecas que el gestor de paquetes del sistema operativo usaría para construir emacs24. Sólo que en vez de pedirle al sistema que nos instale emacs24, lo haremos desde el [tarball que distribuye GNU](http://ftpmirror.gnu.org/emacs/).  Usan autoconf o sea que una vez descargado y descomprimido:

     $ ./configure
     
     [ configura los makefiles...] 
     
     $ make
     [ compila, linkea, etc...]
     
     $ sudo make install

¡Ahora sí! Agregar el repositorio de MELPA a nuestro .emacs, M-X package-list-packages, superpoderes.

## Ergonomía

Para que la infinita extensibilidad de Emacs sea asequible con un conjunto finito de teclas es necesario combinarlas. Son como acordes estas combinaciones, hay quien así les llama: key-chords. Muchos de estos acordes empiezan con la tecla Ctrl, que suele estar en la misma fila que la barra espaciadora, allá lejos, dificil de alcanzar. Por otro lado hay un boton grandote y ergonómico aquí cerquita, junto a la tecla "A": el bloqueo de mayúsculas. A menos de que te la pases gritando en las salas de chat, lo más probable es que no lo uses tanto. Luego: conviene convertirlo en otro botón de Ctrl y así ganar muchísima ergonomía.

En Debian y sus derivados hay que editar este archivo:

     /etc/default/keyboard

La línea que contiene XKBOPTIONS debe incluir "ctrl:nocaps", así:

     XKBOPTIONS="ctrl:nocaps"
     
Tras reiniciar el sistema, el cambio aplica en las consolas TTY lo mismo que en X11 (si sabes cómo activar este cambio sin reiniciar, ¿nos dices cómo?). ¡Listo! Te has ahorrado mucho dolor y quizá costosas cirugías.

