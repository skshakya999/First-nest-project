import * as bcrypt from 'bcrypt'

export async function hashPassword(raw_password) {
    const saltRounds = 10;
    const hashPass = await bcrypt.hash(raw_password,saltRounds);
    return hashPass;
}

export async function comparePassword(raw_password,hash_password) {

    const isMatched =await bcrypt.compare(raw_password,hash_password);
    return isMatched;
}
