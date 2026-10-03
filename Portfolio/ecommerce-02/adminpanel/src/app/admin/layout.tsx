import AdminLayout from "../layout/AdminLayout";


export default function AdminFolderLayout({children}: Readonly<{children: React.ReactNode}>) {
  return (
    <AdminLayout>
      <div className="mx-auto max-w-full space-y-8">
      {children}
      </div>
    </AdminLayout>
  )
}
