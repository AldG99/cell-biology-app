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

const EukaryoticCell = ({ onSelectPart }) => {
  // Definición de las partes de la célula eucariota con posiciones más precisas
  const cellParts = [
    {
      id: 'nucleus',
      name: 'Núcleo',
      color: '#FFCC80',
      position: { top: '45%', left: '50%' },
      size: 60,
      borderWidth: 2,
      borderColor: '#EF6C00',
      zIndex: 10,
      customShape: 'nucleus',
      description:
        'Centro de control de la célula delimitado por una doble membrana nuclear. Contiene el ADN organizado en cromosomas y controla todas las funciones celulares.',
    },
    {
      id: 'mitochondria1',
      name: 'Mitocondria',
      color: '#F48FB1',
      position: { top: '30%', left: '75%' },
      width: 30,
      height: 20,
      borderRadius: 10,
      zIndex: 8,
      innerStructure: true,
      description:
        'Organelo con doble membrana responsable de la producción de energía (ATP) mediante la respiración celular. Posee su propio ADN y se cree que evolucionó a partir de bacterias.',
    },
    {
      id: 'mitochondria2',
      name: 'Mitocondria',
      color: '#F48FB1',
      position: { top: '65%', left: '35%' },
      width: 35,
      height: 22,
      borderRadius: 11,
      rotation: '45deg',
      zIndex: 8,
      innerStructure: true,
      description:
        'Organelo con doble membrana responsable de la producción de energía (ATP) mediante la respiración celular. Posee su propio ADN y se cree que evolucionó a partir de bacterias.',
    },
    {
      id: 'mitochondria3',
      name: 'Mitocondria',
      color: '#F48FB1',
      position: { top: '55%', left: '80%' },
      width: 25,
      height: 18,
      borderRadius: 9,
      rotation: '-30deg',
      zIndex: 8,
      innerStructure: true,
      description:
        'Organelo con doble membrana responsable de la producción de energía (ATP) mediante la respiración celular. Posee su propio ADN y se cree que evolucionó a partir de bacterias.',
    },
    {
      id: 'er_rough',
      name: 'Retículo endoplasmático rugoso',
      color: '#90CAF9',
      position: { top: '70%', left: '60%' },
      width: 70,
      height: 35,
      zIndex: 5,
      customShape: 'rough-er',
      description:
        'Red de membranas interconectadas con ribosomas adheridos. Participa en la síntesis, plegamiento y transporte de proteínas destinadas a la secreción o a formar parte de membranas.',
    },
    {
      id: 'er_smooth',
      name: 'Retículo endoplasmático liso',
      color: '#81D4FA',
      position: { top: '25%', left: '35%' },
      width: 60,
      height: 30,
      zIndex: 5,
      customShape: 'smooth-er',
      description:
        'Red de membranas sin ribosomas. Participa en la síntesis de lípidos, desintoxicación de sustancias nocivas y almacenamiento de calcio para señalización celular.',
    },
    {
      id: 'golgi',
      name: 'Aparato de Golgi',
      color: '#A5D6A7',
      position: { top: '30%', left: '60%' },
      width: 50,
      height: 30,
      zIndex: 6,
      customShape: 'golgi',
      description:
        'Sistema de sacos membranosos aplanados que procesa, modifica, clasifica y empaqueta proteínas y lípidos para su distribución a otros organelos o secreción fuera de la célula.',
    },
    {
      id: 'lysosome1',
      name: 'Lisosoma',
      color: '#FFF176',
      position: { top: '60%', left: '30%' },
      size: 18,
      zIndex: 7,
      description:
        'Vesícula que contiene enzimas digestivas capaces de descomponer proteínas, lípidos, ácidos nucleicos y carbohidratos. Participa en la digestión celular y reciclaje de componentes.',
    },
    {
      id: 'lysosome2',
      name: 'Lisosoma',
      color: '#FFF176',
      position: { top: '40%', left: '25%' },
      size: 15,
      zIndex: 7,
      description:
        'Vesícula que contiene enzimas digestivas capaces de descomponer proteínas, lípidos, ácidos nucleicos y carbohidratos. Participa en la digestión celular y reciclaje de componentes.',
    },
    {
      id: 'peroxisome',
      name: 'Peroxisoma',
      color: '#FFAB91',
      position: { top: '35%', left: '85%' },
      size: 15,
      zIndex: 7,
      description:
        'Vesícula que contiene enzimas oxidativas involucradas en la desintoxicación de sustancias nocivas y el metabolismo de lípidos. Descompone el peróxido de hidrógeno tóxico en agua y oxígeno.',
    },
    {
      id: 'centrosome',
      name: 'Centrosoma',
      color: '#CE93D8',
      position: { top: '25%', left: '45%' },
      size: 22,
      zIndex: 7,
      customShape: 'centrosome',
      description:
        'Centro organizador de microtúbulos compuesto por un par de centriolos. Importante durante la división celular para la formación del huso mitótico.',
    },
    {
      id: 'ribosome1',
      name: 'Ribosomas',
      color: '#FDD835',
      position: { top: '50%', left: '20%' },
      size: 8,
      zIndex: 7,
      description:
        'Complejos macromoleculares compuestos de ARN y proteínas. Responsables de la síntesis de proteínas siguiendo las instrucciones del ARN mensajero.',
    },
    {
      id: 'ribosome2',
      name: 'Ribosomas',
      color: '#FDD835',
      position: { top: '40%', left: '75%' },
      size: 8,
      zIndex: 7,
      description:
        'Complejos macromoleculares compuestos de ARN y proteínas. Responsables de la síntesis de proteínas siguiendo las instrucciones del ARN mensajero.',
    },
    {
      id: 'ribosome3',
      name: 'Ribosomas',
      color: '#FDD835',
      position: { top: '70%', left: '50%' },
      size: 8,
      zIndex: 7,
      description:
        'Complejos macromoleculares compuestos de ARN y proteínas. Responsables de la síntesis de proteínas siguiendo las instrucciones del ARN mensajero.',
    },
    {
      id: 'vesicle1',
      name: 'Vesícula de transporte',
      color: '#B2DFDB',
      position: { top: '45%', left: '70%' },
      size: 12,
      zIndex: 7,
      description:
        'Pequeña bolsa membranosa que transporta materiales entre organelos o hacia la membrana plasmática para su secreción.',
    },
    {
      id: 'vesicle2',
      name: 'Vesícula de transporte',
      color: '#B2DFDB',
      position: { top: '60%', left: '70%' },
      size: 10,
      zIndex: 7,
      description:
        'Pequeña bolsa membranosa que transporta materiales entre organelos o hacia la membrana plasmática para su secreción.',
    },
    {
      id: 'cytoskeleton',
      name: 'Citoesqueleto',
      color: '#BDBDBD',
      position: { top: '50%', left: '50%' },
      size: CELL_SIZE * 0.9,
      customShape: 'cytoskeleton',
      zIndex: 3,
      description:
        'Red de filamentos proteicos (microfilamentos, filamentos intermedios y microtúbulos) que mantiene la forma celular, permite el movimiento y transporte intracelular.',
    },
    {
      id: 'endosome',
      name: 'Endosoma',
      color: '#C5CAE9',
      position: { top: '55%', left: '20%' },
      size: 20,
      zIndex: 6,
      description:
        'Compartimento membranoso que forma parte del sistema de clasificación y transporte de materiales endocitados desde la membrana plasmática.',
    },
    {
      id: 'plasma_membrane',
      name: 'Membrana plasmática',
      color: 'transparent',
      position: { top: '50%', left: '50%' },
      size: CELL_SIZE * 0.95,
      borderWidth: 2,
      borderColor: '#7986CB',
      borderRadius: CELL_SIZE / 2,
      zIndex: 2,
      description:
        'Barrera semipermeable compuesta por una bicapa lipídica con proteínas incrustadas. Controla el paso de sustancias y la comunicación con el exterior.',
    },
  ];

  const renderCustomShape = part => {
    switch (part.customShape) {
      case 'nucleus':
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
                borderWidth: part.borderWidth,
                borderColor: part.borderColor,
                zIndex: part.zIndex,
                transform: [
                  { translateX: -part.size / 2 },
                  { translateY: -part.size / 2 },
                ],
              },
            ]}
          >
            {/* Estructuras internas del núcleo */}
            <View style={styles.nucleolus} />

            {/* Cromosomas */}
            <View
              style={[
                styles.chromosome,
                { top: '30%', left: '35%', transform: [{ rotate: '45deg' }] },
              ]}
            />
            <View
              style={[
                styles.chromosome,
                { top: '60%', left: '40%', transform: [{ rotate: '-30deg' }] },
              ]}
            />
            <View
              style={[
                styles.chromosome,
                { top: '45%', left: '60%', transform: [{ rotate: '70deg' }] },
              ]}
            />

            {/* Poros nucleares */}
            {Array(8)
              .fill(0)
              .map((_, i) => {
                const angle = (i / 8) * 2 * Math.PI;
                const radius = part.size / 2 - 3;
                const x = radius * Math.cos(angle);
                const y = radius * Math.sin(angle);

                return (
                  <View
                    key={i}
                    style={{
                      position: 'absolute',
                      width: 6,
                      height: 6,
                      backgroundColor: '#EF6C00',
                      borderRadius: 3,
                      left: part.size / 2 + x - 3,
                      top: part.size / 2 + y - 3,
                    }}
                  />
                );
              })}
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
                zIndex: part.zIndex,
                borderRadius: 10,
                overflow: 'hidden',
                transform: [
                  { translateX: -part.width / 2 },
                  { translateY: -part.height / 2 },
                ],
              },
            ]}
          >
            {/* Ribosomas en el RER */}
            {Array(15)
              .fill(0)
              .map((_, i) => (
                <View
                  key={i}
                  style={{
                    position: 'absolute',
                    width: 4,
                    height: 4,
                    backgroundColor: '#FDD835',
                    borderRadius: 2,
                    top: 3 + (i % 5) * 7,
                    left: 2 + Math.floor(i / 5) * 20,
                  }}
                />
              ))}
            {/* Líneas internas que representan membranas */}
            <View
              style={{
                position: 'absolute',
                width: '90%',
                height: 1,
                backgroundColor: '#64B5F6',
                top: '30%',
                left: '5%',
              }}
            />
            <View
              style={{
                position: 'absolute',
                width: '80%',
                height: 1,
                backgroundColor: '#64B5F6',
                top: '60%',
                left: '10%',
              }}
            />
            <View
              style={{
                position: 'absolute',
                width: '70%',
                height: 1,
                backgroundColor: '#64B5F6',
                top: '90%',
                left: '15%',
              }}
            />
          </View>
        );

      case 'smooth-er':
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
                zIndex: part.zIndex,
                borderRadius: 15,
                overflow: 'hidden',
                transform: [
                  { translateX: -part.width / 2 },
                  { translateY: -part.height / 2 },
                ],
              },
            ]}
          >
            {/* Líneas internas curvas */}
            <View
              style={{
                position: 'absolute',
                width: '90%',
                height: 1,
                backgroundColor: '#4FC3F7',
                top: '25%',
                left: '5%',
                borderRadius: 10,
                transform: [{ scaleX: 0.9 }, { scaleY: 2 }],
              }}
            />
            <View
              style={{
                position: 'absolute',
                width: '80%',
                height: 1,
                backgroundColor: '#4FC3F7',
                top: '50%',
                left: '10%',
                borderRadius: 10,
                transform: [{ scaleX: 0.8 }, { scaleY: 2 }],
              }}
            />
            <View
              style={{
                position: 'absolute',
                width: '70%',
                height: 1,
                backgroundColor: '#4FC3F7',
                top: '75%',
                left: '15%',
                borderRadius: 10,
                transform: [{ scaleX: 0.7 }, { scaleY: 2 }],
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
                zIndex: part.zIndex,
                transform: [
                  { translateX: -part.width / 2 },
                  { translateY: -part.height / 2 },
                ],
              },
            ]}
          >
            {/* Sacos superpuestos del aparato de Golgi */}
            {Array(6)
              .fill(0)
              .map((_, i) => (
                <View
                  key={i}
                  style={{
                    position: 'absolute',
                    width: part.width - i * 4,
                    height: 5,
                    backgroundColor:
                      i === 0 ? '#66BB6A' : i === 5 ? '#81C784' : part.color,
                    borderRadius: 3,
                    top: i * 5,
                    left: i * 2,
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
            <View
              style={{
                position: 'absolute',
                width: 7,
                height: 7,
                backgroundColor: '#B2DFDB',
                borderRadius: 3.5,
                bottom: 5,
                right: 0,
              }}
            />
          </View>
        );

      case 'centrosome':
        return (
          <View
            style={[
              styles.customShape,
              {
                width: part.size,
                height: part.size,
                top: part.position.top,
                left: part.position.left,
                zIndex: part.zIndex,
                transform: [
                  { translateX: -part.size / 2 },
                  { translateY: -part.size / 2 },
                ],
              },
            ]}
          >
            {/* Centriolos perpendiculares */}
            <View
              style={{
                position: 'absolute',
                width: 16,
                height: 7,
                backgroundColor: '#BA68C8',
                borderRadius: 2,
                top: '40%',
                left: '25%',
              }}
            />
            <View
              style={{
                position: 'absolute',
                width: 7,
                height: 16,
                backgroundColor: '#BA68C8',
                borderRadius: 2,
                top: '25%',
                left: '40%',
              }}
            />
            {/* Material pericentriolar */}
            <View
              style={{
                position: 'absolute',
                width: part.size,
                height: part.size,
                backgroundColor: 'rgba(206, 147, 216, 0.3)',
                borderRadius: part.size / 2,
                top: 0,
                left: 0,
              }}
            />
          </View>
        );

      case 'cytoskeleton':
        return (
          <View
            style={[
              styles.customShape,
              {
                width: part.size,
                height: part.size,
                top: '5%',
                left: '5%',
                position: 'absolute',
                zIndex: part.zIndex,
                overflow: 'hidden',
              },
            ]}
          >
            {/* Filamentos distribuidos aleatoriamente */}
            {Array(30)
              .fill(0)
              .map((_, i) => {
                const angle = Math.random() * 360;
                const length = 20 + Math.random() * 100;
                const thickness = 1 + Math.random() * 0.5;
                const posTop = Math.random() * 100;
                const posLeft = Math.random() * 100;

                return (
                  <View
                    key={i}
                    style={{
                      position: 'absolute',
                      width: length,
                      height: thickness,
                      backgroundColor:
                        i % 3 === 0
                          ? 'rgba(189, 189, 189, 0.7)'
                          : i % 3 === 1
                          ? 'rgba(158, 158, 158, 0.5)'
                          : 'rgba(117, 117, 117, 0.3)',
                      top: `${posTop}%`,
                      left: `${posLeft}%`,
                      transform: [{ rotate: `${angle}deg` }],
                    }}
                  />
                );
              })}
          </View>
        );

      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      {/* Célula completa */}
      <View style={styles.cellContainer}>
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
                  top: CELL_SIZE * 0.025,
                  left: CELL_SIZE * 0.025,
                },
              ]}
              activeOpacity={0.7}
              onPress={() => onSelectPart(part)}
            />
          ))}

        {/* Citoplasma (fondo de la célula) */}
        <View style={styles.cytoplasm} />

        {/* Renderizar citoesqueleto primero para que esté en el fondo */}
        {cellParts
          .filter(part => part.id === 'cytoskeleton')
          .map((part, index) => (
            <TouchableOpacity
              key={`skeleton-${index}`}
              activeOpacity={0.7}
              onPress={() => onSelectPart(part)}
            >
              {renderCustomShape(part)}
            </TouchableOpacity>
          ))}

        {/* Renderizar partes personalizadas (excepto citoesqueleto) */}
        {cellParts
          .filter(part => part.customShape && part.id !== 'cytoskeleton')
          .map((part, index) => (
            <TouchableOpacity
              key={`custom-${index}`}
              activeOpacity={0.7}
              onPress={() => onSelectPart(part)}
            >
              {renderCustomShape(part)}
            </TouchableOpacity>
          ))}

        {/* Renderizar partes estándar (principalmente circulares) */}
        {cellParts
          .filter(part => !part.customShape && part.id !== 'plasma_membrane')
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
                  {/* Crestas mitocondriales */}
                  <View style={[styles.mitochondrialCrista, { top: '30%' }]} />
                  <View style={[styles.mitochondrialCrista, { top: '50%' }]} />
                  <View style={[styles.mitochondrialCrista, { top: '70%' }]} />
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
          <Text style={styles.labelText}>Célula Eucariota</Text>
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
    width: CELL_SIZE * 0.9,
    height: CELL_SIZE * 0.9,
    borderRadius: CELL_SIZE / 2,
    backgroundColor: 'rgba(209, 196, 233, 0.3)',
    zIndex: 2,
    top: CELL_SIZE * 0.05,
    left: CELL_SIZE * 0.05,
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
  nucleolus: {
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: '#FB8C00',
    position: 'absolute',
    top: '35%',
    left: '35%',
  },
  chromosome: {
    width: 16,
    height: 5,
    backgroundColor: '#EF6C00',
    borderRadius: 2,
    position: 'absolute',
  },
  mitochondrialCrista: {
    position: 'absolute',
    width: '70%',
    height: 2,
    backgroundColor: '#EC407A',
    left: '15%',
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
    color: '#5E35B1',
  },
});

export default EukaryoticCell;
