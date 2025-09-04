import home from "@/content/pages/home.json";
import { RenderBlocks, type Block } from "@/lib/blocks";
import FullPageWrapper from "@/components/FullPageWrapper";

export default function Page() {
  return (
    <FullPageWrapper>
      <RenderBlocks blocks={home.blocks as Block[]} />
    </FullPageWrapper>
  );
}
