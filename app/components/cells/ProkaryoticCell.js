// components/ProkaryoticCell.js
import React from 'react';
import { StyleSheet, View } from 'react-native';
import BaseCell from '../shared/BaseCell';
import { prokaryoticCellConfig } from '../../data/cellVisualizations';

const ProkaryoticCell = ({ onSelectPart }) => {
  // Función para renderizar formas personalizadas específicas de célula procariota
  const renderCustomShape = part => {
    switch (part.customShape) {
      case 'dna':
        // ADN circular dentro del nucleoide
        return <View style={styles.dnaCircle} />;

      case 'plasmid':
        // Plásmido (pequeño círculo de ADN)
        return (
          <View
            style={[
              styles.plasmidCircle,
              {
                width: part.size,
                height: part.size,
                borderRadius: part.size / 2,
              },
            ]}
          />
        );

      case 'flagellum':
        // Flagelo (estructura larga y ondulada)
        return (
          <View style={styles.flagellumContainer}>
            <View style={styles.flagellumBase} />
            <View style={styles.flagellumFilament} />
          </View>
        );

      case 'pili':
        // Múltiples pili (pelos) alrededor de la célula
        return (
          <View style={styles.piliContainer}>
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
              styles.mesosomeOuter,
              {
                width: part.size,
                height: part.size,
                borderRadius: part.size / 2,
              },
            ]}
          >
            <View
              style={[
                styles.mesosomeInner,
                {
                  width: part.size * 0.6,
                  height: part.size * 0.6,
                  borderRadius: part.size * 0.3,
                },
              ]}
            />
          </View>
        );

      default:
        return null;
    }
  };

  return (
    <BaseCell
      config={prokaryoticCellConfig}
      onSelectPart={onSelectPart}
      renderCustomShape={renderCustomShape}
      cytoplasmColor="rgba(178, 223, 219, 0.3)"
      membraneColor="#64B5F6"
      membraneWidth={1.5}
      shape="rectangular"
    />
  );
};

const styles = StyleSheet.create({
  dnaCircle: {
    width: 45,
    height: 30,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#FF9100',
    borderStyle: 'dashed',
  },
  plasmidCircle: {
    borderWidth: 1.5,
    borderColor: '#FF6D00',
    borderStyle: 'dashed',
  },
  flagellumContainer: {
    width: 4,
    height: 80,
    position: 'relative',
  },
  flagellumBase: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#78909C',
    position: 'absolute',
    top: 0,
    left: -1,
  },
  flagellumFilament: {
    width: 4,
    height: 70,
    backgroundColor: '#90A4AE',
    borderTopRightRadius: 2,
    borderTopLeftRadius: 2,
    borderBottomRightRadius: 2,
    borderBottomLeftRadius: 2,
    position: 'absolute',
    top: 10,
    transform: [{ rotate: '5deg' }, { translateX: -1 }],
  },
  piliContainer: {
    width: '100%',
    height: '100%',
    position: 'relative',
  },
  pilus: {
    position: 'absolute',
    width: 2,
    height: 15,
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
