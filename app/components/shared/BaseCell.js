// components/shared/BaseCell.js
import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Dimensions,
} from 'react-native';
import { Mitochondrion, RoughER, GolgiApparatus, Nucleus } from './CellParts';

const { width } = Dimensions.get('window');
const CELL_SIZE = width * 0.85;

const BaseCell = ({
  config,
  onSelectPart,
  renderCustomShape,
  cytoplasmColor = 'rgba(240, 240, 240, 0.5)',
  membraneColor = '#7986CB',
  membraneWidth = 2,
  shape = 'round', // 'round' o 'rectangular'
}) => {
  const { parts, backgroundColor, label } = config;

  return (
    <View style={styles.container}>
      {/* Célula completa */}
      <View style={[styles.cellContainer, { backgroundColor }]}>
        {/* Membrana plasmática */}
        <View
          style={[
            styles.membrane,
            {
              borderWidth: membraneWidth,
              borderColor: membraneColor,
              borderRadius: shape === 'round' ? CELL_SIZE / 2 : 20,
            },
          ]}
        />

        {/* Citoplasma */}
        <View
          style={[
            styles.cytoplasm,
            {
              backgroundColor: cytoplasmColor,
              borderRadius: shape === 'round' ? CELL_SIZE / 2 : 15,
            },
          ]}
        />

        {/* Renderizar partes personalizadas primero */}
        {parts
          .filter(part => part.customShape)
          .map((part, index) => (
            <TouchableOpacity
              key={`custom-${index}`}
              activeOpacity={0.7}
              onPress={() => onSelectPart(part)}
              style={[
                styles.partContainer,
                {
                  top: part.position.top,
                  left: part.position.left,
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
          ))}

        {/* Renderizar partes estándar (principalmente circulares) */}
        {parts
          .filter(part => !part.customShape)
          .map((part, index) => {
            // Para mitocondrias, crear diseño interno
            if (part.innerStructure) {
              return (
                <TouchableOpacity
                  key={`standard-${index}`}
                  style={[
                    styles.partContainer,
                    {
                      top: part.position.top,
                      left: part.position.left,
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
                  <Mitochondrion
                    color={part.color}
                    style={{
                      width: part.width || part.size,
                      height: part.height || part.size,
                      borderRadius:
                        part.borderRadius || (part.size ? part.size / 2 : 0),
                      borderWidth: part.borderWidth || 0,
                      borderColor: part.borderColor || 'transparent',
                    }}
                  />
                </TouchableOpacity>
              );
            }

            // Para partes estándar
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
                    top: part.position.top,
                    left: part.position.left,
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

        {/* Etiqueta indicadora */}
        <View style={styles.labelContainer}>
          <Text style={styles.labelText}>{label}</Text>
        </View>
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
    width: CELL_SIZE,
    height: CELL_SIZE,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    marginVertical: 20,
  },
  membrane: {
    position: 'absolute',
    width: CELL_SIZE * 0.98,
    height: CELL_SIZE * 0.98,
    zIndex: 2,
  },
  cytoplasm: {
    position: 'absolute',
    width: CELL_SIZE * 0.95,
    height: CELL_SIZE * 0.95,
    zIndex: 0,
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
});

export default BaseCell;
