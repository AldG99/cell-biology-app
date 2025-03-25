// components/AnimalCell.js
import React from 'react';
import { StyleSheet, View } from 'react-native';
import BaseCell from '../shared/BaseCell';
import { RoughER, GolgiApparatus, Nucleus } from '../shared/CellParts';
import { animalCellConfig } from '../../data/cellVisualizations';

const AnimalCell = ({ onSelectPart }) => {
  // Función para renderizar formas personalizadas específicas de célula animal
  const renderCustomShape = part => {
    switch (part.customShape) {
      case 'nucleus':
        return (
          <Nucleus
            color={part.color}
            size={part.size}
            borderColor={part.borderColor}
          />
        );

      case 'rough-er':
        return (
          <RoughER color={part.color} width={part.width} height={part.height} />
        );

      case 'golgi':
        return (
          <GolgiApparatus
            color={part.color}
            width={part.width}
            height={part.height}
          />
        );

      case 'centrosome':
        return (
          <View style={styles.centrosome}>
            {/* Centriolos perpendiculares */}
            <View style={styles.centrosomeHorizontal} />
            <View style={styles.centrosomeVertical} />
            {/* Material pericentriolar */}
            <View style={styles.pericentriolarMaterial} />
          </View>
        );

      case 'cytoskeleton':
        return (
          <View
            style={[
              styles.cytoskeleton,
              { width: part.size, height: part.size },
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
    <BaseCell
      config={animalCellConfig}
      onSelectPart={onSelectPart}
      renderCustomShape={renderCustomShape}
      cytoplasmColor="rgba(255, 205, 210, 0.6)"
      membraneColor="#E57373"
    />
  );
};

const styles = StyleSheet.create({
  centrosome: {
    width: 22,
    height: 22,
    position: 'relative',
  },
  centrosomeHorizontal: {
    position: 'absolute',
    width: 18,
    height: 8,
    backgroundColor: '#BA68C8',
    borderRadius: 2,
    top: '30%',
    left: '10%',
  },
  centrosomeVertical: {
    position: 'absolute',
    width: 8,
    height: 18,
    backgroundColor: '#BA68C8',
    borderRadius: 2,
    top: '20%',
    left: '40%',
  },
  pericentriolarMaterial: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(206, 147, 216, 0.3)',
    borderRadius: 11,
    top: 0,
    left: 0,
  },
  cytoskeleton: {
    position: 'absolute',
    overflow: 'hidden',
  },
});

export default AnimalCell;
