import fs from "fs";
import path from "path";
import { promisify } from "util";

import { AnimatedTabs } from "../../../_components/ui/tabs";
import { CodeBlock } from "../../../(ui)/ui/_components/component-page/CodeBlock";
import { CardBackgroundShine } from "../../../_components/ui/cards";
import {
  BadgeAnimatedBorder,
  BadgeBackgroundShine,
  BadgeRotateBorder,
} from "../../../_components/ui/badges";
import {
  ButtonAnimatedBorder,
  ButtonBackgroundShine,
  ButtonRotateBorder,
} from "../../../_components/ui/buttons";
import { GradientLine } from "../../../_components/GradientLine";
import { AnimateEnter } from "../AnimateEnter";
import { DropdownMenu } from "../../../_components/ui/dropdown";

async function readFilePath(filePath: string) {
  const readFile = promisify(fs.readFile);

  const fileContent = await readFile(
    path.join(process.cwd(), filePath),
    "utf8"
  );

  return fileContent;
}

export async function ExampleCode() {
  const animatedtabsFilePath = "./src/app/_components/ui/tabs/AnimatedTabs.tsx";
  const animatedTabsExampleCode = await readFilePath(animatedtabsFilePath);

  const cardBackgroundShineFilePath =
    "./src/app/_components/ui/cards/CardBackgroundShine.tsx";
  const cardBackgroundShineExampleCode = await readFilePath(
    cardBackgroundShineFilePath
  );

  const dropdownMenuFilePath =
    "./src/app/_components/ui/dropdown/DropdownMenu.tsx";
  const dropdownMenuExampleCode = await readFilePath(dropdownMenuFilePath);

  return (
    <div className="grid md:grid-cols-2 gap-6">
      <AnimateEnter
        className="relative flex justify-center items-center h-[300px] border border-border rounded-xl shadow-sm px-8 py-32"
        delay={0.2}
      >
        <AnimatedTabs />
        <GradientLine />
      </AnimateEnter>
      <AnimateEnter className="overflow-y-hidden" delay={0.4}>
        <CodeBlock
          code={animatedTabsExampleCode}
          fileName="AnimatedTabs.tsx"
          slug="animated-tabs"
          isVerticalHidden
        />
      </AnimateEnter>
      <AnimateEnter
        className="relative flex justify-center items-center h-[300px] border border-border rounded-xl shadow-sm px-8 py-32"
        delay={0.6}
      >
        <CardBackgroundShine />
        <GradientLine />
      </AnimateEnter>
      <AnimateEnter className="overflow-y-hidden" delay={0.8}>
        <CodeBlock
          code={cardBackgroundShineExampleCode}
          fileName="CardBackgroundShine.tsx"
          slug="card-background-shine"
          isVerticalHidden
        />
      </AnimateEnter>
      <AnimateEnter
        className="relative flex justify-center items-center h-[300px] border border-border rounded-xl shadow-sm px-8 py-32"
        delay={1}
      >
        <DropdownMenu />
        <GradientLine />
      </AnimateEnter>
      <AnimateEnter className="overflow-y-hidden" delay={1.2}>
        <CodeBlock
          code={dropdownMenuExampleCode}
          fileName="DropdownMenu.tsx"
          slug="dropdown-menu"
          isVerticalHidden
        />
      </AnimateEnter>
      <AnimateEnter
        className="relative md:col-span-2 flex flex-col justify-center gap-5 h-[300px] items-center border border-border rounded-xl shadow-sm px-8 py-32"
        delay={1.4}
      >
        <GradientLine />
        <div className="flex flex-wrap justify-center items-center gap-5">
          <BadgeAnimatedBorder />
          <BadgeBackgroundShine />
          <BadgeRotateBorder />
        </div>
        <div className="flex flex-wrap justify-center items-center gap-5">
          <ButtonAnimatedBorder />
          <ButtonBackgroundShine />
          <ButtonRotateBorder />
        </div>
      </AnimateEnter>
    </div>
  );
}
