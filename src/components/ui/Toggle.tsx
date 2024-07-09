import { MouseEvent, FC, ReactElement } from 'react';

/**
 * Props for the Toggle component
 * @typedef {Object} ToggleProps
 * @property {boolean} clicked - Indicates whether the toggle is in a clicked state
 * @property {function} onClick - Function to handle click events
 * @property {string} [className] - Optional additional CSS classes
 */
type ToggleProps = {
  clicked: boolean;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
  className?: string;
};

/**
 * Toggle Component
 * 
 * A customizable hamburger menu toggle button that animates between open and closed states.
 * 
 * @param {ToggleProps} props - The props for the Toggle component
 * @returns {ReactElement} The rendered Toggle component
 */
const Toggle: FC<ToggleProps> = ({ clicked, onClick, className }) => {
  // Common styles for the toggle bars
  const barStyles = "h-[3px] bg-white rounded-[5px] transition-transform duration-250 ease-in-out";

  return (
    <button 
      className={`grid gap-[4px] cursor-pointer lg:hidden ${className || ''}`}
      onClick={onClick}
      aria-label={clicked ? "Close menu" : "Open menu"}
    >
      {/* Top bar */}
      <span
        className={`w-[10px] ${barStyles}`}
        style={{
          transform: clicked ? 'translate(1px, 3px) rotate(45deg)' : 'none',
        }}
      />
      {/* Middle bar */}
      <span
        className={`w-[20px] ${barStyles}`}
        style={{
          transform: clicked ? 'rotate(-45deg)' : 'none',
        }}
      />
      {/* Bottom bar */}
      <span
        className={`w-[10px] ${barStyles} ml-auto`}
        style={{
          transform: clicked ? 'translate(-1px, -3px) rotate(45deg)' : 'none',
        }}
      />
    </button>
  );
};

export default Toggle;