import { Router } from 'express';

const userRoutes = Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *      type: object
 *      required:
 *         - username
 *         - email
 *         - password
 *         - isAdmin
 *      properties:
 *        id:
 *          type: string
 *          description: The auto-generated id of the user
 *        username:
 *          type: username
 *          description: The user's username
 *        email:
 *          type: string
 *          description: The user's email
 *        password:
 *          type: string
 *          description: The user's password
 *        isAdmin:
 *          type: boolean
 *          description: The user's admin status
 *        createdAt:
 *          type: string
 *          format: date
 *          description: The date the user was created
 *      example:
 *        id: 1
 *        username: John Doe
 *        email: john@doe.com
 *        password: password
 *        isAdmin: false
 *        createdAt: 2021-01-01 00:00:00
 */

/**
 * @swagger
 * tags:
 *   name: User
 *   description: The user API
 * /user/signup:
 *   post:
 *     summary: Create a new user
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *     responses:
 *       200:
 *         description: The created user.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       500:
 *         description: Server error
 *
 * /user/login:
 *    post:
 *     summary: Logs a user in
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *     responses:
 *       200:
 *         description: Login successful.
 *       500:
 *         description: Server error
 */

userRoutes.get('/signup', (_, res) => {
  res.send('Signup route');
});

userRoutes.get('/login', (_, res) => {
  res.send('Login route');
});

export default userRoutes;
