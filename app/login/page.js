import Image from 'next/image'

export default function Login() {
  return (
      <div className="bg-blue-900">
    <div className="flex h-screen">
        <div className="signUp bg-white w-2/6 m-auto p-10 rounded-md">
            <h1 className="text-2xl font-bold text-center">Log in to your account</h1>
            <form className="flex flex-col">
                <label for="email">Email</label><input placeholder="Enter Email" className="rounded-md p-2 border border-black border-solid" type="email" name="email" id="email" />
                <label for="pass">Password</label><input placeholder="Enter Password" className="rounded-md p-2 border border-black border-solid" type="password" name="pass" id="pass" />
                <label for="check"><input  type="checkbox" name="check" id="check" />  Remember Me</label>
                <input type="submit" name="submit" className="text-white bg-blue-900 border-0 p-2 rounded-md" value="Sign Up" />
                <span>New to My app? <a className="text-blue-900 font-bold" href="/">Signup</a></span>
            </form>
        </div>
    </div>
</div>
  )
}