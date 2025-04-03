import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import BaseCell from '../shared/BaseCell';
import {
  RoughER,
  GolgiApparatus,
  Nucleus,
  Chloroplast,
} from '../shared/CellParts';
import { plantCellConfig } from '../../data/cellVisualizations';

const { width } = Dimensions.get('window');
// Scale factor for part sizes based on screen width
const SCALE_FACTOR = width < 360 ? 0.8 : 1;

const PlantCell = ({ onSelectPart }) => {
  // Function to render custom shapes specific to plant cells
  const renderCustomShape = part => {
    // Apply scale factor to all sizes
    const scaledPart = {
      ...part,
      size: part.size ? part.size * SCALE_FACTOR : undefined,
      width: part.width ? part.width * SCALE_FACTOR : undefined,
      height: part.height ? part.height * SCALE_FACTOR : undefined,
    };

    switch (part.customShape) {
      case 'chloroplast':
        return (
          <Chloroplast
            color={scaledPart.color}
            width={scaledPart.width}
            height={scaledPart.height}
            borderRadius={scaledPart.borderRadius}
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

      case 'amyloplast':
        return (
          <View
            style={[
              styles.amyloplast,
              {
                width: scaledPart.size,
                height: scaledPart.size,
                backgroundColor: scaledPart.color,
                borderRadius: scaledPart.size / 2,
              },
            ]}
          >
            {/* Starch granules */}
            <View style={styles.starchGranule} />
          </View>
        );

      case 'plasmodesmata':
        // Render plasmodesmata at different locations
        return (
          <>
            <PlasmodesmataUnit position="top" />
            <PlasmodesmataUnit position="bottom" />
            <PlasmodesmataUnit position="left" />
            <PlasmodesmataUnit position="right" />
          </>
        );

      case 'nucleus':
        return (
          <Nucleus
            color={scaledPart.color}
            size={scaledPart.size}
            borderColor={scaledPart.borderColor}
          />
        );

      default:
        return null;
    }
  };

  // Component for an individual plasmodesma
  const PlasmodesmataUnit = ({ position }) => {
    const isVertical = position === 'top' || position === 'bottom';

    return (
      <View
        style={[
          styles.plasmodesmataBase,
          {
            width: isVertical ? 15 * SCALE_FACTOR : 20 * SCALE_FACTOR,
            height: isVertical ? 20 * SCALE_FACTOR : 15 * SCALE_FACTOR,
            [position]: '5%',
            left:
              position === 'right'
                ? 'auto'
                : position === 'left'
                ? '5%'
                : '50%',
            right: position === 'right' ? '5%' : 'auto',
          },
        ]}
      >
        <View
          style={[
            styles.plasmaCord,
            {
              height: isVertical ? '90%' : 2,
              width: isVertical ? 2 : '90%',
            },
          ]}
        />
      </View>
    );
  };

  // Create a scaled version of the configuration
  const scaledConfig = {
    ...plantCellConfig,
    parts: plantCellConfig.parts.map(part => ({
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
      cytoplasmColor="rgba(220, 237, 200, 0.4)"
      membraneColor="#9CCC65"
      cellShape="hexagonal" // Hexagonal shape for plant cell
    />
  );
};

const styles = StyleSheet.create({
  amyloplast: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  starchGranule: {
    position: 'absolute',
    width: '60%',
    height: '60%',
    backgroundColor: '#F0F0F0',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  plasmodesmataBase: {
    position: 'absolute',
    backgroundColor: '#DCEDC8',
    borderRadius: 3,
    borderWidth: 1,
    borderColor: '#AED581',
    zIndex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  plasmaCord: {
    backgroundColor: '#9CCC65',
    position: 'absolute',
  },
});

export default PlantCell;
