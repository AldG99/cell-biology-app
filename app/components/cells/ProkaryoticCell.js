import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Dimensions,
} from 'react-native';

const { width } = Dimensions.get('window');
const CELL_SIZE = width * 0.8;

const ProkaryoticCell = ({ onSelectPart }) => {
  // Definición de las partes de la célula procariota con posiciones más precisas
  const cellParts = [
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
    {
      id: 'dna',
      name: 'ADN circular',
      color: '#FF9100',
      position: { top: '40%', left: '45%' },
      customShape: 'dna',
      zIndex: 4,
      description:
        'Molécula circular de ADN que contiene la información genética de la bacteria. No está encerrado en un núcleo como en las células eucariotas.',
    },
    {
      id: 'plasmid1',
      name: 'Plásmido',
      color: '#FF6D00',
      position: { top: '30%', left: '30%' },
      customShape: 'plasmid',
      size: 15,
      zIndex: 4,
      description:
        'Pequeña molécula circular de ADN extracromosómico. Puede conferir ventajas adaptativas como resistencia a antibióticos o capacidad para metabolizar sustancias específicas.',
    },
    {
      id: 'plasmid2',
      name: 'Plásmido',
      color: '#FF6D00',
      position: { top: '55%', left: '65%' },
      customShape: 'plasmid',
      size: 12,
      zIndex: 4,
      description:
        'Pequeña molécula circular de ADN extracromosómico. Puede conferir ventajas adaptativas como resistencia a antibióticos o capacidad para metabolizar sustancias específicas.',
    },
    {
      id: 'ribosome1',
      name: 'Ribosoma',
      color: '#FFD600',
      position: { top: '35%', left: '60%' },
      size: 5,
      zIndex: 5,
      description:
        'Estructuras para la síntesis de proteínas. Son más pequeños (70S) que los ribosomas eucariotas (80S) y flotan libremente en el citoplasma.',
    },
    {
      id: 'ribosome2',
      name: 'Ribosoma',
      color: '#FFD600',
      position: { top: '45%', left: '25%' },
      size: 5,
      zIndex: 5,
      description:
        'Estructuras para la síntesis de proteínas. Son más pequeños (70S) que los ribosomas eucariotas (80S) y flotan libremente en el citoplasma.',
    },
    {
      id: 'ribosome3',
      name: 'Ribosoma',
      color: '#FFD600',
      position: { top: '65%', left: '40%' },
      size: 5,
      zIndex: 5,
      description:
        'Estructuras para la síntesis de proteínas. Son más pequeños (70S) que los ribosomas eucariotas (80S) y flotan libremente en el citoplasma.',
    },
    {
      id: 'ribosome4',
      name: 'Ribosoma',
      color: '#FFD600',
      position: { top: '55%', left: '30%' },
      size: 5,
      zIndex: 5,
      description:
        'Estructuras para la síntesis de proteínas. Son más pequeños (70S) que los ribosomas eucariotas (80S) y flotan libremente en el citoplasma.',
    },
    {
      id: 'ribosome5',
      name: 'Ribosoma',
      color: '#FFD600',
      position: { top: '25%', left: '45%' },
      size: 5,
      zIndex: 5,
      description:
        'Estructuras para la síntesis de proteínas. Son más pequeños (70S) que los ribosomas eucariotas (80S) y flotan libremente en el citoplasma.',
    },
    {
      id: 'flagellum',
      name: 'Flagelo',
      color: '#90A4AE',
      position: { top: '0%', left: '40%' },
      customShape: 'flagellum',
      zIndex: 6,
      description:
        'Estructura proteica larga y en forma de látigo que permite la movilidad de la bacteria. Funciona como un propulsor rotatorio impulsado por un motor molecular en la base.',
    },
    {
      id: 'pili',
      name: 'Pili',
      color: '#B0BEC5',
      position: { top: '10%', left: '50%' },
      customShape: 'pili',
      zIndex: 6,
      description:
        'Apéndices proteicos finos que permiten la adhesión a superficies y la transferencia de material genético entre bacterias (conjugación).',
    },
    {
      id: 'mesosome',
      name: 'Mesosoma',
      color: '#81D4FA',
      position: { top: '60%', left: '20%' },
      size: 20,
      customShape: 'mesosome',
      zIndex: 3,
      description:
        'Invaginación de la membrana plasmática que aumenta su superficie. Participa en la división celular, respiración y secreción de enzimas.',
    },
    {
      id: 'inclusion_body',
      name: 'Cuerpo de inclusión',
      color: '#E1F5FE',
      position: { top: '70%', left: '50%' },
      size: 15,
      borderRadius: 7.5,
      zIndex: 3,
      description:
        'Gránulos que almacenan nutrientes de reserva como glucógeno, almidón o polifosfatos. Sirven como fuente de energía y nutrientes.',
    },
    {
      id: 'plasma_membrane',
      name: 'Membrana plasmática',
      color: 'transparent',
      position: { top: '50%', left: '50%' },
      size: CELL_SIZE * 0.9,
      borderWidth: 1.5,
      borderColor: '#64B5F6',
      borderRadius: 20,
      zIndex: 2,
      description:
        'Barrera semipermeable que delimita el interior de la célula. Controla el paso de sustancias y mantiene el gradiente electroquímico.',
    },
    {
      id: 'cell_wall',
      name: 'Pared celular',
      color: 'rgba(129, 199, 132, 0.3)',
      position: { top: '50%', left: '50%' },
      size: CELL_SIZE * 0.95,
      borderWidth: 5,
      borderColor: '#81C784',
      borderRadius: 25,
      zIndex: 1,
      description:
        'Capa rígida compuesta principalmente de peptidoglicano que protege la célula y le da forma. En bacterias Gram negativas es más delgada que en Gram positivas.',
    },
    {
      id: 'capsule',
      name: 'Cápsula',
      color: 'rgba(197, 202, 233, 0.3)',
      position: { top: '50%', left: '50%' },
      size: CELL_SIZE,
      borderRadius: 30,
      zIndex: 0,
      description:
        'Capa protectora externa adicional compuesta por polisacáridos. Protege contra fagocitosis y desecación, y facilita la adhesión a superficies.',
    },
  ];

  const renderCustomShape = part => {
    switch (part.customShape) {
      case 'dna':
        // ADN circular dentro del nucleoide
        return (
          <View
            style={[
              styles.customShape,
              {
                width: 45,
                height: 30,
                top: part.position.top,
                left: part.position.left,
                transform: [{ translateX: -22.5 }, { translateY: -15 }],
                zIndex: part.zIndex,
              },
            ]}
          >
            <View style={styles.dnaCircle} />
          </View>
        );

      case 'plasmid':
        // Plásmido (pequeño círculo de ADN)
        return (
          <View
            style={[
              styles.customShape,
              {
                width: part.size,
                height: part.size,
                top: part.position.top,
                left: part.position.left,
                transform: [
                  { translateX: -part.size / 2 },
                  { translateY: -part.size / 2 },
                ],
                zIndex: part.zIndex,
              },
            ]}
          >
            <View
              style={[
                styles.plasmidCircle,
                { width: part.size, height: part.size },
              ]}
            />
          </View>
        );

      case 'flagellum':
        // Flagelo (estructura larga y ondulada)
        return (
          <View
            style={[
              styles.customShape,
              {
                width: 4,
                height: 80,
                top: part.position.top,
                left: part.position.left,
                zIndex: part.zIndex,
              },
            ]}
          >
            <View
              style={[
                styles.flagellumBase,
                {
                  top: 0,
                  transform: [{ translateX: -3 }],
                },
              ]}
            />
            <View
              style={[
                styles.flagellumFilament,
                {
                  top: 10,
                  transform: [{ translateX: -2 }],
                },
              ]}
            />
          </View>
        );

      case 'pili':
        // Múltiples pili (pelos) alrededor de la célula
        return (
          <View
            style={[
              styles.customShape,
              {
                width: CELL_SIZE,
                height: CELL_SIZE,
                top: 0,
                left: 0,
                zIndex: part.zIndex,
              },
            ]}
          >
            {/* Pili en diferentes posiciones */}
            <View
              style={[
                styles.pilus,
                { top: '10%', left: '30%', transform: [{ rotate: '-30deg' }] },
              ]}
            />
            <View
              style={[
                styles.pilus,
                { top: '10%', left: '50%', transform: [{ rotate: '-10deg' }] },
              ]}
            />
            <View
              style={[
                styles.pilus,
                { top: '10%', left: '70%', transform: [{ rotate: '20deg' }] },
              ]}
            />
            <View
              style={[
                styles.pilus,
                { top: '15%', left: '60%', transform: [{ rotate: '5deg' }] },
              ]}
            />
            <View
              style={[
                styles.pilus,
                { top: '15%', left: '40%', transform: [{ rotate: '-5deg' }] },
              ]}
            />
          </View>
        );

      case 'mesosome':
        // Mesosoma (invaginación de la membrana)
        return (
          <View
            style={[
              styles.customShape,
              {
                width: part.size,
                height: part.size,
                top: part.position.top,
                left: part.position.left,
                transform: [
                  { translateX: -part.size / 2 },
                  { translateY: -part.size / 2 },
                ],
                zIndex: part.zIndex,
              },
            ]}
          >
            <View style={styles.mesosomeOuter} />
            <View style={styles.mesosomeInner} />
          </View>
        );

      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      {/* Célula completa */}
      <View style={styles.cellContainer}>
        {/* Cápsula (capa más externa) */}
        {cellParts
          .filter(part => part.id === 'capsule')
          .map((part, index) => (
            <TouchableOpacity
              key={`capsule-${index}`}
              style={[
                styles.cellPart,
                {
                  backgroundColor: part.color,
                  width: part.size,
                  height: part.size,
                  borderRadius: part.borderRadius,
                  zIndex: part.zIndex,
                  position: 'absolute',
                  top: 0,
                  left: 0,
                },
              ]}
              activeOpacity={0.7}
              onPress={() => onSelectPart(part)}
            />
          ))}

        {/* Pared celular */}
        {cellParts
          .filter(part => part.id === 'cell_wall')
          .map((part, index) => (
            <TouchableOpacity
              key={`wall-${index}`}
              style={[
                styles.cellPart,
                {
                  backgroundColor: part.color,
                  width: part.size,
                  height: part.size,
                  borderWidth: part.borderWidth,
                  borderColor: part.borderColor,
                  borderRadius: part.borderRadius,
                  zIndex: part.zIndex,
                  position: 'absolute',
                  top: CELL_SIZE * 0.025,
                  left: CELL_SIZE * 0.025,
                },
              ]}
              activeOpacity={0.7}
              onPress={() => onSelectPart(part)}
            />
          ))}

        {/* Membrana plasmática */}
        {cellParts
          .filter(part => part.id === 'plasma_membrane')
          .map((part, index) => (
            <TouchableOpacity
              key={`membrane-${index}`}
              style={[
                styles.cellPart,
                {
                  width: part.size,
                  height: part.size,
                  borderWidth: part.borderWidth,
                  borderColor: part.borderColor,
                  borderRadius: part.borderRadius,
                  zIndex: part.zIndex,
                  position: 'absolute',
                  top: CELL_SIZE * 0.05,
                  left: CELL_SIZE * 0.05,
                },
              ]}
              activeOpacity={0.7}
              onPress={() => onSelectPart(part)}
            />
          ))}

        {/* Citoplasma (fondo de la célula) */}
        <View style={styles.cytoplasm} />

        {/* Nucleoide - región del ADN */}
        {cellParts
          .filter(part => part.id === 'nucleoid')
          .map((part, index) => (
            <TouchableOpacity
              key={`nucleoid-${index}`}
              style={[
                styles.cellPart,
                {
                  backgroundColor: part.color,
                  width: part.width,
                  height: part.height,
                  borderRadius: part.borderRadius,
                  top: part.position.top,
                  left: part.position.left,
                  zIndex: part.zIndex,
                  transform: [
                    { translateX: -part.width / 2 },
                    { translateY: -part.height / 2 },
                  ],
                },
              ]}
              activeOpacity={0.7}
              onPress={() => onSelectPart(part)}
            />
          ))}

        {/* Renderizar partes personalizadas */}
        {cellParts
          .filter(part => part.customShape)
          .map((part, index) => (
            <TouchableOpacity
              key={`custom-${index}`}
              activeOpacity={0.7}
              onPress={() => onSelectPart(part)}
            >
              {renderCustomShape(part)}
            </TouchableOpacity>
          ))}

        {/* Renderizar partes estándar (principalmente circulares) */}
        {cellParts
          .filter(
            part =>
              !part.customShape &&
              part.id !== 'cell_wall' &&
              part.id !== 'capsule' &&
              part.id !== 'plasma_membrane' &&
              part.id !== 'nucleoid'
          )
          .map((part, index) => (
            <TouchableOpacity
              key={`standard-${index}`}
              style={[
                styles.cellPart,
                {
                  backgroundColor: part.color,
                  width: part.width || part.size,
                  height: part.height || part.size,
                  borderRadius:
                    part.borderRadius || (part.size ? part.size / 2 : 0),
                  top: part.position.top,
                  left: part.position.left,
                  zIndex: part.zIndex || 1,
                  borderWidth: part.borderWidth || 0,
                  borderColor: part.borderColor || 'transparent',
                  transform: [
                    { translateX: -(part.width || part.size) / 2 },
                    { translateY: -(part.height || part.size) / 2 },
                  ],
                },
              ]}
              activeOpacity={0.7}
              onPress={() => onSelectPart(part)}
            />
          ))}

        {/* Etiqueta indicadora */}
        <View style={styles.labelContainer}>
          <Text style={styles.labelText}>Célula Procariota</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  cellContainer: {
    width: CELL_SIZE,
    height: CELL_SIZE,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    marginVertical: 20,
  },
  cytoplasm: {
    position: 'absolute',
    width: CELL_SIZE * 0.85,
    height: CELL_SIZE * 0.85,
    borderRadius: 15,
    backgroundColor: 'rgba(178, 223, 219, 0.3)',
    zIndex: 1,
    top: CELL_SIZE * 0.075,
    left: CELL_SIZE * 0.075,
  },
  cellPart: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 2,
  },
  customShape: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dnaCircle: {
    width: 45,
    height: 30,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#FF9100',
    borderStyle: 'dashed',
  },
  plasmidCircle: {
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: '#FF6D00',
    borderStyle: 'dashed',
  },
  flagellumBase: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#78909C',
  },
  flagellumFilament: {
    width: 4,
    height: 70,
    backgroundColor: '#90A4AE',
    borderTopRightRadius: 2,
    borderTopLeftRadius: 2,
    borderBottomRightRadius: 2,
    borderBottomLeftRadius: 2,
    transform: [{ rotate: '5deg' }, { translateX: -1 }],
  },
  pilus: {
    position: 'absolute',
    width: 2,
    height: 15,
    backgroundColor: '#B0BEC5',
  },
  mesosomeOuter: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#81D4FA',
  },
  mesosomeInner: {
    position: 'absolute',
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: 'rgba(178, 223, 219, 0.3)',
    top: 4,
    left: 4,
  },
  labelContainer: {
    position: 'absolute',
    bottom: -30,
    backgroundColor: 'rgba(0,0,0,0.1)',
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 15,
  },
  labelText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#0277BD',
  },
});

export default ProkaryoticCell;
