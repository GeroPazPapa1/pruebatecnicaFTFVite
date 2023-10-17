module.exports = {
    testEnvironment: "jsdom", // Entorno de pruebas para React
    testMatch: ["**/__tests__/**/*.js", "**/?(*.)+(test).js"], // Patrón para identificar archivos de prueba
    setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"], // Extiende las capacidades de expect()
  };
  