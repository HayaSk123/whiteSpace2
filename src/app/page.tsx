import Image from 'next/image';
import Link from 'next/link';
import HeroSection from './herosec';
import ProjectManagement from './project-management';
import WorkTogether from './team-work';
import ExtensionSection from './use-as-exe';
import Customize from './cutomization'
import Footer from './footer'


export default function Homepage() {
    return (
        <div>
           <HeroSection/>
           <ProjectManagement/>
           <WorkTogether/>
           <ExtensionSection/>
           <Customize/>
           <Footer/>
        </div>
    );
}
