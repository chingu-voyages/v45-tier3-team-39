import swaggerJSDoc from 'swagger-jsdoc';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Express API for Ordr',
      version: '0.0.1',
      description:
        'This is a REST API application made with Express. It retrieves and presents data from the Ordr database.',
    },
  },
  servers: [
    {
      url: 'https://ordr-be.onrender.com',
      description: 'Development server',
    },
  ],
  apis: ['./src/routes/*.ts'],
};

export const swaggerSpec = swaggerJSDoc(options);
