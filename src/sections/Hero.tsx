"use client";

import designExample1Image from "@/assets/images/1.png";
import designExample2Image from "@/assets/images/2.png";
import Image from "next/image";
import Pointer from "@/components/pointer";
import { motion, useAnimate } from "framer-motion";
import { useEffect } from "react";
import CreativeBtn2 from "@/components/Downloadbtn";

export default function Hero() {
    const [leftDesignScope, leftDesignAnimate] = useAnimate();
    const [leftPointerScope, leftPointerAnimate] = useAnimate();
    const [rightDesignScope, rightDesignAnimate] = useAnimate();
    const [rightPointerScope, rightPointerAnimate] = useAnimate();

    useEffect(() => {
        leftDesignAnimate([
            [leftDesignScope.current, { opacity: 1 }, { duration: 0.5 }],
            [leftDesignScope.current, { y: 0, x: 0 }, { duration: 0.5 }],
        ]);

        leftPointerAnimate([
            [leftPointerScope.current, { opacity: 1 }, { duration: 0.5 }],
            [leftPointerScope.current, { y: 0, x: -100 }, { duration: 0.5 }],
            [
                leftPointerScope.current,
                { x: 0, y: [0, 16, 0] },
                { duration: 0.5, ease: "easeOut" },
            ],
        ]);

        rightDesignAnimate([
            [
                rightDesignScope.current,
                { opacity: 1 },
                { duration: 0.5, delay: 1.5 },
            ],
            [rightDesignScope.current, { y: 0, x: 0 }, { duration: 0.5 }],
        ]);

        rightPointerAnimate([
            [
                rightPointerScope.current,
                { opacity: 1 },
                { duration: 0.5, delay: 1.5 },
            ],
            [rightPointerScope.current, { y: 0, x: 175 }, { duration: 0.5 }],
            [
                rightPointerScope.current,
                { x: 0, y: [0, 20, 0] },
                { duration: 0.5, ease: "easeOut" },
            ],
        ]);
    }, [
        leftDesignAnimate, 
        leftDesignScope, 
        leftPointerAnimate, 
        leftPointerScope, 
        rightDesignAnimate, 
        rightDesignScope, 
        rightPointerAnimate, 
        rightPointerScope
    ]);

    return (
        <section className="py-24 overflow-x-clip" >
            <div className="container relative">
                <motion.div
                    ref={leftDesignScope}
                    initial={{ opacity: 0, y: 100, x: -100 }}
                    drag
                    className="absolute -left-20 top-20 hidden lg:block"
                >
                    <Image
                        src={designExample2Image}
                        className="w-80"
                        alt="design example 1 image"
                        draggable="true"
                    />
                </motion.div>
                <motion.div
                    ref={leftPointerScope}
                    initial={{ opacity: 0, y: 100, x: -200 }}
                    className="absolute left-56 top-96 hidden lg:block"
                >
                    <Pointer name="Andrea" />
                </motion.div>
                <motion.div
                    ref={rightDesignScope}
                    initial={{ opacity: 0, y: 100, x: 100 }}
                    drag
                    className="absolute -right-24 -top-4 hidden lg:block"
                >
                    <Image
                        src={designExample1Image}
                        className="w-64"
                        alt="design example 2 image"
                        draggable="true"
                    />
                </motion.div>
                <motion.div
                    ref={rightPointerScope}
                    initial={{ opacity: 0, y: 100, x: 275 }}
                    className="absolute right-80 -top-4 hidden lg:block"
                >
                    <Pointer name="Bryan" color="red" />
                </motion.div>
                <div className="flex justify-center mt-14">
                    {/* <div className="inline-flex py-1 px-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full text-neutral-950 font-semibold">
                        ✨ $7.5M seed round raised
                    </div> */}
                </div>
                <h1 className="text-6xl md:text-7xl font-medium text-center mt-12">
                    Apno Ka <span className="text-[#a3e635]">Online</span><br/>Store, Apno Ke liye
                </h1>
                <p className="text-center text-xl text-white/50 mt-12 max-w-2xl mx-auto">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Similique laudantium consectetur eum est quis, pariatur
                    optio iure magni! nigga{" "}
                </p>
                 <div className="flex justify-center mt-7">
                     <CreativeBtn2/>
                </div> 
             
            </div>
        </section>
    );
}
