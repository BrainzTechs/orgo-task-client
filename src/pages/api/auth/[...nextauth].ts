import NextAuth from "next-auth";
import CredentialProvider from "next-auth/providers/credentials";

import type { NextAuthOptions } from "next-auth";

export const authOptions = {
  providers: [
    CredentialProvider({
      name: "credentials",
      credentials: {
        username: {
          label: "Email",
          type: "email",
          placeholder: "johndoe@test.com",
        },
        password: { label: "Password", type: "password" },
      },
      authorize: (credentials) => {
        // database lookup
        if (credentials?.username === "john" && credentials?.password === "test") {
          return {
            id: 2,
            name: "John",
            email: "johndoe@test.com",
          };
        }

        return null;
      },
    }),
  ],
  secret: process.env.SECRET,
  jwt: {
    secret: process.env.SECRET,
    encryption: true,
  },
  pages: {
    signIn: `/login`,
    verifyRequest: `/login`,
    error: "/login", // Error code passed in query string as ?error=
  },
  callbacks: {
    jwt: ({ token, user }) => {
      if (user) {
        token.id = user.id;
      }

      return token;
    },
    session: ({ session, token }) => {
      if (token) {
        session.id = token.id;
      }

      return session;
    },
  },
} as NextAuthOptions;

export default NextAuth(authOptions);
