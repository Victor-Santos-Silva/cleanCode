const { Router } = require("express");
const userController = require("../controller/userController")

const router = Router();

router.post('/', userController.create); //funcao de criar

// funcao de editar
router.put('/:id', userController.update); // parametro id

// funcao de deletar
router.delete('/:id', userController.delete); // parametro id

// funcao buscar unico
router.get('/:id', userController.getOne); // parametro id

router.get('/', userController.getAll); // funcao buscar todos

module.exports = router;