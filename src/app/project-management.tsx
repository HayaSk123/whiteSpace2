import Image from "next/image";

export default function ProjectManagement() {
    return (
        <div className="bg-white py-24 px-12 lg:px-24 flex flex-col lg:flex-row items-center justify-between text-white gap-12"> {/* Increased gap */}
            {/* Left Content */}
            <div className="flex-1 lg:mr-12"> {/* Increased margin-right */}
                <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-black">Project Management</h1>
                <p className="text-lg lg:text-xl mb-6 text-black">
                    Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note.
                </p>
                <div className="my-3">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded">
                        Get Started
                    </button>
                </div>
            </div>

            {/* Right Image */}
            <div className="flex-[300px]">
                <Image
                    src="/project-management.jpeg"
                    width={600}
                    height={400}
                    alt="Project Management Image"
                    className="rounded-lg"
                />
            </div>
        </div>
    );
}
