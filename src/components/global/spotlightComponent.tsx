import React from "react";
import { cn } from "../../lib/utils";
import { Spotlight } from "./spotlight";
import { TextGenerateEffect } from "./text-generate-effect";

export function SpotlightComponent() {
    return (
        <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-black/40 antialiased bg-grid-white/[0.02] relative overflow-hidden">
            <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-20"
                fill="white"
            />
            <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
                <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                    Introducing Spotlight <br />  <span className="text-3xl">
                        <TextGenerateEffect words="  Illuminate Investigations with Spotlight!" />
                    </span>
                </h1>
                <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
                Uncover hidden insights and swiftly resolve investigative hurdles. With Spotlight, shed light on crucial details within your investigations. Effortlessly navigate through complexities and streamline your path to justice.
                </p>
            </div>
        </div>
    );
}
