import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import BaseCell from '../shared/BaseCell';
import { RoughER, GolgiApparatus, Nucleus } from '../shared/CellParts';
import { animalCellConfig } from '../../data/cellVisualizations';

const { width } = Dimensions.get('window');
// Scale factor for part sizes based on screen width
const SCALE_FACTOR = width < 360 ? 0.8 : 1;

const AnimalCell = ({ onSelectPart }) => {
  // Function to render custom shapes specific to animal cells
  const renderCustomShape = part => {
    // Apply scale factor to all sizes
    const scaledPart = {
      ...part,
      size: part.size ? part.size * SCALE_FACTOR : undefined,
      width: part.width ? part.width * SCALE_FACTOR : undefined,
      height: part.height ? part.height * SCALE_FACTOR : undefined,
    };

    switch (part.customShape) {
      case 'nucleus':
        return (
          <Nucleus
            color={scaledPart.color}
            size={scaledPart.size}
            borderColor={scaledPart.borderColor}
          />
        );

      case 'rough-er':
        return (
          <RoughER
            color={scaledPart.color}
            width={scaledPart.width}
            height={scaledPart.height}
          />
        );

      case 'golgi':
        return (
          <GolgiApparatus
            color={scaledPart.color}
            width={scaledPart.width}
            height={scaledPart.height}
          />
        );

      case 'centrosome':
        return (
          <View style={styles.centrosome}>
            {/* Perpendicular centrioles */}
            <View style={styles.centrosomeHorizontal} />
            <View style={styles.centrosomeVertical} />
            {/* Pericentriolar material */}
            <View style={styles.pericentriolarMaterial} />
          </View>
        );

      case 'cytoskeleton':
        return (
          <View
            style={[
              styles.cytoskeleton,
              { width: scaledPart.size, height: scaledPart.size },
            ]}
          >
            {/* Randomly distributed filaments - reduced for better performance */}
            {Array(15)
              .fill(0)
              .map((_, i) => {
                const angle = Math.random() * 360;
                const length = 20 + Math.random() * 60;
                const thickness = 1 + Math.random() * 0.5;
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

      case 'lysosome':
        return (
          <View
            style={[
              styles.lysosome,
              {
                width: scaledPart.size,
                height: scaledPart.size,
                borderRadius: scaledPart.size / 2,
                backgroundColor: scaledPart.color,
              },
            ]}
          >
            {/* Lysosomal enzymes visualization */}
            <View style={styles.lysosomeEnzyme1} />
            <View style={styles.lysosomeEnzyme2} />
            <View style={styles.lysosomeEnzyme3} />
          </View>
        );

      default:
        return null;
    }
  };

  // Create a scaled version of the configuration
  const scaledConfig = {
    ...animalCellConfig,
    parts: animalCellConfig.parts.map(part => ({
      ...part,
      size: part.size ? part.size * SCALE_FACTOR : undefined,
      width: part.width ? part.width * SCALE_FACTOR : undefined,
      height: part.height ? part.height * SCALE_FACTOR : undefined,
    })),
  };

  return (
    <BaseCell
      config={scaledConfig}
      onSelectPart={onSelectPart}
      renderCustomShape={renderCustomShape}
      cytoplasmColor="rgba(255, 205, 210, 0.6)"
      membraneColor="#E57373"
      cellShape="circular" // Circular shape for animal cell
    />
  );
};

const styles = StyleSheet.create({
  centrosome: {
    width: 22 * SCALE_FACTOR,
    height: 22 * SCALE_FACTOR,
    position: 'relative',
  },
  centrosomeHorizontal: {
    position: 'absolute',
    width: 18 * SCALE_FACTOR,
    height: 8 * SCALE_FACTOR,
    backgroundColor: '#BA68C8',
    borderRadius: 2 * SCALE_FACTOR,
    top: '30%',
    left: '10%',
  },
  centrosomeVertical: {
    position: 'absolute',
    width: 8 * SCALE_FACTOR,
    height: 18 * SCALE_FACTOR,
    backgroundColor: '#BA68C8',
    borderRadius: 2 * SCALE_FACTOR,
    top: '20%',
    left: '40%',
  },
  pericentriolarMaterial: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(206, 147, 216, 0.3)',
    borderRadius: 11 * SCALE_FACTOR,
    top: 0,
    left: 0,
  },
  cytoskeleton: {
    position: 'absolute',
    overflow: 'hidden',
  },
  lysosome: {
    position: 'relative',
    overflow: 'hidden',
  },
  lysosomeEnzyme1: {
    position: 'absolute',
    width: '35%',
    height: '35%',
    backgroundColor: '#F8BBD0',
    borderRadius: 4 * SCALE_FACTOR,
    top: '20%',
    left: '20%',
  },
  lysosomeEnzyme2: {
    position: 'absolute',
    width: '25%',
    height: '25%',
    backgroundColor: '#F8BBD0',
    borderRadius: 3 * SCALE_FACTOR,
    bottom: '20%',
    right: '20%',
  },
  lysosomeEnzyme3: {
    position: 'absolute',
    width: '20%',
    height: '20%',
    backgroundColor: '#F8BBD0',
    borderRadius: 2 * SCALE_FACTOR,
    bottom: '30%',
    left: '40%',
  },
});

export default AnimalCell;
