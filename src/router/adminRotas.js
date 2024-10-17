const { Router } = require("express");
const adminController = require("../controller/adminController")
const router = Router();
const { validateAdmin, validadeAdminId } = require("../middlewares/validateAdmin")

router.post('/', validateAdmin, adminController.create); //funcao de criar

// funcao de editar
router.put('/:id', validateAdmin, validadeAdminId, adminController.update); // parametro id

// funcao de deletar
router.delete('/:id', validadeAdminId, adminController.delete); // parametro id

// funcao buscar unico
router.get('/:id', validadeAdminId, adminController.getOne); // parametro id

router.get('/', adminController.getAll);

module.exports = router;