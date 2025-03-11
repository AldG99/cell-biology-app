import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import AnimalCell from './cells/AnimalCell';
import PlantCell from './cells/PlantCell';
import ProkaryoticCell from './cells/ProkaryoticCell';
import EukaryoticCell from './cells/EukaryoticCell';

const { width } = Dimensions.get('window');

const CellVisualizationManager = ({ cellType }) => {
  const [selectedPart, setSelectedPart] = useState(null);
  const [fadeAnim] = useState(new Animated.Value(0));

  const handleSelectPart = part => {
    setSelectedPart(part);
    // Animar la aparición de información
    Animated.sequence([
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start();
  };

  // Renderizar el tipo de célula adecuado según el prop cellType
  const renderCell = () => {
    switch (cellType) {
      case 'animal':
        return <AnimalCell onSelectPart={handleSelectPart} />;
      case 'vegetal':
        return <PlantCell onSelectPart={handleSelectPart} />;
      case 'procariota':
        return <ProkaryoticCell onSelectPart={handleSelectPart} />;
      case 'eucariota':
        return <EukaryoticCell onSelectPart={handleSelectPart} />;
      default:
        return (
          <View style={styles.errorContainer}>
            <Text style={styles.errorText}>Tipo de célula no reconocido</Text>
          </View>
        );
    }
  };

  // Obtener el título correspondiente al tipo de célula
  const getCellTitle = () => {
    switch (cellType) {
      case 'animal':
        return 'Visualización Interactiva de Célula Animal';
      case 'vegetal':
        return 'Visualización Interactiva de Célula Vegetal';
      case 'procariota':
        return 'Visualización Interactiva de Célula Procariota';
      case 'eucariota':
        return 'Visualización Interactiva de Célula Eucariota';
      default:
        return 'Visualización de Célula';
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{getCellTitle()}</Text>
      <Text style={styles.instruction}>
        Toca las diferentes partes para obtener información
      </Text>

      {/* Contenedor de la célula */}
      <View style={styles.cellContainer}>{renderCell()}</View>

      {/* Panel de información */}
      <Animated.View
        style={[
          styles.infoPanel,
          {
            opacity: fadeAnim,
            transform: [
              {
                translateY: fadeAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [10, 0],
                }),
              },
            ],
          },
        ]}
      >
        {selectedPart ? (
          <>
            <Text style={styles.partName}>{selectedPart.name}</Text>
            <Text style={styles.partDescription}>
              {selectedPart.description}
            </Text>
          </>
        ) : (
          <Text style={styles.placeholderText}>
            Selecciona una parte de la célula para ver su descripción
          </Text>
        )}

        {/* Botón para cerrar la información */}
        {selectedPart && (
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => setSelectedPart(null)}
          >
            <Text style={styles.closeButtonText}>Cerrar</Text>
          </TouchableOpacity>
        )}
      </Animated.View>

      {/* Leyenda */}
      <View style={styles.legendContainer}>
        <Text style={styles.legendTitle}>Organelos principales:</Text>
        <View style={styles.legendItem}>
          <View style={[styles.legendDot, { backgroundColor: '#FF9E80' }]} />
          <Text style={styles.legendText}>Núcleo</Text>
        </View>

        <View style={styles.legendItem}>
          <View style={[styles.legendDot, { backgroundColor: '#F48FB1' }]} />
          <Text style={styles.legendText}>Mitocondria</Text>
        </View>

        {cellType === 'vegetal' && (
          <View style={styles.legendItem}>
            <View style={[styles.legendDot, { backgroundColor: '#66BB6A' }]} />
            <Text style={styles.legendText}>Cloroplasto</Text>
          </View>
        )}

        {cellType === 'procariota' && (
          <View style={styles.legendItem}>
            <View style={[styles.legendDot, { backgroundColor: '#FF9100' }]} />
            <Text style={styles.legendText}>ADN (nucleoide)</Text>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
    textAlign: 'center',
  },
  instruction: {
    fontSize: 14,
    color: '#666',
    marginBottom: 15,
    fontStyle: 'italic',
    textAlign: 'center',
  },
  cellContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  errorContainer: {
    width: width * 0.8,
    height: width * 0.8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffcdd2',
    borderRadius: 10,
  },
  errorText: {
    color: '#b71c1c',
    fontSize: 16,
    fontWeight: 'bold',
  },
  infoPanel: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 8,
    width: width * 0.9,
    minHeight: 100,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  partName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  partDescription: {
    fontSize: 14,
    color: '#444',
    lineHeight: 20,
  },
  placeholderText: {
    fontSize: 14,
    color: '#999',
    fontStyle: 'italic',
    textAlign: 'center',
    paddingVertical: 20,
  },
  closeButton: {
    alignSelf: 'center',
    marginTop: 15,
    paddingVertical: 8,
    paddingHorizontal: 20,
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
  },
  closeButtonText: {
    fontSize: 14,
    color: '#555',
  },
  legendContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    padding: 10,
    borderRadius: 8,
    width: width * 0.9,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
  },
  legendTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 3,
  },
  legendDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 8,
  },
  legendText: {
    fontSize: 12,
    color: '#555',
  },
});

export default CellVisualizationManager;
