import { currentUser } from '@clerk/nextjs'
import type { User } from '@clerk/nextjs/api'
import InputGroup from '@/components/inputs/input-group'

export default async function CreateProfilePage() {

  const user: User | null = await currentUser()
  // get user's email from clerk
  const email = user?.emailAddresses[0].emailAddress
  if (!email) {
    return null
  }

  if (!user) {
    return null
  }
  return (
    <div className='w-full flex flex-col items-center justify-start p-2'>
      <form className='w-full flex flex-col items-center justify-start p-2 bg-slate-50 rounded-lg drop-shadow-lg'>
        <InputGroup
          name='firstName'
          label='First Name'
          type='text'
          placeholder='First Name'
          defaultValue=''
          id='firstName'
        />
        <InputGroup
          name='lastName'
          label='Last Name'
          type='text'
          placeholder='Last Name'
          defaultValue=''
          id='lastName'
        />
        <InputGroup
          name='username'
          label='Username'
          type='text'
          placeholder='Username'
          defaultValue=''
          id='username'
        />
        <InputGroup
          name='email'
          label='Email'
          type='email'
          placeholder='Email'
          defaultValue={email}
          id='email'
        />
        <InputGroup
          name="dob"
          label="Date of Birth"
          type="date"
          placeholder="Date of Birth"
          defaultValue=""
          id="dob"
        />
      </form>
    </div>
  )
}