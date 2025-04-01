// components/shared/BaseCell.js - Improved version
import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Dimensions,
  PixelRatio,
} from 'react-native';

const { width, height } = Dimensions.get('window');
// Calculate cell size based on screen dimensions for better responsiveness
const CELL_SIZE = Math.min(width * 0.85, height * 0.5);
const SCALE = PixelRatio.get() >= 2 ? 1 : 0.9; // Adjustment for lower density screens

const BaseCell = ({
  config,
  onSelectPart,
  renderCustomShape,
  cytoplasmColor = 'rgba(240, 240, 240, 0.5)',
  membraneColor = '#7986CB',
  membraneWidth = 2,
  cellShape = 'circular', // 'circular', 'hexagonal', 'oval'
}) => {
  const { parts, backgroundColor, label } = config;

  // Renderizar la forma básica de la célula según el tipo
  const renderCellShape = () => {
    switch (cellShape) {
      case 'hexagonal':
        return (
          <>
            {/* Pared celular hexagonal */}
            <View
              style={[
                styles.hexagon,
                {
                  backgroundColor,
                  width: CELL_SIZE * SCALE,
                  height: CELL_SIZE * SCALE * 0.866, // Height proportion for a regular hexagon
                },
              ]}
            />

            {/* Membrana plasmática hexagonal (slightly smaller) */}
            <View
              style={[
                styles.hexagon,
                {
                  width: CELL_SIZE * SCALE * 0.9,
                  height: CELL_SIZE * SCALE * 0.9 * 0.866,
                  borderWidth: membraneWidth,
                  borderColor: membraneColor,
                  position: 'absolute',
                  backgroundColor: 'transparent',
                },
              ]}
            />

            {/* Cytoplasm hexagonal (even smaller) */}
            <View
              style={[
                styles.hexagon,
                {
                  width: CELL_SIZE * SCALE * 0.85,
                  height: CELL_SIZE * SCALE * 0.85 * 0.866,
                  backgroundColor: cytoplasmColor,
                  position: 'absolute',
                },
              ]}
            />
          </>
        );

      case 'oval':
        return (
          <>
            {/* Pared celular ovalada */}
            <View
              style={[
                styles.oval,
                {
                  backgroundColor,
                  width: CELL_SIZE * SCALE,
                  height: CELL_SIZE * SCALE * 0.7,
                },
              ]}
            />

            {/* Membrana plasmática ovalada */}
            <View
              style={[
                styles.oval,
                {
                  width: CELL_SIZE * SCALE * 0.9,
                  height: CELL_SIZE * SCALE * 0.7 * 0.9,
                  borderWidth: membraneWidth,
                  borderColor: membraneColor,
                  position: 'absolute',
                  backgroundColor: 'transparent',
                },
              ]}
            />

            {/* Citoplasma ovalado */}
            <View
              style={[
                styles.oval,
                {
                  width: CELL_SIZE * SCALE * 0.85,
                  height: CELL_SIZE * SCALE * 0.85 * 0.65,
                  backgroundColor: cytoplasmColor,
                  position: 'absolute',
                },
              ]}
            />
          </>
        );

      case 'circular':
      default:
        return (
          <>
            {/* Membrana externa (circular) */}
            <View
              style={[
                styles.circle,
                {
                  width: CELL_SIZE * SCALE,
                  height: CELL_SIZE * SCALE,
                  backgroundColor,
                },
              ]}
            />

            {/* Membrana plasmática */}
            <View
              style={[
                styles.circle,
                {
                  width: CELL_SIZE * SCALE * 0.9,
                  height: CELL_SIZE * SCALE * 0.9,
                  borderWidth: membraneWidth,
                  borderColor: membraneColor,
                  position: 'absolute',
                  backgroundColor: 'transparent',
                },
              ]}
            />

            {/* Citoplasma */}
            <View
              style={[
                styles.circle,
                {
                  width: CELL_SIZE * SCALE * 0.85,
                  height: CELL_SIZE * SCALE * 0.85,
                  backgroundColor: cytoplasmColor,
                  position: 'absolute',
                },
              ]}
            />
          </>
        );
    }
  };

  // Calculate position in pixels instead of percentages to avoid distortion
  const calculatePosition = position => {
    const { top, left } = position;
    // Convert percentage values to actual pixel values
    const topPixel = CELL_SIZE * (parseFloat(top) / 100);
    const leftPixel = CELL_SIZE * (parseFloat(left) / 100);
    return { top: topPixel, left: leftPixel };
  };

  return (
    <View style={styles.container}>
      {/* Complete cell */}
      <View
        style={[styles.cellContainer, { width: CELL_SIZE, height: CELL_SIZE }]}
      >
        {renderCellShape()}

        {/* Render custom shaped parts first */}
        {parts
          .filter(part => part.customShape)
          .map((part, index) => {
            const position = calculatePosition(part.position);
            return (
              <TouchableOpacity
                key={`custom-${index}`}
                activeOpacity={0.7}
                onPress={() => onSelectPart(part)}
                style={[
                  styles.partContainer,
                  {
                    top: position.top,
                    left: position.left,
                    zIndex: part.zIndex || 1,
                    transform: [
                      { translateX: -(part.width || part.size) / 2 },
                      { translateY: -(part.height || part.size) / 2 },
                      ...(part.rotation ? [{ rotate: part.rotation }] : []),
                    ],
                  },
                ]}
              >
                {renderCustomShape(part)}
              </TouchableOpacity>
            );
          })}

        {/* Render standard parts (mostly circular) */}
        {parts
          .filter(part => !part.customShape)
          .map((part, index) => {
            const position = calculatePosition(part.position);
            // For mitochondria, create internal design
            if (part.innerStructure) {
              return (
                <TouchableOpacity
                  key={`standard-${index}`}
                  style={[
                    styles.partContainer,
                    {
                      top: position.top,
                      left: position.left,
                      zIndex: part.zIndex || 1,
                      transform: [
                        { translateX: -(part.width || part.size) / 2 },
                        { translateY: -(part.height || part.size) / 2 },
                        ...(part.rotation ? [{ rotate: part.rotation }] : []),
                      ],
                    },
                  ]}
                  activeOpacity={0.7}
                  onPress={() => onSelectPart(part)}
                >
                  {/* Use the Mitochondrion component from imported components */}
                  <View
                    style={{
                      width: part.width || part.size,
                      height: part.height || part.size,
                      borderRadius:
                        part.borderRadius || (part.size ? part.size / 2 : 0),
                      backgroundColor: part.color,
                      borderWidth: part.borderWidth || 0,
                      borderColor: part.borderColor || 'transparent',
                      overflow: 'hidden',
                    }}
                  >
                    <View style={styles.mitochondrialCrista1} />
                    <View style={styles.mitochondrialCrista2} />
                    <View style={styles.mitochondrialCrista3} />
                  </View>
                </TouchableOpacity>
              );
            }

            // For standard parts
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
                    top: position.top,
                    left: position.left,
                    zIndex: part.zIndex || 1,
                    borderWidth: part.borderWidth || 0,
                    borderColor: part.borderColor || 'transparent',
                    transform: [
                      { translateX: -(part.width || part.size) / 2 },
                      { translateY: -(part.height || part.size) / 2 },
                      ...(part.rotation ? [{ rotate: part.rotation }] : []),
                    ],
                  },
                ]}
                activeOpacity={0.7}
                onPress={() => onSelectPart(part)}
              />
            );
          })}

        {/* Label indicator */}
        <View style={styles.labelContainer}>
          <Text style={styles.labelText}>{label}</Text>
        </View>

        {/* Flagellum (tail) - Only visible for prokaryotic cell */}
        {cellShape === 'oval' && (
          <View style={styles.flagellumContainer}>
            <View style={styles.flagellumBase} />
            <View style={styles.flagellumFilament} />
          </View>
        )}
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
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    marginVertical: 20,
  },
  circle: {
    borderRadius: CELL_SIZE / 2,
  },
  // Hexagonal style
  hexagon: {
    backgroundColor: '#baffc9',
    borderRadius: 15, // Slightly rounded edges
    // Using clipPath to create hexagonal shape
    clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
  },
  // Oval style
  oval: {
    borderRadius: CELL_SIZE / 2, // Large radius to create oval shape
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
  partContainer: {
    position: 'absolute',
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
  flagellumContainer: {
    position: 'absolute',
    right: -40,
    top: '40%',
    width: 40,
    height: 15,
    zIndex: 10,
  },
  flagellumBase: {
    position: 'absolute',
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#78909C',
    left: 0,
    top: 2,
  },
  flagellumFilament: {
    position: 'absolute',
    width: 35,
    height: 4,
    backgroundColor: '#90A4AE',
    left: 8,
    top: 5,
    borderTopRightRadius: 2,
    borderBottomRightRadius: 2,
  },
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
});

export default BaseCell;
