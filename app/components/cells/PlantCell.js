import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import BaseCell from '../shared/BaseCell';
import {
  RoughER,
  GolgiApparatus,
  Nucleus,
  Chloroplast,
} from '../shared/CellParts';
import { plantCellConfig } from '../../data/cellVisualizations';

// Obtener las dimensiones de la pantalla del dispositivo
const { width } = Dimensions.get('window');

// Factor de escala para ajustar el tamaño de las partes de la célula según el ancho de pantalla
// Si la pantalla es menor a 360px, reducir el tamaño al 80%
const SCALE_FACTOR = width < 360 ? 0.8 : 1;

/**
 * Componente PlantCell - Renderiza una célula vegetal interactiva
 * Las células vegetales se caracterizan por tener pared celular, cloroplastos,
 * vacuola central grande y plasmodesmos
 * @param {Function} onSelectPart - Función callback que se ejecuta cuando se selecciona una parte de la célula
 */
const PlantCell = ({ onSelectPart }) => {
  /**
   * Función para renderizar formas personalizadas específicas de células vegetales
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
      case 'chloroplast':
        // Renderizar cloroplastos - orgánulos únicos de células vegetales
        // Responsables de la fotosíntesis, contienen clorofila que da el color verde
        return (
          <Chloroplast
            color={scaledPart.color}
            width={scaledPart.width}
            height={scaledPart.height}
            borderRadius={scaledPart.borderRadius}
          />
        );

      case 'rough-er':
        // Renderizar el retículo endoplasmático rugoso
        // En células vegetales está muy desarrollado para síntesis de proteínas
        return (
          <RoughER
            color={scaledPart.color}
            width={scaledPart.width}
            height={scaledPart.height}
          />
        );

      case 'golgi':
        // Renderizar el aparato de Golgi
        // En plantas procesa proteínas y forma la pared celular
        return (
          <GolgiApparatus
            color={scaledPart.color}
            width={scaledPart.width}
            height={scaledPart.height}
          />
        );

      case 'amyloplast':
        // Renderizar amiloplastos - orgánulos especializados en almacenar almidón
        // Tipo de plastidio no pigmentado, común en raíces y semillas
        return (
          <View
            style={[
              styles.amyloplast,
              {
                width: scaledPart.size,
                height: scaledPart.size,
                backgroundColor: scaledPart.color,
                borderRadius: scaledPart.size / 2, // Forma circular
              },
            ]}
          >
            {/* Gránulos de almidón dentro del amiloplasto */}
            <View style={styles.starchGranule} />
          </View>
        );

      case 'plasmodesmata':
        // Renderizar plasmodesmos - canales únicos de células vegetales
        // Conectan células adyacentes permitiendo comunicación y transporte
        return (
          <>
            {/* Plasmodesmos en las cuatro direcciones de la pared celular */}
            <PlasmodesmataUnit position="top" />
            <PlasmodesmataUnit position="bottom" />
            <PlasmodesmataUnit position="left" />
            <PlasmodesmataUnit position="right" />
          </>
        );

      case 'nucleus':
        // Renderizar el núcleo de la célula vegetal
        // Controla las actividades celulares y contiene el ADN
        return (
          <Nucleus
            color={scaledPart.color}
            size={scaledPart.size}
            borderColor={scaledPart.borderColor}
          />
        );

      default:
        // Si no hay forma personalizada definida, no renderizar nada
        return null;
    }
  };

  /**
   * Componente para una unidad individual de plasmodesmo
   * @param {string} position - Posición del plasmodesmo ('top', 'bottom', 'left', 'right')
   */
  const PlasmodesmataUnit = ({ position }) => {
    // Determinar si el plasmodesmo debe ser vertical u horizontal
    const isVertical = position === 'top' || position === 'bottom';

    return (
      <View
        style={[
          styles.plasmodesmataBase,
          {
            // Ajustar dimensiones según orientación
            width: isVertical ? 15 * SCALE_FACTOR : 20 * SCALE_FACTOR,
            height: isVertical ? 20 * SCALE_FACTOR : 15 * SCALE_FACTOR,
            // Posicionar según la dirección especificada
            [position]: '5%', // Establecer la propiedad de posición (top, bottom, left, right)
            left:
              position === 'right'
                ? 'auto' // Si está a la derecha, no usar left
                : position === 'left'
                ? '5%' // Si está a la izquierda, usar 5%
                : '50%', // Si está arriba o abajo, centrar horizontalmente
            right: position === 'right' ? '5%' : 'auto', // Solo usar right si position es 'right'
          },
        ]}
      >
        {/* Cordón plasmático - el canal interno del plasmodesmo */}
        <View
          style={[
            styles.plasmaCord,
            {
              // Ajustar dimensiones del cordón según orientación
              height: isVertical ? '90%' : 2, // Vertical: alto, Horizontal: delgado
              width: isVertical ? 2 : '90%', // Vertical: delgado, Horizontal: ancho
            },
          ]}
        />
      </View>
    );
  };

  // Crear una versión escalada de la configuración de la célula vegetal
  const scaledConfig = {
    ...plantCellConfig,
    parts: plantCellConfig.parts.map(part => ({
      ...part,
      // Aplicar factor de escala a todas las dimensiones de cada parte
      size: part.size ? part.size * SCALE_FACTOR : undefined,
      width: part.width ? part.width * SCALE_FACTOR : undefined,
      height: part.height ? part.height * SCALE_FACTOR : undefined,
    })),
  };

  // Renderizar el componente base de la célula con configuración específica para célula vegetal
  return (
    <BaseCell
      config={scaledConfig} // Configuración escalada de la célula
      onSelectPart={onSelectPart} // Función callback para selección de partes
      renderCustomShape={renderCustomShape} // Función para renderizar formas personalizadas
      cytoplasmColor="rgba(220, 237, 200, 0.4)" // Color del citoplasma (verde muy claro)
      membraneColor="#9CCC65" // Color de la membrana celular (verde claro)
      cellShape="hexagonal" // Forma hexagonal característica de células vegetales por la pared celular
    />
  );
};

// Estilos CSS para los diferentes orgánulos de la célula vegetal
const styles = StyleSheet.create({
  // Contenedor principal del amiloplasto
  amyloplast: {
    justifyContent: 'center', // Centrar contenido verticalmente
    alignItems: 'center', // Centrar contenido horizontalmente
  },

  // Gránulo de almidón dentro del amiloplasto
  starchGranule: {
    position: 'absolute',
    width: '60%', // 60% del tamaño del amiloplasto
    height: '60%',
    backgroundColor: '#F0F0F0', // Color gris muy claro (almidón)
    borderRadius: 10, // Bordes redondeados
    borderWidth: 1, // Borde delgado
    borderColor: '#E0E0E0', // Color del borde ligeramente más oscuro
  },

  // Estructura base del plasmodesmo
  plasmodesmataBase: {
    position: 'absolute',
    backgroundColor: '#DCEDC8', // Color verde muy claro para el canal
    borderRadius: 3, // Bordes ligeramente redondeados
    borderWidth: 1, // Borde para definir la estructura
    borderColor: '#AED581', // Color verde claro para el borde
    zIndex: 2, // Asegurar que aparezca sobre otros elementos
    alignItems: 'center', // Centrar el cordón plasmático horizontalmente
    justifyContent: 'center', // Centrar el cordón plasmático verticalmente
  },

  // Cordón plasmático - el canal interno del plasmodesmo
  plasmaCord: {
    backgroundColor: '#9CCC65', // Color verde medio para el cordón
    position: 'absolute', // Posicionamiento absoluto dentro del plasmodesmo
  },
});

export default PlantCell;
