import * as bcrypt from 'bcrypt';

export async function hashPassword(raw_password) {
    const saltRounds = 10;
    const hashPass =await bcrypt.hash(raw_password,saltRounds);
    return hashPass;
}

export async function comparePassword(row_password,hash_Password) {
    
    const isMathch = await bcrypt.compare(row_password,hash_Password);

    return isMathch;
}