const quizQuestions = [
  {
    question: '¿Qué tipo de célula realiza la fotosíntesis?',
    options: ['Animal', 'Vegetal', 'Procariota', 'Todas las anteriores'],
    correctAnswer: 'Vegetal',
    explanation:
      'Las células vegetales contienen cloroplastos, organelos especializados con el pigmento clorofila que les permite captar la energía lumínica y convertirla en energía química durante la fotosíntesis. Ni las células animales ni la mayoría de las procariotas poseen estos organelos.',
  },
  {
    question: '¿Cuál de estas células NO tiene núcleo definido?',
    options: ['Animal', 'Vegetal', 'Procariota', 'Eucariota'],
    correctAnswer: 'Procariota',
    explanation:
      'Las células procariotas carecen de núcleo definido. Su material genético (ADN) está libre en el citoplasma en una región llamada nucleoide, sin estar rodeado por una membrana nuclear. Las células animales, vegetales y todas las eucariotas sí tienen núcleo definido rodeado por membrana.',
  },
  {
    question: '¿Qué orgánulo es exclusivo de las células vegetales?',
    options: ['Lisosoma', 'Cloroplasto', 'Centrosoma', 'Mitocondria'],
    correctAnswer: 'Cloroplasto',
    explanation:
      'Los cloroplastos son organelos exclusivos de las células vegetales y algunas algas, responsables de la fotosíntesis. Las mitocondrias están presentes en casi todas las células eucariotas, los lisosomas principalmente en células animales, y los centrosomas en células animales.',
  },
  {
    question: '¿Qué tipo de célula tiene pared celular?',
    options: [
      'Solo animal',
      'Vegetal y procariota',
      'Solo eucariota',
      'Ninguna tiene pared celular',
    ],
    correctAnswer: 'Vegetal y procariota',
    explanation:
      'Tanto las células vegetales como las procariotas poseen pared celular, aunque con diferente composición. En vegetales es principalmente de celulosa, mientras que en bacterias (procariotas) es de peptidoglicano. Las células animales carecen de pared celular.',
  },
  {
    question: '¿Cuál es más grande normalmente?',
    options: [
      'Célula procariota',
      'Célula eucariota',
      'Ambas son del mismo tamaño',
      'Depende del organismo',
    ],
    correctAnswer: 'Célula eucariota',
    explanation:
      'Las células eucariotas son generalmente más grandes (10-100 µm) que las procariotas (1-10 µm). Esta diferencia de tamaño se debe a la mayor complejidad estructural de las eucariotas, que contienen numerosos organelos membranosos y sistemas internos más elaborados.',
  },
  {
    question: '¿Qué estructura es común a todos los tipos de células?',
    options: ['Pared celular', 'Membrana plasmática', 'Núcleo', 'Mitocondria'],
    correctAnswer: 'Membrana plasmática',
    explanation:
      'La membrana plasmática es una estructura común a todos los tipos de células, tanto procariotas como eucariotas. Esta membrana define los límites de la célula y regula el intercambio de sustancias con el entorno.',
  },
  {
    question: '¿Dónde se encuentra el ADN en una célula procariota?',
    options: [
      'En el núcleo',
      'En el citoplasma (nucleoide)',
      'En los ribosomas',
      'En la pared celular',
    ],
    correctAnswer: 'En el citoplasma (nucleoide)',
    explanation:
      'En las células procariotas, el ADN se encuentra libre en el citoplasma, en una región llamada nucleoide. No está separado por una membrana como ocurre en las células eucariotas con su núcleo bien definido.',
  },
  {
    question: '¿Qué organelo se encarga de la digestión celular?',
    options: [
      'Lisosoma',
      'Aparato de Golgi',
      'Retículo endoplasmático',
      'Vacuola',
    ],
    correctAnswer: 'Lisosoma',
    explanation:
      'Los lisosomas son vesículas que contienen enzimas digestivas y se encargan de la digestión intracelular de materiales y organelos viejos. Son especialmente abundantes en células animales. En plantas, las vacuolas pueden cumplir algunas funciones similares.',
  },
  {
    question: '¿Qué células son consideradas autótrofas?',
    options: ['Animales', 'Vegetales', 'Procariotas', 'Todas las eucariotas'],
    correctAnswer: 'Vegetales',
    explanation:
      'Las células vegetales son autótrofas, lo que significa que pueden producir su propio alimento a través de la fotosíntesis. Las células animales son heterótrofas y necesitan obtener nutrientes externos. Las procariotas pueden ser autótrofas o heterótrofas según la especie.',
  },
  {
    question: '¿Cuál es la función principal de la mitocondria?',
    options: [
      'Fotosíntesis',
      'Producción de energía celular (ATP)',
      'Síntesis de proteínas',
      'Digestión celular',
    ],
    correctAnswer: 'Producción de energía celular (ATP)',
    explanation:
      'Las mitocondrias son conocidas como las "centrales energéticas" de la célula porque se encargan principalmente de la producción de ATP (adenosín trifosfato) mediante la respiración celular, proporcionando la energía necesaria para las funciones celulares.',
  },
];

export default quizQuestions;
