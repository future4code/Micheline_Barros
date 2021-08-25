export class HashGeneratorMock {
    async hash(s: string): Promise<string>{
        return "hash";
    }

    async compareHash(s: string, hash: string): Promise<boolean>{
        return s === hash;
    }
}