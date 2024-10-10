import Image from "next/image";

export default function WorkTogether() {
    return (
        <div className="bg-white py-24 px-12 lg:px-24 flex flex-col lg:flex-row items-center justify-between text-white gap-12"> {/* Increased gap */}

            <div className="flex-[300px]">
                <Image
                    src="/work-together.png"
                    width={600}
                    height={400}
                    alt="Work Together Image"
                    className="rounded-lg"
                />
            </div>
            <div className="flex-1 lg:mr-12"> {/* Increased margin-right */}
                <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-black">Work Together</h1>
                <p className="text-lg lg:text-xl mb-6 text-black">
                    With whitespace, share your notes with your colleagues and collaborate on them.You can publish a note to the internet and share the URL with others
                </p>
                <div className="my-3">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded">
                        Try it now
                    </button>
                </div>
            </div>
        </div>
    );
}
