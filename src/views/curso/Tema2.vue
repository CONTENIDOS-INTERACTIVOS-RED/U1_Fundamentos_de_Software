<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. Ciclo de vida del desarrollo de <em>software</em> '")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .bg-color-10.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto
          figure
            img(src='@/assets/curso/tema2/1.png', alt='')
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up") El ciclo de vida del desarrollo de <em>software</em> (<em>software</em> Development Life Cycle – SDLC) es un marco que guía a través de las etapas esenciales para crear, mantener y optimizar un sistema de <em>software</em>. Comprender estas etapas permite gestionar proyectos de <em>software</em> con precisión, asegurando calidad, eficacia y satisfacción de las necesidades de los usuarios.
    
    .row.mb-5.justify-content-center
      .col-md-8.col-lg-4.order-2
        figure
          img(src="@/assets/curso/tema2/3.svg", data-aos="zoom-in")
      .col-lg-8.order-1.mb-3.mb-lg-0
        h2.mb-3(data-aos="fade-right") Introducción al SDLC
        p(data-aos="fade-left") El SDLC organiza las actividades en fases, desde la comprensión de los requerimientos hasta el mantenimiento posterior a la implementación. Por ejemplo, si se desarrolla una aplicación móvil para una tienda en línea, el SDLC guiará las etapas de planificación, diseño, programación, pruebas, lanzamiento y mantenimiento.
        .bg-color-6.p-4(data-aos="fade-left").mb-3
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema2/2.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.text-bold Objetivos del SDLC:
              p El principal objetivo del SDLC es asegurar que el desarrollo de <em>software</em> sea de alta calidad, cumpla con las expectativas del usuario y se entregue dentro del tiempo y presupuesto asignados. Otros objetivos incluyen:
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0(data-aos="fade-up")
        div.bg-color-3.h-100.p-4.tarjeta.text-white
          h2 01
          p.mb-0.text-center <b>Minimizar errores: </b> detectar problemas antes de la implementación
      .col-lg-4.mb-3.mb-lg-0(data-aos="fade-down")
        div.bg-color-4.h-100.p-4.tarjeta
          h2 02
          p.mb-0.text-center <b>Optimizar recursos: </b> asignar eficientemente tareas y personal en cada fase.
      .col-lg-4(data-aos="fade-up")
        div.bg-color-11.h-100.p-4.tarjeta
          h2 03
          p.mb-0.text-center <b>Mejorar la comunicación: </b> facilitar el trabajo coordinado entre los equipos involucrados.
    
    .bg-full-width-1.bg-color-5.mb-5
      .px-4.px-md-5.p-4
        p.text-bold Historia y evolución del SDLC.
        p.mb-0 El SDLC surgió en la década de 1960, cuando las organizaciones buscaban métodos estructurados para proyectos complejos. Aunque sigue siendo fundamental, ha evolucionado con enfoques modernos, como las metodologías ágiles.

    #t_2_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.1] Las fases del SDLC

    .row.mb-5.justify-content-center
      .col-md-8.col-lg-4.order-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/5.png", data-aos="zoom-in")
      .col-lg-8.order-1
        p.mb-5(data-aos="fade-left") El SDLC se organiza en fases que aseguran una progresión lógica del desarrollo. Cada fase tiene objetivos y actividades específicas, que garantizan la funcionalidad y escalabilidad del <em>software</em>.
        h2.mb-3(data-aos="fade-right") Análisis de requisitos
        .bg-color-10.p-4(data-aos="fade-left").mb-3
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema2/4.svg", style="max-width: 90px").mx-auto
            .col-lg
              p El análisis de requisitos define qué debe hacer el sistema y las restricciones bajo las cuales debe operar. Esta fase garantiza la alineación del producto final, con las expectativas del cliente.
    

    .bg-full-width-1.bg-fondo-2
      .px-4.px-md-5.pb-md-3
        p.text-bold Hay actividades claves como:
        div.row.justify-content-center.align-items-stretch.mb-5
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/tema2/6.svg"
                alt=""
                style="width: 90px"
              )
              p.mb-0.text-center <b>Elucidación:</b> obtención de información a través de entrevistas, encuestas o reuniones con los usuarios.
          
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/tema2/7.svg"
                alt=""
                style="width: 90px"
              )
              p.mb-0.text-center <b>Especificación:</b> documentación detallada y clara de los requisitos funcionales y no funcionales.
          
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/tema2/8.svg"
                alt=""
                style="width: 90px"
              )
              p.mb-0.text-center <b>Validación:</b> comprobación de la completitud y consistencia de los requisitos.

       
        .titulo-figura.mb-4
          h5 <b>Tabla</b> 4. 
          span Tipos de requisitos

        .tabla-a.color-terciario.mb-5(data-aos="zoom-in") 
          table
            thead
              tr
                th.bg-color-3.text-white.text-center Tipo
                th.bg-color-3.text-white.text-center Descripción
                th.bg-color-3.text-white.text-center Ejemplo
            tbody
              tr
                td <b>Funcionales</b>
                td Describen lo que debe hacer el sistema.
                td "El sistema debe permitir reservar vuelos".
                
              tr
                td <b>No funcionales</b> 
                td Atributos del sistema como rendimiento y seguridad.
                td "El tiempo de respuesta debe ser <2 segundos".
              tr
                td <b>Requisitos de dominio</b> 
                td Cumplimiento de normativas o estándares específicos.
                td "El sistema debe cumplir con la GDPR".
    
    .row.justify-content-center.align-items-center.bg-h85-2.mb-5
      .col-lg-12
        .row.justify-content-between.align-items-center
          .col-lg-6(data-aos="fade-left").order-2
            p.text-bold Las herramientas aplicadas son:
            ol.lista-ol--cuadro(data-aos="fade-up").mb-0
              li.mb-0.d-flex
                .lista-ol--cuadro__vineta
                  span 1
                p.mb-0 <b>Entrevistas y reuniones:</b> recopilar información con Otter.ai (transcripciones).
              li.mb-0.d-flex 
                .lista-ol--cuadro__vineta
                  span 2
                p.mb-0 <b>Modelos visuales:</b> diagramas con Lucidchart o Draw.io.
              li.mb-0.d-flex 
                .lista-ol--cuadro__vineta
                  span 2
                p.mb-0 <b>Prototipos:</b> herramientas como Figma, para validar conceptos de diseño.

          .col-lg-5(data-aos="zoom-in").order-1
            img.img-fluid(src='@/assets/curso/tema2/9.svg', style="max-width:486px", alt="").mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0
    
    p.text-bold Los artefactos generados son:

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0(data-aos="fade-up")
        div.bg-color-3.h-100.p-4.tarjeta.text-white
          h2 01
          p.mb-0.text-center Documento de requisitos del <em>software</em> (SRS).
      .col-lg-4.mb-3.mb-lg-0(data-aos="fade-down")
        div.bg-color-4.h-100.p-4.tarjeta
          h2 02
          p.mb-0.text-center Diagramas de casos de uso.
      .col-lg-4(data-aos="fade-up")
        div.bg-color-11.h-100.p-4.tarjeta
          h2 03
          p.mb-0.text-center Historias de usuario: "Como [usuario], quiero [función] para [beneficio]".
              
    h2.mb-5(data-aos="fade-right") Fase del diseño de <em>software</em>

    p El diseño de <em>software</em> transforma los requisitos recopilados, en una <b>arquitectura funcional y detallada</b> del sistema.
    p.mb-5 Los tipos de diseño son: 

    TabsC.color-primario.mb-5
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Diseño de arquitectura" :icon="require('@/assets/bullets/icon-tab-c-4.svg')" )
        .row
          .col-md-6.col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Diseño de arquitectura
            p Estructura general del sistema, módulos y componentes.

        
          .col-md-6.col-lg-5.col-xl-4.order-1
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/10.png', alt='')
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Diseño detallado" :icon="require('@/assets/bullets/icon-tab-c-4.svg')" )
        .row
          .col-md-6.col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Diseño detallado	
            p Especificación de algoritmos, estructuras de datos y clases.
        
          .col-md-6.col-lg-5.col-xl-4.order-1
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/11.png', alt='')

    .bg-full-width-1.bg-fondo-3
      .px-4.px-md-5.pb-md-3
        p.text-bold Ejemplo práctico:
        p.mb-5 En un sistema de reservas de vuelos:

        div.row.justify-content-center.align-items-stretch.mb-5
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/tema2/12.svg"
                alt=""
                style="width: 90px"
              )
              p.text-center <b>Diseño de arquitectura: </b> 
              p.text-center Establecer las capas de presentación, lógica y datos.
          
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/tema2/13.svg"
                alt=""
                style="width: 90px"
              )
              p.text-center <b>Diseño detallado: </b> 
              p.text-center Diagramas de clases como "Cliente", "Vuelo" y "Reserva".
          
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/tema2/14.svg"
                alt=""
                style="width: 90px"
              )
              p.text-center <b>3.	Prototipos: </b> 
              p.text-center Creación de una interfaz visual interactiva en Figma o Adobe XD.
    
        p.text-bold Artefactos generados
        p.mb-5 En el desarrollo de sistemas, los artefactos generados permiten representar y organizar de manera clara, los componentes y funcionalidades.

        .row.mb-5
          .col-lg-3.mb-3.mb-lg-0(data-aos="fade-up")
            div.bg-color-3.h-100.p-4.tarjeta.text-white
              h2 01
              p.mb-0.text-center <b>Diagramas de arquitectura:</b> descripción de módulos y conexiones. 
          .col-lg-3.mb-3.mb-lg-0(data-aos="fade-down")
            div.bg-color-4.h-100.p-4.tarjeta
              h2 02
              p.mb-0.text-center <b>Diagramas de clases:</b> representación de clases y atributos.
          .col-lg-3.mb-3.mb-lg-0(data-aos="fade-up")
            div.bg-color-11.h-100.p-4.tarjeta
              h2 03
              p.mb-0.text-center <b>Diagramas de secuencia:</b> flujo de interacción entre componentes.
          .col-lg-3(data-aos="fade-up")
            div.bg-color-5.h-100.p-4.tarjeta
              h2 04
              p.mb-0.text-center <b>Prototipos:</b> bocetos funcionales de la interfaz gráfica.
        
        p.text-bold Beneficios de un buen diseño
    
    p.mb-5 Un buen diseño en el desarrollo de <em>software</em>, es clave para garantizar un proceso eficiente y resultados de alta calidad.

    .row.justify-content-center.align-items-center.bg-h85-3.mb-5
      .col-lg-12
        .row.justify-content-end.align-items-center
          .col-lg-5(data-aos="fade-left")
            ol.lista-ol--cuadro(data-aos="fade-up").mb-0
              li.mb-0.d-flex
                .lista-ol--cuadro__vineta
                  span 1
                p.mb-0 Facilita la comprensión del sistema.
              li.mb-0.d-flex 
                .lista-ol--cuadro__vineta
                  span 2
                p.mb-0 Reduce errores en las etapas de desarrollo
              li.mb-0.d-flex 
                .lista-ol--cuadro__vineta
                  span 2
                p.mb-0 Mejora la calidad y escalabilidad del <em>software</em>.

          .col-lg-6(data-aos="zoom-in")
            img.img-fluid(src='@/assets/curso/tema2/15.svg', style="max-width:486px", alt="").mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0

    h2.mb-3(data-aos="fade-right") Desarrollo

    p.mb-5 La fase de desarrollo consiste en programar el sistema, de acuerdo con los diseños establecidos. Aquí se escriben las líneas de código y se integran las funcionalidades del <em>software</em>.

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3
              figure
                img(src="@/assets/curso/tema2/16.png")
            .col-lg-7
              h5 Actividades destacadas

              ul.lista-ul--color
                li.mb-0
                  i.fas.fa-check-circle.bg-color-8
                  | Selección del lenguaje de programación adecuado (Java, Python, C++).
                li.mb-0
                  i.fas.fa-check-circle.bg-color-8
                  | Uso de herramientas como Visual Studio o IntelliJ para el desarrollo.
                li.mb-0
                  i.fas.fa-check-circle.bg-color-8
                  | Versionado del código fuente con sistemas como Git.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3
              figure
                img(src="@/assets/curso/tema2/17.png")
            .col-lg-7
              h5 Productos entregables

              ul.lista-ul--color
                li.mb-0
                  i.fas.fa-check-circle.bg-color-8
                  | Código funcional del sistema.
                li.mb-0
                  i.fas.fa-check-circle.bg-color-8
                  | Documentación técnica del código. 
                li.mb-0
                  i.fas.fa-check-circle.bg-color-8
                  | Compilaciones y versiones preliminares del <em>software</em>.

    h2.mb-3(data-aos="fade-right") Pruebas

    p.mb-5 La fase de pruebas verifica que el sistema funcione correctamente y cumpla con los requisitos definidos. 

    .row.mb-5.justify-content-center
      .col-lg-7.order-2
        .titulo-figura.mb-4
          h5 <b>Tabla</b> 5. 
          span Tipos de pruebas

        .tabla-a.color-terciario.mb-5(data-aos="zoom-in") 
          table
            thead
              tr
                th(width="30%").bg-color-3.text-white.text-center Prueba
                th.bg-color-3.text-white.text-center Descripción
            tbody
              tr
                td <b>Unitarias</b>
                td Se prueba cada módulo individualmente. 
              tr
                td <b>Integración</b> 
                td Se verifica que los módulos interactúen correctamente.
              tr
                td <b>Funcionales</b> 
                td Validan que las funciones cumplen los requisitos.
              tr
                td <b>De rendimiento</b> 
                td Miden tiempos de respuesta y capacidad del sistema.

      .col-md-8.col-lg-5.order-1.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/18.svg", data-aos="zoom-in")
    
    h2.mb-5(data-aos="fade-right") Implementación y despliegue

    .row.mb-5.justify-content-center
      .col-lg-7
        p En esta fase, el sistema es instalado en un entorno real y puesto a disposición del usuario.
        div.p-4.px-5.bg-color-12
          ol.lista-ol--cuadro(data-aos="fade-up").mb-0
            li.mb-0.d-flex
              .lista-ol--cuadro__vineta
                span 1
              p.mb-0 Instalación en servidores o dispositivos del cliente.
            li.mb-0.d-flex 
              .lista-ol--cuadro__vineta
                span 2
              p.mb-0 Capacitación de usuarios finales.
            li.mb-0.d-flex 
              .lista-ol--cuadro__vineta
                span 2
              p.mb-0 Monitoreo inicial del rendimiento.
      .col-md-8.col-lg-5
        figure
          img(src="@/assets/curso/tema2/19.png", data-aos="zoom-in")
    
    h2.mb-5(data-aos="fade-right") Mantenimiento
    p.mb-5 La fase de mantenimiento asegura que el <em>software</em> continúe funcionando de manera óptima, tras su implementación.

    .row.mb-5.justify-content-center
      .col-lg-7.order-2
        p.text-bold Tipos de mantenimiento:
        div.p-3.px-5.bg-color-13.mb-3
          ol.lista-ol--cuadro(data-aos="fade-up").mb-0
            li.d-flex
              .lista-ol--cuadro__vineta
                span 1
              p.mb-0 <b>Correctivo:</b> resolver errores no detectados durante las pruebas.
            li.mb-0.d-flex 
              .lista-ol--cuadro__vineta
                span 2
              p.mb-0 <b>Adaptativo:</b> ajustar el sistema ante cambios en el entorno.
            li.mb-0.d-flex 
              .lista-ol--cuadro__vineta
                span 2
              p.mb-0 <b>Preventivo:</b> optimización del rendimiento y reducción de riesgos.
        p.mb-0 El ciclo de vida del desarrollo de <em>software</em>, organiza de manera estructurada todas las fases de un proyecto, permitiendo entregar productos finales que cumplen con las expectativas del cliente, optimizan recursos y garantizan un funcionamiento eficiente.
      .col-md-8.col-lg-5.order-1.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/20.png", data-aos="zoom-in")
    
    .bg-full-width.bg-color-9.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-8
            h2.mb-4(data-aos="flip-up") Desarrollo o implementación
            p.mb-4(data-aos="fade-right") Se invita a conocer la fase de <b>desarrollo o implementación</b>, donde el diseño se transforma en un sistema funcional mediante la codificación, integración, pruebas unitarias y documentación. Utilizando herramientas como IDEs, sistemas de control de versiones y marcos de desarrollo, los desarrolladores crean módulos funcionales y optimizados. 

            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_2.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Desarrollo o implementación.

          .col-md-8.col-lg-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/21.png', alt='')

    #t_2_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.2] Modelos del SDLC
    
    .row.mb-5.justify-content-center
      .col-md-8.col-lg-3.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/22.svg", data-aos="zoom-in")
      .col-lg-9
        p(data-aos="fade-left") Un modelo del SDLC define las etapas del desarrollo y cómo estas se relacionan entre sí. Un modelo del SDLC proporciona un marco conceptual para estructurar, planificar y controlar el proceso de desarrollo. Los modelos ayudan a estandarizar las actividades y guiar a los equipos hacia la entrega exitosa del <em>software</em>.
        .bg-color-6.p-4(data-aos="fade-left").mb-3
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema2/23.svg", style="max-width: 90px").mx-auto
            .col-lg
              p Se describen a continuación, los modelos más comunes, explicando sus características, ventajas, desventajas y ejemplos prácticos:
    

    .bg-full-width-1.bg-fondo-4
      .px-4.px-md-5.pb-md-3
        h2.mb-5(data-aos="fade-right") Modelo en cascada
        p.mb-5 Es el modelo más clásico y lineal. Las fases (requisitos, diseño, desarrollo, pruebas, despliegue y mantenimiento) se completan una tras otra, sin retrocesos.

        .row.justify-content-center.align-items-stretch.mb-5
          .col-lg-6.mb-4(data-aos="zoom-in-up")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema2/24.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Ventajas 
                p.mb-0.text-center Fácil de entender y administrar debido a su enfoque secuencial.
                p.mb-0.text-center Ideal para proyectos con requisitos bien definidos, desde el inicio.
          .col-lg-6.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema2/25.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Desventajas 
                p.mb-0.text-center Poco flexible, dado que no permite cambios, una vez que se completa una fase.
                p.mb-0.text-center Puede llevar a retrasos si los requisitos iniciales no están claros.
    
    .bg-full-width-1.bg-color-5.mb-5
      .px-4.px-md-5.p-4
        p.mb-0.text-bold Ejemplo práctico. 
        p.mb-0 Desarrollo de sistemas gubernamentales con requisitos legales estáticos y conocidos desde el principio.
    
    .row.mb-5.justify-content-center
      .col-lg-8.order-2
        p.text-bold Modelo iterativo
        p Desarrolla el <em>software</em> en pequeños ciclos iterativos, que incluyen planificación, diseño, implementación y pruebas.
        div.p-4.px-5.bg-color-12
          ol.lista-ol--cuadro(data-aos="fade-up").mb-0
            li.mb-0.d-flex
              .lista-ol--cuadro__vineta
                span 1
              p.mb-0 <b>Ventajas:</b> Permite realizar mejoras en cada iteración. Se identifican errores en etapas tempranas del desarrollo.


            li.mb-0.d-flex 
              .lista-ol--cuadro__vineta
                span 2
              p.mb-0 <b>Desventajas:</b> Requiere más recursos, debido a la repetición de actividades. La gestión de iteraciones puede volverse compleja.
        div.p-4.px-5.bg-color-13
          p.mb-0.text-bold Ejemplo práctico. 
          p.mb-0 Creación de aplicaciones móviles, donde las funcionalidades básicas se desarrollan primero y se añaden características en iteraciones futuras.
            
      .col-md-8.col-lg-4.order-1.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/26.png", data-aos="zoom-in")

    h2.mb-3(data-aos="fade-right") Modelo en espiral
    p.mb-5 Combina elementos del modelo iterativo, con enfoque en la evaluación de riesgos. Cada ciclo incluye planificación, análisis de riesgos, desarrollo y validación.

    .row.justify-content-center.align-items-stretch.mb-4
      .col-lg-6.mb-3.mb-lg-0
        .bg-color-white.box-shadow.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema2/27.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 Ventajas: 
              p.mb-0 Gestión efectiva de riesgos. 
              p.mb-0 Flexibilidad para incorporar cambios.


      .col-lg-6
        .bg-color-white.box-shadow.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema2/28.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 Desventajas: 
              p.mb-0 Requiere experiencia en gestión de riesgos. 
              p.mb-0 Puede ser costoso y prolongado.

    .bg-full-width-1.bg-color-14.mb-5
      .px-4.px-md-5.p-4
        p.mb-0.text-bold Ejemplo práctico. 
        p.mb-0 Proyectos innovadores como sistemas de inteligencia artificial, con incertidumbre en los requisitos iniciales.
    
    h2.mb-3(data-aos="fade-right") Modelo ágil
    p.mb-5 Se basa en la entrega incremental de <em>software</em> funcional en iteraciones cortas (sprints), enfatizando la colaboración con los clientes y la adaptabilidad a los cambios.


    TabsC.color-primario.mb-5
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Ventajas" :icon="require('@/assets/bullets/icon-tab-c-4.svg')" )
        .row
          .col-md-6.col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Ventajas: 
            ul.lista-ul--color
              li.mb-0
                i.fas.fa-check-circle.bg-color-8
                | Alta flexibilidad para cambios en los requisitos.
              li.mb-0
                i.fas.fa-check-circle.bg-color-8
                | Entrega rápida de valor, a los usuarios.

        
          .col-md-6.col-lg-5.col-xl-4.order-1
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/29.png', alt='')
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Desventajas" :icon="require('@/assets/bullets/icon-tab-c-4.svg')" )
        .row
          .col-md-6.col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Desventajas:  
            ul.lista-ul--color
              li.mb-0
                i.fas.fa-check-circle.bg-color-8
                | Puede ser caótico si no hay una gestión adecuada del equipo.
              li.mb-0
                i.fas.fa-check-circle.bg-color-8
                | Requiere participación activa del cliente, durante todo el proceso.
        
          .col-md-6.col-lg-5.col-xl-4.order-1
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/30.png', alt='')


    .bg-full-width-1.bg-color-5.mb-5
      .px-4.px-md-5.p-4
        p.mb-0.text-bold Ejemplo práctico. 
        p.mb-0 Desarrollo de plataformas web como sistemas de gestión de contenidos (CMS).


    h2.mb-3(data-aos="fade-right") Modelo de prototipos
    .row.mb-5.justify-content-center
      .col-lg-8.order-2
        p Se crean prototipos rápidos y funcionales, para obtener retroalimentación temprana de los usuarios y ajustar los requisitos, antes de desarrollar el sistema completo.
        div.p-4.px-5.bg-color-2
          ol.lista-ol--cuadro(data-aos="fade-up").mb-0
            li.mb-0.d-flex
              .lista-ol--cuadro__vineta
                span 1
              p.mb-0 <b>Ventajas:</b> Mejora la comprensión de los requisitos. Reduce el riesgo de desarrollar un sistema que no cumpla con las expectativas.


            li.mb-0.d-flex 
              .lista-ol--cuadro__vineta
                span 2
              p.mb-0 <b>Desventajas:</b> Puede aumentar los costos si los prototipos no están bien gestionados. Riesgo de que los usuarios confundan el prototipo con el producto final.
        div.p-4.px-5.bg-color-6
          p.mb-0.text-bold Ejemplo práctico. 
          p.mb-0 Desarrollo de interfaces de usuario, para aplicaciones web.
            
      .col-md-8.col-lg-4.order-1.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/38b.png", data-aos="zoom-in")


    h2.mb-3(data-aos="fade-right") Modelo DevOps
    p.mb-5 Integra el desarrollo (Dev) y las operaciones (Ops) en un ciclo continuo de integración, implementación y monitoreo.

    .row.justify-content-center.align-items-stretch.mb-4
      .col-lg-6.mb-3.mb-lg-0
        .bg-color-white.box-shadow.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema2/31.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 Ventajas: 
              p.mb-0 Automatización y eficiencia en todo ciclo de vida del <em>software</em>. 
              p.mb-0 Facilita la entrega continua de actualizaciones.


      .col-lg-6
        .bg-color-white.box-shadow.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema2/32.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 Desventajas: 
              p.mb-0 Requiere herramientas y experiencia técnica avanzada. 
              p.mb-0 Puede ser difícil implementar en organizaciones con estructura tradicionales.

    .bg-full-width-1.bg-color-13.mb-5
      .px-4.px-md-5.p-4
        p.mb-0.text-bold Ejemplo práctico. 
        p.mb-0 Sistemas de comercio electrónico que necesitan actualizaciones frecuentes, sin interrupciones.
    
    .bg-full-width-1.bg-fondo-2
      .px-4.px-md-5.pb-md-3
        h2.mb-3(data-aos="fade-right") Selección del modelo adecuado
        p.mb-5 La elección del modelo depende de factores como:

        div.row.justify-content-center.align-items-stretch.mb-5
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/tema2/33.svg"
                alt=""
                style="width: 90px"
              )
              p.text-center <b>Tamaño del proyecto: </b> 
              p.text-center Los proyectos pequeños pueden usar modelos como Cascada, mientras que los grandes y complejos, requieren modelos iterativos o en espiral.
          
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/tema2/34.svg"
                alt=""
                style="width: 90px"
              )
              p.text-center <b>Requisitos del cliente: </b> 
              p.text-center Si son inciertos o tienden a cambiar, el modelo ágil o el de prototipos, resulta más adecuado.
          
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/tema2/35.svg"
                alt=""
                style="width: 90px"
              )
              p.text-center <b>Plazo y presupuesto: </b> 
              p.text-center Los modelos más flexibles suelen requerir más tiempo y recursos.

        h2.mb-3(data-aos="fade-right") Herramientas para gestionar el SDLC
        p.mb-5 Las herramientas del SDLC son plataformas diseñadas para apoyar y optimizar una o varias fases del ciclo de vida del <em>software</em>.

    .row.align-items-start.mb-5.justify-content-center
      .col-md-8.mb-3.mb-lg-0.col-lg-4.order-lg-2
        figure
          img(src="@/assets/curso/tema2/36.png", alt="").mb-4.mb-lg-0
      .col-lg-8.order-lg-1
        AcordionA(tipo="b")
          .div(titulo="Gestión de proyectos")
            p Facilitan la planificación, asignación de tareas y colaboración. 
            ul.lista-ul--color
              li.mb-0
                i.fas.fa-check-circle.bg-color-8
                | Jira. Gestión de proyectos ágiles. 
              li.mb-0
                i.fas.fa-check-circle.bg-color-8
                | Trello. Basado en tableros Kanban.
              li.mb-0
                i.fas.fa-check-circle.bg-color-8
                | Microsoft Project. Planificación detallada de cronogramas.
          .div(titulo="Análisis de requisitos")
            p Ayudan a capturar y analizar los requisitos.  
            ul.lista-ul--color
              li.mb-0
                i.fas.fa-check-circle.bg-color-8
                | IBM DOORS. Gestión de requisitos complejos. 
              li.mb-0
                i.fas.fa-check-circle.bg-color-8
                | Confluence. Documentación centralizada. 
              li.mb-0
                i.fas.fa-check-circle.bg-color-8
                | Jama <em>software</em>. Combina requisitos y riesgos.

          .div(titulo="Diseño de <em>software</em>")
            p Modelan y crean diagramas técnicos. 
            ul.lista-ul--color
              li.mb-0
                i.fas.fa-check-circle.bg-color-8
                | Enterprise Architect. Modelado UML.  
              li.mb-0
                i.fas.fa-check-circle.bg-color-8
                | Lucidchart. Diagramas de arquitectura. 
              li.mb-0
                i.fas.fa-check-circle.bg-color-8
                | Draw.io. Herramienta gratuita colaborativa.

          .div(titulo="Desarrollo de <em>software</em>")
            p Entornos de desarrollo y control de versiones.  
            ul.lista-ul--color
              li.mb-0
                i.fas.fa-check-circle.bg-color-8
                | Visual Studio Code. IDE ligero y extensible. 
              li.mb-0
                i.fas.fa-check-circle.bg-color-8
                | Eclipse. Proyectos en Java. 
              li.mb-0
                i.fas.fa-check-circle.bg-color-8
                | Git. Sistema de control de versiones.

          

    .row.align-items-start.mb-5.justify-content-center
      .col-md-8.col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/37.png", alt="").mb-4.mb-lg-0
      .col-lg-8
        AcordionA(tipo="b")
          .div(titulo="Pruebas de <em>software</em>")
            p Identifican errores y verifican requisitos. 
            ul.lista-ul--color
              li.mb-0
                i.fas.fa-check-circle.bg-color-8
                | Selenium. Pruebas automatizadas web.  
              li.mb-0
                i.fas.fa-check-circle.bg-color-8
                | JUnit. Pruebas unitarias para Java. 
              li.mb-0
                i.fas.fa-check-circle.bg-color-8
                | Postman. Pruebas de APIs.
          .div(titulo="Implementación y despliegue")
            p Automatizan y gestionan despliegues. 
            ul.lista-ul--color
              li.mb-0
                i.fas.fa-check-circle.bg-color-8
                | Docker. Empaquetado de aplicaciones en contenedores.   
              li.mb-0
                i.fas.fa-check-circle.bg-color-8
                | Kubernetes. Orquestación de contenedores.  
              li.mb-0
                i.fas.fa-check-circle.bg-color-8
                | Jenkins. Integración y entrega continua.
          .div(titulo="Monitoreo y mantenimiento")
            p Garantizan el buen funcionamiento y detectan problemas.  
            ul.lista-ul--color
              li.mb-0
                i.fas.fa-check-circle.bg-color-8
                | Nagios. Supervisión de sistemas y redes. 
              li.mb-0
                i.fas.fa-check-circle.bg-color-8
                | Splunk. Análisis de registros.  
              li.mb-0
                i.fas.fa-check-circle.bg-color-8
                | New Relic. Observabilidad de aplicaciones.
    
    h2.mb-3(data-aos="fade-right") Importancia de las herramientas
    p.mb-5 Las herramientas desempeñan un papel fundamental en la optimización de procesos, dentro de una organización.

    .row.mb-5
      .col-lg-3.mb-3.mb-lg-0(data-aos="fade-up")
        div.bg-color-3.h-100.p-4.tarjeta.text-white
          h2 01
          p.mb-0.text-center Mejoran la productividad al automatizar tareas repetitivas.
      .col-lg-3.mb-3.mb-lg-0(data-aos="fade-down")
        div.bg-color-4.h-100.p-4.tarjeta
          h2 02
          p.mb-0.text-center Fomentan la colaboración en equipos distribuidos.
      .col-lg-3.mb-3.mb-lg-0(data-aos="fade-up")
        div.bg-color-11.h-100.p-4.tarjeta
          h2 03
          p.mb-0.text-center Garantizan la calidad al detectar errores tempranos.
      .col-lg-3(data-aos="fade-up")
        div.bg-color-5.h-100.p-4.tarjeta
          h2 04
          p.mb-0.text-center Proveen trazabilidad para auditorías y mantenimiento.


      
    .bg-full-width.border-top.actividad.bg-color-actividad
      .p-4.p-md-5
        #Actividad                
          <Actividad :cuestionario="cuestionario"/>

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/68913" target="_blank" rel="noopener noreferrer") Echeverri, J. Aristizábal, M. & González, L. (2013). Reflexiones sobre ingeniería de requisitos y pruebas de <em>software</em>. Corporación Universitaria Remington. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://intelequia.com/es/blog/desarrollo-de-<em>software</em>?category=desarrollo%20de%20<em>software</em> " target="_blank" rel="noopener noreferrer") Desarollo de <em>software</em>. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://docs.github.com/en/copilot/about-github-copilot/what-is-github-copilot" target="_blank" rel="noopener noreferrer") GitHub Copilot. 

            

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=VRNjvMG0eFA  " target="_blank" rel="noopener noreferrer") Pascualbravovirtual. (2018). Ingeniería de <em>software</em> I: Presentación UD1 - Metodologías para el Desarrollo de <em>software</em> [video]. 

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema2',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: {
        tema: 'Introducción al Desarrollo de <em>software</em>',
        titulo: 'Ponte a prueba',
        introduccion:
          'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
        barajarPreguntas: true,
        preguntas: [
          {
            id: 1,
            texto: '¿Qué se entiende por "<em>software</em>"? ',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Solo los programas de computadora',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'El conjunto de programas, procedimientos y documentación',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Solo los sistemas operativos',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Solo las aplicaciones móviles',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              'El <em>software</em> es el conjunto de programas y procedimientos que permiten realizar diversas tareas en una computadora o sistema. Incluye tanto los programas como la documentación y las instrucciones necesarias para su funcionamiento.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 2,
            texto: '¿Cuál de los siguientes es un tipo de <em>software</em>? ',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: '<em>hardware</em> de red',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: '<em>software</em> de sistema',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Dispositivos periféricos',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Arquitectura de red',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              'El <em>software</em> de sistema incluye los programas que gestionan el <em>hardware</em> de la computadora, como los sistemas operativos y los controladores.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 3,
            texto:
              '¿Cuál de las siguientes es una fase inicial del ciclo de vida del desarrollo de <em>software</em> (SDLC)? ',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Implementación',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Diseño',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Revisión',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Mantenimiento',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              'El diseño es una fase clave en el SDLC, donde se planifica cómo se construirá el <em>software</em> para cumplir con los requisitos del proyecto.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 4,
            texto:
              '¿En qué año se creó el primer lenguaje de programación de alto nivel? ',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: '1940',
                esCorrecta: true,
              },
              {
                id: 'b',
                texto: '1950',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: '1960',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: '1970',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              'Los primeros lenguajes de alto nivel, como Fortran (1957), marcaron un hito en la programación al permitir escribir código más cercano al lenguaje humano que el código de máquina.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 5,
            texto:
              '¿Qué fase del ciclo de vida de <em>software</em> se encarga de detectar errores y fallos en el código? (API)',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Planificación',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Implementación',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Pruebas',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Revisión',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              'La fase de pruebas es crucial para encontrar y corregir errores antes de que el <em>software</em> se libere al usuario final.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
        ],
        mensaje_final_aprobado:
          '¡Felicidades! Has superado la prueba con éxito.',
        mensaje_final_reprobado:
          'Te recomendamos repasar nuevamente la unidad para reforzar los conceptos clave antes de volver a intentarlo.',
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
