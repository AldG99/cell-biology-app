import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import BaseCell from '../shared/BaseCell';
import { RoughER, GolgiApparatus, Nucleus } from '../shared/CellParts';
import { eukaryoticCellConfig } from '../../data/cellVisualizations';

const { width } = Dimensions.get('window');
// Scale factor for part sizes based on screen width
const SCALE_FACTOR = width < 360 ? 0.8 : 1;

const EukaryoticCell = ({ onSelectPart }) => {
  // Function to render custom shapes specific to eukaryotic cells
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

      case 'smooth-er':
        return (
          <View
            style={[
              styles.smoothER,
              {
                width: scaledPart.width,
                height: scaledPart.height,
                backgroundColor: scaledPart.color,
                borderRadius: 15,
              },
            ]}
          >
            {/* Internal curved lines */}
            <View style={styles.smoothERMembrane1} />
            <View style={styles.smoothERMembrane2} />
            <View style={styles.smoothERMembrane3} />
          </View>
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
          <View style={styles.centrosomeContainer}>
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
              {
                width: scaledPart.size,
                height: scaledPart.size,
              },
            ]}
          >
            {/* Randomly distributed filaments - reduced for better performance */}
            {Array(20)
              .fill(0)
              .map((_, i) => {
                const angle = Math.random() * 360;
                const length = 20 + Math.random() * 80;
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
                      backgroundColor:
                        i % 3 === 0
                          ? 'rgba(189, 189, 189, 0.7)'
                          : i % 3 === 1
                          ? 'rgba(158, 158, 158, 0.5)'
                          : 'rgba(117, 117, 117, 0.3)',
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

  // Create a scaled version of the configuration
  const scaledConfig = {
    ...eukaryoticCellConfig,
    parts: eukaryoticCellConfig.parts.map(part => ({
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
      cytoplasmColor="rgba(209, 196, 233, 0.3)"
      membraneColor="#7986CB"
      cellShape="circular" // Circular shape for eukaryotic cell
    />
  );
};

const styles = StyleSheet.create({
  smoothER: {
    overflow: 'hidden',
    position: 'relative',
  },
  smoothERMembrane1: {
    position: 'absolute',
    width: '90%',
    height: 1,
    backgroundColor: '#4FC3F7',
    top: '25%',
    left: '5%',
    borderRadius: 10,
    transform: [{ scaleX: 0.9 }, { scaleY: 2 }],
  },
  smoothERMembrane2: {
    position: 'absolute',
    width: '80%',
    height: 1,
    backgroundColor: '#4FC3F7',
    top: '50%',
    left: '10%',
    borderRadius: 10,
    transform: [{ scaleX: 0.8 }, { scaleY: 2 }],
  },
  smoothERMembrane3: {
    position: 'absolute',
    width: '70%',
    height: 1,
    backgroundColor: '#4FC3F7',
    top: '75%',
    left: '15%',
    borderRadius: 10,
    transform: [{ scaleX: 0.7 }, { scaleY: 2 }],
  },
  centrosomeContainer: {
    width: 22 * SCALE_FACTOR,
    height: 22 * SCALE_FACTOR,
    position: 'relative',
  },
  centrosomeHorizontal: {
    position: 'absolute',
    width: 16 * SCALE_FACTOR,
    height: 7 * SCALE_FACTOR,
    backgroundColor: '#BA68C8',
    borderRadius: 2,
    top: '40%',
    left: '25%',
  },
  centrosomeVertical: {
    position: 'absolute',
    width: 7 * SCALE_FACTOR,
    height: 16 * SCALE_FACTOR,
    backgroundColor: '#BA68C8',
    borderRadius: 2,
    top: '25%',
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
    top: '5%',
    left: '5%',
  },
});

export default EukaryoticCell;
