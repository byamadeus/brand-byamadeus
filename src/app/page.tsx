'use client';

import { Card } from "@/components/Card";
import { Footer } from "@/components/Footer";
import BlitzText from '@/components/BlitzText';
import { AppWindow, Origami, ALargeSmall, SquareDashedMousePointer } from 'lucide-react';
import { Nav } from '@/components/Nav';

export default function Home() {
  return (
    <>
    <main>
      <Nav></Nav>
    <div className="flex min-h-screen flex-col items-center font-sans">
      {/* Hero Section */}
      <header className="flex w-full flex-col items-center gap-6 px-6 pt-24 pb-16">
        <div className="flex w-full min-h-[30vh] items-end">
        <div className="flex w-full max-h-[100px pt-3">
          <BlitzText text="AMADEUS" />
        </div>
        </div>
        <div className="w-full flex flex-col text-center items-left text-2xl max-w-[800px] leading-relaxed text-white/80 gap-8">
        <p>From the smallest idea to the grandest vision, I design to create the world I want to see.</p>
        {/* <p>If you have an idea that feels almost too big — where it's just out of reach — that's the sign we should work together.</p> */}
        {/* <p>I'll never stop learning.</p> */}
        
        </div>
      </header>

      {/* Cards Section */}
      <section className="flex w-full max-w-2xl flex-col gap-8 px-6 py-16">
        <h2 className="text-center text-2xl text-white/90">
          Explore the work I do:
        </h2>
        <div className="flex flex-col gap-4">
          <Card href="https://ux.byamadeus.com" label="ux.byamadeus.com" icon={<SquareDashedMousePointer/>}>
            I am a product designer driven by <em>vision</em>.
          </Card>
          <Card href="https://sites.byamadeus.com" label="sites.byamadeus.com" icon={<AppWindow/>}>
            I make websites that are <em>cool as shit</em>.
          </Card>
          <Card href="https://tests.byamadeus.com" label="tests.byamadeus.com" icon={<Origami/>}>
            I experiment in the world to <em>understand it</em>.
          </Card>
        </div>
      </section>

      <Footer/>
    </div>
    </main>
    </>
    
  );
  
}

<script src="blitz-text.js"></script>