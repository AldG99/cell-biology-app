// components/shared/CellParts.js
import React from 'react';
import { View, StyleSheet } from 'react-native';

// Componente para Mitocondria
export const Mitochondrion = ({ color = '#F48FB1', style }) => (
  <View style={[style, { backgroundColor: color }]}>
    <View style={styles.mitochondrialCrista1} />
    <View style={styles.mitochondrialCrista2} />
    <View style={styles.mitochondrialCrista3} />
  </View>
);

// Componente para Retículo Endoplásmico Rugoso
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
      },
      style,
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
            top: 3 + i * 3,
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

// Componente para Aparato de Golgi
export const GolgiApparatus = ({
  color = '#A5D6A7',
  width = 45,
  height = 25,
  style,
}) => (
  <View style={[style, { width, height }]}>
    {/* Sacos superpuestos del aparato de Golgi */}
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

// Componente para Núcleo
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
      },
      style,
    ]}
  >
    {/* Estructuras internas del núcleo */}
    <View style={styles.nucleolus} />

    {/* Cromosomas */}
    <View
      style={[
        styles.chromosome,
        { top: '30%', left: '35%', transform: [{ rotate: '45deg' }] },
      ]}
    />
    <View
      style={[
        styles.chromosome,
        { top: '60%', left: '40%', transform: [{ rotate: '-30deg' }] },
      ]}
    />
    <View
      style={[
        styles.chromosome,
        { top: '45%', left: '60%', transform: [{ rotate: '70deg' }] },
      ]}
    />

    {/* Poros nucleares */}
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

// Estilos compartidos
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
    width: 18,
    height: 18,
    borderRadius: 9,
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
