import Router from 'express';
import userController from '../controller/user-controller.mjs';

const router = new Router();

router.post('/user', userController.createUser);
router.get('/user', userController.getUsers);
router.get('/user/:id', userController.getOneUser);
router.put('/user', userController.updateUser);
router.delete('/user/:id', userController.deleteUser);

export default router;
