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
  const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI1MyIsImp0aSI6IjY5ZmU4NGE5MmRlMDEzYzI2ZmY4ZTNjZTJlN2FiM2Y1NDM3NWQ3OTU4ZTRiMTVjMWYwMDBlOTU4NTYyNTNjMGExZDk5M2ZlYTQ5Y2QzMzk5IiwiaWF0IjoxNzEwNzkxNjcwLjg4MzE4MSwibmJmIjoxNzEwNzkxNjcwLjg4MzE4NSwiZXhwIjoxNzEwODc4MDcwLjg3MzA1Mywic3ViIjoiNzg0Iiwic2NvcGVzIjpbXX0.P1egvRHw9kQHaqBbm5EYqyI2NCHmP-ny-Hb25cAefrT_3gEYMUhqFqtofV9Csg4hSv0-RrmyMiT2hGJJrdOA9Vqz-4N7nbo5GRxj4qbFvoFwKXqYOJweoyL4b-bqj_Pd5TWTKKQjsgtKTo1QQ7OjFq82yYUrHYTYYMa62w81Z1CgjS5sZ1h6caDWa0woVZLzOVGEk-cPDAZP0bDloLsyTvCAPtgInRx5NHTz5a-0oWZt6zaboguqg3M2Rr-Kg-2PYdMOk2lrrMJW06C5UqZ2MetZjFJunQ_H46yTE0Ur5t3wgdQFucDFHsRFnTDqPWd1sh_Ytscj8sXQNpf5agI8v46IjKe5Q0if9eLBuZUp5mEm9rXAIwp9k14j3y8EJGWVitNm39cbFwUnrZGnT3dDxTVS66MT_gSWaQN10xbId-Yp321BO-citcGJCYfoza-YhPDmwHalhaZySXlFuT9eTjkOE96zGlbnwNTcCrGf7FBumPezDgw6VUMU5SETeKhGnxJDJEXahnonXwd4ih1_OYp3g2OnnqoDpdHT00OXksl-AnkkUpp4AC7V8t_8FCCmChf4NHNqePcq1Mvn3yaUzcKTe2AfKnpZgx_Tsoxb9H_bDC0GfOKJfyayrBsgPDZjcmMQNcCKAR45bU9033vf9lvfcZ9IZlshvYazyk9u95I'; // Remplacez par votre token réel
  const contextType = 'course'; // Exemple de contextType
  const contextId = 'Mathematics'; // Remplacez par votre contextId réel

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
