

export default function CreateProfileLayout({ children }: { children: React.ReactNode }) {


  return (
    <div className='w-full flex flex-col items-center justify-start min-h-screen bg-orange-400/80'>
      <header className='w-full max-w-10/12 text-center text-slate-800 p-1 my-2'>
        <h1 className="text-4xl">Create Your profile</h1>
      </header>
      <main className="w-full">
        {children}
      </main>
    </div>
  )
}