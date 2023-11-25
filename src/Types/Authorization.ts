export interface User {
    id: number,
    username: string,
    color: string,
    profilePicture: string
}

export interface AuthorizedUserResponse {
    user: User
}
