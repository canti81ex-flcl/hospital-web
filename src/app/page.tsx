import home from "@/content/pages/home.json";
import { RenderBlocks } from "@/lib/blocks";

export default function Page() {
  return <RenderBlocks blocks={home.blocks} />;
}
