export class Pokemon{
    constructor(
        private id: string,
        private name: string,
        private generation: number,
        private evolutionStage: string,
        private familyId: string,
        private type1: string,
        private type2: string,
        private statTotal: number,
        private atk: number,
        private def: number,
        private sta: string,
        private legendary: number,
        private cp40: number,
        private cp39: number
    ){}

    getId(){
        return this.id;
    }

    setId(id: string){
        return this.id = id;
    }

    getName(){
        return this.name;
    }

    setName(name: string){
        return this.name = name;
    }

    getGeneration(){
        return this.generation;
    }

    setGeneration(generation: number){
        return this.generation = generation;
    }

    getEvolutionStage(){
        return this.evolutionStage;
    }

    setEvolutionStage(evolutionStage: string){
        return this.evolutionStage = evolutionStage;
    }

    getFamilyId(){
        return this.familyId;
    }

    setFamilyId(familyId: string){
        return this.familyId = familyId;
    }

    getType1(){
        return this.type1;
    }

    setType1(type1: string){
        return this.type1 = type1;
    }

    getType2(){
        return this.type2;
    }

    setType2(type2: string){
        return this.type2 = type2;
    }
    
    getStatTotal(){
        return this.statTotal;
    }

    setStatTotal(statTotal: number){
        return this.statTotal = statTotal;
    }
    
    getAtk(){
        return this.atk;
    }

    setAtk(atk: number){
        return this.atk = atk;
    }
    
    getDef(){
        return this.def;
    }

    setDef(def: number){
        return this.def = def;
    }
    
    getSta(){
        return this.sta;
    }

    setSta(sta: string){
        return this.sta = sta;
    }
    
    getLegendary(){
        return this.legendary;
    }

    setLegendary(legendary: number){
        return this.legendary = legendary;
    }
    
    getCp40(){
        return this.cp40;
    }

    setCp40(cp40: number){
        return this.cp40 = cp40;
    }
    
    getCp39(){
        return this.cp39;
    }

    setCp39(cp39: number){
        return this.cp39 = cp39;
    }

    static toPokemonModel(data?: any){
        return (data && new Pokemon(
            data.id,
            data.name,
            data.generation,
            data.evolutionStage || data.evolution_stage,
            data.familyId || data.family_id,
            data.type1 || data.type_1,
            data.type2 || data.type_2,
            data.statTotal || data.stat_total,
            data.atk,
            data.def,
            data.sta,
            data.legendary,
            data.cp40 || data.cp_40,
            data.cp39 || data.cp_39
        ))
    }

}

export interface PokemonInputDTO{
    id: string,
    name: string,
    generation: number,
    evolutionStage: string,
    familyId: string,
    type1: string,
    type2: string,
    statTotal:number,
    atk: number,
    sta: number,
    legendary: number,
    cp40: number,
    cp39: number
}

export interface PokemonOutputDTO{
    id: string,
    name: string,
    generation: number,
    evolutionStage: string,
    familyId: string,
    type1: string,
    type2: string,
    statTotal:number,
    atk: number,
    sta: number,
    legendary: number,
    cp40: number,
    cp39: number
}