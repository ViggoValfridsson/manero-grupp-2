import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function ThemedDropdown({ children, value }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="themed-dropdown" onClick={() => setExpanded(!expanded)}>
      <button className="selected">
        {value} <ChevronDown style={expanded ? { rotate: "-180deg" } : {}} />
      </button>

      <div className={`dropdown ${expanded ? "expanded" : ""}`}>
        <div className="dropdown-inner">
          <div className="options">{children}</div>
        </div>
      </div>
    </div>
  );
}
