import NextAuth from "next-auth"

declare module "next-auth" {
    interface Session {
        name: string
        accessToken: string
    }
}
