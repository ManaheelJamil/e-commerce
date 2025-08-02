'use client'
// import Link from 'next/link'
// import { useRouter } from 'next/navigation'
// import { useState } from 'react'

// export default function Login() {
//     const router = useRouter()
//   const [form, setForm] = useState({ email: '', password: '' })

//   const handleChange = (e: any) => {
//     setForm({ ...form, [e.target.name]: e.target.value })
//   }

//   const handleSubmit = async (e: any) => {
//     e.preventDefault()
//     const res = await fetch('http://localhost:5000/api/auth/login', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(form),
//     })

//     const data = await res.json()

//     if (res.ok) {
//       localStorage.setItem('token', data.token)
//       alert(`Welcome, ${data.user.name}`)
//      router.push('/dashboard')
//     } else {
//       alert(data.message)
//     }
//   }

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
//       <form
//         onSubmit={handleSubmit}
//         className="bg-white p-6 rounded-lg shadow-md w-full max-w-md space-y-4"
//       >
//         <h2 className="text-2xl font-semibold text-center text-gray-800">Login</h2>
//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           onChange={handleChange}
//           required
//           className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//         />
//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           onChange={handleChange}
//           required
//           className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//         />
//         <div className='flex justify-center'>
//           <h1><Link href="/signup" className='text-sm text-center text-blue-900 underline'>Signup</Link></h1>
//         </div>
//         <button
//           type="submit"
//           className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
//         >
//           Login
//         </button>
//       </form>
//     </div>
//   )
// }
// import { useState } from 'react'
// import { useRouter } from 'next/navigation'
// import Link from 'next/link'

// export default function Login() {
//   const [form, setForm] = useState({ email: '', password: '' })
//   const router = useRouter()

//   const handleChange = (e: any) => {
//     setForm({ ...form, [e.target.name]: e.target.value })
//   }

//   const handleSubmit = async () => {
//     const res = await fetch('http://localhost:5000/api/login', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(form)
//     })
//     const data = await res.json()
//     if (res.ok) {
//       localStorage.setItem('token', data.token)
//       localStorage.setItem('role', data.role)
//       router.push(data.role === 'admin' ? '/admin-dashboard' : '/user-dashboard')
//     }
//   }

//   return (
//     <div>
//       <h2>Login</h2>
//       <input name="email" placeholder="Email" onChange={handleChange} />
//       <input name="password" type="password" placeholder="Password" onChange={handleChange} />
//       <button onClick={handleSubmit}>Login</button>
//       <Link href="/register">signup</Link>
//     </div>
//   )
// }
import { Login1 } from "@/components/ui/login-1";
import React from "react";
function DemoOne () {
  return (
    <Login1 logo={{
      url: "",
      src: "",
      alt: "",
      title: undefined
    }} />
  );
};

export default DemoOne ;
