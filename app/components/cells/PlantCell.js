import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Dimensions,
} from 'react-native';

const { width } = Dimensions.get('window');
const CELL_SIZE = width * 0.85;

const PlantCell = ({ onSelectPart }) => {
  // Definición de las partes de la célula vegetal con posiciones más precisas
  const cellParts = [
    {
      id: 'nucleus',
      name: 'Núcleo',
      color: '#FF9E80',
      position: { top: '35%', left: '45%' },
      size: 50,
      borderWidth: 2,
      borderColor: '#E64A19',
      zIndex: 8,
      description:
        'Centro de control que contiene el ADN en forma de cromosomas. Regula la expresión génica y las actividades celulares.',
    },
    {
      id: 'chloroplast1',
      name: 'Cloroplasto',
      color: '#66BB6A',
      position: { top: '25%', left: '30%' },
      width: 35,
      height: 22,
      borderRadius: 12,
      zIndex: 7,
      customShape: 'chloroplast',
      description:
        'Organelo especializado que contiene clorofila y realiza la fotosíntesis, convirtiendo luz solar en energía química.',
    },
    {
      id: 'chloroplast2',
      name: 'Cloroplasto',
      color: '#66BB6A',
      position: { top: '60%', left: '65%' },
      width: 35,
      height: 22,
      borderRadius: 12,
      zIndex: 7,
      customShape: 'chloroplast',
      description:
        'Organelo especializado que contiene clorofila y realiza la fotosíntesis, convirtiendo luz solar en energía química.',
    },
    {
      id: 'chloroplast3',
      name: 'Cloroplasto',
      color: '#66BB6A',
      position: { top: '40%', left: '20%' },
      width: 35,
      height: 22,
      borderRadius: 12,
      rotation: '45deg',
      zIndex: 7,
      customShape: 'chloroplast',
      description:
        'Organelo especializado que contiene clorofila y realiza la fotosíntesis, convirtiendo luz solar en energía química.',
    },
    {
      id: 'vacuole',
      name: 'Vacuola central',
      color: 'rgba(129, 212, 250, 0.6)',
      position: { top: '45%', left: '47%' },
      size: 120,
      zIndex: 3,
      description:
        'Gran compartimento lleno de líquido que ocupa hasta el 90% del volumen celular. Almacena agua, nutrientes, pigmentos y desechos. Mantiene la turgencia celular.',
    },
    {
      id: 'mitochondria1',
      name: 'Mitocondria',
      color: '#FF80AB',
      position: { top: '20%', left: '60%' },
      size: 25,
      borderRadius: 12,
      rotation: '30deg',
      zIndex: 6,
      innerStructure: true,
      description:
        'Produce energía (ATP) a través de la respiración celular, complementando la energía obtenida por fotosíntesis.',
    },
    {
      id: 'mitochondria2',
      name: 'Mitocondria',
      color: '#FF80AB',
      position: { top: '65%', left: '35%' },
      size: 25,
      borderRadius: 12,
      rotation: '-20deg',
      zIndex: 6,
      innerStructure: true,
      description:
        'Produce energía (ATP) a través de la respiración celular, complementando la energía obtenida por fotosíntesis.',
    },
    {
      id: 'er_rough',
      name: 'Retículo endoplasmático rugoso',
      color: '#82B1FF',
      position: { top: '30%', left: '70%' },
      width: 60,
      height: 30,
      zIndex: 5,
      customShape: 'rough-er',
      description:
        'Red de membranas con ribosomas adheridos. Participa en la síntesis y transporte de proteínas.',
    },
    {
      id: 'golgi',
      name: 'Aparato de Golgi',
      color: '#B9F6CA',
      position: { top: '20%', left: '40%' },
      width: 45,
      height: 25,
      zIndex: 6,
      customShape: 'golgi',
      description:
        'Sistema de sacos membranosos aplanados. Procesa, empaqueta y distribuye proteínas y lípidos.',
    },
    {
      id: 'amyloplast1',
      name: 'Amiloplasto',
      color: '#F5F5F5',
      position: { top: '70%', left: '55%' },
      size: 20,
      zIndex: 6,
      customShape: 'amyloplast',
      description:
        'Tipo de plastidio especializado en el almacenamiento de almidón. Participa en el almacenamiento de energía.',
    },
    {
      id: 'amyloplast2',
      name: 'Amiloplasto',
      color: '#F5F5F5',
      position: { top: '55%', left: '20%' },
      size: 15,
      zIndex: 6,
      customShape: 'amyloplast',
      description:
        'Tipo de plastidio especializado en el almacenamiento de almidón. Participa en el almacenamiento de energía.',
    },
    {
      id: 'ribosome1',
      name: 'Ribosomas',
      color: '#FFEB3B',
      position: { top: '25%', left: '55%' },
      size: 8,
      zIndex: 7,
      description:
        'Estructuras compuestas de ARN y proteínas que sintetizan proteínas a partir de la información del ARNm.',
    },
    {
      id: 'ribosome2',
      name: 'Ribosomas',
      color: '#FFEB3B',
      position: { top: '45%', left: '70%' },
      size: 8,
      zIndex: 7,
      description:
        'Estructuras compuestas de ARN y proteínas que sintetizan proteínas a partir de la información del ARNm.',
    },
    {
      id: 'vesicle',
      name: 'Vesícula',
      color: '#B2DFDB',
      position: { top: '28%', left: '75%' },
      size: 12,
      zIndex: 6,
      description:
        'Pequeña bolsa membranosa que transporta materiales entre organelos o hacia la membrana plasmática.',
    },
    {
      id: 'peroxisome',
      name: 'Peroxisoma',
      color: '#FFE0B2',
      position: { top: '50%', left: '60%' },
      size: 18,
      zIndex: 6,
      description:
        'Vesícula que contiene enzimas oxidativas. Participa en la desintoxicación celular y en el metabolismo de lípidos.',
    },
    {
      id: 'plasma_membrane',
      name: 'Membrana plasmática',
      color: 'transparent',
      position: { top: '50%', left: '50%' },
      size: CELL_SIZE * 0.96,
      borderWidth: 2,
      borderColor: '#9CCC65',
      borderRadius: CELL_SIZE / 2,
      zIndex: 4,
      description:
        'Barrera semipermeable que controla el paso de sustancias entre el interior y exterior de la célula.',
    },
    {
      id: 'cell_wall',
      name: 'Pared celular',
      color: 'rgba(205, 220, 57, 0.3)',
      position: { top: '50%', left: '50%' },
      size: CELL_SIZE,
      borderWidth: 8,
      borderColor: '#AED581',
      borderRadius: 15,
      zIndex: 2,
      description:
        'Capa externa rígida compuesta principalmente de celulosa. Proporciona soporte estructural y protección.',
    },
    {
      id: 'middle_lamella',
      name: 'Lámina media',
      color: 'transparent',
      position: { top: '50%', left: '50%' },
      size: CELL_SIZE + 16,
      borderWidth: 3,
      borderColor: '#C5E1A5',
      borderRadius: 18,
      zIndex: 1,
      description:
        'Capa de pectina que une las paredes celulares de células adyacentes en tejidos vegetales.',
    },
    {
      id: 'plasmodesmata',
      name: 'Plasmodesmos',
      color: '#DCEDC8',
      position: { top: '50%', left: '50%' },
      customShape: 'plasmodesmata',
      zIndex: 2,
      description:
        'Canales microscópicos que atraviesan las paredes celulares, permitiendo la comunicación y el transporte entre células vegetales adyacentes.',
    },
  ];

  const renderCustomShape = part => {
    switch (part.customShape) {
      case 'chloroplast':
        return (
          <View
            style={[
              styles.customShape,
              {
                width: part.width,
                height: part.height,
                backgroundColor: part.color,
                top: part.position.top,
                left: part.position.left,
                borderRadius: part.borderRadius,
                zIndex: part.zIndex || 1,
                transform: part.rotation ? [{ rotate: part.rotation }] : [],
              },
            ]}
          >
            {/* Tilacoides y grana de cloroplasto */}
            <View style={styles.thylakoidMembrane1} />
            <View style={styles.thylakoidMembrane2} />
            <View style={styles.thylakoidMembrane3} />
            <View style={styles.stroma} />
          </View>
        );

      case 'rough-er':
        return (
          <View
            style={[
              styles.customShape,
              {
                width: part.width,
                height: part.height,
                backgroundColor: part.color,
                top: part.position.top,
                left: part.position.left,
                zIndex: part.zIndex || 1,
                borderRadius: 10,
                overflow: 'hidden',
              },
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

      case 'golgi':
        return (
          <View
            style={[
              styles.customShape,
              {
                width: part.width,
                height: part.height,
                top: part.position.top,
                left: part.position.left,
                zIndex: part.zIndex || 1,
              },
            ]}
          >
            {/* Sacos superpuestos del aparato de Golgi */}
            {Array(5)
              .fill(0)
              .map((_, i) => (
                <View
                  key={i}
                  style={{
                    position: 'absolute',
                    width: part.width - i * 4,
                    height: 5,
                    backgroundColor:
                      i === 0 ? '#66BB6A' : i === 4 ? '#81C784' : part.color,
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

      case 'amyloplast':
        return (
          <View
            style={[
              styles.customShape,
              {
                width: part.size,
                height: part.size,
                backgroundColor: part.color,
                top: part.position.top,
                left: part.position.left,
                borderRadius: part.size / 2,
                zIndex: part.zIndex || 1,
              },
            ]}
          >
            {/* Gránulos de almidón */}
            <View
              style={{
                position: 'absolute',
                width: part.size * 0.6,
                height: part.size * 0.6,
                backgroundColor: '#F0F0F0',
                borderRadius: part.size * 0.3,
                top: '20%',
                left: '20%',
                borderWidth: 1,
                borderColor: '#E0E0E0',
              }}
            />
          </View>
        );

      case 'plasmodesmata':
        // Plasmodesmos en múltiples ubicaciones alrededor de la pared celular
        return (
          <>
            {/* Plasmodesmo superior */}
            <View
              style={[
                styles.customShape,
                {
                  width: 15,
                  height: 20,
                  backgroundColor: part.color,
                  top: '5%',
                  left: '50%',
                  zIndex: part.zIndex,
                  borderRadius: 3,
                  borderWidth: 1,
                  borderColor: '#AED581',
                },
              ]}
            >
              <View style={styles.plasmaCord} />
            </View>

            {/* Plasmodesmo inferior */}
            <View
              style={[
                styles.customShape,
                {
                  width: 15,
                  height: 20,
                  backgroundColor: part.color,
                  bottom: '5%',
                  left: '50%',
                  zIndex: part.zIndex,
                  borderRadius: 3,
                  borderWidth: 1,
                  borderColor: '#AED581',
                },
              ]}
            >
              <View style={styles.plasmaCord} />
            </View>

            {/* Plasmodesmo izquierdo */}
            <View
              style={[
                styles.customShape,
                {
                  width: 20,
                  height: 15,
                  backgroundColor: part.color,
                  top: '50%',
                  left: '5%',
                  zIndex: part.zIndex,
                  borderRadius: 3,
                  borderWidth: 1,
                  borderColor: '#AED581',
                },
              ]}
            >
              <View style={[styles.plasmaCord, { height: '90%', width: 2 }]} />
            </View>

            {/* Plasmodesmo derecho */}
            <View
              style={[
                styles.customShape,
                {
                  width: 20,
                  height: 15,
                  backgroundColor: part.color,
                  top: '50%',
                  right: '5%',
                  zIndex: part.zIndex,
                  borderRadius: 3,
                  borderWidth: 1,
                  borderColor: '#AED581',
                },
              ]}
            >
              <View style={[styles.plasmaCord, { height: '90%', width: 2 }]} />
            </View>
          </>
        );

      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      {/* Célula completa */}
      <View style={styles.cellContainer}>
        {/* Lámina media (capa más externa) */}
        {cellParts
          .filter(part => part.id === 'middle_lamella')
          .map((part, index) => (
            <TouchableOpacity
              key={`lamella-${index}`}
              style={[
                styles.cellPart,
                {
                  width: part.size,
                  height: part.size,
                  borderWidth: part.borderWidth,
                  borderColor: part.borderColor,
                  borderRadius: part.borderRadius,
                  zIndex: part.zIndex,
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  transform: [{ translateX: -8 }, { translateY: -8 }],
                },
              ]}
              activeOpacity={0.7}
              onPress={() => onSelectPart(part)}
            />
          ))}

        {/* Pared celular */}
        {cellParts
          .filter(part => part.id === 'cell_wall')
          .map((part, index) => (
            <TouchableOpacity
              key={`wall-${index}`}
              style={[
                styles.cellPart,
                {
                  width: part.size,
                  height: part.size,
                  backgroundColor: part.color,
                  borderWidth: part.borderWidth,
                  borderColor: part.borderColor,
                  borderRadius: part.borderRadius,
                  zIndex: part.zIndex,
                  position: 'absolute',
                  top: 0,
                  left: 0,
                },
              ]}
              activeOpacity={0.7}
              onPress={() => onSelectPart(part)}
            />
          ))}

        {/* Membrana plasmática */}
        {cellParts
          .filter(part => part.id === 'plasma_membrane')
          .map((part, index) => (
            <TouchableOpacity
              key={`membrane-${index}`}
              style={[
                styles.cellPart,
                {
                  width: part.size,
                  height: part.size,
                  borderWidth: part.borderWidth,
                  borderColor: part.borderColor,
                  borderRadius: part.borderRadius,
                  zIndex: part.zIndex,
                  position: 'absolute',
                  top: CELL_SIZE * 0.02,
                  left: CELL_SIZE * 0.02,
                },
              ]}
              activeOpacity={0.7}
              onPress={() => onSelectPart(part)}
            />
          ))}

        {/* Citoplasma (fondo de la célula) */}
        <View style={styles.cytoplasm} />

        {/* Vacuola central (debe estar debajo de otros organelos) */}
        {cellParts
          .filter(part => part.id === 'vacuole')
          .map((part, index) => (
            <TouchableOpacity
              key={`vacuole-${index}`}
              style={[
                styles.cellPart,
                {
                  backgroundColor: part.color,
                  width: part.size,
                  height: part.size,
                  borderRadius: part.size / 2,
                  zIndex: part.zIndex,
                  position: 'absolute',
                  top: CELL_SIZE / 2 - part.size / 2,
                  left: CELL_SIZE / 2 - part.size / 2,
                },
              ]}
              activeOpacity={0.7}
              onPress={() => onSelectPart(part)}
            />
          ))}

        {/* Renderizar partes personalizadas */}
        {cellParts
          .filter(part => part.customShape && part.id !== 'plasmodesmata')
          .map((part, index) => (
            <TouchableOpacity
              key={`custom-${index}`}
              activeOpacity={0.7}
              onPress={() => onSelectPart(part)}
            >
              {renderCustomShape(part)}
            </TouchableOpacity>
          ))}

        {/* Renderizar plasmodesmos después de todo para que estén sobre la pared celular */}
        {cellParts
          .filter(part => part.id === 'plasmodesmata')
          .map((part, index) => (
            <TouchableOpacity
              key={`plasmodesmata-${index}`}
              activeOpacity={0.7}
              onPress={() => onSelectPart(part)}
            >
              {renderCustomShape(part)}
            </TouchableOpacity>
          ))}

        {/* Renderizar partes estándar (principalmente circulares) */}
        {cellParts
          .filter(
            part =>
              !part.customShape &&
              part.id !== 'cell_wall' &&
              part.id !== 'middle_lamella' &&
              part.id !== 'plasma_membrane' &&
              part.id !== 'vacuole'
          )
          .map((part, index) => {
            // Para mitocondrias, crear diseño interno
            if (part.innerStructure) {
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
                      transform: part.rotation
                        ? [{ rotate: part.rotation }]
                        : [],
                    },
                  ]}
                  activeOpacity={0.7}
                  onPress={() => onSelectPart(part)}
                >
                  {/* Crestas mitocondriales */}
                  <View style={styles.mitochondrialCrista1} />
                  <View style={styles.mitochondrialCrista2} />
                  <View style={styles.mitochondrialCrista3} />
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
                    transform: part.rotation ? [{ rotate: part.rotation }] : [],
                  },
                ]}
                activeOpacity={0.7}
                onPress={() => onSelectPart(part)}
              />
            );
          })}

        {/* Etiqueta indicadora */}
        <View style={styles.labelContainer}>
          <Text style={styles.labelText}>Célula Vegetal</Text>
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
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    marginVertical: 20,
  },
  cytoplasm: {
    position: 'absolute',
    width: CELL_SIZE * 0.95,
    height: CELL_SIZE * 0.95,
    borderRadius: CELL_SIZE / 2,
    backgroundColor: 'rgba(220, 237, 200, 0.4)',
    zIndex: 2,
    top: CELL_SIZE * 0.025,
    left: CELL_SIZE * 0.025,
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
  customShape: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mitochondrialCrista1: {
    position: 'absolute',
    width: '70%',
    height: 2,
    backgroundColor: '#F48FB1',
    top: '30%',
  },
  mitochondrialCrista2: {
    position: 'absolute',
    width: '70%',
    height: 2,
    backgroundColor: '#F48FB1',
    top: '50%',
  },
  mitochondrialCrista3: {
    position: 'absolute',
    width: '70%',
    height: 2,
    backgroundColor: '#F48FB1',
    top: '70%',
  },
  // Estructuras internas del cloroplasto
  thylakoidMembrane1: {
    position: 'absolute',
    width: '80%',
    height: 2,
    backgroundColor: '#43A047',
    top: '30%',
  },
  thylakoidMembrane2: {
    position: 'absolute',
    width: '70%',
    height: 2,
    backgroundColor: '#43A047',
    top: '50%',
  },
  thylakoidMembrane3: {
    position: 'absolute',
    width: '60%',
    height: 2,
    backgroundColor: '#43A047',
    top: '70%',
  },
  stroma: {
    position: 'absolute',
    width: '20%',
    height: '20%',
    backgroundColor: '#81C784',
    borderRadius: 3,
    top: '40%',
    left: '65%',
  },
  plasmaCord: {
    position: 'absolute',
    width: 2,
    height: '90%',
    backgroundColor: '#9CCC65',
    top: '5%',
    left: '50%',
    transform: [{ translateX: -1 }],
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
    color: '#33691E',
  },
});

export default PlantCell;
