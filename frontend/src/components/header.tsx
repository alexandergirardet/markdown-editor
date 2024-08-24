import { Building, CirclePower } from "lucide-react";

export const Header = () => {
  return (
    <nav className="flex border justify-between p-4">
      <div className="flex">
        <Building />
        <h2>Markdown Collab</h2>
      </div>
      <div className="flex">
        <p>
          <strong>Connection Status: </strong>
        </p>

        <CirclePower className="mx-0.5" color="#3e9392" />
      </div>
    </nav>
  );
};
