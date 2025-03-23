// data/cellVisualizations.js

// Configuración de la célula animal
export const animalCellConfig = {
  parts: [
    {
      id: 'nucleus',
      name: 'Núcleo',
      color: '#FF9E80',
      position: { top: '42%', left: '48%' },
      size: 55,
      borderStyle: 'solid',
      borderWidth: 2,
      borderColor: '#E64A19',
      zIndex: 10,
      customShape: 'nucleus',
      description:
        'Centro de control que contiene el ADN en forma de cromosomas. Regula las actividades celulares y la expresión génica.',
    },
    {
      id: 'mitochondria1',
      name: 'Mitocondria',
      color: '#FF80AB',
      position: { top: '25%', left: '30%' },
      size: 25,
      rotation: '30deg',
      borderRadius: 12,
      zIndex: 8,
      innerStructure: true,
      description:
        'Produce energía (ATP) a través de la respiración celular. Posee doble membrana y su propio ADN.',
    },
    {
      id: 'mitochondria2',
      name: 'Mitocondria',
      color: '#FF80AB',
      position: { top: '65%', left: '65%' },
      size: 30,
      rotation: '-10deg',
      borderRadius: 15,
      zIndex: 8,
      innerStructure: true,
      description:
        'Produce energía (ATP) a través de la respiración celular. Posee doble membrana y su propio ADN.',
    },
    {
      id: 'er_rough',
      name: 'Retículo endoplasmático rugoso',
      color: '#82B1FF',
      position: { top: '35%', left: '65%' },
      width: 60,
      height: 40,
      zIndex: 5,
      customShape: 'rough-er',
      description:
        'Red de membranas con ribosomas adheridos. Participa en la síntesis y transporte de proteínas.',
    },
    // ... más partes de célula animal
  ],
  backgroundColor: '#ffb3ba',
  label: 'Célula Animal',
};

// Configuración de la célula vegetal
export const plantCellConfig = {
  parts: [
    {
      id: 'nucleus',
      name: 'Núcleo',
      color: '#FF9E80',
      position: { top: '35%', left: '45%' },
      size: 50,
      borderWidth: 2,
      borderColor: '#E64A19',
      zIndex: 8,
      description:
        'Centro de control que contiene el ADN en forma de cromosomas. Regula la expresión génica y las actividades celulares.',
    },
    {
      id: 'chloroplast1',
      name: 'Cloroplasto',
      color: '#66BB6A',
      position: { top: '25%', left: '30%' },
      width: 35,
      height: 22,
      borderRadius: 12,
      zIndex: 7,
      customShape: 'chloroplast',
      description:
        'Organelo especializado que contiene clorofila y realiza la fotosíntesis, convirtiendo luz solar en energía química.',
    },
    // ... más partes de célula vegetal
  ],
  backgroundColor: '#baffc9',
  label: 'Célula Vegetal',
};

// Configuración de la célula procariota
export const prokaryoticCellConfig = {
  parts: [
    {
      id: 'nucleoid',
      name: 'Nucleoide',
      color: 'rgba(255, 145, 0, 0.5)',
      position: { top: '40%', left: '45%' },
      width: 60,
      height: 40,
      borderRadius: 20,
      zIndex: 3,
      description:
        'Región que contiene el ADN circular, sin membrana nuclear que lo separe del citoplasma. Contiene el material genético de la célula procariota.',
    },
    // ... más partes de célula procariota
  ],
  backgroundColor: '#bae1ff',
  label: 'Célula Procariota',
  shape: 'rectangular',
};

// Configuración de la célula eucariota
export const eukaryoticCellConfig = {
  parts: [
    {
      id: 'nucleus',
      name: 'Núcleo',
      color: '#FFCC80',
      position: { top: '45%', left: '50%' },
      size: 60,
      borderWidth: 2,
      borderColor: '#EF6C00',
      zIndex: 10,
      customShape: 'nucleus',
      description:
        'Centro de control de la célula delimitado por una doble membrana nuclear. Contiene el ADN organizado en cromosomas y controla todas las funciones celulares.',
    },
    // ... más partes de célula eucariota
  ],
  backgroundColor: '#ffffba',
  label: 'Célula Eucariota',
};
