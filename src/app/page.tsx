import home from "@/content/pages/home.json";
import { RenderBlocks } from "@/lib/blocks";
import FullPageWrapper from "@/components/FullPageWrapper";

export default function Page() {
  return (
    <FullPageWrapper>
      <RenderBlocks blocks={home.blocks} />
    </FullPageWrapper>
  );
}
