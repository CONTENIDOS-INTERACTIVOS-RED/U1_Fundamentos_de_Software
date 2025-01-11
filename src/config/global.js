export default {
  global: {
    numeroUnidad: '1',
    tituloUnidad: 'Introducción al desarrollo de software',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Concepto y tipos de software',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Concepto y tipos de software',
            hash: 't_1_1',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Ciclo de vida del desarrollo de software',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Las fases del SDLC',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Modelos del SDLC',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Cedeño Brito, M.E. & Gracia Muñoz, M.C. (2021). Diseño de software. Ediciones Díaz de Santos.',
      link: 'https://openlibrary.org/books/OL37805173M/Dise%C3%B1o_de_software',
    },
    {
      referencia:
        'Dr. Pérez Rodríguez. (2012). Desarrollo de elementos software para gestión de sistemas (2 ed.). Editorial ICB.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/106375',
    },
    {
      referencia:
        'Pressman, R.S. & Maxim, B.R. (2020). Ingeniería de software: Un enfoque práctico (9 ed.). Educación McGraw-Hill',
      link:
        'https://www.javier8a.com/itc/bd1/ld-Ingenieria.de.software.enfoque.practico.7ed.Pressman.PDF',
    },
    {
      referencia:
        'Heras del Dedo, R. D. L. & Álvarez García, A. (2017). Métodos ágiles: Scrum, Kanban, Lean (ed.). Difusora Larousse - Anaya Multimedia. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/122933 ',
    },
    {
      referencia:
        'Piattini Velthuis, M. & Garzás Parra, J. (2015). Fábricas de software: experiencias, tecnologías y organización. Editorial RA-MA.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/106389',
    },
    {
      referencia:
        'ProArgentina. (2005). Industria del software. Editor del Cid.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/98183',
    },
    {
      referencia: 'Ciclo de vida del software. (s.f.). (2024). En PBWorks',
      link: 'https://ingsw.pbworks.com/f/Ciclo+de+Vida+del+Software .pdf',
    },
    {
      referencia:
        'Teniente López, E., Costal Costa, D. & Sancho Samsó, MR (2015). Especificación de sistemas software en UML. Universitat Politècnica de Catalunya.',
      link: ' https://elibro.net/es/lc/tecnologicadeloriente/titulos/61407 ',
    },
    {
      referencia:
        'Vizcaíno Barceló, A., García Rubio, F. O. & Piattini Velthuis, M. (2014). Desarrollo global de software. Editorial RA-MA.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/106438',
    },
  ],
  glosario: [
    {
      termino: 'Algoritmo',
      significado:
        'Conjunto de instrucciones o pasos definidos, para realizar una tarea específica en la programación de software.',
    },
    {
      termino: 'Arquitectura de software',
      significado:
        'Estructura fundamental del sistema de software, que define la interacción entre los diferentes componentes y subsistemas.',
    },
    {
      termino: 'Código fuente',
      significado:
        'Estructura fundamental del sistema de software, que define la interacción entre los diferentes componentes y subsistemas.',
    },
    {
      termino: 'Depuración',
      significado:
        'Proceso de identificar, analizar y corregir errores o fallos, en el código fuente de un programa.',
    },
    {
      termino: 'Desarrollo ágil',
      significado:
        'Metodología de desarrollo de software, que enfatiza la flexibilidad, colaboración y entregas incrementales rápidas, adaptándose a cambios en los requisitos.',
    },
    {
      termino: 'Diseño de software',
      significado:
        'Proceso de planificar y especificar la estructura y la funcionalidad de un software, incluyendo diagramas y especificaciones detalladas.',
    },
    {
      termino: 'Marco',
      significado:
        'Conjunto de bibliotecas y herramientas predefinidas que proporcionan una estructura estándar, para el desarrollo de aplicaciones de software.',
    },
    {
      termino: 'Mantenimiento de software',
      significado:
        'Fase del ciclo de vida del software que implica la corrección de errores, actualización y adaptación del software, a nuevos requisitos o entornos.',
    },
    {
      termino: 'Prototipo',
      significado:
        'Modelo inicial o versión preliminar de un sistema de software, utilizado para evaluar requisitos, probar funcionalidades o generar retroalimentación de los usuarios.',
    },
    {
      termino: 'Repositorio',
      significado:
        'Espacio de almacenamiento donde se guarda el código fuente de un proyecto de software, facilitando su gestión, colaboración y control de versiones.',
    },
  ],
}
