import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const QuizResults = ({ results, questions, onRestart, onExit }) => {
  const { total, correct, percentage } = results;

  const getFeedback = () => {
    if (percentage < 60) {
      return 'Sigue estudiando para mejorar tu conocimiento sobre las células.';
    } else if (percentage < 80) {
      return '¡Buen trabajo! Pero todavía puedes mejorar.';
    } else {
      return '¡Excelente! Tienes un gran conocimiento sobre las células.';
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>¡Has completado el quiz!</Text>

      <View style={styles.scoreContainer}>
        <Text style={styles.scoreText}>
          {correct} de {total} correctas
        </Text>

        <View style={styles.scoreBar}>
          <View
            style={[
              styles.scoreBarFill,
              { width: `${percentage}%` },
              percentage < 60
                ? styles.scoreBarBad
                : percentage < 80
                ? styles.scoreBarOk
                : styles.scoreBarGood,
            ]}
          />
        </View>

        <Text style={styles.percentage}>{percentage}%</Text>

        <Text style={styles.feedback}>{getFeedback()}</Text>
      </View>

      <View style={styles.answerSummary}>
        <Text style={styles.summaryTitle}>Resumen de respuestas:</Text>

        {questions.map((question, index) => {
          const userAnswer = results.answers[index];
          const isCorrect = userAnswer === question.correctAnswer;

          return (
            <View key={index} style={styles.questionSummary}>
              <Text style={styles.questionText}>
                Pregunta {index + 1}: {question.question}
              </Text>
              <View style={styles.answerRow}>
                <Text style={styles.answerLabel}>Tu respuesta: </Text>
                <Text
                  style={[
                    styles.answerValue,
                    isCorrect ? styles.correctAnswer : styles.incorrectAnswer,
                  ]}
                >
                  {userAnswer} {isCorrect ? '✓' : '✗'}
                </Text>
              </View>
              {!isCorrect && (
                <View style={styles.answerRow}>
                  <Text style={styles.answerLabel}>Respuesta correcta: </Text>
                  <Text style={[styles.answerValue, styles.correctAnswer]}>
                    {question.correctAnswer}
                  </Text>
                </View>
              )}
            </View>
          );
        })}
      </View>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.restartButton} onPress={onRestart}>
          <Text style={styles.buttonText}>Reintentar Quiz</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.exitButton} onPress={onExit}>
          <Text style={styles.buttonText}>Volver al Menú</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
  },
  scoreContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  scoreText: {
    fontSize: 20,
    marginBottom: 15,
  },
  scoreBar: {
    width: '100%',
    height: 20,
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
    overflow: 'hidden',
  },
  scoreBarFill: {
    height: '100%',
  },
  scoreBarGood: {
    backgroundColor: '#27ae60',
  },
  scoreBarOk: {
    backgroundColor: '#f39c12',
  },
  scoreBarBad: {
    backgroundColor: '#e74c3c',
  },
  percentage: {
    fontSize: 40,
    fontWeight: 'bold',
    marginVertical: 15,
  },
  feedback: {
    fontSize: 16,
    textAlign: 'center',
    color: '#555',
    marginBottom: 10,
  },
  answerSummary: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    elevation: 1,
  },
  summaryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    paddingBottom: 5,
  },
  questionSummary: {
    marginBottom: 15,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  questionText: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  answerRow: {
    flexDirection: 'row',
    marginTop: 3,
  },
  answerLabel: {
    fontSize: 14,
    color: '#666',
  },
  answerValue: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  correctAnswer: {
    color: '#27ae60',
  },
  incorrectAnswer: {
    color: '#e74c3c',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  restartButton: {
    backgroundColor: '#3498db',
    padding: 15,
    borderRadius: 10,
    flex: 1,
    marginRight: 10,
    alignItems: 'center',
  },
  exitButton: {
    backgroundColor: '#7f8c8d',
    padding: 15,
    borderRadius: 10,
    flex: 1,
    marginLeft: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default QuizResults;
