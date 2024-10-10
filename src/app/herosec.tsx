import Image from 'next/image';

export default function HeroSection() {
    return (
        <div className="bg-[#043873] py-24 px-12 lg:px-24 flex flex-col lg:flex-row items-center justify-between text-white gap-6">
        
            {/* Left Content */}
            <div className="flex-1 lg:mr-6"> {/* Decreased margin-right */}
                <h1 className="text-4xl lg:text-5xl font-bold mb-4">Get More Done with Whitespace</h1>
                <p className="text-lg lg:text-xl mb-6">
                    Project management software that enables your team to collaborate, plan, analyze, and manage everyday tasks.
                </p>
                <div className="my-3">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded">
                        Try Workspace Free
                    </button>
                </div>
            </div>

            {/* Right Image */}
            <div className="flex-[300px]">
                <Image
                    src="/main.png"
                    width={600}
                    height={400}
                    alt="Workspace Hero Image"
                    className="rounded-lg"
                />
            </div>
        </div>
    );
}
