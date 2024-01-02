

import User from "@/lib/model/user.model";
import { connectToDB } from "@/lib/mongoose";
import CredentialsProvider from "next-auth/providers/credentials";

export const options = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "email:",
          type: "text",
          placeholder: "your-email",
        },
        password: {
          label: "password:",
          type: "password",
          placeholder: "your-password",
        },
      },
      async authorize(credentials) {
        console.log(credentials?.email)
        await connectToDB();
        try {
          const foundUser = await User.findOne({ email: credentials.email })

          if (foundUser) {
            console.log("User Exists");
            const match = credentials.password === foundUser.password;
         console.log(match)
            if (match) {
              console.log("Good Pass");
              return foundUser;
            }else{
              throw new Error("Wrong password!");
            }
          }else{
            throw new Error("Wrong email or password!");
          }
        } catch (err) {
          throw new Error(err);
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
       // console.log(user);
       if (user?.id) {
        token.id = user.id;
        token.name = user.firstname + ' ' + user.lastname;
        token.image = user.image;
      }

      return token;
    },
    async session({ session, token }) {
      session.user.id = token.id;
      session.user.name = token.name;
      session.user.image = token.image;
      // console.log(token,session);
      return session;
    },
    async redirect({ url, baseUrl }) {
      // console.log('HEllllooppoo' + baseUrl)
      return baseUrl;
    },
  },
  pages: {
    error: "/login",
  },
};