import { requireAdmin } from "@/server-actions/auth/require-admin";
import AdminLayout from "../layout/AdminLayout";


export default async function AdminFolderLayout({children}: Readonly<{children: React.ReactNode}>) {

  await requireAdmin();

  return (
    <AdminLayout>
      <div className="mx-auto max-w-full space-y-8">
      {children}
      </div>
    </AdminLayout>
  )
}
