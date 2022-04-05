// Routes
/**
 * @swagger
 * /students/get_all:
 *  get:
 *    description: Request all students
 *    responses:
 *      '200':
 *        description: A list of all students
 */

/**
 * @swagger
 * /students/add:
 *    post:
 *      description: Add student to database
 *    parameters:
 *      - name: string
 *        description: Student's name
 *        required: true
 *        schema:
 *          type: string
 *          format: string
 *    responses:
 *      '201':
 *        description: Successfully created student
 */

/**
 * @swagger
 * /students/delete:
 *    delete:
 *      description: Delete student from database
 *    parameters:
 *      - name: string
 *        description: Student's name
 *        required: true
 *        schema:
 *          type: string
 *          format: string
 *    responses:
 *      '201':
 *        description: Successfully deleted student
 */