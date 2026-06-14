import {  auth } from '@/lib/auth'
import { redirect } from 'next/navigation'
import LoginButton from '@/components/LoginButton'

export default async function HomePage() {
        console.log('CLIENT ID:', process.env.GOOGLE_CLIENT_ID)
    console.log('SECRET:', process.env.GOOGLE_CLIENT_SECRET)
    const session = await auth()

    if (session) {
        redirect('/dashboard')
    }

    return (
        <main className="flex min-h-screen items-center justify-center bg-gray-50">
            <div className="max-w-md w-full mx-auto p-8">
                <div className="text-center mb-10">
                    <h1 className="text-2xl font-semiblod text-gray-900">
                        Welcome to Next Tether
                    </h1>
                    <p className="text-gray-500 mt-2 text-sm">
                        Sign in to continue
                    </p>
                </div>
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 flex flex-col items-center gap-4">
                    <LoginButton />
                </div>
            </div>
        </main>
    )
}




//gagawa ka pa ng homePage backread ka muna sa claude. good job
//tapos kana sa setup, next mo na lang gagawin yung home page