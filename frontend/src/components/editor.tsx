import { CollaboratorsPanel } from "./editor/collaborators-panel";
import { MarkdownEditor } from "./editor/markdown-editor";
import { ReviewPanel } from "./editor/review-panel";
import { Toolbar } from "./toolbar";

export const Editor = () => {
  return (
    <main className=" border">
      <div className="md:flex">
        <div className="sm:flex flex-grow">
          <MarkdownEditor />
          <ReviewPanel />
        </div>
        <CollaboratorsPanel />
      </div>
      <Toolbar />
    </main>
  );
};
