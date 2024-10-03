const userService = require("../services/userService");

const userController = {
    create: async (req, res) => {
        try {
            const user = await userService.create(req.body);
            return res.status(201).json({
                msg: 'Usuario criado com sucesso.',
                user
            })
        } catch (error) {
            return res.status(500).json({
                msg: 'Erro ao tentar criar o Usuario.',
            })
        }
    },
    update: async (req, res) => {
        try {
            const user = await userService.update(req.params.id, req.body);
            if (!user) {
                return res.status(400).json({
                    msg: 'User nao encontrado.'
                });
            }
            return res.status(200).json({
                msg: 'User atualizado com sucesso.',
                user
            });
        } catch (error) {
            return res.status(500).json({
                msg: 'Erro ao atualizar o user',
            });
        }
    },
    delete: async (req, res) => {
        try {
            const user = await userService.delete(req.params.id, req.body);
            if (!user) {
                return res.status(400).json({
                    msg: 'User nao encontrado.'
                });
            }
            return res.status(200).json({
                msg: 'User deletado com sucesso.',
                user
            });
        } catch (error) {
            return res.status(500).json({
                msg: 'Erro ao deletar o user',
            });
        }
    },
    getAll: async (req, res) => {
        try {
            const user = await userService.getAll(req.params.id, req.body);
            if (!user) {
                return res.status(400).json({
                    msg: 'User nao encontrado.'
                });
            }
            return res.status(200).json({
                msg: 'User deletado com sucesso.',
                user
            });
        } catch (error) {
            return res.status(500).json({
                msg: 'Erro ao deletar o user',
            });
        }
    },
    getById: async (req, res) => {
        try {
            const user = await userService.getById(req.params.id, req.body);
            if (!user) {
                return res.status(400).json({
                    msg: 'User nao encontrado.'
                });
            }
            return res.status(200).json({
                msg: 'User deletado com sucesso.',
                user
            });
        } catch (error) {
            return res.status(500).json({
                msg: 'Erro ao deletar o user',
            });
        }
    }

}

module.exports = userController;