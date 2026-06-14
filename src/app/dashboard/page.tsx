import { auth } from '@/lib/auth'
import { redirect } from 'next/navigation'
import LoginButton from '@/components/LoginButton'

export default async function DashboardPage() {
    const session = await auth()

    if (!session?.user) {
    redirect('/')
    }

    return (
        <main className="min-h-screen bg-gray-50">
        {/* Navbar */}
            <nav className="bg-white border-b border-gray-100 px-6 py-4">
                <div className="max-w-4xl mx-auto flex items-center justify-between">
                <span className="font-semibold text-gray-900">
                    Tether
                </span>
                <LoginButton />
                </div>
            </nav>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-6 py-10">
            <h1 className="text-2xl font-semibold text-gray-900 mb-2">
            Welcome back, {session.user.name?.split(' ')[0]} 👋
            </h1>
            <p className="text-gray-500 mb-8">
            You are successfully logged in.
            </p>

            {/* User info card */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                <h2 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-4">
                    Your Account
                </h2>
                <div className="flex items-center gap-4 mb-6">
                    {session.user.image && (
                    <img
                        src={session.user.image}
                        alt={session.user.name ?? 'User'}
                        className="w-16 h-16 rounded-full"
                    />
                    )}
                    <div>
                    <p className="font-medium text-gray-900">
                        {session.user.name}
                    </p>
                    <p className="text-sm text-gray-500">
                        {session.user.email}
                    </p>
                    </div>
                </div>
            </div>
        </div>
        </main>
    )
}