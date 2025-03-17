import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Alert,
  BackHandler,
} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import QuizComponent from '../components/QuizScreen';
import QuizResults from '../components/QuizResults';
import quizQuestions from '../data/quizQuestions';
import AsyncStorage from '@react-native-async-storage/async-storage';

const QuizScreen = ({ navigation }) => {
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);
  const [quizResults, setQuizResults] = useState(null);
  const [previousResults, setPreviousResults] = useState(null);

  // Control del botón de retroceso
  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        if (quizStarted && !quizFinished) {
          // Mostrar alerta de confirmación si el quiz está en progreso
          Alert.alert(
            'Salir del Quiz',
            '¿Estás seguro de que quieres salir? Tu progreso se perderá.',
            [
              { text: 'Cancelar', style: 'cancel', onPress: () => {} },
              {
                text: 'Salir',
                style: 'destructive',
                onPress: () => navigation.goBack(),
              },
            ]
          );
          return true; // Prevenir navegación por defecto
        }
        return false; // Permitir navegación por defecto
      };

      BackHandler.addEventListener('hardwareBackPress', onBackPress);
      return () =>
        BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    }, [quizStarted, quizFinished, navigation])
  );

  // Cargar resultados anteriores
  useEffect(() => {
    const loadPreviousResults = async () => {
      try {
        const savedResults = await AsyncStorage.getItem('quizResults');
        if (savedResults) {
          setPreviousResults(JSON.parse(savedResults));
        }
      } catch (error) {
        console.error('Error loading quiz results:', error);
      }
    };

    loadPreviousResults();
    setQuizStarted(true);
  }, []);

  // Función para manejar la finalización del quiz
  const handleQuizComplete = results => {
    setQuizResults(results);
    setQuizFinished(true);

    // Guardar resultados
    const saveResults = async () => {
      try {
        // Obtener resultados anteriores si existen
        const savedResultsStr = await AsyncStorage.getItem('quizResults');
        let savedResults = savedResultsStr ? JSON.parse(savedResultsStr) : [];

        // Añadir nuevo resultado con fecha
        const newResult = {
          ...results,
          date: new Date().toISOString(),
        };

        // Limitar a los últimos 5 resultados
        savedResults = [newResult, ...savedResults].slice(0, 5);

        // Guardar en AsyncStorage
        await AsyncStorage.setItem('quizResults', JSON.stringify(savedResults));
      } catch (error) {
        console.error('Error saving quiz results:', error);
      }
    };

    saveResults();
  };

  // Función para reiniciar el quiz
  const restartQuiz = () => {
    setQuizFinished(false);
    setQuizResults(null);
  };

  // Función para volver al menú principal
  const exitToMenu = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      {!quizFinished ? (
        <QuizComponent
          questions={quizQuestions}
          onComplete={handleQuizComplete}
        />
      ) : (
        <QuizResults
          results={quizResults}
          questions={quizQuestions}
          onRestart={restartQuiz}
          onExit={exitToMenu}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
});

export default QuizScreen;
