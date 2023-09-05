import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function ProtectedRoute() {
  const session = await getServerSession();

  if (!session || !session.user) {
    // redirecting not logged user to a log in page when trying to access protected route
    redirect("/api/auth/signin");
  }

  return (
    <div>
      This is a protected route
      <br />
      You will only see this if you're authenticated.
    </div>
  );
}
