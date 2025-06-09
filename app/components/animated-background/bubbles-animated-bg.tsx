import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

// Cursed Energy Orb - more intense version
interface CursedEnergyOrbProps {
  delay: number;
  duration: number;
  size: number;
  initialX: string;
  initialY: string;
  intensity?: "low" | "medium" | "high";
  density: "low" | "medium" | "high";
}

const CursedEnergyOrb: React.FC<CursedEnergyOrbProps> = ({
  delay,
  duration,
  size,
  initialX,
  initialY,
  intensity = "medium",
  density,
}) => {
  const baseIntensityValues = {
    low: { from: 15, via: 10, to: 8, shadow: 20 },
    medium: { from: 35, via: 20, to: 15, shadow: 30 },
    high: { from: 50, via: 35, to: 25, shadow: 40 },
  };

  const densityAdjustments = {
    low: { scaleFactor: 0.7, opacityFactor: 0.7, durationFactor: 1.5 },
    medium: { scaleFactor: 1, opacityFactor: 1, durationFactor: 1 },
    high: { scaleFactor: 1.2, opacityFactor: 1.1, durationFactor: 0.8 },
  };

  const currentAdjustment = densityAdjustments[density];
  const currentIntensity = baseIntensityValues[intensity];

  const intensityStyles = {
    low: `from-blue-400/${
      (currentIntensity.from * currentAdjustment.opacityFactor) / 100
    } via-cyan-300/${
      (currentIntensity.via * currentAdjustment.opacityFactor) / 100
    } to-blue-500/${
      (currentIntensity.to * currentAdjustment.opacityFactor) / 100
    }`,
    medium: `from-blue-400/${
      (currentIntensity.from * currentAdjustment.opacityFactor) / 100
    } via-cyan-300/${
      (currentIntensity.via * currentAdjustment.opacityFactor) / 100
    } to-blue-500/${
      (currentIntensity.to * currentAdjustment.opacityFactor) / 100
    }`,
    high: `from-blue-400/${
      (currentIntensity.from * currentAdjustment.opacityFactor) / 100
    } via-cyan-300/${
      (currentIntensity.via * currentAdjustment.opacityFactor) / 100
    } to-blue-500/${
      (currentIntensity.to * currentAdjustment.opacityFactor) / 100
    }`,
  };

  return (
    <motion.div
      className={cn(
        "absolute rounded-full",
        `bg-gradient-to-br ${intensityStyles[intensity]}`,
        `shadow-2xl shadow-blue-500/${
          (currentIntensity.shadow * currentAdjustment.opacityFactor) / 100
        }`,
        "backdrop-blur-sm border border-cyan-300/20"
      )}
      initial={{
        x: initialX,
        y: initialY,
        scale: 0.1 * currentAdjustment.scaleFactor,
        opacity: 0,
      }}
      animate={{
        x: [initialX, `${Math.random() * 100}%`, `${Math.random() * 100}%`],
        y: [initialY, `${Math.random() * 100}%`, `${Math.random() * 100}%`],
        scale: [
          0.1 * currentAdjustment.scaleFactor,
          (Math.random() * 0.8 + 0.6) * currentAdjustment.scaleFactor,
          (Math.random() * 0.5 + 0.3) * currentAdjustment.scaleFactor,
        ],
        opacity: [
          0,
          0.9 * currentAdjustment.opacityFactor,
          0.4 * currentAdjustment.opacityFactor,
          0,
        ],
        rotate: [0, 360, 720],
      }}
      transition={{
        duration: duration * 0.6 * currentAdjustment.durationFactor,
        delay,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
      }}
      style={{
        width: size * currentAdjustment.scaleFactor,
        height: size * currentAdjustment.scaleFactor,
      }}
    >
      {/* Electric crackling effect */}
      <div className="absolute inset-0 rounded-full">
        {Array.from(
          { length: density === "low" ? 1 : density === "medium" ? 2 : 4 },
          (_, i) => (
            <motion.div
              key={i}
              className="absolute w-px h-4 bg-cyan-300"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                transform: `rotate(${Math.random() * 360}deg)`,
              }}
              animate={{
                opacity: [0, 1, 0],
                scaleY: [0, 1, 0],
              }}
              transition={{
                duration: 0.1,
                delay: Math.random() * 2 * currentAdjustment.durationFactor,
                repeat: Infinity,
                repeatDelay:
                  (Math.random() * 1 + 0.5) * currentAdjustment.durationFactor,
              }}
            />
          )
        )}
      </div>

      {/* Inner energy core */}
      <div
        className={cn(
          "absolute inset-1 rounded-full bg-gradient-to-br animate-pulse",
          density === "low" && "from-cyan-200/30 to-blue-300/20",
          density === "medium" && "from-cyan-200/60 to-blue-300/40",
          density === "high" && "from-cyan-200/80 to-blue-300/60"
        )}
      />
    </motion.div>
  );
};

// Lightning Streak Effect
interface LightningStreakProps {
  delay: number;
  initialX: string;
  initialY: string;
  density: "low" | "medium" | "high";
}

const LightningStreak: React.FC<LightningStreakProps> = ({
  delay,
  initialX,
  initialY,
  density,
}) => {
  const opacity = density === "low" ? 0.6 : density === "medium" ? 0.8 : 1;
  const repeatDelayFactor =
    density === "low" ? 1.8 : density === "medium" ? 1.3 : 1;
  const svgScale = density === "low" ? 0.7 : density === "medium" ? 0.85 : 1;

  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{
        left: initialX,
        top: initialY,
        transform: `scale(${svgScale})`,
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 1 * opacity, 0] }}
      transition={{
        duration: 0.15,
        delay,
        repeat: Infinity,
        repeatDelay: (Math.random() * 3 + 1) * repeatDelayFactor,
      }}
    >
      <svg width="60" height="80" viewBox="0 0 60 80" className="text-cyan-300">
        <path
          d="M30 0 L20 30 L35 30 L25 80 L45 25 L30 25 Z"
          fill="currentColor"
          opacity={opacity * 0.8}
        />
      </svg>
    </motion.div>
  );
};

// Domain Expansion Grid
const DomainExpansionGrid: React.FC = () => (
  <motion.div
    className="absolute inset-0 opacity-20"
    animate={{
      opacity: [0.05, 0.15, 0.05],
    }}
    transition={{
      duration: 10,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  >
    {/* Geometric grid pattern */}
    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern
          id="domainGrid"
          x="0"
          y="0"
          width="100"
          height="100"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M 100 0 L 0 0 0 100"
            fill="none"
            stroke="rgba(6, 182, 212, 0.15)"
            strokeWidth="0.3"
          />
          <circle cx="50" cy="50" r="1.5" fill="rgba(6, 182, 212, 0.2)" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#domainGrid)" />
    </svg>
  </motion.div>
);

// Six Eyes Enhanced Effect
interface SixEyesEnhancedProps {
  density: "low" | "medium" | "high";
}

const SixEyesEnhanced: React.FC<SixEyesEnhancedProps> = ({ density }) => {
  if (density === "low") return null;

  const count = density === "medium" ? 4 : 6;
  const scaleFactor = density === "medium" ? 0.8 : 1;
  const opacityFactor = density === "medium" ? 0.7 : 1;
  const durationFactor = density === "medium" ? 1.2 : 1;

  return (
    <motion.div
      className="absolute top-1/4 right-1/4 w-40 h-40 pointer-events-none"
      animate={{
        rotate: [0, 360],
      }}
      transition={{
        duration: 8 * durationFactor,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      {Array.from({ length: count }, (_, i) => (
        <motion.div
          key={i}
          className="absolute w-3 h-3 bg-cyan-300 rounded-full shadow-lg shadow-cyan-300/60"
          style={{
            top: "50%",
            left: "50%",
            transformOrigin: "0 0",
            transform: `rotate(${i * (360 / count)}deg) translateX(${
              60 * scaleFactor
            }px)`,
          }}
          animate={{
            opacity: [
              0.4 * opacityFactor,
              1 * opacityFactor,
              0.4 * opacityFactor,
            ],
            scale: [0.8 * scaleFactor, 1.4 * scaleFactor, 0.8 * scaleFactor],
            boxShadow: [
              `0 0 ${10 * scaleFactor}px rgba(6, 182, 212, ${
                0.6 * opacityFactor
              })`,
              `0 0 ${30 * scaleFactor}px rgba(6, 182, 212, ${
                1 * opacityFactor
              })`,
              `0 0 ${10 * scaleFactor}px rgba(6, 182, 212, ${
                0.6 * opacityFactor
              })`,
            ],
          }}
          transition={{
            duration: 1 * durationFactor,
            delay: i * 0.1,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      ))}
    </motion.div>
  );
};

// Floating Kanji/Cursed Technique Symbols
interface FloatingKanjiProps {
  density: "low" | "medium" | "high";
}

const FloatingKanji: React.FC<FloatingKanjiProps> = ({ density }) => {
  const symbols = ["∞", "呪", "術", "◊", "⬢", "▣", "▦", "◉", "⚡"];
  const count = density === "low" ? 3 : density === "medium" ? 5 : 8;
  const fontSizeBase = density === "low" ? 12 : density === "medium" ? 14 : 16;
  const opacityBase =
    density === "low" ? 0.5 : density === "medium" ? 0.7 : 0.8;
  const durationFactor =
    density === "low" ? 1.5 : density === "medium" ? 1.2 : 1;

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {Array.from({ length: count }, (_, i) => (
        <motion.div
          key={i}
          className={cn(
            "absolute font-bold",
            density === "low" && "text-blue-300/20",
            density === "medium" && "text-blue-300/30",
            density === "high" && "text-blue-300/40"
          )}
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            fontSize: `${Math.random() * (fontSizeBase / 2) + fontSizeBase}px`,
          }}
          animate={{
            y: [0, -200],
            rotate: [0, Math.random() > 0.5 ? 360 : -360],
            opacity: [0, opacityBase, 0],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: (Math.random() * 4 + 3) * durationFactor,
            delay: Math.random() * 3,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {symbols[Math.floor(Math.random() * symbols.length)]}
        </motion.div>
      ))}
    </div>
  );
};

// Cursed Energy Particles - more intense
interface CursedParticleProps {
  delay: number;
  initialX: string;
  initialY: string;
  color?: "blue" | "purple" | "red";
  density: "low" | "medium" | "high";
}

const CursedParticle: React.FC<CursedParticleProps> = ({
  delay,
  initialX,
  initialY,
  color = "blue",
  density,
}) => {
  const colorClasses = {
    blue: "bg-cyan-300 shadow-cyan-300",
    purple: "bg-purple-400 shadow-purple-400",
    red: "bg-red-400 shadow-red-400",
  };

  const scaleFactor = density === "low" ? 0.6 : density === "medium" ? 0.8 : 1;
  const opacityBase =
    density === "low" ? 0.6 : density === "medium" ? 0.7 : 0.8;
  const durationFactor =
    density === "low" ? 1.5 : density === "medium" ? 1.2 : 1;
  const size =
    density === "low"
      ? "w-1 h-1"
      : density === "medium"
      ? "w-1.5 h-1.5"
      : "w-1.5 h-1.5";

  return (
    <motion.div
      className={cn(
        "absolute rounded-full shadow-lg",
        size,
        `${colorClasses[color]}/${opacityBase * 100}`,
        `${colorClasses[color].split(" ")[1]}/${opacityBase * 80}`
      )}
      initial={{
        x: initialX,
        y: initialY,
        opacity: 0,
        scale: 0.5 * scaleFactor,
      }}
      animate={{
        y: "-120vh",
        x: [
          initialX,
          `${
            parseInt(initialX) +
            Math.random() *
              (density === "low" ? 20 : density === "medium" ? 30 : 40) -
            (density === "low" ? 10 : density === "medium" ? 15 : 20)
          }%`,
        ],
        opacity: [0, 1 * opacityBase, 0],
        scale: [0.5 * scaleFactor, 1.2 * scaleFactor, 0.5 * scaleFactor],
      }}
      transition={{
        duration: (Math.random() * 3 + 2) * durationFactor,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
};

// Purple Technique Effect (Gojo's destructive power)
interface PurpleTechniqueProps {
  density: "low" | "medium" | "high";
}

const PurpleTechnique: React.FC<PurpleTechniqueProps> = ({ density }) => {
  if (density === "low") return null;

  const scaleFactor = density === "medium" ? 0.7 : 1;
  const opacityFactor = density === "medium" ? 0.6 : 1;
  const durationFactor = density === "medium" ? 1.3 : 1;

  return (
    <motion.div
      className="absolute top-3/4 left-1/3 w-32 h-32 pointer-events-none"
      animate={{
        scale: [0, 1.5 * scaleFactor, 0],
        rotate: [0, 180, 360],
      }}
      transition={{
        duration: 6 * durationFactor,
        repeat: Infinity,
        repeatDelay: 8 * durationFactor,
        ease: "easeInOut",
      }}
    >
      <div
        className={cn(
          "w-full h-full rounded-full blur-xl",
          `bg-gradient-to-br from-purple-500/${
            (30 * opacityFactor) / 100
          } to-red-500/${(20 * opacityFactor) / 100}`
        )}
      />
      <div
        className={cn(
          "absolute inset-4 rounded-full blur-lg",
          `bg-gradient-to-br from-purple-400/${
            (50 * opacityFactor) / 100
          } to-red-400/${(30 * opacityFactor) / 100}`
        )}
      />
    </motion.div>
  );
};

// Main JJK Background Component
interface BubblesBackgroundProps {
  density?: "low" | "medium" | "high";
  className?: string;
  animeMode?: boolean;
}

export const BubblesBackground: React.FC<BubblesBackgroundProps> = ({
  density = "high",
  className,
  animeMode = true,
}) => {
  const elementCountMapping = {
    low: { orbs: 2, particles: 8, lightning: 1 },
    medium: { orbs: 4, particles: 15, lightning: 3 },
    high: { orbs: 7, particles: 25, lightning: 5 },
  };
  const elementCount = elementCountMapping[density];

  // Generate more intense energy orbs
  const cursedOrbs = Array.from({ length: elementCount.orbs }, (_, i) => ({
    id: i,
    delay: Math.random() * 5,
    duration: Math.random() * 8 + 8,
    size: Math.random() * 120 + 80,
    initialX: `${Math.random() * 100}%`,
    initialY: `${Math.random() * 100}%`,
    intensity: (["low", "medium", "high"] as const)[
      Math.floor(Math.random() * 3)
    ],
  }));

  // Generate lightning streaks
  const lightningStreaks = Array.from(
    { length: elementCount.lightning },
    (_, i) => ({
      id: i,
      delay:
        Math.random() * (density === "low" ? 6 : density === "medium" ? 5 : 4),
      initialX: `${Math.random() * 100}%`,
      initialY: `${Math.random() * 100}%`,
    })
  );

  // Generate cursed particles
  const cursedParticles = Array.from(
    { length: elementCount.particles },
    (_, i) => ({
      id: i,
      delay:
        Math.random() *
        (density === "low" ? 12 : density === "medium" ? 10 : 8),
      initialX: `${Math.random() * 100}%`,
      initialY: "100%",
      color: (["blue", "purple", "red"] as const)[
        Math.floor(Math.random() * 3)
      ],
    })
  );

  if (!animeMode) {
    return (
      <div
        className={cn(
          "absolute inset-0 overflow-hidden pointer-events-none",
          "transition-opacity duration-1000",
          className
        )}
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/20 via-transparent to-purple-950/10" />
      </div>
    );
  }

  return (
    <div
      className={cn(
        "absolute inset-0 overflow-hidden pointer-events-none",
        "transition-opacity duration-1000",
        className
      )}
      aria-hidden="true"
    >
      {/* Enhanced base gradient */}
      <div
        className={cn(
          "absolute inset-0",
          density === "low" &&
            "bg-gradient-to-br from-blue-950/20 via-gray-950/10 to-purple-950/15",
          density === "medium" &&
            "bg-gradient-to-br from-blue-950/30 via-gray-950/15 to-purple-950/20",
          density === "high" &&
            "bg-gradient-to-br from-blue-950/40 via-gray-950/20 to-purple-950/30"
        )}
      />

      {/* Domain Expansion Grid */}
      {density !== "low" && <DomainExpansionGrid />}

      {/* Infinity-inspired ambient lighting - more intense */}
      <motion.div
        className={cn(
          "absolute top-1/4 left-1/6 w-[500px] h-[500px] rounded-full blur-3xl",
          density === "low" &&
            "bg-gradient-to-br from-blue-400/05 to-cyan-300/03",
          density === "medium" &&
            "bg-gradient-to-br from-blue-400/10 to-cyan-300/07",
          density === "high" &&
            "bg-gradient-to-br from-blue-400/15 to-cyan-300/10"
        )}
        animate={{
          scale:
            density === "low"
              ? [1, 1.1, 1]
              : density === "medium"
              ? [1, 1.2, 1]
              : [1, 1.4, 1],
          opacity:
            density === "low"
              ? [0.1, 0.2, 0.1]
              : density === "medium"
              ? [0.2, 0.4, 0.2]
              : [0.3, 0.6, 0.3],
          x: [0, density === "low" ? 20 : density === "medium" ? 40 : 80, 0],
          y: [0, density === "low" ? 10 : density === "medium" ? 20 : 40, 0],
        }}
        transition={{
          duration: density === "low" ? 15 : density === "medium" ? 12 : 10,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      <motion.div
        className={cn(
          "absolute bottom-1/4 right-1/6 w-[400px] h-[400px] rounded-full blur-3xl",
          density === "low" &&
            "bg-gradient-to-br from-purple-400/04 to-blue-300/05",
          density === "medium" &&
            "bg-gradient-to-br from-purple-400/08 to-blue-300/10",
          density === "high" &&
            "bg-gradient-to-br from-purple-400/12 to-blue-300/15"
        )}
        animate={{
          scale:
            density === "low"
              ? [1.1, 1, 1.1]
              : density === "medium"
              ? [1.2, 1, 1.2]
              : [1.2, 1, 1.2],
          opacity:
            density === "low"
              ? [0.1, 0.2, 0.1]
              : density === "medium"
              ? [0.15, 0.3, 0.15]
              : [0.2, 0.5, 0.2],
          x: [0, density === "low" ? -15 : density === "medium" ? -30 : -60, 0],
          y: [0, density === "low" ? -8 : density === "medium" ? -15 : -30, 0],
        }}
        transition={{
          duration: density === "low" ? 18 : density === "medium" ? 15 : 12,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      {/* Cursed Energy Orbs */}
      {cursedOrbs.map((orb) => (
        <CursedEnergyOrb
          key={`orb-${orb.id}`}
          delay={orb.delay}
          duration={orb.duration}
          size={orb.size}
          initialX={orb.initialX}
          initialY={orb.initialY}
          intensity={orb.intensity}
          density={density}
        />
      ))}

      {/* Lightning Streaks */}
      {lightningStreaks.map((lightning) => (
        <LightningStreak
          key={`lightning-${lightning.id}`}
          delay={lightning.delay}
          initialX={lightning.initialX}
          initialY={lightning.initialY}
          density={density}
        />
      ))}

      {/* Cursed Particles */}
      {cursedParticles.map((particle) => (
        <CursedParticle
          key={`particle-${particle.id}`}
          delay={particle.delay}
          initialX={particle.initialX}
          initialY={particle.initialY}
          color={particle.color}
          density={density}
        />
      ))}

      {/* Enhanced Six Eyes Effect */}
      <SixEyesEnhanced density={density} />

      {/* Floating Kanji */}
      <FloatingKanji density={density} />

      {/* Purple Technique Effect */}
      <PurpleTechnique density={density} />

      {/* Multiple Infinity Symbols */}
      {density !== "low" && (
        <>
          <motion.div
            className={cn(
              "absolute top-1/2 left-1/2 w-20 h-10",
              density === "medium" && "opacity-20",
              density === "high" && "opacity-40"
            )}
            style={{
              background:
                "linear-gradient(45deg, transparent 40%, #06b6d4 50%, transparent 60%)",
              clipPath:
                "polygon(0% 50%, 25% 0%, 75% 100%, 100% 50%, 75% 0%, 25% 100%)",
            }}
            animate={{
              rotate: [0, 360],
              scale: density === "medium" ? [0.7, 1.1, 0.7] : [0.8, 1.4, 0.8],
              opacity: density === "medium" ? [0.1, 0.3, 0.1] : [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: density === "medium" ? 20 : 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <motion.div
            className={cn(
              "absolute top-2/3 left-1/4 w-16 h-8",
              density === "medium" && "opacity-15",
              density === "high" && "opacity-30"
            )}
            style={{
              background:
                "linear-gradient(45deg, transparent 40%, #8b5cf6 50%, transparent 60%)",
              clipPath:
                "polygon(0% 50%, 25% 0%, 75% 100%, 100% 50%, 75% 0%, 25% 100%)",
            }}
            animate={{
              rotate: [360, 0],
              scale: density === "medium" ? [0.8, 1, 0.8] : [1, 1.2, 1],
              opacity:
                density === "medium" ? [0.05, 0.2, 0.05] : [0.1, 0.4, 0.1],
            }}
            transition={{
              duration: density === "medium" ? 25 : 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </>
      )}
    </div>
  );
};
