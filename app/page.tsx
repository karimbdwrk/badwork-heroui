import { Link } from "@heroui/link";
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { button as buttonStyles } from "@heroui/theme";

import {Input} from "@heroui/input";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";

import Dither from "../components/Dither";

export default function Home() {
  return (
    <>      <div
						style={{
							width: "100vw",
							height: "100vh",
							position: "absolute",
							zIndex: -1,
						}}>
						<Dither
							waveColor={[0.5, 0.5, 0.5]}
							disableAnimation={false}
							enableMouseInteraction={true}
							mouseRadius={0.3}
							colorNum={4}
							waveAmplitude={0.3}
							waveFrequency={3}
							waveSpeed={0.05}
						/>
					</div>
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">

      <div className="inline-block max-w-xl text-center justify-center">
        <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
          <Input label="Email" type="email" />
          <Input label="Email" placeholder="Enter your email" type="email" />
        </div>
        <span className={title()}>Make&nbsp;</span>
        <span className={title({ color: "violet" })}>beautiful&nbsp;</span>
        <br />
        <span className={title()}>
          websites regardless of your design experience.
        </span>
        <div className={subtitle({ class: "mt-4" })}>
          Beautiful, fast and modern React UI library.
        </div>
      </div>

      <div className="flex gap-3">
        <Link
          isExternal
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
          })}
          href={siteConfig.links.docs}
        >
          Documentation
        </Link>
        <Link
          isExternal
          className={buttonStyles({ variant: "bordered", radius: "full" })}
          href={siteConfig.links.github}
        >
          <GithubIcon size={20} />
          GitHub
        </Link>
      </div>

      <div className="mt-8">
        <Snippet hideCopyButton hideSymbol variant="bordered">
          <span>
            Get started by editing <Code color="primary">app/page.tsx</Code>
          </span>
        </Snippet>
      </div>
    </section></>
  );
}
