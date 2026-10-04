import { ViewTransition } from 'react'
import AdminSidebar from "../admin/_components/AdminSidebar";


export default function AdminLayout({ children }: { children : React.ReactNode}) {
  return (
    // <ViewTransition default="page">
      <main className="page-transition-wrapper">
        <div className="flex min-h-screen bg-background">
          <AdminSidebar />
          <div className="flex-1 overflow-y-auto bg-surface">
            <div className="mx-auto max-w-7x1 p-4 mt-15 lg:mt-0 sm:p-6 lg:p-8">
              {children}
            </div>
          </div>
        </div>
      </main>
    // </ViewTransition>
  )
}
