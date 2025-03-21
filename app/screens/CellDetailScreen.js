import React, { useEffect } from 'react';
import { SafeAreaView, StyleSheet, Animated } from 'react-native';
import CellDetail from '../components/CellDetail';
import cellData from '../data/cellData';

const CellDetailScreen = ({ route }) => {
  // Obtener el tipo de célula de los parámetros de navegación
  const { cellType } = route.params;

  // Animación de aparición
  const fadeAnim = new Animated.Value(0);

  useEffect(() => {
    // Animar la aparición del contenido
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 800,
      useNativeDriver: true,
    }).start();
  }, []);

  // Obtener los datos de la célula
  const cell = cellData[cellType];

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View style={{ flex: 1, opacity: fadeAnim }}>
        <CellDetail cell={cell} cellType={cellType} />
      </Animated.View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
});

export default CellDetailScreen;
