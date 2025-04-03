import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import BaseCell from '../shared/BaseCell';
import { Plasmid } from '../shared/CellParts';
import { prokaryoticCellConfig } from '../../data/cellVisualizations';

const { width } = Dimensions.get('window');
// Scale factor for part sizes based on screen width
const SCALE_FACTOR = width < 360 ? 0.8 : 1;

const ProkaryoticCell = ({ onSelectPart }) => {
  // Function to render custom shapes specific to prokaryotic cells
  const renderCustomShape = part => {
    // Apply scale factor to all sizes
    const scaledPart = {
      ...part,
      size: part.size ? part.size * SCALE_FACTOR : undefined,
      width: part.width ? part.width * SCALE_FACTOR : undefined,
      height: part.height ? part.height * SCALE_FACTOR : undefined,
    };

    switch (part.customShape) {
      case 'dna':
        // Circular DNA within the nucleoid
        return <View style={styles.dnaCircle} />;

      case 'plasmid':
        // Plasmid (small DNA circle)
        return <Plasmid color={scaledPart.color} size={scaledPart.size} />;

      case 'flagellum':
        // Flagellum (long, wavy structure)
        return (
          <View style={styles.flagellumContainer}>
            <View style={styles.flagellumBase} />
            <View style={styles.flagellumFilament} />
          </View>
        );

      case 'pili':
        // Multiple pili (hairs) around the cell
        return (
          <View style={styles.piliContainer}>
            {/* Pili at different positions */}
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
        // Mesosome (membrane invagination)
        return (
          <View
            style={[
              styles.mesosomeOuter,
              {
                width: scaledPart.size,
                height: scaledPart.size,
                borderRadius: scaledPart.size / 2,
              },
            ]}
          >
            <View
              style={[
                styles.mesosomeInner,
                {
                  width: scaledPart.size * 0.6,
                  height: scaledPart.size * 0.6,
                  borderRadius: scaledPart.size * 0.3,
                },
              ]}
            />
          </View>
        );

      default:
        return null;
    }
  };

  // Create a scaled version of the configuration
  const scaledConfig = {
    ...prokaryoticCellConfig,
    parts: prokaryoticCellConfig.parts.map(part => ({
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
      cytoplasmColor="rgba(178, 223, 219, 0.3)"
      membraneColor="#64B5F6"
      membraneWidth={1.5}
      cellShape="oval" // Oval shape with flagellum for prokaryotic cell
    />
  );
};

const styles = StyleSheet.create({
  dnaCircle: {
    width: 45 * SCALE_FACTOR,
    height: 30 * SCALE_FACTOR,
    borderRadius: 15 * SCALE_FACTOR,
    borderWidth: 2,
    borderColor: '#FF9100',
    borderStyle: 'dashed',
  },
  flagellumContainer: {
    width: 4 * SCALE_FACTOR,
    height: 80 * SCALE_FACTOR,
    position: 'relative',
  },
  flagellumBase: {
    width: 6 * SCALE_FACTOR,
    height: 6 * SCALE_FACTOR,
    borderRadius: 3 * SCALE_FACTOR,
    backgroundColor: '#78909C',
    position: 'absolute',
    top: 0,
    left: -1 * SCALE_FACTOR,
  },
  flagellumFilament: {
    width: 4 * SCALE_FACTOR,
    height: 70 * SCALE_FACTOR,
    backgroundColor: '#90A4AE',
    borderTopRightRadius: 2 * SCALE_FACTOR,
    borderTopLeftRadius: 2 * SCALE_FACTOR,
    borderBottomRightRadius: 2 * SCALE_FACTOR,
    borderBottomLeftRadius: 2 * SCALE_FACTOR,
    position: 'absolute',
    top: 10 * SCALE_FACTOR,
    transform: [{ rotate: '5deg' }, { translateX: -1 * SCALE_FACTOR }],
  },
  piliContainer: {
    width: '100%',
    height: '100%',
    position: 'relative',
  },
  pilus: {
    position: 'absolute',
    width: 2 * SCALE_FACTOR,
    height: 15 * SCALE_FACTOR,
    backgroundColor: '#B0BEC5',
  },
  mesosomeOuter: {
    backgroundColor: '#81D4FA',
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mesosomeInner: {
    backgroundColor: 'rgba(178, 223, 219, 0.3)',
    position: 'absolute',
  },
});

export default ProkaryoticCell;
