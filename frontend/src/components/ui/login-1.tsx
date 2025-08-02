import { FcGoogle } from "react-icons/fc";
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Login1Props {
  heading?: string;
  logo: {
    url: string;
    src: string;
    alt: string;
    title?: string;
  };
  buttonText?: string;
  googleText?: string;
  signupText?: string;
  signupUrl?: string;
}

const Login1 = ({
  heading,
  logo = {
    url: "https://www.shadcnblocks.com",
    src: "https://www.shadcnblocks.com/images/block/logos/shadcnblockscom-wordmark.svg",
    alt: "logo",
    title: "shadcnblocks.com",
  },
  buttonText = "Login",
  signupText = "Don't have an account?",
}: Login1Props) => {
    const [form, setForm] = useState({ email: '', password: '' })
    const router = useRouter()
  
    const handleChange = (e: any) => {
      setForm({ ...form, [e.target.name]: e.target.value })
    }
  
    const handleSubmit = async () => {
      const res = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      const data = await res.json()
      if (res.ok) {
        localStorage.setItem('token', data.token)
        localStorage.setItem('role', data.role)
        router.push(data.role === 'admin' ? '/admin-dashboard' : '/user-dashboard')
      }
    }
  return (
    <section className="bg-muted bg-background h-screen">
      <div className="flex h-full items-center justify-center">
        <div className="border-muted bg-background flex w-full max-w-sm flex-col items-center gap-y-8 rounded-md border px-6 py-12 shadow-md">
          <div className="flex flex-col items-center gap-y-2">
            {/* Logo */}
           
           <h1 className="text-3xl font-semibold">LOGIN</h1>
          </div>
          <div className="flex w-full flex-col gap-8">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <Input name="email" type="email" placeholder="Email" required onChange={handleChange}/>
              </div>
              <div className="flex flex-col gap-2">
                <Input name="password" type="password" placeholder="Password" required onChange={handleChange}/>
              </div>
              <div className="flex flex-col gap-4">
                <Button onClick={handleSubmit} type="submit" className="mt-2 cursor-pointer w-full">
                  {buttonText}
                </Button>
              
              </div>
            </div>
          </div>
          <div className="text-muted-foreground flex justify-center gap-1 text-sm">
            <p>{signupText}</p>
            <a
              href="/register"
              className="text-primary font-medium hover:underline"
            >
              Sign up
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Login1 };
