import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import BaseCell from '../shared/BaseCell';
import { Plasmid } from '../shared/CellParts';
import { prokaryoticCellConfig } from '../../data/cellVisualizations';

// Obtener las dimensiones de la pantalla del dispositivo
const { width } = Dimensions.get('window');

// Factor de escala para ajustar el tamaño de las partes de la célula según el ancho de pantalla
// Si la pantalla es menor a 360px, reducir el tamaño al 80%
const SCALE_FACTOR = width < 360 ? 0.8 : 1;

/**
 * Componente ProkaryoticCell - Renderiza una célula procariota interactiva
 * Las células procariotas se caracterizan por NO tener núcleo definido,
 * ADN libre en el citoplasma (nucleoide), ausencia de orgánulos membranosos,
 * y estructuras únicas como flagelos, pili y plásmidos
 * @param {Function} onSelectPart - Función callback que se ejecuta cuando se selecciona una parte de la célula
 */
const ProkaryoticCell = ({ onSelectPart }) => {
  /**
   * Función para renderizar formas personalizadas específicas de células procariotas
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

    // Switch para renderizar diferentes estructuras según el tipo de forma personalizada
    switch (part.customShape) {
      case 'dna':
        // Renderizar ADN circular dentro del nucleoide
        // En procariotas, el ADN está libre en el citoplasma, no encerrado en núcleo
        return <View style={styles.dnaCircle} />;

      case 'plasmid':
        // Renderizar plásmido - pequeño círculo de ADN independiente
        // Los plásmidos son característicos de bacterias y pueden transferirse entre células
        return <Plasmid color={scaledPart.color} size={scaledPart.size} />;

      case 'flagellum':
        // Renderizar flagelo - estructura larga y ondulada para locomoción
        // Permite el movimiento de la bacteria en medios líquidos
        return (
          <View style={styles.flagellumContainer}>
            {/* Base del flagelo - punto de anclaje a la membrana celular */}
            <View style={styles.flagellumBase} />
            {/* Filamento del flagelo - la parte que se extiende y permite el movimiento */}
            <View style={styles.flagellumFilament} />
          </View>
        );

      case 'pili':
        // Renderizar pili - múltiples "pelos" alrededor de la célula
        // Estructuras para adherencia, intercambio genético y comunicación
        return (
          <View style={styles.piliContainer}>
            {/* Múltiples pili en diferentes posiciones y ángulos */}
            {/* Pilus superior izquierdo */}
            <View
              style={[
                styles.pilus,
                { top: '10%', left: '30%', transform: [{ rotate: '-30deg' }] },
              ]}
            />
            {/* Pilus superior centro */}
            <View
              style={[
                styles.pilus,
                { top: '10%', left: '50%', transform: [{ rotate: '-10deg' }] },
              ]}
            />
            {/* Pilus superior derecho */}
            <View
              style={[
                styles.pilus,
                { top: '10%', left: '70%', transform: [{ rotate: '20deg' }] },
              ]}
            />
            {/* Pilus adicional centro-derecho */}
            <View
              style={[
                styles.pilus,
                { top: '15%', left: '60%', transform: [{ rotate: '5deg' }] },
              ]}
            />
            {/* Pilus adicional centro-izquierdo */}
            <View
              style={[
                styles.pilus,
                { top: '15%', left: '40%', transform: [{ rotate: '-5deg' }] },
              ]}
            />
          </View>
        );

      case 'mesosome':
        // Renderizar mesosoma - invaginación de la membrana celular
        // Estructura que aumenta la superficie de membrana para reacciones metabólicas
        return (
          <View
            style={[
              styles.mesosomeOuter,
              {
                width: scaledPart.size,
                height: scaledPart.size,
                borderRadius: scaledPart.size / 2, // Forma circular
              },
            ]}
          >
            {/* Parte interna del mesosoma - representa el espacio invaginado */}
            <View
              style={[
                styles.mesosomeInner,
                {
                  width: scaledPart.size * 0.6, // 60% del tamaño externo
                  height: scaledPart.size * 0.6,
                  borderRadius: scaledPart.size * 0.3, // Mantener forma circular
                },
              ]}
            />
          </View>
        );

      default:
        // Si no hay forma personalizada definida, no renderizar nada
        return null;
    }
  };

  // Crear una versión escalada de la configuración de la célula procariota
  const scaledConfig = {
    ...prokaryoticCellConfig,
    parts: prokaryoticCellConfig.parts.map(part => ({
      ...part,
      // Aplicar factor de escala a todas las dimensiones de cada parte
      size: part.size ? part.size * SCALE_FACTOR : undefined,
      width: part.width ? part.width * SCALE_FACTOR : undefined,
      height: part.height ? part.height * SCALE_FACTOR : undefined,
    })),
  };

  // Renderizar el componente base de la célula con configuración específica para célula procariota
  return (
    <BaseCell
      config={scaledConfig} // Configuración escalada de la célula
      onSelectPart={onSelectPart} // Función callback para selección de partes
      renderCustomShape={renderCustomShape} // Función para renderizar formas personalizadas
      cytoplasmColor="rgba(178, 223, 219, 0.3)" // Color del citoplasma (azul-verde claro)
      membraneColor="#64B5F6" // Color de la membrana celular (azul claro)
      membraneWidth={1.5} // Grosor de la membrana ligeramente mayor para simplicidad procariota
      cellShape="oval" // Forma oval característica con flagelo de células procariotas
    />
  );
};

// Estilos CSS para las diferentes estructuras de la célula procariota
const styles = StyleSheet.create({
  // Círculo de ADN en el nucleoide
  dnaCircle: {
    width: 45 * SCALE_FACTOR,
    height: 30 * SCALE_FACTOR,
    borderRadius: 15 * SCALE_FACTOR,
    borderWidth: 2,
    borderColor: '#FF9100', // Color naranja para el ADN
    borderStyle: 'dashed', // Línea punteada para indicar que no está encerrado en membrana
  },

  // Contenedor principal del flagelo
  flagellumContainer: {
    width: 4 * SCALE_FACTOR,
    height: 80 * SCALE_FACTOR, // Estructura larga para representar el flagelo
    position: 'relative',
  },

  // Base del flagelo - punto de anclaje a la membrana
  flagellumBase: {
    width: 6 * SCALE_FACTOR,
    height: 6 * SCALE_FACTOR,
    borderRadius: 3 * SCALE_FACTOR, // Forma circular
    backgroundColor: '#78909C', // Color gris azulado oscuro
    position: 'absolute',
    top: 0, // En la parte superior del contenedor
    left: -1 * SCALE_FACTOR, // Ligeramente desplazado para centrar
  },

  // Filamento del flagelo - la parte móvil
  flagellumFilament: {
    width: 4 * SCALE_FACTOR,
    height: 70 * SCALE_FACTOR, // Más largo que la base
    backgroundColor: '#90A4AE', // Color gris azulado más claro que la base
    // Bordes redondeados en todas las esquinas para apariencia orgánica
    borderTopRightRadius: 2 * SCALE_FACTOR,
    borderTopLeftRadius: 2 * SCALE_FACTOR,
    borderBottomRightRadius: 2 * SCALE_FACTOR,
    borderBottomLeftRadius: 2 * SCALE_FACTOR,
    position: 'absolute',
    top: 10 * SCALE_FACTOR, // Comienza después de la base
    // Transformaciones para dar apariencia de movimiento
    transform: [{ rotate: '5deg' }, { translateX: -1 * SCALE_FACTOR }],
  },

  // Contenedor para todos los pili
  piliContainer: {
    width: '100%',
    height: '100%',
    position: 'relative', // Para posicionamiento absoluto de pili individuales
  },

  // Estilo individual para cada pilus
  pilus: {
    position: 'absolute',
    width: 2 * SCALE_FACTOR, // Muy delgados como "pelos"
    height: 15 * SCALE_FACTOR, // Cortos comparados con el flagelo
    backgroundColor: '#B0BEC5', // Color gris claro
  },

  // Parte externa del mesosoma
  mesosomeOuter: {
    backgroundColor: '#81D4FA', // Color azul claro para la estructura de membrana
    position: 'relative',
    justifyContent: 'center', // Centrar la parte interna verticalmente
    alignItems: 'center', // Centrar la parte interna horizontalmente
  },

  // Parte interna del mesosoma - representa el espacio invaginado
  mesosomeInner: {
    backgroundColor: 'rgba(178, 223, 219, 0.3)', // Mismo color que el citoplasma
    position: 'absolute', // Posicionamiento absoluto dentro del mesosoma externo
  },
});

export default ProkaryoticCell;
