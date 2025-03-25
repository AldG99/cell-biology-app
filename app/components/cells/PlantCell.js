// components/PlantCell.js
import React from 'react';
import { StyleSheet, View } from 'react-native';
import BaseCell from '../shared/BaseCell';
import {
  RoughER,
  GolgiApparatus,
  Nucleus,
  Mitochondrion,
} from '../shared/CellParts';
import { plantCellConfig } from '../../data/cellVisualizations';

const PlantCell = ({ onSelectPart }) => {
  // Función para renderizar formas personalizadas específicas de célula vegetal
  const renderCustomShape = part => {
    switch (part.customShape) {
      case 'chloroplast':
        return (
          <View
            style={[
              styles.chloroplast,
              {
                width: part.width,
                height: part.height,
                backgroundColor: part.color,
                borderRadius: part.borderRadius,
              },
            ]}
          >
            {/* Tilacoides y grana */}
            <View style={styles.thylakoidMembrane1} />
            <View style={styles.thylakoidMembrane2} />
            <View style={styles.thylakoidMembrane3} />
            <View style={styles.stroma} />
          </View>
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

      case 'amyloplast':
        return (
          <View
            style={[
              styles.amyloplast,
              {
                width: part.size,
                height: part.size,
                backgroundColor: part.color,
                borderRadius: part.size / 2,
              },
            ]}
          >
            {/* Gránulos de almidón */}
            <View style={styles.starchGranule} />
          </View>
        );

      case 'plasmodesmata':
        // Renderizar plasmodesmos en diferentes ubicaciones
        return (
          <>
            <PlasmodesmataUnit position="top" />
            <PlasmodesmataUnit position="bottom" />
            <PlasmodesmataUnit position="left" />
            <PlasmodesmataUnit position="right" />
          </>
        );

      default:
        return null;
    }
  };

  // Componente para un plasmodesmo individual
  const PlasmodesmataUnit = ({ position }) => {
    const isVertical = position === 'top' || position === 'bottom';

    return (
      <View
        style={[
          styles.plasmodesmataBase,
          {
            width: isVertical ? 15 : 20,
            height: isVertical ? 20 : 15,
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

  return (
    <BaseCell
      config={plantCellConfig}
      onSelectPart={onSelectPart}
      renderCustomShape={renderCustomShape}
      cytoplasmColor="rgba(220, 237, 200, 0.4)"
      membraneColor="#9CCC65"
      shape="round"
    />
  );
};

const styles = StyleSheet.create({
  chloroplast: {
    justifyContent: 'center',
    position: 'relative',
  },
  thylakoidMembrane1: {
    position: 'absolute',
    width: '80%',
    height: 2,
    backgroundColor: '#43A047',
    top: '30%',
    left: '10%',
  },
  thylakoidMembrane2: {
    position: 'absolute',
    width: '70%',
    height: 2,
    backgroundColor: '#43A047',
    top: '50%',
    left: '15%',
  },
  thylakoidMembrane3: {
    position: 'absolute',
    width: '60%',
    height: 2,
    backgroundColor: '#43A047',
    top: '70%',
    left: '20%',
  },
  stroma: {
    position: 'absolute',
    width: '20%',
    height: '20%',
    backgroundColor: '#81C784',
    borderRadius: 3,
    top: '40%',
    left: '65%',
  },
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
