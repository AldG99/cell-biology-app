// components/shared/CellParts.js - Improved version
import React from 'react';
import { View, StyleSheet } from 'react-native';

// Improved Mitochondrion Component
export const Mitochondrion = ({ color = '#F48FB1', style }) => (
  <View
    style={[
      { backgroundColor: color, borderRadius: 15, overflow: 'hidden' },
      style,
    ]}
  >
    {/* Inner cristae structures */}
    <View style={styles.mitochondrialCrista1} />
    <View style={styles.mitochondrialCrista2} />
    <View style={styles.mitochondrialCrista3} />
  </View>
);

// Improved Rough Endoplasmic Reticulum Component
export const RoughER = ({
  color = '#90CAF9',
  width = 60,
  height = 30,
  style,
}) => (
  <View
    style={[
      {
        backgroundColor: color,
        width,
        height,
        borderRadius: 10,
        overflow: 'hidden',
        position: 'relative',
      },
      style,
    ]}
  >
    {/* Ribosomes on the RER - now using absolute positioning for better rendering */}
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
            top: 3 + i * 3,
            right: 2,
          }}
        />
      ))}
    {/* Internal lines representing membranes */}
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

// Improved Golgi Apparatus Component
export const GolgiApparatus = ({
  color = '#A5D6A7',
  width = 45,
  height = 25,
  style,
}) => (
  <View style={[style, { width, height }]}>
    {/* Stacked sacs of the Golgi apparatus */}
    {Array(5)
      .fill(0)
      .map((_, i) => (
        <View
          key={i}
          style={{
            position: 'absolute',
            width: width - i * 4,
            height: 5,
            backgroundColor: i === 0 ? '#66BB6A' : i === 4 ? '#81C784' : color,
            borderRadius: 3,
            top: i * 5,
          }}
        />
      ))}
    {/* Transport vesicles */}
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

// Improved Nucleus Component
export const Nucleus = ({
  color = '#FFCC80',
  size = 60,
  borderColor = '#EF6C00',
  style,
}) => (
  <View
    style={[
      {
        width: size,
        height: size,
        backgroundColor: color,
        borderRadius: size / 2,
        borderWidth: 2,
        borderColor: borderColor,
        position: 'relative',
        overflow: 'hidden',
      },
      style,
    ]}
  >
    {/* Nucleolus */}
    <View
      style={[
        styles.nucleolus,
        { width: size * 0.3, height: size * 0.3, borderRadius: size * 0.15 },
      ]}
    />

    {/* Chromosomes */}
    <View
      style={[
        styles.chromosome,
        {
          top: size * 0.3,
          left: size * 0.35,
          transform: [{ rotate: '45deg' }],
        },
      ]}
    />
    <View
      style={[
        styles.chromosome,
        {
          top: size * 0.6,
          left: size * 0.4,
          transform: [{ rotate: '-30deg' }],
        },
      ]}
    />
    <View
      style={[
        styles.chromosome,
        {
          top: size * 0.45,
          left: size * 0.6,
          transform: [{ rotate: '70deg' }],
        },
      ]}
    />

    {/* Nuclear pores */}
    {Array(8)
      .fill(0)
      .map((_, i) => {
        const angle = (i / 8) * 2 * Math.PI;
        const radius = size / 2 - 3;
        const x = radius * Math.cos(angle);
        const y = radius * Math.sin(angle);

        return (
          <View
            key={i}
            style={{
              position: 'absolute',
              width: 6,
              height: 6,
              backgroundColor: borderColor,
              borderRadius: 3,
              left: size / 2 + x - 3,
              top: size / 2 + y - 3,
            }}
          />
        );
      })}
  </View>
);

// Chloroplast Component for Plant Cells
export const Chloroplast = ({
  color = '#66BB6A',
  width = 35,
  height = 22,
  borderRadius = 12,
  style,
}) => (
  <View
    style={[
      {
        backgroundColor: color,
        width,
        height,
        borderRadius,
        position: 'relative',
        overflow: 'hidden',
      },
      style,
    ]}
  >
    {/* Thylakoid membranes and grana */}
    <View
      style={{
        position: 'absolute',
        width: '80%',
        height: 2,
        backgroundColor: '#43A047',
        top: '30%',
        left: '10%',
      }}
    />
    <View
      style={{
        position: 'absolute',
        width: '70%',
        height: 2,
        backgroundColor: '#43A047',
        top: '50%',
        left: '15%',
      }}
    />
    <View
      style={{
        position: 'absolute',
        width: '60%',
        height: 2,
        backgroundColor: '#43A047',
        top: '70%',
        left: '20%',
      }}
    />
    <View
      style={{
        position: 'absolute',
        width: '20%',
        height: '20%',
        backgroundColor: '#81C784',
        borderRadius: 3,
        top: '40%',
        left: '65%',
      }}
    />
  </View>
);

// Plasmid Component for Prokaryotic Cells
export const Plasmid = ({ color = '#FF6D00', size = 15, style }) => (
  <View
    style={[
      {
        width: size,
        height: size,
        borderRadius: size / 2,
        borderWidth: 1.5,
        borderColor: color,
        borderStyle: 'dashed',
      },
      style,
    ]}
  />
);

// Shared styles
const styles = StyleSheet.create({
  mitochondrialCrista1: {
    position: 'absolute',
    width: '70%',
    height: 2,
    backgroundColor: '#F48FB1',
    top: '30%',
    left: '15%',
  },
  mitochondrialCrista2: {
    position: 'absolute',
    width: '70%',
    height: 2,
    backgroundColor: '#F48FB1',
    top: '50%',
    left: '15%',
  },
  mitochondrialCrista3: {
    position: 'absolute',
    width: '70%',
    height: 2,
    backgroundColor: '#F48FB1',
    top: '70%',
    left: '15%',
  },
  nucleolus: {
    backgroundColor: '#FB8C00',
    position: 'absolute',
    top: '35%',
    left: '35%',
  },
  chromosome: {
    width: 16,
    height: 5,
    backgroundColor: '#EF6C00',
    borderRadius: 2,
    position: 'absolute',
  },
});

export default {
  Mitochondrion,
  RoughER,
  GolgiApparatus,
  Nucleus,
  Chloroplast,
  Plasmid,
};
