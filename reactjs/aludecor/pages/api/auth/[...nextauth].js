import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authLogin = {
  session: {
    strategy: "jwt",
    maxAge: 6 * 24 * 60 * 60 // 6 days in seconds
  },
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        try {
          const response = await fetch(
            `${process.env.NEXT_PUBLIC_IMAGE_URL}auth/user/login`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                username: credentials.username,
                password: credentials.password
              })
            }
          );
          const data = await response.json();
          console.log("data", data);
          if (!response.ok) {
            // console.log("arecacacacac");
            throw new Error(data.message || "Invalid credentials");
          }
          return {
            message: data.message,
            id: data.data.id, // Include user ID
            username: data.data.email,
            displayname: data.data.display_name,
            firstname: data.data.first_name,
            token: data.data.token // Include API token
          };
        } catch (error) {
          console.error("Authorization error:", error);
          throw new Error(error.message || "Login failed. Please try again.");
        }
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.username = user.username; // Change to email to match what you want
        token.displayname = user.displayname;
        token.firstname = user.firstname; // Match the case
        token.token = user.token;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id || null;
        session.user.name = token.firstname || null;
        session.user.image = token.image || "/images/user.png";
        session.user.email = token.username || null;
        session.user.firstName = token.firstname || null; // Match the case
        session.user.token = token.token || null;
        session.user.displayname = token.displayname || null;
      }
      return session;
    }
  },
  secret: process.env.NEXTAUTH_SECRET
};

export default NextAuth(authLogin);
