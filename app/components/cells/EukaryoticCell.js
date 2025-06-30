import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import BaseCell from '../shared/BaseCell';
import { RoughER, GolgiApparatus, Nucleus } from '../shared/CellParts';
import { eukaryoticCellConfig } from '../../data/cellVisualizations';

// Obtener las dimensiones de la pantalla del dispositivo
const { width } = Dimensions.get('window');

// Factor de escala para ajustar el tamaño de las partes de la célula según el ancho de pantalla
// Si la pantalla es menor a 360px, reducir el tamaño al 80%
const SCALE_FACTOR = width < 360 ? 0.8 : 1;

/**
 * Componente EukaryoticCell - Renderiza una célula eucariota interactiva
 * Las células eucariotas se caracterizan por tener núcleo definido y orgánulos membranosos
 * @param {Function} onSelectPart - Función callback que se ejecuta cuando se selecciona una parte de la célula
 */
const EukaryoticCell = ({ onSelectPart }) => {
  /**
   * Función para renderizar formas personalizadas específicas de células eucariotas
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
        // Renderizar el núcleo de la célula eucariota
        // El núcleo es la característica distintiva de las células eucariotas
        return (
          <Nucleus
            color={scaledPart.color}
            size={scaledPart.size}
            borderColor={scaledPart.borderColor}
          />
        );

      case 'rough-er':
        // Renderizar el retículo endoplasmático rugoso
        // Tiene ribosomas adheridos que le dan aspecto rugoso
        return (
          <RoughER
            color={scaledPart.color}
            width={scaledPart.width}
            height={scaledPart.height}
          />
        );

      case 'smooth-er':
        // Renderizar el retículo endoplasmático liso
        // No tiene ribosomas, se encarga de síntesis de lípidos y desintoxicación
        return (
          <View
            style={[
              styles.smoothER,
              {
                width: scaledPart.width,
                height: scaledPart.height,
                backgroundColor: scaledPart.color,
                borderRadius: 15, // Bordes redondeados para simular membranas curvas
              },
            ]}
          >
            {/* Líneas curvas internas que representan las membranas del RE liso */}
            <View style={styles.smoothERMembrane1} />
            <View style={styles.smoothERMembrane2} />
            <View style={styles.smoothERMembrane3} />
          </View>
        );

      case 'golgi':
        // Renderizar el aparato de Golgi
        // Orgánulo encargado de modificar y empaquetar proteínas
        return (
          <GolgiApparatus
            color={scaledPart.color}
            width={scaledPart.width}
            height={scaledPart.height}
          />
        );

      case 'centrosome':
        // Renderizar el centrosoma con sus centriolos perpendiculares
        // Centro organizador de microtúbulos, importante en la división celular
        return (
          <View style={styles.centrosomeContainer}>
            {/* Centriolo horizontal */}
            <View style={styles.centrosomeHorizontal} />
            {/* Centriolo vertical (perpendicular al horizontal) */}
            <View style={styles.centrosomeVertical} />
            {/* Material pericentriolar que rodea los centriolos */}
            <View style={styles.pericentriolarMaterial} />
          </View>
        );

      case 'cytoskeleton':
        // Renderizar el citoesqueleto con diferentes tipos de filamentos
        // Red de proteínas que da forma y soporte estructural a la célula
        return (
          <View
            style={[
              styles.cytoskeleton,
              {
                width: scaledPart.size,
                height: scaledPart.size,
              },
            ]}
          >
            {/* Generar 20 filamentos con propiedades aleatorias */}
            {/* Número aumentado respecto a células animales para mayor complejidad */}
            {Array(20)
              .fill(0)
              .map((_, i) => {
                // Propiedades aleatorias para cada filamento
                const angle = Math.random() * 360; // Ángulo de rotación aleatorio
                const length = 20 + Math.random() * 80; // Longitud entre 20-100px
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
                      // Tres tipos diferentes de filamentos con colores distintos
                      // Simula microfilamentos, filamentos intermedios y microtúbulos
                      backgroundColor:
                        i % 3 === 0
                          ? 'rgba(189, 189, 189, 0.7)' // Microtúbulos (más visibles)
                          : i % 3 === 1
                          ? 'rgba(158, 158, 158, 0.5)' // Filamentos intermedios
                          : 'rgba(117, 117, 117, 0.3)', // Microfilamentos (más tenues)
                      top: `${posTop}%`,
                      left: `${posLeft}%`,
                      transform: [{ rotate: `${angle}deg` }], // Rotar el filamento
                    }}
                  />
                );
              })}
          </View>
        );

      default:
        // Si no hay forma personalizada definida, no renderizar nada
        return null;
    }
  };

  // Crear una versión escalada de la configuración de la célula eucariota
  const scaledConfig = {
    ...eukaryoticCellConfig,
    parts: eukaryoticCellConfig.parts.map(part => ({
      ...part,
      // Aplicar factor de escala a todas las dimensiones de cada parte
      size: part.size ? part.size * SCALE_FACTOR : undefined,
      width: part.width ? part.width * SCALE_FACTOR : undefined,
      height: part.height ? part.height * SCALE_FACTOR : undefined,
    })),
  };

  // Renderizar el componente base de la célula con configuración específica para célula eucariota
  return (
    <BaseCell
      config={scaledConfig} // Configuración escalada de la célula
      onSelectPart={onSelectPart} // Función callback para selección de partes
      renderCustomShape={renderCustomShape} // Función para renderizar formas personalizadas
      cytoplasmColor="rgba(209, 196, 233, 0.3)" // Color del citoplasma (púrpura muy claro)
      membraneColor="#7986CB" // Color de la membrana celular (azul-púrpura)
      cellShape="circular" // Forma circular típica de células eucariotas
    />
  );
};

// Estilos CSS para los diferentes orgánulos de la célula eucariota
const styles = StyleSheet.create({
  // Contenedor principal del retículo endoplasmático liso
  smoothER: {
    overflow: 'hidden', // Ocultar contenido que se salga del contenedor
    position: 'relative', // Posición relativa para posicionar las membranas internas
  },

  // Primera membrana del RE liso (superior)
  smoothERMembrane1: {
    position: 'absolute',
    width: '90%', // 90% del ancho del contenedor
    height: 1, // Línea delgada
    backgroundColor: '#4FC3F7', // Color azul claro
    top: '25%', // Posicionada en el primer cuarto
    left: '5%', // Centrada horizontalmente
    borderRadius: 10, // Bordes redondeados
    transform: [{ scaleX: 0.9 }, { scaleY: 2 }], // Escalado para efecto visual
  },

  // Segunda membrana del RE liso (centro)
  smoothERMembrane2: {
    position: 'absolute',
    width: '80%', // Ligeramente más estrecha que la primera
    height: 1,
    backgroundColor: '#4FC3F7', // Mismo color azul claro
    top: '50%', // Posicionada en el centro
    left: '10%', // Más centrada que la primera
    borderRadius: 10,
    transform: [{ scaleX: 0.8 }, { scaleY: 2 }], // Escalado proporcional al ancho
  },

  // Tercera membrana del RE liso (inferior)
  smoothERMembrane3: {
    position: 'absolute',
    width: '70%', // La más estrecha de las tres
    height: 1,
    backgroundColor: '#4FC3F7', // Mismo color azul claro
    top: '75%', // Posicionada en el último cuarto
    left: '15%', // La más centrada
    borderRadius: 10,
    transform: [{ scaleX: 0.7 }, { scaleY: 2 }], // Escalado proporcional al ancho
  },

  // Contenedor del centrosoma
  centrosomeContainer: {
    width: 22 * SCALE_FACTOR,
    height: 22 * SCALE_FACTOR,
    position: 'relative', // Posición relativa para posicionar los centriolos internos
  },

  // Centriolo orientado horizontalmente
  centrosomeHorizontal: {
    position: 'absolute',
    width: 16 * SCALE_FACTOR, // Ligeramente más pequeño que en células animales
    height: 7 * SCALE_FACTOR,
    backgroundColor: '#BA68C8', // Color púrpura
    borderRadius: 2, // Bordes redondeados
    top: '40%', // Posición vertical centrada
    left: '25%', // Posición horizontal
  },

  // Centriolo orientado verticalmente (perpendicular al horizontal)
  centrosomeVertical: {
    position: 'absolute',
    width: 7 * SCALE_FACTOR,
    height: 16 * SCALE_FACTOR, // Ligeramente más pequeño que en células animales
    backgroundColor: '#BA68C8', // Mismo color que el horizontal
    borderRadius: 2,
    top: '25%', // Posición vertical
    left: '40%', // Posición horizontal centrada
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
    top: '5%', // Ligeramente desplazado desde arriba
    left: '5%', // Ligeramente desplazado desde la izquierda
  },
});

export default EukaryoticCell;
