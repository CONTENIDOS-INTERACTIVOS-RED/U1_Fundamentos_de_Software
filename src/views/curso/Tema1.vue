<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Concepto y tipos de <em>software</em>'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    
    .row.mb-5.justify-content-center
      .col-md-8.col-lg-4.order-2
        figure
          img(src="@/assets/curso/tema1/1.png", data-aos="zoom-in")
      .col-lg-8.order-1
        .bg-color-1.p-4(data-aos="fade-left").mb-3
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema1/2.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 El <em>software</em> es el conjunto de instrucciones, reglas, datos y programas, diseñados para realizar tareas específicas en dispositivos electrónicos. Estas instrucciones, escritas en lenguajes de programación, son interpretadas por el <em>hardware</em> para ejecutar las funciones requeridas por el usuario. En resumen, el <em>software</em> actúa como el “cerebro” que guía al <em>hardware</em>.
        p(data-aos="fade-left") Por ejemplo, en un procesador de textos, el <em>software</em> convierte las pulsaciones del teclado en palabras visibles en la pantalla. Sin él, el teclado y el monitor no podrían interactuar entre sí.
    
    h2.mb-3(data-aos="fade-right") Características del <em>software</em>

    p.mb-5 El <em>software</em> posee características únicas que lo diferencian de otros componentes tecnológicos:

    TabsC.color-primario.mb-5
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Intangibilidad" :icon="require('@/assets/bullets/icon-tab-c-4.svg')" )
        .row.justify-content-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Intangibilidad
            p No es físico ni tangible, aunque su funcionamiento se percibe a través de las tareas realizadas. 
            p <b>Ejemplo:</b> enviar un mensaje desde el teléfono, involucra <em>software</em>, aunque el usuario no vea el código detrás.

        
          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/3.png', alt='')
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Flexibilidad y adaptabilidad" :icon="require('@/assets/bullets/icon-tab-c-4.svg')" )
        .row.justify-content-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Flexibilidad y adaptabilidad
            p El <em>software</em> puede evolucionar mediante actualizaciones que agregan funciones, corrigen errores y mejoran su rendimiento. 
            p <b>Ejemplo:</b> aplicaciones móviles con actualizaciones periódicas.
        
          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/4.png', alt='')

      .tabs-content.border.px-4.p-md-5.py-3(titulo="Dependencia del <em>hardware</em>" :icon="require('@/assets/bullets/icon-tab-c-4.svg')" )
        .row.justify-content-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Dependencia del <em>hardware</em>
            p El <em>software</em> necesita de un dispositivo físico donde ejecutarse. Sin <em>hardware</em>, no puede funcionar.

          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/5.png', alt='', style="width: 100%;")

      .tabs-content.border.px-4.p-md-5.py-3(titulo="Modularidad" :icon="require('@/assets/bullets/icon-tab-c-4.svg')" )
        .row.justify-content-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Modularidad
            p Se desarrolla en partes o módulos independientes, que trabajan juntos, facilitando el mantenimiento y la actualización. 
            p <b>Ejemplo:</b> una aplicación con un módulo para usuarios y otro para bases de datos.
          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/6.png', alt='', style="width: 100%;")
    
    .row.justify-content-center.align-items-center.bg-h85.mb-5
      .col-lg-12
        .row.justify-content-center.align-items-center
          .col-lg-7(data-aos="fade-left")
            h2.mb-5(data-aos="fade-right") Función principal del <em>software</em>
            p La función básica del <em>software</em> es <b>transformar datos en información útil.</b> Por ejemplo, una hoja de cálculo convierte números en gráficos o análisis, facilitando la toma de decisiones. Además, el <em>software</em> actúa como puente entre el usuario y la máquina, permitiendo la interacción con el <em>hardware</em>.
            p.text-bold El <em>hardware</em> y el <em>software</em> son complementarios, pero diferentes en su naturaleza:
          .col-lg-5(data-aos="zoom-in")
            img.img-fluid(src='@/assets/curso/tema1/7.svg', style="max-width:486px", alt="").mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0
    
    .titulo-figura.mb-4
      h5 <b>Tabla</b> 1. 
      span Diferencias claves entre <em>software</em> y <em>hardware</em>

    .tabla-a.color-terciario.mb-5(data-aos="zoom-in") 
      table
        thead
          tr
            th.bg-color-3.text-white.text-center Aspecto
            th.bg-color-3.text-white.text-center <em>software</em>
            th.bg-color-3.text-white.text-center <em>hardware</em>
        tbody
          tr
            td <b>Naturaleza</b>
            td Intangible: son instrucciones y datos.
            td Tangible: es la parte física.
            
          tr
            td <b>Ejemplo</b> 
            td Aplicaciones, sistemas operativos.
            td Procesadores, monitores, teclados.
          tr
            td <b>Relación</b> 
            td Da instrucciones para que funcione el <em>hardware</em>.
            td Proporciona la estructura para el <em>software</em>.
    
    p.text-bold Ejemplo práctico:
    p Imagina un automóvil:

    .row.mb-5
      .col-lg-6.mb-3.mb-lg-0(data-aos="fade-up")
        div.bg-color-4.h-100.p-4
          h2 01
          p.mb-0.text-center El <b><em>hardware</em></b> es el cuerpo, motor y volante del coche.
      .col-lg-6(data-aos="fade-down")
        div.bg-color-5.h-100.p-4
          h2 02
          p.mb-0.text-center El <b><em>software</em></b> es el conductor que toma decisiones sobre cómo y cuándo moverse. 

    h2.mb-5(data-aos="fade-right") Importancia del <em>software</em> en la vida diaria

    .row.mb-5.justify-content-center
      .col-md-8.col-lg-4.order-1.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/8.png", data-aos="zoom-in")
      .col-lg-8.order-2.order-lg-1
        p(data-aos="fade-left") El <em>software</em> está presente en casi todas las actividades cotidianas, facilitando tareas y procesos. Sin él, los dispositivos electrónicos no podrían realizar sus funciones.
        p.text-bold En la comunicación
        p La comunicación actual se ha transformado, gracias a diversas herramientas tecnológicas que facilitan la interacción en tiempo real.
        .bg-color-6.p-4(data-aos="fade-left").mb-3
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema1/9.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.text-bold En la educación
              p.mb-0 La educación se ha fortalecido mediante herramientas tecnológicas que facilitan el acceso al conocimiento y mejoran los procesos de enseñanza y aprendizaje.

    .bg-full-width-1.bg-fondo-1
      .px-4.px-md-5.pb-md-3

        .row.justify-content-center.align-items-stretch.mb-5
          .col-lg-4.mb-4(data-aos="zoom-in-up")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema1/10.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Plataformas de aprendizaje en línea
                p.mb-0.text-center Herramientas como <b>Coursera y Khan Academy</b>, permiten acceder a contenido educativo global desde cualquier lugar. 
                p.text-center <b>Ventajas:</b> flexibilidad en horarios y acceso a cursos especializados.
          .col-lg-4.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema1/11.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center <em>Software</em> de apoyo al estudio
                p.mb-0.text-center Aplicaciones como <b>Grammarly y Google Translate</b> mejoran la redacción y traducción de textos.
          .col-lg-4.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema1/12.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Interacción educativa
                p.mb-0.text-center Plataformas como <b>Google Classroom o Microsoft Teams</b> facilitan clases virtuales, entregas de tareas y retroalimentación inmediata.
    
    p.text-bold En el trabajo y la productividad
    p El <em>software</em> permite optimizar tareas, automatizar procesos y mejorar la eficiencia laboral. Por ejemplo:

    .bg-full-width-1.bg-color-7
      .px-4.px-md-5
        .row.justify-content-center.p-5
          .col-lg-8.align-items-center
            figure
              img(src="@/assets/curso/tema1/13.svg", data-aos="zoom-in")
    
    .bg-full-width-1.bg-color-5.mb-5
      .px-4.px-md-5.p-4
        p.mb-0 En resumen, el <em>software</em> es indispensable en áreas como comunicación, educación y trabajo, facilitando la ejecución de tareas y mejorando la eficiencia en todas las actividades humanas.

      

    #t_1_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.1] Concepto y tipos de <em>software</em>
    

    .row.mb-5.justify-content-center
      .col-md-8.col-lg-4.mb-3.mb-klg-0
        figure
          img(src="@/assets/curso/tema1/14.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") El <em>software</em> es el conjunto de instrucciones, reglas y datos, diseñados para realizar tareas específicas en dispositivos electrónicos. Estas instrucciones, escritas en lenguajes de programación, son interpretadas por el <em>hardware</em> para ejecutar funciones requeridas por el usuario. En resumen, el <em>software</em> actúa como el "cerebro" que guía al <em>hardware</em>.
        .bg-color-1.p-4(data-aos="fade-left").mb-3
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema1/15.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Por ejemplo, cuando se utiliza un procesador de textos, el <em>software</em> convierte las pulsaciones del teclado en palabras visibles en la pantalla, facilitando la interacción entre dispositivos.
        
    h2.mb-3(data-aos="fade-right") Características del <em>software</em>

    p El <em>software</em> posee atributos particulares que lo diferencian de otros componentes tecnológicos:

    .bg-full-width.bg-color-info.mb-5
      .p-4.p-md-5
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-8 
            ImagenInfografica.color-secundario
                template(v-slot:imagen)
                  figure
                    img(src='@/assets/curso/tema1/16.svg', alt='', style="max-width: 1106px;").mx-auto

                .bg-color-white.box-shadow.p-3(x="22%" y="17.5%" numero="+")
                  h5 Intangibilidad
                  p No es físico ni tangible; su funcionamiento se percibe a través de las tareas realizadas.

                .bg-color-white.box-shadow.p-3(x="84.5%" y="28%" numero="+")
                  h5 Flexibilidad y adaptabilidad
                  p Permite actualizaciones constantes para mejorar funciones, corregir errores y adaptarse a nuevas necesidades.

                .bg-color-white.box-shadow.p-3(x="95.8%" y="62%" numero="+")
                  h5 Modularidad
                  p Se desarrolla en módulos independientes, que facilitan su mantenimiento y actualización.

                .bg-color-white.box-shadow.p-3(x="13.7%" y="76%" numero="+")
                  h5 Dependencia del <em>hardware</em>
                  p Necesita un dispositivo físico donde ejecutarse; sin <em>hardware</em>, no puede funcionar.

    h2.mb-3(data-aos="fade-right") Clasificación del <em>software</em>

    .bg-full-width.bg-color-2.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema1/17.svg", style="max-width: 90px").mx-auto
          .col-lg(data-aos="fade-right")
            p El <em>software</em> se clasifica en función de su propósito y modelo de distribución.
            p.mb-0.text-bold Según su propósito
            p El <em>software</em> se clasifica, según su propósito, facilitando diversas funciones que van desde la gestión del <em>hardware</em> hasta tareas específicas del usuario.
    
    .row.mb-5.justify-content-center
      .col-lg-9
        .titulo-figura.mb-4
          h5 <b>Tabla</b> 2. 
          span Según su propósito

        .tabla-a.color-terciario.mb-5(data-aos="zoom-in") 
          table
            thead
              tr
                th.bg-color-3.text-white.text-center Tipo de <em>software</em>
                th.bg-color-3.text-white.text-center Descripción
                th.bg-color-3.text-white.text-center Ejemplo
            tbody
              tr
                td <b><em>software</em> del sistema</b>
                td Actúa como intermediario entre el <em>hardware</em> y las aplicaciones, gestionando recursos y operaciones.
                td Sistemas operativos como Windows o Linux.
                
              tr
                td <b><em>software</em> de aplicación</b> 
                td Realiza tareas específicas para el usuario final.
                td Microsoft Word, Google Chrome.
              tr
                td <b><em>software</em> de desarrollo</b> 
                td Herramientas utilizadas para programar otros <em>software</em>.
                td Visual Studio, Eclipse.
              tr
                td <b><em>software</em> embebido</b> 
                td Integrado en dispositivos específicos, para realizar funciones concretas.
                td Sistemas en microondas o automóviles.

      .col-md-8.col-lg-3
        figure
          img(src="@/assets/curso/tema1/18.svg", data-aos="zoom-in")
    
    p.text-bold Según su modelo de distribución
    p.mb-5 El <em>software</em>, según su modelo de distribución, se clasifica en diferentes categorías que determinan su acceso, uso y desarrollo.

    .row.mb-5.justify-content-center
      .col-lg-9.order-2
        .titulo-figura.mb-4
          h5 <b>Tabla</b> 3. 
          span Según su modelo de distribución

        .tabla-a.color-terciario.mb-5(data-aos="zoom-in") 
          table
            thead
              tr
                th.bg-color-3.text-white.text-center Modelo de distribución
                th.bg-color-3.text-white.text-center Descripción
                th.bg-color-3.text-white.text-center Ejemplo
            tbody
              tr
                td <b><em>software</em> propietario</b>
                td Restricciones en el uso, modificación y distribución. No se accede al código fuente.
                td Microsoft Office, Photoshop.
                
              tr
                td <b><em>software</em> libre</b> 
                td Permite usar, modificar y redistribuir el código fuente. Promueve la transparencia.
                td Linux, GIMP.
              tr
                td <b><em>software</em> de código abierto</b> 
                td Similar al <em>software</em> libre, pero enfocado en desarrollo colaborativo. Puede tener restricciones.
                td OpenOffice, Mozilla Firefox.
              tr
                td <b><em>software</em> gratuito</b> 
                td Disponible sin costo, aunque puede incluir publicidad o versiones premium.
                td Google Chrome, Skype.

      .col-md-8.col-lg-3.order-1.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/19.svg", data-aos="zoom-in")
      
    p.text-bold Importancia del <em>software</em> en la vida diaria
    p.mb-5 El <em>software</em> es esencial en la vida cotidiana y permite realizar tareas en áreas como:

    
    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3
              figure
                img(src="@/assets/curso/tema1/20.png")
            .col-lg-7
              h5 Comunicación

              ul.lista-ul--color
                li.mb-0
                  i.fas.fa-check-circle.bg-color-8
                  | #[b Aplicaciones de mensajería y llamadas: ] WhatsApp o Zoom facilitan la comunicación global instantánea.
                li.mb-0
                  i.fas.fa-check-circle.bg-color-8
                  | #[b Redes sociales: ] plataformas como Instagram o Facebook, permiten compartir información y conectar con otras personas.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3
              figure
                img(src="@/assets/curso/tema1/21.png")
            .col-lg-7
              h5 Educación

              ul.lista-ul--color
                li.mb-0
                  i.fas.fa-check-circle.bg-color-8
                  | #[b Plataformas de aprendizaje en línea: ] herramientas como Moodle o Coursera, ofrecen acceso a contenido global y flexible.
                li.mb-0
                  i.fas.fa-check-circle.bg-color-8
                  | <b><em>software de apoyo:</em></b> programas como Grammarly o Google Translate, mejoran tareas específicas como redacción o traducción. 

    h2.mb-5(data-aos="fade-right") Trabajo y productividad

    .bg-full-width.bg-color-2.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema1/22.svg", style="max-width: 90px").mx-auto
          .col-lg(data-aos="fade-right")
            p El <em>software</em> optimiza tareas, automatiza procesos y mejora la eficiencia en el ámbito laboral con herramientas como <b>Excel, SAP o Trello.</b> 
            p El <em>software</em> guía y potencia el funcionamiento del <em>hardware</em>, facilitando desde la comunicación, hasta la gestión empresarial y educativa.


    .bg-full-width.bg-color-9.mb-lg-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-8
            h2.mb-4(data-aos="flip-up") Historia y evolución del desarrollo de <em>software</em>
            p.mb-4(data-aos="fade-right") Se invita a explorar la <b>historia y evolución del desarrollo de <em>software</em></b>, desde el <b>telar de Jacquard</b> en 1804, que introdujo el uso de tarjetas perforadas, hasta los aportes de <b>Charles Babbage</b> y <b>Ada Lovelace</b> en el siglo XIX, pioneros en conceptos de programación y algoritmos. Además, se destaca el papel de <b>Herman Hollerith</b> al aplicar tarjetas perforadas en el procesamiento de datos, sentando las bases para el desarrollo moderno del <em>software</em> y los sistemas computacionales.

            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Historia y evolución del desarrollo de <em>software</em>.

          .col-md-8.col-lg-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/23.png', alt='')



    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/62495" target="_blank" rel="noopener noreferrer") Casado Iglesias, C. (2015). Entornos de desarrollo. RA-MA Editorial. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.appandweb.es/blog/ " target="_blank" rel="noopener noreferrer") Tipos de <em>software</em>.
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.tiobe.com/tiobe-index/" target="_blank" rel="noopener noreferrer") Índice TIOBE.

            

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=Hedi-Qobgbc" target="_blank" rel="noopener noreferrer") Elite <em>software</em> Engineering. (2020). 01 - Ingeniería de Requerimientos ¿Qué son los requerimientos de <em>software</em>?.

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
