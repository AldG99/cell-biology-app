import { StyleSheet } from 'react-native';

// Definición de colores principales
export const colors = {
  primary: '#3498db',
  secondary: '#2ecc71',
  accent: '#f39c12',
  danger: '#e74c3c',
  warning: '#f1c40f',
  dark: '#2c3e50',
  light: '#ecf0f1',
  white: '#ffffff',
  black: '#000000',
  grey: '#7f8c8d',
  lightGrey: '#bdc3c7',

  // Colores de células
  animalCell: '#ffb3ba',
  plantCell: '#baffc9',
  prokaryoticCell: '#bae1ff',
  eukaryoticCell: '#ffffba',
};

// Definición de tamaños de texto
export const typography = {
  small: 12,
  body: 14,
  medium: 16,
  large: 18,
  heading: 20,
  title: 24,
  xlarge: 28,
};

// Definición de espaciados
export const spacing = {
  xs: 5,
  sm: 10,
  md: 15,
  lg: 20,
  xl: 30,
  xxl: 40,
};

// Definición de bordes
export const borders = {
  radius: {
    small: 5,
    medium: 10,
    large: 15,
    round: 9999,
  },
  width: {
    thin: 0.5,
    normal: 1,
    thick: 2,
    extraThick: 3,
  },
};

// Definición de sombras
export const shadows = {
  small: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
  },
  medium: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  large: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
};

// Estilos globales reutilizables
const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light,
  },
  containerPadded: {
    flex: 1,
    backgroundColor: colors.light,
    padding: spacing.md,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  // Estilos de texto
  title: {
    fontSize: typography.title,
    fontWeight: 'bold',
    color: colors.dark,
    marginBottom: spacing.md,
  },
  subtitle: {
    fontSize: typography.heading,
    fontWeight: 'bold',
    color: colors.dark,
    marginBottom: spacing.sm,
  },
  heading: {
    fontSize: typography.large,
    fontWeight: 'bold',
    color: colors.dark,
    marginBottom: spacing.sm,
  },
  text: {
    fontSize: typography.body,
    color: colors.dark,
    lineHeight: 20,
  },
  textSmall: {
    fontSize: typography.small,
    color: colors.grey,
  },
  // Tarjetas y contenedores
  card: {
    backgroundColor: colors.white,
    borderRadius: borders.radius.medium,
    padding: spacing.md,
    marginBottom: spacing.md,
    ...shadows.medium,
  },
  section: {
    marginBottom: spacing.xl,
  },
  // Separadores
  divider: {
    height: 1,
    backgroundColor: colors.lightGrey,
    marginVertical: spacing.md,
  },
  // Botones
  button: {
    backgroundColor: colors.primary,
    borderRadius: borders.radius.medium,
    padding: spacing.md,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: spacing.sm,
    ...shadows.small,
  },
  buttonText: {
    color: colors.white,
    fontSize: typography.medium,
    fontWeight: 'bold',
  },
  buttonSecondary: {
    backgroundColor: colors.secondary,
  },
  buttonDanger: {
    backgroundColor: colors.danger,
  },
  buttonSmall: {
    padding: spacing.sm,
  },
  // Inputs
  input: {
    backgroundColor: colors.white,
    borderWidth: borders.width.normal,
    borderColor: colors.lightGrey,
    borderRadius: borders.radius.medium,
    padding: spacing.md,
    fontSize: typography.body,
    marginBottom: spacing.md,
  },
  // Estilos de estado
  success: {
    color: colors.secondary,
  },
  error: {
    color: colors.danger,
  },
  warning: {
    color: colors.warning,
  },
});

export default globalStyles;
