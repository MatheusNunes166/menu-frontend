import { CategoryNav } from "@/cases/categories/components/category-nav"
import { Header } from "./header"
import { Outlet } from "react-router-dom"

export function AppLayout() {
  return (
    <>
      <Header />

      <div className="flex w-full flex-col gap-6 px-6 py-8 md:flex-row">
        <aside className="w-full md:w-64 md:shrink-0">
          <CategoryNav />
        </aside>

        <main className="min-w-0 flex-1">
          <Outlet />
        </main>
      </div>
    </>
  )
}