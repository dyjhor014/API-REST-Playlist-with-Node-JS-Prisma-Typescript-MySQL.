const bcrypt = require("bcryptjs")

export const encryptPass = async (password: string) => {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    return hash;
};

export const matchPass = async (password: string, savedPassword: string) => {
    try {
        return await bcrypt.compare(password, savedPassword);
    } catch (error) {
        console.error(error)
    }
};