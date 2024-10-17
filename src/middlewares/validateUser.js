const validateUser = (req, res, next) => {
    const { nome, email } = req.body;

    if (!nome || typeof nome !== 'string') {
        // 400 -> Bad request
        return res.status(400).json({ msg: 'Campos inválidos.' });
    }

    if (!email || typeof email !== 'string') {
        return res.status(400).json({ msg: 'Campos inválidos.' });
    }
    // ! -> Diferente
    // arthur email ( ! (false, false) ) => true é invalido

    if (!(email.includes("@") && email.includes("."))) {
        return res.status(400).json({ msg: 'Campo email invalido.' })
    }

    // retirbar i bext, para prosseguir na funcao
    next();

}