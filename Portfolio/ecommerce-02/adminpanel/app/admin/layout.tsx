import AdminLayout from "../layout/AdminLayout";


export default function AdminFolderLayout({children}: Readonly<{children: React.ReactNode}>) {
  return (
    <AdminLayout>
      {children}
    </AdminLayout>
  )
}
