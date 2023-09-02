

export default function CreateProfileLayout({ children }: { children: React.ReactNode }) {


  return (
    <div className='w-full flex flex-col items-center justify-between min-h-screen bg-orange-400/80'>
      <header className='w-full flex flex-col items-center justify-center bg-slate-50/75 p-4'>
        <h1>Create Your profile</h1>
      </header>
      <main className="w-full">
        {children}
      </main>
    </div>
  )
}