import * as bcrypt from "bcryptjs";


export const generetorHash = async (s: string): Promise<string> => {
    
    const cost = 12;
    const salt = await bcrypt.genSalt(cost);
    const result = await bcrypt.hash(s, salt);
        
    return result;
}

export const compare= async (s: string, hash: string): Promise<boolean> => {
    
    const hashCompare: boolean = await  bcrypt.compare(s, hash);

    return hashCompare
}