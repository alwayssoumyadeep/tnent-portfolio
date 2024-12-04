import Tag from "@/components/tag";
import { div } from "framer-motion/client";
import FeatureCard from "@/components/FeatureCard";
import avatar1 from "@/assets/images/avatar-ashwin-santiago.jpg";
import avatar2 from "@/assets/images/avatar-florence-shaw.jpg";
import avatar3 from "@/assets/images/avatar-lula-meyers.jpg";
import avatar4 from "@/assets/images/avatar-owen-garcia.jpg";
import Image from "next/image";
import Avatar from "@/components/Avatar";

const features = [
    "Asset Library",
    "Code Preview",
    "Flow Mode",
    "Smart Sync",
    "Auto Layout",
    "Fast Search",
    "Smart Guides",
];

export default function Features() {
    return <section className="py-24">
        <div className="container">
            <div className="flex justify-center">
                <Tag>Features</Tag>
            </div>
            <h2 className="text-6xl font-medium tetx-center mt-6">Where power meets <span className="text-lime-400">simplicity</span></h2>
            <div className="mt-12 grid grid-cols-1 gap-8">
                <FeatureCard title="Real-Time collaboration" description="Work together seamlessly with conflict-free team editing">
                    <div className="aspect-video flex items-center">
                        <Avatar className="z-40">
                            <Image src={avatar1} alt="avatar1" className="rounded-full"/>
                        </Avatar>
                        <Avatar className="-ml-6 border-green-500 z-30">
                            <Image src={avatar2} alt="avatar2" className="rounded-full"/>
                        </Avatar>
                        <Avatar className="-ml-6 border-blue-500 z-20">
                            <Image src={avatar3} alt="avatar3" className="rounded-full"/>
                        </Avatar>
                        <Avatar className="-ml-6 border-transparent">
                            <div className="size-full bg-neutral-700 rounded-full inline-flex items-center justify-center gap-1">
                                {Array.from({length: 3}).map((_,i) =>(
                                    <span className="size-1.5 rounded-full bg-white" key={i}></span>

                                ))}
                            </div>
                        </Avatar>
                    </div>
                </FeatureCard>
                <FeatureCard title="Interactive Prototyping" description="Engage your clients with prototypes that react to user actions">
                    <div className="aspect-video flex items-center justify-center">
                        <p className="text-4xl font-extrabold text-white/20 text-center">
                            We've achieved {" "} <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">incredible</span> {" "} growth this year
                        </p>
                    </div>
                </FeatureCard>
                <FeatureCard title="Keyboard Quick Actions" description="Powerfull commands to help you create designs more quickly">
                    <div className="aspect-video flex items-center justify-center gap-3">
                        <div className="bg-gray-300 text-black border rounded-lg border-transparent px-4 py-1">shift</div>
                        <div className="bg-gray-300 text-black border rounded-lg border-transparent px-2 py-1">alt</div>
                        <div className="bg-gray-300 text-black border rounded-lg border-transparent px-3 py-1">c</div>
                    </div>
                </FeatureCard>   
            </div>
            <div>
                {features.map((feature) => (
                    <div key={feature}>
                        <span></span>
                        <span>{feature}</span>

                    </div>
                ))}
            </div>
        </div>
    </section>;
}
