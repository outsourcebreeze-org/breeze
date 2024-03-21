import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import dynamic from "next/dynamic";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const HonorlockComponent = dynamic(
  () => import("../../components/HonorlockComponent"),
  {
    ssr: false,
  }
);

export default async function Index() {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/login");
  }

  return (
    <div>
      <h1>Page de Test Honorlock</h1>
      <HonorlockComponent />
    </div>
  );
}
