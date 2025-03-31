// data/cellVisualizations.js - Improved version (Part 1)
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
// Base size adjustments for different screen sizes
const BASE_SIZE = width < 360 ? 0.9 : width > 768 ? 1.2 : 1;

// Animal Cell Configuration
export const animalCellConfig = {
  parts: [
    {
      id: 'nucleus',
      name: 'Nucleus',
      color: '#FF9E80',
      position: { top: '42%', left: '48%' },
      size: 55 * BASE_SIZE,
      borderStyle: 'solid',
      borderWidth: 2,
      borderColor: '#E64A19',
      zIndex: 10,
      customShape: 'nucleus',
      description:
        'Control center that contains DNA in the form of chromosomes. Regulates cell activities and gene expression.',
    },
    {
      id: 'mitochondria1',
      name: 'Mitochondria',
      color: '#FF80AB',
      position: { top: '25%', left: '30%' },
      size: 25 * BASE_SIZE,
      rotation: '30deg',
      borderRadius: 12,
      zIndex: 8,
      innerStructure: true,
      description:
        'Produces energy (ATP) through cellular respiration. Has a double membrane and its own DNA.',
    },
    {
      id: 'mitochondria2',
      name: 'Mitochondria',
      color: '#FF80AB',
      position: { top: '65%', left: '65%' },
      size: 30 * BASE_SIZE,
      rotation: '-10deg',
      borderRadius: 15,
      zIndex: 8,
      innerStructure: true,
      description:
        'Produces energy (ATP) through cellular respiration. Has a double membrane and its own DNA.',
    },
    {
      id: 'er_rough',
      name: 'Rough Endoplasmic Reticulum',
      color: '#82B1FF',
      position: { top: '35%', left: '65%' },
      width: 60 * BASE_SIZE,
      height: 40 * BASE_SIZE,
      zIndex: 5,
      customShape: 'rough-er',
      description:
        'Network of membranes with attached ribosomes. Participates in protein synthesis and transport.',
    },
    {
      id: 'er_smooth',
      name: 'Smooth Endoplasmic Reticulum',
      color: '#80D8FF',
      position: { top: '65%', left: '30%' },
      width: 45 * BASE_SIZE,
      height: 30 * BASE_SIZE,
      zIndex: 5,
      customShape: 'smooth-er',
      description:
        'Network of tubules without ribosomes. Involved in lipid metabolism, detoxification, and calcium storage.',
    },
    {
      id: 'golgi',
      name: 'Golgi Apparatus',
      color: '#A5D6A7',
      position: { top: '45%', left: '70%' },
      width: 45 * BASE_SIZE,
      height: 25 * BASE_SIZE,
      zIndex: 6,
      customShape: 'golgi',
      description:
        'Processes and packages proteins and lipids for secretion or transport to other cellular components.',
    },
    {
      id: 'lysosome',
      name: 'Lysosome',
      color: '#F48FB1',
      position: { top: '60%', left: '40%' },
      size: 20 * BASE_SIZE,
      borderRadius: 10,
      zIndex: 7,
      customShape: 'lysosome',
      description:
        "Contains digestive enzymes to break down waste materials and cellular debris. Acts as the cell's recycling center.",
    },
    {
      id: 'cytoskeleton',
      name: 'Cytoskeleton',
      color: 'transparent',
      position: { top: '50%', left: '50%' },
      size: 200 * BASE_SIZE,
      zIndex: 2,
      customShape: 'cytoskeleton',
      description:
        'Network of protein filaments that gives the cell structure, shape, and ability to move. Includes microfilaments, intermediate filaments, and microtubules.',
    },
    {
      id: 'centrosome',
      name: 'Centrosome',
      color: '#CE93D8',
      position: { top: '35%', left: '35%' },
      size: 22 * BASE_SIZE,
      zIndex: 7,
      customShape: 'centrosome',
      description:
        'Organizes microtubules and participates in cell division by forming the mitotic spindle.',
    },
  ],
  backgroundColor: '#ffb3ba',
  label: 'Animal Cell',
};
// data/cellVisualizations.js - Improved version (Part 2)

// Plant Cell Configuration
export const plantCellConfig = {
  parts: [
    {
      id: 'nucleus',
      name: 'Nucleus',
      color: '#FF9E80',
      position: { top: '35%', left: '45%' },
      size: 50 * BASE_SIZE,
      borderWidth: 2,
      borderColor: '#E64A19',
      zIndex: 8,
      customShape: 'nucleus',
      description:
        'Control center that contains DNA in the form of chromosomes. Regulates gene expression and cellular activities.',
    },
    {
      id: 'chloroplast1',
      name: 'Chloroplast',
      color: '#66BB6A',
      position: { top: '25%', left: '30%' },
      width: 35 * BASE_SIZE,
      height: 22 * BASE_SIZE,
      borderRadius: 12,
      zIndex: 7,
      customShape: 'chloroplast',
      description:
        'Specialized organelle containing chlorophyll that performs photosynthesis, converting sunlight into chemical energy.',
    },
    {
      id: 'chloroplast2',
      name: 'Chloroplast',
      color: '#66BB6A',
      position: { top: '60%', left: '60%' },
      width: 35 * BASE_SIZE,
      height: 22 * BASE_SIZE,
      borderRadius: 12,
      zIndex: 7,
      customShape: 'chloroplast',
      description:
        'Specialized organelle containing chlorophyll that performs photosynthesis, converting sunlight into chemical energy.',
    },
    {
      id: 'chloroplast3',
      name: 'Chloroplast',
      color: '#66BB6A',
      position: { top: '30%', left: '70%' },
      width: 35 * BASE_SIZE,
      height: 22 * BASE_SIZE,
      borderRadius: 12,
      zIndex: 7,
      customShape: 'chloroplast',
      description:
        'Specialized organelle containing chlorophyll that performs photosynthesis, converting sunlight into chemical energy.',
    },
    {
      id: 'vacuole',
      name: 'Central Vacuole',
      color: 'rgba(179, 229, 252, 0.5)',
      position: { top: '50%', left: '50%' },
      size: 80 * BASE_SIZE,
      borderRadius: 40,
      zIndex: 3,
      description:
        'Large fluid-filled sac that maintains turgor pressure and stores nutrients and waste products. Can occupy up to 90% of the cell volume.',
    },
    {
      id: 'cell_wall',
      name: 'Cell Wall',
      color: '#D7CCC8',
      position: { top: '50%', left: '50%' },
      size: 180 * BASE_SIZE,
      borderRadius: 90,
      borderWidth: 6,
      borderColor: '#A1887F',
      zIndex: 1,
      description:
        'Rigid layer surrounding the cell membrane made primarily of cellulose. Provides structural support and protection.',
    },
    {
      id: 'amyloplast',
      name: 'Amyloplast',
      color: 'rgba(245, 245, 245, 0.8)',
      position: { top: '60%', left: '35%' },
      size: 25 * BASE_SIZE,
      zIndex: 6,
      customShape: 'amyloplast',
      description:
        'Type of plastid that stores starch granules and is commonly found in roots and storage tissues.',
    },
    {
      id: 'mitochondria',
      name: 'Mitochondria',
      color: '#FF80AB',
      position: { top: '65%', left: '75%' },
      size: 25 * BASE_SIZE,
      rotation: '30deg',
      borderRadius: 12,
      zIndex: 7,
      innerStructure: true,
      description:
        'Produces energy (ATP) through cellular respiration, complementing the energy obtained from photosynthesis.',
    },
    {
      id: 'plasmodesmata',
      name: 'Plasmodesmata',
      color: 'transparent',
      position: { top: '50%', left: '50%' },
      zIndex: 9,
      customShape: 'plasmodesmata',
      description:
        'Microscopic channels that traverse the cell walls of plant cells, enabling communication and transport between adjacent cells.',
    },
  ],
  backgroundColor: '#baffc9',
  label: 'Plant Cell',
};

// Prokaryotic Cell Configuration
export const prokaryoticCellConfig = {
  parts: [
    {
      id: 'nucleoid',
      name: 'Nucleoid',
      color: 'rgba(255, 145, 0, 0.5)',
      position: { top: '40%', left: '45%' },
      width: 60 * BASE_SIZE,
      height: 40 * BASE_SIZE,
      borderRadius: 20,
      zIndex: 3,
      description:
        'Region that contains the circular DNA, without a nuclear membrane separating it from the cytoplasm. Contains the genetic material of the prokaryotic cell.',
    },
    {
      id: 'dna',
      name: 'Bacterial Chromosome',
      color: 'transparent',
      position: { top: '40%', left: '45%' },
      size: 45 * BASE_SIZE,
      zIndex: 4,
      customShape: 'dna',
      description:
        "Circular DNA molecule that contains most of the cell's genetic information. Not enclosed by a membrane, unlike in eukaryotic cells.",
    },
    {
      id: 'plasmid1',
      name: 'Plasmid',
      color: '#FF6D00',
      position: { top: '60%', left: '35%' },
      size: 15 * BASE_SIZE,
      zIndex: 4,
      customShape: 'plasmid',
      description:
        'Small, circular DNA molecule separate from the chromosomal DNA. Can carry genes for antibiotic resistance and other traits.',
    },
    {
      id: 'plasmid2',
      name: 'Plasmid',
      color: '#FF6D00',
      position: { top: '30%', left: '65%' },
      size: 12 * BASE_SIZE,
      zIndex: 4,
      customShape: 'plasmid',
      description:
        'Small, circular DNA molecule separate from the chromosomal DNA. Can carry genes for antibiotic resistance and other traits.',
    },
    {
      id: 'ribosomes',
      name: 'Ribosomes',
      color: '#FFEB3B',
      position: { top: '50%', left: '50%' },
      size: 80 * BASE_SIZE,
      zIndex: 2,
      description:
        'Small particles composed of RNA and protein that serve as the site for protein synthesis. Prokaryotic ribosomes are smaller (70S) than eukaryotic ones.',
    },
    {
      id: 'flagellum',
      name: 'Flagellum',
      color: 'transparent',
      position: { top: '40%', left: '90%' },
      size: 80 * BASE_SIZE,
      zIndex: 6,
      customShape: 'flagellum',
      description:
        'Long, whip-like structure used for movement. Has a different structure than eukaryotic flagella and is powered by a rotary motor.',
    },
    {
      id: 'pili',
      name: 'Pili',
      color: 'transparent',
      position: { top: '20%', left: '50%' },
      size: 50 * BASE_SIZE,
      zIndex: 6,
      customShape: 'pili',
      description:
        'Hair-like appendages on the cell surface involved in attachment to surfaces and DNA transfer between cells during conjugation.',
    },
    {
      id: 'mesosome',
      name: 'Mesosome',
      color: '#81D4FA',
      position: { top: '60%', left: '60%' },
      size: 25 * BASE_SIZE,
      zIndex: 5,
      customShape: 'mesosome',
      description:
        'Invagination of the plasma membrane that increases the surface area for cellular reactions, particularly those involving energy production and DNA replication.',
    },
  ],
  backgroundColor: '#bae1ff',
  label: 'Prokaryotic Cell',
};
// data/cellVisualizations.js - Improved version (Part 3)

// Eukaryotic Cell Configuration
export const eukaryoticCellConfig = {
  parts: [
    {
      id: 'nucleus',
      name: 'Nucleus',
      color: '#FFCC80',
      position: { top: '45%', left: '50%' },
      size: 60 * BASE_SIZE,
      borderWidth: 2,
      borderColor: '#EF6C00',
      zIndex: 10,
      customShape: 'nucleus',
      description:
        'Control center of the cell delimited by a double nuclear membrane. Contains DNA organized into chromosomes and controls all cellular functions.',
    },
    {
      id: 'mitochondria1',
      name: 'Mitochondria',
      color: '#F48FB1',
      position: { top: '30%', left: '35%' },
      size: 30 * BASE_SIZE,
      rotation: '30deg',
      borderRadius: 15,
      zIndex: 8,
      innerStructure: true,
      description:
        'Produces energy (ATP) through cellular respiration. Has its own DNA and is believed to have evolved from symbiotic bacteria.',
    },
    {
      id: 'mitochondria2',
      name: 'Mitochondria',
      color: '#F48FB1',
      position: { top: '65%', left: '70%' },
      size: 25 * BASE_SIZE,
      rotation: '-15deg',
      borderRadius: 12,
      zIndex: 8,
      innerStructure: true,
      description:
        'Produces energy (ATP) through cellular respiration. Has its own DNA and is believed to have evolved from symbiotic bacteria.',
    },
    {
      id: 'rough_er',
      name: 'Rough Endoplasmic Reticulum',
      color: '#90CAF9',
      position: { top: '35%', left: '65%' },
      width: 60 * BASE_SIZE,
      height: 30 * BASE_SIZE,
      zIndex: 7,
      customShape: 'rough-er',
      description:
        'Network of interconnected membranes for transport, synthesis, and modification of proteins. Contains ribosomes on its surface.',
    },
    {
      id: 'smooth_er',
      name: 'Smooth Endoplasmic Reticulum',
      color: '#80D8FF',
      position: { top: '55%', left: '35%' },
      width: 50 * BASE_SIZE,
      height: 30 * BASE_SIZE,
      zIndex: 6,
      customShape: 'smooth-er',
      description:
        'Network of tubules without ribosomes involved in lipid synthesis, detoxification, and calcium storage.',
    },
    {
      id: 'golgi',
      name: 'Golgi Apparatus',
      color: '#A5D6A7',
      position: { top: '55%', left: '65%' },
      width: 45 * BASE_SIZE,
      height: 25 * BASE_SIZE,
      zIndex: 7,
      customShape: 'golgi',
      description:
        'Set of flattened membrane sacs that process, modify, and package proteins and lipids.',
    },
    {
      id: 'lysosome1',
      name: 'Lysosome',
      color: '#EF9A9A',
      position: { top: '70%', left: '40%' },
      size: 18 * BASE_SIZE,
      borderRadius: 9,
      zIndex: 7,
      customShape: 'lysosome',
      description:
        'Vesicles with digestive enzymes to break down macromolecules and recycle cellular components.',
    },
    {
      id: 'lysosome2',
      name: 'Lysosome',
      color: '#EF9A9A',
      position: { top: '30%', left: '65%' },
      size: 15 * BASE_SIZE,
      borderRadius: 7.5,
      zIndex: 7,
      customShape: 'lysosome',
      description:
        'Vesicles with digestive enzymes to break down macromolecules and recycle cellular components.',
    },
    {
      id: 'cytoskeleton',
      name: 'Cytoskeleton',
      color: 'transparent',
      position: { top: '50%', left: '50%' },
      size: 200 * BASE_SIZE,
      zIndex: 2,
      customShape: 'cytoskeleton',
      description:
        'Network of filaments and microtubules that maintain cell shape and enable internal movement.',
    },
    {
      id: 'peroxisome',
      name: 'Peroxisome',
      color: '#FFD54F',
      position: { top: '75%', left: '55%' },
      size: 15 * BASE_SIZE,
      borderRadius: 7.5,
      zIndex: 6,
      description:
        'Small membrane-bound organelle that contains enzymes for breaking down toxic substances and fatty acids.',
    },
    {
      id: 'vacuole',
      name: 'Vacuole',
      color: 'rgba(179, 229, 252, 0.4)',
      position: { top: '60%', left: '50%' },
      size: 35 * BASE_SIZE,
      borderRadius: 17.5,
      zIndex: 4,
      description:
        'Membrane-bound sac that stores water, nutrients, waste products, and other materials. Generally smaller in animal cells than plant cells.',
    },
  ],
  backgroundColor: '#ffffba',
  label: 'Eukaryotic Cell',
};

// Export a function to get responsive dimensions
export const getResponsiveDimension = size => {
  return size * BASE_SIZE;
};

// Export a responsive style generator function
export const getResponsiveStyle = baseStyle => {
  // Apply the BASE_SIZE factor to any numeric dimension values
  const processValue = (key, value) => {
    if (
      typeof value === 'number' &&
      (key.includes('width') ||
        key.includes('height') ||
        key.includes('radius') ||
        key.includes('size') ||
        key.includes('padding') ||
        key.includes('margin'))
    ) {
      return value * BASE_SIZE;
    }
    return value;
  };

  // Process all style properties recursively
  const processStyle = style => {
    const newStyle = {};

    for (const key in style) {
      if (typeof style[key] === 'object' && style[key] !== null) {
        newStyle[key] = processStyle(style[key]);
      } else {
        newStyle[key] = processValue(key, style[key]);
      }
    }

    return newStyle;
  };

  return processStyle(baseStyle);
};

// Update function to listen for screen dimension changes
export const listenForDimensionChanges = callback => {
  Dimensions.addEventListener('change', () => {
    const { width: newWidth } = Dimensions.get('window');
    const newBaseSize = newWidth < 360 ? 0.9 : newWidth > 768 ? 1.2 : 1;

    // Call the callback with the new base size
    if (callback && typeof callback === 'function') {
      callback(newBaseSize);
    }
  });
};
