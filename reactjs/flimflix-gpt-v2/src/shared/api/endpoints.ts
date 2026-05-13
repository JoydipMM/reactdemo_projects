export const ENDPOINTS = {
    USERS: '/users',
    USER: '/users/:id',
    LOGIN: '/auth/login',
    users: {
    list: "/users",
        detail: (id: number) => `/users/${id}`,
    },
}