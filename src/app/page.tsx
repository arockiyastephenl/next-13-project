import { TodoItem } from "@/components/TodoItem";
import { Navbar } from "@/components/Navbar";
import { prisma } from "@/db";
import Link from "next/link";
// import { UserButton } from "@clerk/nextjs";

function getTodos() {
  return prisma.todo.findMany();
}

function getCustomer() {
  return prisma.customer.findMany();
}

async function toggleTodo(id: string, complete: boolean) {
  "use server";

  await prisma.todo.update({ where: { id }, data: { complete } });
}

export default async function Home() {
  const todos = await getTodos();

  const customer = await getCustomer();

  return (
    <>
    <div className="break-after-auto">
      <Navbar/>
      <br/>
      <br/>
      <br/>
      <br/>
      {/* <div className="flex justify-between items-end mb-4">
        <div className="flex items-end">
          <h1 className="text-2xl">Todos</h1>
          <Link
            className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
            href="/new"
          >
            New
          </Link>
          <Link
            className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
            href="/addcustomer"
          >
            addcustomer
          </Link> */}

          {/* <UserButton afterSignOutUrl="/"/> */}
        {/* </div> */}
      {/* </div> */}
      {/* <ul className="pl-4">
        {todos.map((todo) => (
          <TodoItem key={todo.id} {...todo} toggleTodo={toggleTodo} />
        ))}
      </ul> */}

      <div className="border border-slate-300">
        <table className="w-full">
          <thead>
            <tr className="bg-blue-950	">
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Phone</th>
              <th className="px-4 py-2">Address</th>
            </tr>
          </thead>
          <tbody>
            {customer.map((todo) => (
              <tr key={todo.id}>
                <td className="border px-4 py-2">{todo.name}</td>
                <td className="border px-4 py-2">{todo.email}</td>
                <td className="border px-4 py-2">{todo.phoneNumber}</td>
                <td className="border px-4 py-2">{todo.address}</td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </div>
    </>
  );
}
