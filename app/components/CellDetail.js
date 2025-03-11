import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import CellVisualizationManager from './CellVisualizationManager';

const CellDetail = ({ cell, cellType }) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.descriptionContainer}>
        <Text style={styles.descriptionText}>{cell.description}</Text>
      </View>

      <CellVisualizationManager cellType={cellType} />

      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Partes Principales</Text>
        {cell.parts.map((part, index) => (
          <View key={index} style={styles.partItem}>
            <Text style={styles.partName}>{part.name}</Text>
            <Text style={styles.partDescription}>{part.description}</Text>
          </View>
        ))}
      </View>

      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Datos Interesantes</Text>
        {cell.facts.map((fact, index) => (
          <View key={index} style={styles.factItem}>
            <Text style={styles.factBullet}>•</Text>
            <Text style={styles.factText}>{fact}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  descriptionContainer: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  descriptionText: {
    fontSize: 16,
    lineHeight: 24,
  },
  sectionContainer: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 8,
    marginVertical: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingBottom: 5,
  },
  partItem: {
    marginBottom: 12,
  },
  partName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 3,
  },
  partDescription: {
    fontSize: 14,
    color: '#444',
  },
  factItem: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  factBullet: {
    fontSize: 18,
    marginRight: 8,
    color: '#3498db',
  },
  factText: {
    fontSize: 15,
    flex: 1,
  },
});

export default CellDetail;
