export default function Footer() {
    return (
        <div className="bg-[#043873] h-300 py-8 px-4 flex flex-col items-center justify-center">
            <div className="max-w-screen-md w-full text-center">
                <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-white">Try Whitespace Today</h1>
                <p className="text-lg lg:text-xl mb-6 text-white">
                    Get Started for free
                </p>
                <p className="text-lg lg:text-xl mb-6 text-white">
                    Add your whole team as your needs grow
                </p>
                <div className="my-3">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded">
                        Try Workspace Free
                    </button>
                </div>
            </div>
        </div>
    );
}
