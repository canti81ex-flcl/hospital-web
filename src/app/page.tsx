import home from "@/content/pages/home.json";
import { RenderFullPageBlocks } from "@/lib/fullpage-blocks";

export default function Page() {
  return <RenderFullPageBlocks blocks={home.blocks} />;
}
