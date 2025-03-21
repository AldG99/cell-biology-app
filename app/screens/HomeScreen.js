import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import CellButton from '../components/CellButton';
import cellData from '../data/cellData';

const HomeScreen = ({ navigation }) => {
  // Función para navegar a la pantalla de detalles de célula
  const navigateToCellDetail = cellType => {
    navigation.navigate('CellDetail', {
      cellType: cellType,
      title: cellData[cellType].title,
    });
  };

  // Función para comenzar el quiz
  const startQuiz = () => {
    navigation.navigate('Quiz');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.header}>
          <Text style={styles.title}>Explora y Aprende</Text>
          <Text style={styles.subtitle}>
            Descubre los diferentes tipos de células y sus características
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <Text style={styles.sectionTitle}>Tipos de Células</Text>

          <CellButton
            title="Célula Animal"
            onPress={() => navigateToCellDetail('animal')}
            color="#FF7675"
          />

          <CellButton
            title="Célula Vegetal"
            onPress={() => navigateToCellDetail('vegetal')}
            color="#55EFC4"
          />

          <CellButton
            title="Célula Procariota"
            onPress={() => navigateToCellDetail('procariota')}
            color="#74B9FF"
          />

          <CellButton
            title="Célula Eucariota"
            onPress={() => navigateToCellDetail('eucariota')}
            color="#FDCB6E"
          />
        </View>

        <View style={styles.quizContainer}>
          <Text style={styles.sectionTitle}>
            Pon a Prueba tus Conocimientos
          </Text>
          <Text style={styles.quizDescription}>
            ¿Crees que ya dominas el tema? Intenta responder todas las preguntas
            correctamente.
          </Text>

          <CellButton
            title="Comenzar Quiz"
            onPress={startQuiz}
            color="#27ae60"
            style={styles.quizButton}
          />
        </View>

        <View style={styles.infoContainer}>
          <Text style={styles.infoTitle}>Sobre esta App</Text>
          <Text style={styles.infoText}>
            Esta aplicación educativa está diseñada para ayudarte a comprender
            las diferencias y similitudes entre los principales tipos de
            células. Explora cada tipo, aprende sobre sus componentes y pon a
            prueba tus conocimientos con nuestro quiz interactivo.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollContainer: {
    padding: 15,
  },
  header: {
    marginBottom: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#7f8c8d',
    textAlign: 'center',
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 25,
  },
  image: {
    width: '100%',
    height: 200,
  },
  buttonContainer: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#2c3e50',
  },
  quizContainer: {
    backgroundColor: '#ecf0f1',
    padding: 15,
    borderRadius: 10,
    marginBottom: 30,
  },
  quizDescription: {
    fontSize: 14,
    color: '#7f8c8d',
    marginBottom: 15,
  },
  quizButton: {
    marginTop: 10,
  },
  infoContainer: {
    backgroundColor: '#dfe6e9',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#2c3e50',
  },
  infoText: {
    fontSize: 14,
    color: '#34495e',
    lineHeight: 20,
  },
});

export default HomeScreen;
