export default function Loading() {
    return (
        <main className="min-h-screen bg-white animate-pulse">
            <div className="h-20 bg-gray-200" /> {/* Navbar skeleton */}
            <div className="h-[600px] md:h-[700px] lg:h-[85vh] w-full bg-gray-200" /> {/* Hero skeleton */}

            <div className="container py-16">
                <div className="h-10 bg-gray-200 w-3/4 mb-4 rounded" />
                <div className="h-6 bg-gray-200 w-1/2 mb-16 rounded" />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-16">
                    <div className="space-y-4">
                        <div className="h-8 bg-gray-200 w-1/3 mb-4 rounded" />
                        <div className="h-4 bg-gray-200 w-full rounded" />
                        <div className="h-4 bg-gray-200 w-full rounded" />
                        <div className="h-4 bg-gray-200 w-5/6 rounded" />
                    </div>
                    <div className="w-full aspect-[4/3] bg-gray-200 rounded-[8px]" />
                </div>
            </div>
        </main>
    );
}
