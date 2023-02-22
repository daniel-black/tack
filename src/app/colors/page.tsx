import { UserColor } from "@/components/user-color";
import { createClient } from "@/lib/supabase-server";
import { Color, SupabaseColorData } from "@/types";
import Link from "next/link";

// do not cache this page
export const revalidate = 0;

export default async function ColorsPage() {
  const supabase = createClient();
  const { data, error} = await supabase.from('color').select('*');

  if (error) {
    return (
      <div>
        <p>uh oh, error</p>
        <pre>
          {JSON.stringify(error, null, 2)}
        </pre>
      </div>
    );
  }

  const colors = mapResponse(data as SupabaseColorData[]);

  return (
    <div className="p-5">
      <Link href={'/'} className='hover:underline'>Back to Editor</Link>
      <h1 className="text-3xl mt-3 mb-10">User Generated Colors</h1>

      <div className="space-y-5">
        {colors.map(c => <UserColor key={c.id} color={c} />)}
      </div>
    </div>
  );
}

function mapResponse(data: SupabaseColorData[]): Color[] {
  return data.map(d => ({
    id: d.id,
    createdAt: d.created_at,
    name: d.name,
    hexValues: d.hex_values,
    hslShades: d.hsl_shades,
  }));
}