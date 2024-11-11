import { login } from "./login"
import { create } from "./create"

export const pages: { [key: string]: any } = {
    login: login,
    create: create
};