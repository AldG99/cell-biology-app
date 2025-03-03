import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
} from 'react-native';

const QuizScreen = ({ questions, onComplete }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showExplanation, setShowExplanation] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [fadeAnim] = useState(new Animated.Value(1));

  const currentQuestion = questions[currentQuestionIndex];

  useEffect(() => {
    // Fade in animation when question changes
    Animated.sequence([
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 0,
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start();
  }, [currentQuestionIndex]);

  const selectAnswer = answer => {
    if (showExplanation) return;

    setSelectedAnswer(answer);
    setShowExplanation(true);

    // Esperar antes de pasar a la siguiente pregunta
    setTimeout(() => {
      const newAnswers = [...answers, answer];
      setAnswers(newAnswers);

      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setShowExplanation(false);
        setSelectedAnswer(null);
      } else {
        // Calcular resultados
        let correct = 0;
        newAnswers.forEach((answer, index) => {
          if (answer === questions[index].correctAnswer) {
            correct++;
          }
        });

        onComplete({
          total: questions.length,
          correct: correct,
          percentage: Math.round((correct / questions.length) * 100),
          answers: newAnswers,
        });
      }
    }, 3000);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.progress}>
        Pregunta {currentQuestionIndex + 1} de {questions.length}
      </Text>

      <Animated.View style={[styles.questionContainer, { opacity: fadeAnim }]}>
        <Text style={styles.question}>{currentQuestion.question}</Text>

        <View style={styles.options}>
          {currentQuestion.options.map((option, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.optionButton,
                showExplanation && option === currentQuestion.correctAnswer
                  ? styles.correctOption
                  : showExplanation &&
                    option === selectedAnswer &&
                    option !== currentQuestion.correctAnswer
                  ? styles.incorrectOption
                  : null,
              ]}
              onPress={() => selectAnswer(option)}
              disabled={showExplanation}
            >
              <Text style={styles.optionText}>{option}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {showExplanation && (
          <View style={styles.explanationContainer}>
            <Text style={styles.explanationText}>
              {selectedAnswer === currentQuestion.correctAnswer
                ? '¡Correcto! '
                : 'Incorrecto. '}
              {currentQuestion.explanation}
            </Text>
          </View>
        )}
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  progress: {
    fontSize: 14,
    color: '#666',
    marginBottom: 20,
    textAlign: 'center',
  },
  questionContainer: {
    flex: 1,
  },
  question: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
  },
  options: {
    justifyContent: 'center',
  },
  optionButton: {
    backgroundColor: '#3498db',
    padding: 20,
    borderRadius: 10,
    marginBottom: 15,
    alignItems: 'center',
    elevation: 2,
  },
  optionText: {
    color: 'white',
    fontSize: 18,
  },
  correctOption: {
    backgroundColor: '#27ae60',
  },
  incorrectOption: {
    backgroundColor: '#e74c3c',
  },
  explanationContainer: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 8,
    marginTop: 20,
    borderLeftWidth: 4,
    borderLeftColor: '#3498db',
  },
  explanationText: {
    fontSize: 16,
    lineHeight: 22,
  },
});

export default QuizScreen;
