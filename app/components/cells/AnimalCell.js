import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import BaseCell from '../shared/BaseCell';
import { RoughER, GolgiApparatus, Nucleus } from '../shared/CellParts';
import { animalCellConfig } from '../../data/cellVisualizations';

// Obtener las dimensiones de la pantalla del dispositivo
const { width } = Dimensions.get('window');

// Factor de escala para ajustar el tamaño de las partes de la célula según el ancho de pantalla
// Si la pantalla es menor a 360px, reducir el tamaño al 80%
const SCALE_FACTOR = width < 360 ? 0.8 : 1;

/**
 * Componente AnimalCell - Renderiza una célula animal interactiva
 * @param {Function} onSelectPart - Función callback que se ejecuta cuando se selecciona una parte de la célula
 */
const AnimalCell = ({ onSelectPart }) => {
  /**
   * Función para renderizar formas personalizadas específicas de células animales
   * @param {Object} part - Objeto que contiene la configuración de la parte de la célula
   * @returns {JSX.Element|null} - Componente React o null si no hay forma personalizada
   */
  const renderCustomShape = part => {
    // Aplicar factor de escala a todas las dimensiones de la parte
    const scaledPart = {
      ...part,
      size: part.size ? part.size * SCALE_FACTOR : undefined,
      width: part.width ? part.width * SCALE_FACTOR : undefined,
      height: part.height ? part.height * SCALE_FACTOR : undefined,
    };

    // Switch para renderizar diferentes orgánulos según el tipo de forma personalizada
    switch (part.customShape) {
      case 'nucleus':
        // Renderizar el núcleo de la célula
        return (
          <Nucleus
            color={scaledPart.color}
            size={scaledPart.size}
            borderColor={scaledPart.borderColor}
          />
        );

      case 'rough-er':
        // Renderizar el retículo endoplasmático rugoso
        return (
          <RoughER
            color={scaledPart.color}
            width={scaledPart.width}
            height={scaledPart.height}
          />
        );

      case 'golgi':
        // Renderizar el aparato de Golgi
        return (
          <GolgiApparatus
            color={scaledPart.color}
            width={scaledPart.width}
            height={scaledPart.height}
          />
        );

      case 'centrosome':
        // Renderizar el centrosoma con sus centriolos perpendiculares
        return (
          <View style={styles.centrosome}>
            {/* Centriolo horizontal */}
            <View style={styles.centrosomeHorizontal} />
            {/* Centriolo vertical (perpendicular al horizontal) */}
            <View style={styles.centrosomeVertical} />
            {/* Material pericentriolar que rodea los centriolos */}
            <View style={styles.pericentriolarMaterial} />
          </View>
        );

      case 'cytoskeleton':
        // Renderizar el citoesqueleto con filamentos distribuidos aleatoriamente
        return (
          <View
            style={[
              styles.cytoskeleton,
              { width: scaledPart.size, height: scaledPart.size },
            ]}
          >
            {/* Generar 15 filamentos con posiciones, ángulos y tamaños aleatorios */}
            {/* Número reducido para mejor rendimiento */}
            {Array(15)
              .fill(0)
              .map((_, i) => {
                // Propiedades aleatorias para cada filamento
                const angle = Math.random() * 360; // Ángulo de rotación aleatorio
                const length = 20 + Math.random() * 60; // Longitud entre 20-80px
                const thickness = 1 + Math.random() * 0.5; // Grosor entre 1-1.5px
                const posTop = Math.random() * 100; // Posición vertical aleatoria
                const posLeft = Math.random() * 100; // Posición horizontal aleatoria

                return (
                  <View
                    key={i}
                    style={{
                      position: 'absolute',
                      width: length,
                      height: thickness,
                      backgroundColor: 'rgba(189, 189, 189, 0.4)', // Color gris semi-transparente
                      top: `${posTop}%`,
                      left: `${posLeft}%`,
                      transform: [{ rotate: `${angle}deg` }], // Rotar el filamento
                    }}
                  />
                );
              })}
          </View>
        );

      case 'lysosome':
        // Renderizar lisosoma con enzimas digestivas visualizadas como pequeños círculos
        return (
          <View
            style={[
              styles.lysosome,
              {
                width: scaledPart.size,
                height: scaledPart.size,
                borderRadius: scaledPart.size / 2, // Hacer circular
                backgroundColor: scaledPart.color,
              },
            ]}
          >
            {/* Visualización de enzimas lisosomales como pequeñas formas dentro del lisosoma */}
            <View style={styles.lysosomeEnzyme1} />
            <View style={styles.lysosomeEnzyme2} />
            <View style={styles.lysosomeEnzyme3} />
          </View>
        );

      default:
        // Si no hay forma personalizada definida, no renderizar nada
        return null;
    }
  };

  // Crear una versión escalada de la configuración de la célula animal
  const scaledConfig = {
    ...animalCellConfig,
    parts: animalCellConfig.parts.map(part => ({
      ...part,
      // Aplicar factor de escala a todas las dimensiones de cada parte
      size: part.size ? part.size * SCALE_FACTOR : undefined,
      width: part.width ? part.width * SCALE_FACTOR : undefined,
      height: part.height ? part.height * SCALE_FACTOR : undefined,
    })),
  };

  // Renderizar el componente base de la célula con configuración específica para célula animal
  return (
    <BaseCell
      config={scaledConfig} // Configuración escalada de la célula
      onSelectPart={onSelectPart} // Función callback para selección de partes
      renderCustomShape={renderCustomShape} // Función para renderizar formas personalizadas
      cytoplasmColor="rgba(255, 205, 210, 0.6)" // Color del citoplasma (rosa claro)
      membraneColor="#E57373" // Color de la membrana celular (rojo claro)
      cellShape="circular" // Forma circular característica de células animales
    />
  );
};

// Estilos CSS para los diferentes orgánulos de la célula animal
const styles = StyleSheet.create({
  // Estilos para el centrosoma
  centrosome: {
    width: 22 * SCALE_FACTOR,
    height: 22 * SCALE_FACTOR,
    position: 'relative', // Posición relativa para posicionar los centriolos internos
  },

  // Centriolo orientado horizontalmente
  centrosomeHorizontal: {
    position: 'absolute',
    width: 18 * SCALE_FACTOR,
    height: 8 * SCALE_FACTOR,
    backgroundColor: '#BA68C8', // Color púrpura
    borderRadius: 2 * SCALE_FACTOR, // Bordes redondeados
    top: '30%',
    left: '10%',
  },

  // Centriolo orientado verticalmente (perpendicular al horizontal)
  centrosomeVertical: {
    position: 'absolute',
    width: 8 * SCALE_FACTOR,
    height: 18 * SCALE_FACTOR,
    backgroundColor: '#BA68C8', // Mismo color que el horizontal
    borderRadius: 2 * SCALE_FACTOR,
    top: '20%',
    left: '40%',
  },

  // Material pericentriolar que rodea los centriolos
  pericentriolarMaterial: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(206, 147, 216, 0.3)', // Color púrpura semi-transparente
    borderRadius: 11 * SCALE_FACTOR, // Forma circular
    top: 0,
    left: 0,
  },

  // Contenedor para el citoesqueleto
  cytoskeleton: {
    position: 'absolute',
    overflow: 'hidden', // Ocultar filamentos que se salgan del contenedor
  },

  // Contenedor para el lisosoma
  lysosome: {
    position: 'relative',
    overflow: 'hidden', // Ocultar contenido que se salga del lisosoma
  },

  // Primera enzima lisosomal (la más grande)
  lysosomeEnzyme1: {
    position: 'absolute',
    width: '35%', // 35% del tamaño del lisosoma
    height: '35%',
    backgroundColor: '#F8BBD0', // Color rosa claro
    borderRadius: 4 * SCALE_FACTOR,
    top: '20%',
    left: '20%',
  },

  // Segunda enzima lisosomal (tamaño medio)
  lysosomeEnzyme2: {
    position: 'absolute',
    width: '25%', // 25% del tamaño del lisosoma
    height: '25%',
    backgroundColor: '#F8BBD0', // Mismo color que la primera
    borderRadius: 3 * SCALE_FACTOR,
    bottom: '20%',
    right: '20%',
  },

  // Tercera enzima lisosomal (la más pequeña)
  lysosomeEnzyme3: {
    position: 'absolute',
    width: '20%', // 20% del tamaño del lisosoma
    height: '20%',
    backgroundColor: '#F8BBD0', // Mismo color que las otras
    borderRadius: 2 * SCALE_FACTOR,
    bottom: '30%',
    left: '40%',
  },
});

export default AnimalCell;
