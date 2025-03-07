import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Animated,
  Dimensions,
} from 'react-native';

const { width } = Dimensions.get('window');
const CELL_SIZE = width * 0.85;

const AnimalCell = ({ onSelectPart }) => {
  // Definición de las partes de la célula animal con posiciones más precisas
  const cellParts = [
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
    {
      id: 'er_smooth',
      name: 'Retículo endoplasmático liso',
      color: '#80D8FF',
      position: { top: '60%', left: '28%' },
      width: 50,
      height: 30,
      zIndex: 5,
      customShape: 'smooth-er',
      description:
        'Red de membranas sin ribosomas. Participa en la síntesis de lípidos y desintoxicación.',
    },
    {
      id: 'golgi',
      name: 'Aparato de Golgi',
      color: '#B9F6CA',
      position: { top: '30%', left: '20%' },
      width: 45,
      height: 25,
      zIndex: 6,
      customShape: 'golgi',
      description:
        'Sistema de sacos membranosos aplanados. Procesa, empaqueta y distribuye proteínas y lípidos.',
    },
    {
      id: 'lysosome1',
      name: 'Lisosoma',
      color: '#FFCC80',
      position: { top: '70%', left: '40%' },
      size: 18,
      zIndex: 7,
      description:
        'Vesícula que contiene enzimas digestivas para descomponer macromoléculas y organelos desgastados.',
    },
    {
      id: 'lysosome2',
      name: 'Lisosoma',
      color: '#FFCC80',
      position: { top: '50%', left: '25%' },
      size: 15,
      zIndex: 7,
      description:
        'Vesícula que contiene enzimas digestivas para descomponer macromoléculas y organelos desgastados.',
    },
    {
      id: 'centrosome',
      name: 'Centrosoma',
      color: '#CE93D8',
      position: { top: '60%', left: '50%' },
      size: 22,
      zIndex: 7,
      customShape: 'centrosome',
      description:
        'Centro organizador de microtúbulos compuesto por un par de centriolos. Importante durante la división celular.',
    },
    {
      id: 'ribosome1',
      name: 'Ribosomas',
      color: '#FFEB3B',
      position: { top: '25%', left: '55%' },
      size: 8,
      zIndex: 9,
      description:
        'Estructuras compuestas de ARN y proteínas que sintetizan proteínas a partir de la información del ARNm.',
    },
    {
      id: 'ribosome2',
      name: 'Ribosomas',
      color: '#FFEB3B',
      position: { top: '45%', left: '70%' },
      size: 8,
      zIndex: 9,
      description:
        'Estructuras compuestas de ARN y proteínas que sintetizan proteínas a partir de la información del ARNm.',
    },
    {
      id: 'ribosome3',
      name: 'Ribosomas',
      color: '#FFEB3B',
      position: { top: '38%', left: '30%' },
      size: 8,
      zIndex: 9,
      description:
        'Estructuras compuestas de ARN y proteínas que sintetizan proteínas a partir de la información del ARNm.',
    },
    {
      id: 'vesicle1',
      name: 'Vesícula de transporte',
      color: '#B2DFDB',
      position: { top: '28%', left: '42%' },
      size: 12,
      zIndex: 6,
      description:
        'Pequeña bolsa membranosa que transporta materiales entre organelos o hacia la membrana plasmática.',
    },
    {
      id: 'vesicle2',
      name: 'Vesícula de transporte',
      color: '#B2DFDB',
      position: { top: '20%', left: '60%' },
      size: 10,
      zIndex: 6,
      description:
        'Pequeña bolsa membranosa que transporta materiales entre organelos o hacia la membrana plasmática.',
    },
    {
      id: 'cytoskeleton',
      name: 'Citoesqueleto',
      color: '#BDBDBD',
      position: { top: '50%', left: '50%' },
      size: CELL_SIZE * 0.9,
      customShape: 'cytoskeleton',
      zIndex: 1,
      description:
        'Red de filamentos y microtúbulos que da forma y soporte a la célula. Participa en el movimiento celular e intracelular.',
    },
  ];

  const renderCustomShape = part => {
    switch (part.customShape) {
      case 'rough-er':
        return (
          <View
            style={[
              styles.customShape,
              {
                width: part.width,
                height: part.height,
                backgroundColor: part.color,
                top: part.position.top,
                left: part.position.left,
                zIndex: part.zIndex || 1,
                borderRadius: 10,
                overflow: 'hidden',
              },
            ]}
          >
            {/* Ribosomas en el RER */}
            {Array(10)
              .fill(0)
              .map((_, i) => (
                <View
                  key={i}
                  style={{
                    position: 'absolute',
                    width: 4,
                    height: 4,
                    backgroundColor: '#FFEB3B',
                    borderRadius: 2,
                    top: 3 + i * 3.5,
                    right: 2,
                  }}
                />
              ))}
            {/* Líneas internas que representan membranas */}
            <View
              style={{
                position: 'absolute',
                width: '85%',
                height: 1,
                backgroundColor: '#5C6BC0',
                top: '30%',
                left: '5%',
              }}
            />
            <View
              style={{
                position: 'absolute',
                width: '75%',
                height: 1,
                backgroundColor: '#5C6BC0',
                top: '60%',
                left: '10%',
              }}
            />
          </View>
        );

      case 'smooth-er':
        return (
          <View
            style={[
              styles.customShape,
              {
                width: part.width,
                height: part.height,
                backgroundColor: part.color,
                top: part.position.top,
                left: part.position.left,
                zIndex: part.zIndex || 1,
                borderRadius: 15,
                overflow: 'hidden',
              },
            ]}
          >
            {/* Líneas internas curvas */}
            <View
              style={{
                position: 'absolute',
                width: '90%',
                height: 1,
                backgroundColor: '#5C6BC0',
                top: '25%',
                left: '5%',
                borderRadius: 10,
                transform: [{ scaleX: 0.9 }, { scaleY: 2 }],
              }}
            />
            <View
              style={{
                position: 'absolute',
                width: '80%',
                height: 1,
                backgroundColor: '#5C6BC0',
                top: '60%',
                left: '10%',
                borderRadius: 10,
                transform: [{ scaleX: 0.8 }, { scaleY: 2 }],
              }}
            />
          </View>
        );

      case 'golgi':
        return (
          <View
            style={[
              styles.customShape,
              {
                width: part.width,
                height: part.height,
                top: part.position.top,
                left: part.position.left,
                zIndex: part.zIndex || 1,
              },
            ]}
          >
            {/* Sacos superpuestos del aparato de Golgi */}
            {Array(5)
              .fill(0)
              .map((_, i) => (
                <View
                  key={i}
                  style={{
                    position: 'absolute',
                    width: part.width - i * 4,
                    height: 5,
                    backgroundColor:
                      i === 0 ? '#66BB6A' : i === 4 ? '#81C784' : part.color,
                    borderRadius: 3,
                    top: i * 5,
                  }}
                />
              ))}
            {/* Vesículas de transporte */}
            <View
              style={{
                position: 'absolute',
                width: 8,
                height: 8,
                backgroundColor: '#B2DFDB',
                borderRadius: 4,
                top: -5,
                right: 5,
              }}
            />
            <View
              style={{
                position: 'absolute',
                width: 6,
                height: 6,
                backgroundColor: '#B2DFDB',
                borderRadius: 3,
                bottom: -3,
                left: 10,
              }}
            />
          </View>
        );

      case 'centrosome':
        return (
          <View
            style={[
              styles.customShape,
              {
                width: part.size,
                height: part.size,
                top: part.position.top,
                left: part.position.left,
                zIndex: part.zIndex || 1,
              },
            ]}
          >
            {/* Centriolos perpendiculares */}
            <View
              style={{
                position: 'absolute',
                width: 18,
                height: 8,
                backgroundColor: '#BA68C8',
                borderRadius: 2,
                top: '30%',
                left: '10%',
              }}
            />
            <View
              style={{
                position: 'absolute',
                width: 8,
                height: 18,
                backgroundColor: '#BA68C8',
                borderRadius: 2,
                top: '20%',
                left: '40%',
              }}
            />
            {/* Material pericentriolar */}
            <View
              style={{
                position: 'absolute',
                width: part.size,
                height: part.size,
                backgroundColor: 'rgba(206, 147, 216, 0.3)',
                borderRadius: part.size / 2,
                top: 0,
                left: 0,
              }}
            />
          </View>
        );

      case 'cytoskeleton':
        return (
          <View
            style={[
              styles.customShape,
              {
                width: part.size,
                height: part.size,
                top: 0,
                left: 0,
                position: 'absolute',
                zIndex: part.zIndex || 1,
                overflow: 'hidden',
              },
            ]}
          >
            {/* Filamentos distribuidos aleatoriamente */}
            {Array(20)
              .fill(0)
              .map((_, i) => {
                const angle = Math.random() * 360;
                const length = 20 + Math.random() * 80;
                const thickness = 1 + Math.random();
                const posTop = Math.random() * 100;
                const posLeft = Math.random() * 100;

                return (
                  <View
                    key={i}
                    style={{
                      position: 'absolute',
                      width: length,
                      height: thickness,
                      backgroundColor: 'rgba(189, 189, 189, 0.4)',
                      top: `${posTop}%`,
                      left: `${posLeft}%`,
                      transform: [{ rotate: `${angle}deg` }],
                    }}
                  />
                );
              })}
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
        {/* Membrana plasmática */}
        <View style={styles.membrane} />

        {/* Citoplasma */}
        <View style={styles.cytoplasm} />

        {/* Renderizar partes personalizadas primero */}
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
          .filter(part => !part.customShape)
          .map((part, index) => {
            // Para mitocondrias, crear diseño interno
            if (part.innerStructure) {
              return (
                <TouchableOpacity
                  key={`standard-${index}`}
                  style={[
                    styles.cellPart,
                    {
                      backgroundColor: part.color,
                      width: part.size,
                      height: part.size,
                      borderRadius: part.borderRadius || part.size / 2,
                      top: part.position.top,
                      left: part.position.left,
                      zIndex: part.zIndex || 1,
                      borderWidth: part.borderWidth || 0,
                      borderColor: part.borderColor || 'transparent',
                      transform: part.rotation
                        ? [{ rotate: part.rotation }]
                        : [],
                    },
                  ]}
                  activeOpacity={0.7}
                  onPress={() => onSelectPart(part)}
                >
                  {/* Crestas mitocondriales */}
                  <View style={styles.mitochondrialCrista1} />
                  <View style={styles.mitochondrialCrista2} />
                  <View style={styles.mitochondrialCrista3} />
                </TouchableOpacity>
              );
            }

            // Para partes estándar
            return (
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
                    transform: part.rotation ? [{ rotate: part.rotation }] : [],
                  },
                ]}
                activeOpacity={0.7}
                onPress={() => onSelectPart(part)}
              />
            );
          })}

        {/* Etiqueta indicadora */}
        <View style={styles.labelContainer}>
          <Text style={styles.labelText}>Célula Animal</Text>
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
    borderRadius: CELL_SIZE / 2,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    marginVertical: 20,
  },
  membrane: {
    position: 'absolute',
    width: CELL_SIZE * 0.98,
    height: CELL_SIZE * 0.98,
    borderRadius: CELL_SIZE / 2,
    borderWidth: 2.5,
    borderColor: '#E57373',
    zIndex: 2,
  },
  cytoplasm: {
    position: 'absolute',
    width: CELL_SIZE * 0.97,
    height: CELL_SIZE * 0.97,
    borderRadius: CELL_SIZE / 2,
    backgroundColor: '#FFCDD2',
    opacity: 0.6,
    zIndex: 0,
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
  },
  mitochondrialCrista1: {
    position: 'absolute',
    width: '70%',
    height: 2,
    backgroundColor: '#F48FB1',
    top: '30%',
  },
  mitochondrialCrista2: {
    position: 'absolute',
    width: '70%',
    height: 2,
    backgroundColor: '#F48FB1',
    top: '50%',
  },
  mitochondrialCrista3: {
    position: 'absolute',
    width: '70%',
    height: 2,
    backgroundColor: '#F48FB1',
    top: '70%',
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
    color: '#333',
  },
});

export default AnimalCell;
