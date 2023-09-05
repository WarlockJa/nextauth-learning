import NextAuth from "next-auth/next";
import GitHubProvider from "next-auth/providers/github";

// options for an auth provider. in this case github
export const authOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID ?? "",
      clientSecret: process.env.GITHUB_SECRET ?? "",
    }),
  ],
};

// handles GET/POST requests
export const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
