import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";



export const dynamic = "force-dynamic";
import HonorlockWidget from "@/components/ui/HonorlockWidget";

export default async function Index() {
   const supabase = createServerComponentClient({ cookies });
  
    const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/login");
  }
  const token = 'KVtORVJxqW82iEyjgb2v2BpieYAKZaFByAagKmJ0Be8r5Up4u8V7G2JmIBx11ajGi8oYLF92PvGnxMnOq6P6Hw13FrjdGB4VapFQ'; // Remplacez par votre token réel
  const contextType = 'course'; // Exemple de contextType
  const contextId = 'course-uuid'; // Remplacez par votre contextId réel

  return (
    <div>
      <h1>Examen avec Honorlock</h1>
      <HonorlockWidget
        token={token}
        contextType={contextType}
        contextId={contextId}
      />
    </div>
  );
};
