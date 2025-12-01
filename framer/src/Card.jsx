import haaland from "./assets/haaland.jpeg";
import { Mail, MessageSquare, Send, X } from "lucide-react";
import { MessageCircle } from "lucide-react";
import { AnimatePresence, easeInOut, motion } from "motion/react";
import { useState } from "react";
export const Card = () => {
  const [open, setOpen] = useState(true);
  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opactiy: 0,
              scale: 0.98,
              filter: "blur(10px)",
            }}
            animate={{
              opacity: 1,
              scale: 1,
              filter: "blur(0px)",
            }}
            exit={{
              opacity: 0,
              scale: 0.98,
              filter: "blur(10px)",
            }}
            transition={{
              ease: easeInOut,
              duration: 0.3,
            }}
            className="font-mono w-72 min-h-[27rem] h-[26rem] rounded-xl p-4 flex flex-col
        shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]"
          >
            <h2 className="font-bold text-[10px]">UI Component</h2>
            <p className="text-neutral-600 mt-2 text-[10px]">
              A beautiful card made using Motion
            </p>
            <div className="flex items-center justify-center">
              <button
                className="flex items-center justify-center gap-1 text-[10px] mt-4
         shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]
         rounded-md px-2 py-1
        "
                onClick={() => setOpen(!open)}
              >
                <img
                  width={50}
                  height={50}
                  alt="logo"
                  src={haaland}
                  className="h-4 w-4"
                />{" "}
                Haaland
                <X className="h-3 w-3 text-neutral-400" />
              </button>
            </div>
            <div className="bg-gray-100 flex-1 mt-4 rounded-lg border border-dashed border-neutral-200 relative ">
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.98,
                  filter: "blur(10px)",
                }}
                whileHover={{
                  opacity: 1,
                  scale: 1.05,
                  filter: "blur(0px)",
                }}
                transition={{
                  ease: "easeInOut",
                  duration: 0.3,
                }}
                className="absolute inset-0 border-neutral-300 h-full w-full rounded-lg bg-white divide-y divide-neutral-200"
              >
                <div className="flex gap-2 p-4">
                  <div className="h-7 w-7 flex-shrink-0 bg-gradient-to-br shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] bg-white rounded-md flex items-center justify-center">
                    <MessageCircle className="shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] h-4 w-4 text-neutral-600" />
                  </div>

                  <div className="flex flex-col">
                    <p className="text-[8px] font-bold text-neutral-600">
                      Striker
                    </p>
                    <p className="text-neutral-400 text-[8px] mt-1">Haaland</p>
                  </div>
                </div>
                <div className="flex gap-2 p-4">
                  <div className="h-7 w-7 flex-shrink-0 bg-gradient-to-br shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] bg-white rounded-md flex items-center justify-center">
                    <Mail className="shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] h-4 w-4 text-neutral-600" />
                  </div>

                  <div className="flex flex-col">
                    <p className="text-[8px] font-bold text-neutral-600">
                      Winger
                    </p>
                    <p className="text-neutral-400 text-[8px] mt-1">Doku</p>
                  </div>
                </div>
                <div className="flex gap-2 p-4">
                  <div className="h-7 w-7 flex-shrink-0 bg-gradient-to-br shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] bg-white rounded-md flex items-center justify-center">
                    <Send className="shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] h-4 w-4 text-neutral-600" />
                  </div>

                  <div className="flex flex-col">
                    <p className="text-[8px] font-bold text-neutral-600">
                      Centre back
                    </p>
                    <p className="text-neutral-400 text-[8px] mt-1">Dias</p>
                  </div>
                </div>
                <div className="flex gap-2 p-4">
                  <div className="h-7 w-7 flex-shrink-0 bg-gradient-to-br shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] bg-white rounded-md flex items-center justify-center">
                    <MessageSquare className="shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] h-4 w-4 text-neutral-600" />
                  </div>

                  <div className="flex flex-col">
                    <p className="text-[8px] font-bold text-neutral-600">
                      Keeper
                    </p>
                    <p className="text-neutral-400 text-[8px] mt-1">
                      {" "}
                      Donarumma
                    </p>
                  </div>
                </div>
                <div className="flex gap-2 p-4">
                  <div className="h-7 w-7 flex-shrink-0 bg-gradient-to-br shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] bg-white rounded-md flex items-center justify-center">
                    <MessageSquare className="shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] h-4 w-4 text-neutral-600" />
                  </div>

                  <div className="flex flex-col">
                    <p className="text-[8px] font-bold text-neutral-600">
                      Keeper
                    </p>
                    <p className="text-neutral-400 text-[8px] mt-1">
                      {" "}
                      Donarumma
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
