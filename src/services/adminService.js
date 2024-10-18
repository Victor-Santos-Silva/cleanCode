const Admin = require("../models/admin");

const adminService = {
    create: async (req, res) => {
        try {
            const { nome, email, senha } = req.body;
            const hashSenha = await bcrypt.hash(senha, 10);

            return await Admin.create({ nome, email, senha: hashSenha })

        } catch (error) {
            throw new Error("Ocorreu um erro ao criar Admin.")
        }

        /* try {
            return await Admin.create(admin);
        } catch (error) {
            throw new Error('Ocorreu um erro ao criar Admin');
        } */
    },
    esqueciSenha: async (id, esqueciSenha) => {
        try {
            const admin = await Admin.findByPk(id);
            if (!admin) {
                return null
            }
            await admin.update({ senha: novaSenha });
            return admin;
        } catch (error) {
            throw new Error("Ocorreu um erro ao atualizar senha.");
        }
    },
    update: async (id, adminToUpdate) => {
        try {
            const admin = await Admin.findByPk(id);
            if (!admin) { // user for vazio
                return null;
            }
            await admin.update(adminToUpdate);
            await admin.save();
            return admin;
        } catch (error) {
            throw new Error('Ocorreu um erro ao atualizar admin');
        }
    },
    getById: async (id) => {
        try {
            const admin = await Admin.findByPk(id);
            if (!admin) {
                return null;
            }
            return admin;
        } catch (error) {
            throw new Error('Ocorreu um erro ao buscar um unico admin');
        }
    },
    getAll: async () => {
        try {
            return await Admin.findAll();
        } catch (error) {
            throw new Error('Ocorreu um erro ao buscar todos os admins');
        }
    },
    delete: async (id) => {
        try {
            const user = await Admin.findByPk(id);
            if (!user) {
                return null;
            }
            await user.destroy();
            return user;
        } catch (error) {
            throw new Error('Ocorreu um erro ao deletar o admin');
        }
    }
}

module.exports = adminService;