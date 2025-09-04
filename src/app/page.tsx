import home from "@/content/pages/home.json";
import { RenderBlocks, type Block } from "@/lib/blocks";
import FullPageWrapper from "@/components/FullPageWrapper";

// home.json에서 헤더와 섹션을 분리하고 타입을 지정
const allBlocks = home.blocks as Block[];
const headerBlock = allBlocks.find(block => block.type === 'HeaderNavigation_snu');
const sectionBlocks = allBlocks.filter(block => block.type !== 'HeaderNavigation_snu');

export default function Page() {
  return (
    <>
      {/* 헤더는 FullPageWrapper 밖에 위치하여 고정 */}
      {headerBlock && <RenderBlocks blocks={[headerBlock]} />}

      <FullPageWrapper>
        {/* 각 섹션 블록을 section 클래스로 감싸서 렌더링 */}
        {sectionBlocks.map((block, index) => (
          <div key={index} className="section">
            <RenderBlocks blocks={[block]} />
          </div>
        ))}
      </FullPageWrapper>
    </>
  );
}
