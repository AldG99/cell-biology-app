const cellData = {
  animal: {
    title: 'Célula Animal',
    description:
      'Las células animales son eucariotas y carecen de pared celular y cloroplastos. Contienen centrosomas y lisosomas que las diferencian de otros tipos celulares. Su membrana plasmática flexible les permite adoptar diversas formas y facilita la movilidad en organismos multicelulares.',
    parts: [
      {
        name: 'Núcleo',
        description:
          'Centro de control que contiene el ADN y regula la expresión génica.',
      },
      {
        name: 'Mitocondria',
        description:
          'Produce energía (ATP) a través de la respiración celular. Se considera la "central energética" de la célula.',
      },
      {
        name: 'Membrana plasmática',
        description:
          'Barrera semipermeable que delimita la célula y regula el intercambio de sustancias.',
      },
      {
        name: 'Retículo endoplasmático',
        description:
          'Red de membranas para transporte y síntesis de proteínas y lípidos. Puede ser rugoso (con ribosomas) o liso.',
      },
      {
        name: 'Aparato de Golgi',
        description:
          'Procesa y empaqueta proteínas y lípidos para su transporte o secreción fuera de la célula.',
      },
      {
        name: 'Lisosomas',
        description:
          'Contienen enzimas digestivas para descomponer sustancias y reciclar componentes celulares.',
      },
      {
        name: 'Centrosoma',
        description:
          'Organiza los microtúbulos y participa en la división celular formando el huso mitótico.',
      },
    ],
    facts: [
      'No tienen pared celular, lo que permite mayor flexibilidad y movilidad',
      'Contienen lisosomas para la digestión intracelular de sustancias y organelos',
      'Su forma es generalmente irregular y adaptable',
      'Son heterótrofas, no producen su propio alimento y deben obtenerlo del exterior',
      'Pueden formar tejidos especializados con funciones específicas',
    ],
  },
  vegetal: {
    title: 'Célula Vegetal',
    description:
      'Las células vegetales son eucariotas con pared celular rígida y cloroplastos. Tienen vacuolas grandes que ocupan gran parte del volumen celular y son capaces de realizar fotosíntesis para producir su propio alimento a partir de luz solar.',
    parts: [
      {
        name: 'Núcleo',
        description:
          'Centro de control que contiene el ADN y dirige la actividad celular.',
      },
      {
        name: 'Cloroplastos',
        description:
          'Realizan la fotosíntesis, convirtiendo luz solar, agua y CO₂ en glucosa y oxígeno.',
      },
      {
        name: 'Pared celular',
        description:
          'Capa rígida externa compuesta principalmente de celulosa que proporciona soporte estructural.',
      },
      {
        name: 'Vacuola central',
        description:
          'Almacena agua, nutrientes y desechos, y mantiene la turgencia y rigidez celular.',
      },
      {
        name: 'Mitocondria',
        description:
          'Produce energía (ATP) a través de la respiración celular, complementando la obtenida por fotosíntesis.',
      },
      {
        name: 'Membrana plasmática',
        description:
          'Barrera semipermeable interna a la pared celular que regula el transporte de sustancias.',
      },
      {
        name: 'Plastidios',
        description:
          'Organelos que almacenan pigmentos, almidón u otros compuestos según su tipo.',
      },
    ],
    facts: [
      'Tienen pared celular rígida compuesta principalmente de celulosa, que proporciona soporte',
      'Contienen cloroplastos para realizar la fotosíntesis y producir glucosa',
      'Poseen grandes vacuolas que pueden ocupar hasta el 90% del volumen celular',
      'Son autótrofas, producen su propio alimento mediante la fotosíntesis',
      'No poseen centriolos ni lisosomas bien desarrollados como las células animales',
    ],
  },
  procariota: {
    title: 'Célula Procariota',
    description:
      'Las células procariotas carecen de núcleo definido y organelos membranosos. Son más simples y pequeñas que las eucariotas. Este tipo incluye bacterias y arqueas, que representan los organismos más antiguos y abundantes del planeta.',
    parts: [
      {
        name: 'Nucleoide',
        description:
          'Región que contiene el ADN circular, sin membrana nuclear que lo separe del citoplasma.',
      },
      {
        name: 'Membrana plasmática',
        description:
          'Barrera semipermeable que delimita la célula y regula el paso de sustancias.',
      },
      {
        name: 'Pared celular',
        description:
          'Capa protectora externa compuesta por peptidoglicano en bacterias o pseudopeptidoglicano en arqueas.',
      },
      {
        name: 'Ribosomas',
        description:
          'Estructuras para la síntesis de proteínas, más pequeños que los eucariotas (70S).',
      },
      {
        name: 'Plásmidos',
        description:
          'Pequeñas moléculas circulares de ADN extracromosómico que confieren características adicionales.',
      },
      {
        name: 'Flagelo',
        description:
          'Estructura para el movimiento (en algunas bacterias) con estructura diferente al eucariota.',
      },
      {
        name: 'Cápsula',
        description:
          'Capa protectora externa adicional (en algunas bacterias) que protege contra fagocitosis y desecación.',
      },
    ],
    facts: [
      'No tienen núcleo definido, el ADN está libre en el citoplasma en forma de cromosoma circular',
      'Carecen de organelos membranosos como mitocondrias, cloroplastos o retículo endoplasmático',
      'Son generalmente más pequeñas (1-10 µm) que las células eucariotas',
      'Incluyen bacterias y arqueas, que conforman dos de los tres dominios de la vida',
      'Se reproducen principalmente por fisión binaria, un proceso más simple que la mitosis',
    ],
  },
  eucariota: {
    title: 'Célula Eucariota',
    description:
      'Las células eucariotas tienen núcleo definido rodeado por membrana nuclear y organelos membranosos especializados. Son más grandes y complejas que las procariotas, y constituyen la base de todos los organismos multicelulares.',
    parts: [
      {
        name: 'Núcleo',
        description:
          'Centro de control delimitado por membrana nuclear doble que contiene el ADN organizado en cromosomas.',
      },
      {
        name: 'Mitocondria',
        description:
          'Produce energía (ATP) a través de la respiración celular. Posee su propio ADN y se cree que evolucionó de bacterias simbióticas.',
      },
      {
        name: 'Retículo endoplasmático',
        description:
          'Red de membranas interconectadas para transporte, síntesis y modificación de proteínas y lípidos.',
      },
      {
        name: 'Aparato de Golgi',
        description:
          'Conjunto de sacos membranosos aplanados que procesa, modifica y empaqueta proteínas y lípidos.',
      },
      {
        name: 'Lisosomas',
        description:
          'Vesículas con enzimas digestivas para descomponer macromoléculas y reciclar componentes celulares.',
      },
      {
        name: 'Membrana plasmática',
        description:
          'Barrera semipermeable que delimita la célula, compuesta por bicapa lipídica con proteínas integradas.',
      },
      {
        name: 'Citoesqueleto',
        description:
          'Red de filamentos y microtúbulos que mantiene la forma celular y permite el movimiento interno.',
      },
    ],
    facts: [
      'Tienen núcleo definido rodeado por una doble membrana nuclear con poros complejos',
      'Contienen organelos membranosos especializados que compartimentan funciones celulares',
      'Son generalmente más grandes (10-100 µm) y complejas que las procariotas',
      'Incluyen células de animales, plantas, hongos y protistas',
      'Se dividen mediante procesos complejos como la mitosis para células somáticas o meiosis para células reproductivas',
    ],
  },
};

export default cellData;
