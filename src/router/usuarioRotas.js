const { Router } = require("express");
const userController = require("../controller/userController")
const router = Router();
const { validateUser, validadeUserId } = require("../middlewares/validateUser")

router.post('/', validateUser, userController.create); //funcao de criar

// funcao de editar
router.put('/:id', validateUser, validadeUserId, userController.update); // parametro id

// funcao de deletar
router.delete('/:id', validadeUserId, userController.delete); // parametro id

// funcao buscar unico
router.get('/:id', validadeUserId, userController.getOne); // parametro id

router.get('/', userController.getAll); // funcao buscar todos

module.exports = router;


//Clean Code -> mongoDB -> TypeScript -> Tests