// server component redirect so users see the real flow
import { redirect } from 'next/navigation';

export default function Page() {
  redirect('/position/setup?auth=1');
}
