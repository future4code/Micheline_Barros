export type AuthenticationData = {
    info: string;
}

export type recipe = {
    id: string,
    title: string,
    description: string,
    createDate:  string, //create_date
    idUser: string //id_user
}


export type user = {
    id: string,
    name: string,
    email: string,
    password: string
}