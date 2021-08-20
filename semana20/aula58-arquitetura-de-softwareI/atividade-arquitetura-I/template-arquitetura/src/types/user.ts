export enum USER_ROLES {
   NORMAL = 'NORMAL',
   ADMIN = 'ADMIN'
}

export type authenticationData = { //utilizado no token para as permissões
   id: string,
   role: USER_ROLES
}

export type user = {
   id: string,
   name: string,
   email: string,
   password: string,
   role: USER_ROLES
}