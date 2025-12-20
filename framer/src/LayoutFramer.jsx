import kshama from "./assets/seedhemaut.jpg";
import musafir from "./assets/yashraj.jpg";
import rain from "./assets/haveyoueverseentherain.jpg";
import aujla from "./assets/karanaujla.jpg";
import bole from "./assets/bolechudiyan.jpg";
import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
const useOutsideClick = (callback) => {
  const ref = useRef(null);
  useEffect(() => {
    const handleClick = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [callback]);
  return ref;
};

const LayoutFramer = () => {
  const [current, setCurrent] = useState(null);
  const ref = useOutsideClick(() => setCurrent(null));
  return (
    <div className="py-10 bg-gray-200 min-h-screen font-mono relative ">
      {current && (
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 0.3,
          }}
          className="z-10 h-full fixed w-full inset-0 bg-black/40 backdrop-blur-sm"
        >
          {" "}
        </motion.div>
      )}
      {current && (
        <motion.div
          layoutId={`card-${current.title}`}
          ref={ref}
          className="h-[540px] overflow-hidden bg-white fixed inset-0 z-20 m-auto  w-72 rounded-2xl p-4 border border-neutral-200"
        >
          <motion.img
            layoutId={`image-${current.title}`}
            src={current.src}
            alt={current.title}
            className="w-full aspect-square rounded-xl"
          />
          <div className="flex flex-col  justify-between items-start">
            <div className="flex justify-between py-4 w-full items-start gap-2">
              <div className="flex flex-col items-start gap-2">
                <motion.h2
                  layoutId={`h2-${current.title}`}
                  className="font-bold text-xs tracking-tight text-black"
                >
                  {current.title}
                </motion.h2>
                <motion.p
                  layoutId={`p-${current.title}`}
                  className="text-[10px] text-neutral-400"
                >
                  {current.description}
                </motion.p>
              </div>
              <motion.a
                layoutId={`a-${current.title}`}
                href={current.ctaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-2 py-1 bg-green-500 rounded-full text-white text-xs"
              >
                {current.ctaText}
              </motion.a>
            </div>
            <motion.div
              initial={{
                filter: "blur(10px)",
                opacity: 0,
              }}
              animate={{
                filter: "blur(0px)",
                opacity: 1,
              }}
              transition={{
                delay: 0.3,
              }}
              className="h-40 overflow-auto  [mask-image:linear-gradient(to_top,transparent_4%,black_50%)]"
            >
              {current.content()}
            </motion.div>
          </div>
        </motion.div>
      )}
      <div className="max-w-lg mx-auto flex flex-col gap-10">
        {cards.map((card) => (
          <motion.button
            layoutId={`card-${card.title}`}
            onClick={() => {
              setCurrent(card);
            }}
            key={card.title}
            className="p-4 rounded-lg flex justify-between items-center bg-white border border-neutral-200 cursor-pointer"
          >
            <div className="flex gap-4 items-center">
              <motion.img
                layoutId={`image-${card.title}`}
                src={card.src}
                alt={card.title}
                className="h-14 aspect-square rounded-lg"
              />
              <div className="flex flex-col items-start gap-2">
                <motion.h2
                  layoutId={`h2-${card.title}`}
                  className="font-bold text-xs tracking-tight text-black"
                >
                  {card.title}
                </motion.h2>
                <motion.p
                  layoutId={`p-${card.title}`}
                  className="text-[10px] text-neutral-400"
                >
                  {card.description}
                </motion.p>
              </div>
            </div>
            <div className="px-2 py-1 bg-green-400 rounded-full text-white text-xs">
              {card.ctaText}
            </div>
          </motion.button>
        ))}
      </div>
    </div>
  );
};
const cards = [
  {
    description: "Seedhe Maut",
    title: "Red",
    src: kshama,
    ctaText: "Play",
    ctaLink:
      "https://open.spotify.com/track/1pLpEdOWbZvbX1s6gOizQC?si=62d09a36ff104971",
    content: () => {
      return (
        <p className="text-[10px] text-neutral-500">
          Seedhe Maut isn’t just a hip-hop duo — they’re a movement that
          reshaped Indian rap. Hailing from Delhi, Calm and Encore ABJ blend
          razor-sharp lyricism with raw emotion, storytelling, and social
          commentary. Their music captures the chaos of city life, ambition,
          friendship, and rebellion, switching effortlessly between hard-hitting
          cyphers and deeply personal tracks. With projects like Bayaan and
          Nayaab, Seedhe Maut pushed Desi Hip Hop to a global level while
          staying fiercely authentic. Their energy, wordplay, and honesty
          resonate with a generation that refuses to be silent.
        </p>
      );
    },
  },
  {
    description: "Yashraj",
    title: "Musafir",
    src: musafir,
    ctaText: "Play",
    ctaLink:
      "https://open.spotify.com/track/6yvneou1egCInWlMUG8g98?si=f49c6fcc9a694d67",
    content: () => {
      return (
        <p className="text-[10px] text-neutral-500">
          Yashraj is one of the most exciting voices in the new wave of Indian
          hip-hop. Known for his effortless flow, sharp punchlines, and
          genre-bending sound, he blends desi roots with global rap influences
          seamlessly. His music moves between high-energy flex tracks and
          introspective storytelling, reflecting ambition, hustle, and
          self-belief. What sets Yashraj apart is his confidence and
          adaptability — whether it’s trap, melodic rap, or experimental beats,
          he owns every pocket. As part of India’s evolving hip-hop scene,
          Yashraj represents a fearless, modern artist carving his own lane.
        </p>
      );
    },
  },
  {
    description: "Creedence Clearwater Revival",
    title: "Have You Ever Seen The Rain",
    src: rain,
    ctaText: "Play",
    ctaLink:
      "https://open.spotify.com/track/2LawezPeJhN4AWuSB0GtAU?si=640cfb08aef34d06",
    content: () => {
      return (
        <p className="text-[10px] text-neutral-500">
          “Have You Ever Seen the Rain” is a classic song by Creedence
          Clearwater Revival (CCR), released in 1971. On the surface, it talks
          about rain falling on a sunny day, but the song is widely interpreted
          as a metaphor for inner conflict, disillusionment, and change during
          times that seem successful from the outside. John Fogerty later
          explained it was inspired by tensions within the band at the peak of
          their fame—sunshine representing success, and rain symbolizing
          emotional turmoil. Its simplicity, melancholy tone, and timeless
          lyrics are why it still resonates across generations.
        </p>
      );
    },
  },
  {
    description: "Karan Aujla",
    title: "7.7 Magnitude",
    src: aujla,
    ctaText: "Play",
    ctaLink:
      "https://open.spotify.com/track/1xofPJhZcfJCc66P1UAh28?si=a0766bf81ee64aaa",
    content: () => {
      return (
        <p className="text-[10px] text-neutral-500">
          Karan Aujla is one of the biggest names in Punjabi music, known for
          his sharp lyricism, catchy hooks, and effortless swagger. Rising from
          humble beginnings, he built his name through powerful songwriting
          before becoming a chart-topping artist himself. His music blends
          Punjabi folk roots with modern hip-hop, trap, and pop influences,
          often reflecting themes of success, struggle, pride, and street
          realism. Tracks like *Don’t Look*, *Mexico*, and *Softly* showcase his
          versatility as both a rapper and a singer. Karan Aujla represents
          ambition, self-made success, and the evolving global sound of Punjabi
          music.
        </p>
      );
    },
  },
  {
    description: "Kabhi Khushi Kabhi Gham",
    title: "Bole Chudiyan",
    src: bole,
    ctaText: "Play",
    ctaLink:
      "https://open.spotify.com/track/1uzkWkIaWaxzHJgJ4Fy5rO?si=12de7202300c4e17",
    content: () => {
      return (
        <p className="text-[10px] text-neutral-500">
          **“Bole Chudiyan”** is one of Bollywood’s most iconic romantic songs,
          featured in the film *Kabhi Khushi Kabhie Gham* (2001). Sung by Alka
          Yagnik, Udit Narayan, Kavita Krishnamurthy, and Amit Kumar, the song
          captures love, celebration, and family togetherness. Set against a
          vibrant festive backdrop, it beautifully showcases tradition through
          music, dance, and emotion. With its memorable lyrics, classic
          choreography, and grand visuals featuring Shah Rukh Khan and Kajol,
          *Bole Chudiyan* remains timeless—often played at weddings and
          celebrations even today.
        </p>
      );
    },
  },
];
export default LayoutFramer;
