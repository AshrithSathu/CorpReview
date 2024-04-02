import { TriangleUpIcon } from "@radix-ui/react-icons";

export default function FeadBackList() {
  return (
    <ol className="feedback-list">
      <li className="feedback">
        <button>
          <TriangleUpIcon />
          <span>593</span>
        </button>
        <div>
          <p>B</p>
        </div>
        <div>
          <p>Ashrith</p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam
            ullam nam aliquid perspiciatis, quis nostrum.
          </p>
        </div>
        <p>4d</p>
      </li>
    </ol>
  );
}
