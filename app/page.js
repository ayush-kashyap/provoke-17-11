import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function Home() {
  return (
      <div className="bg-blue-900">
    <div className="flex h-screen">
        <div className="signUp bg-white w-2/6 m-auto p-10 rounded-md">
            <h1 className="text-2xl font-bold text-center">Create an account</h1>
            <form className="flex flex-col">
                <label for="name">Name</label><input placeholder="Enter Name" className="rounded-md p-2 border border-black border-solid" type="text" name="name" id="name"/>
                <label for="email">Email</label><input placeholder="Enter Email" className="rounded-md p-2 border border-black border-solid" type="email" name="email" id="email"/>
                <label for="pass">Password</label><input placeholder="Enter Password" className="rounded-md p-2 border border-black border-solid" type="password" name="pass" id="pass"/>
                <label for="check"><input  type="checkbox" name="check" id="check"/>  Remember Me</label>
                <Link name="submit" className="text-white bg-blue-900 border-0 p-2 rounded-md text-center" href='/subscribe' >Sign Up</Link>
                <span>Already have an account? <Link className="text-blue-900 font-bold" href="/login">Login</Link></span>
            </form>
        </div>
    </div>
</div>
  )
}
