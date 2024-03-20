import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";



export const dynamic = "force-dynamic";
import HonorlockManager from '../../components/HonorlockManager';

export default async function Index() {
   const  supabase = createServerComponentClient({ cookies });
  
    const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/login");
  }
    return (
    <div>
      <h1>Page de Test Honorlock</h1>
      <HonorlockManager />
    </div>
  );
};
