type Props = (
  | {
      type: "alphabet";
      shouldBeHidden?: never;
      hasBeenUsed: boolean;
      onClick: () => void;
    }
  | {
      type: "wordToGuess";
      shouldBeHidden: boolean;
      hasBeenUsed?: never;
      onClick?: never;
    }
) & {
  letter: string;
};

export const Letter = ({
  letter,
  shouldBeHidden,
  type,
  hasBeenUsed,
  onClick,
}: Props) => {
  return (
    <div
      style={{
        display: "inline-block",
        width: "70px",
        height: "70px",
        border: "2px solid black",
        lineHeight: "70px",
        textAlign: "center",
        fontSize: "200%",
        cursor:
          type === "alphabet"
            ? hasBeenUsed
              ? "not-allowed"
              : "pointer"
            : undefined,
        backgroundColor: hasBeenUsed ? "lightgrey" : undefined,
      }}
      onClick={onClick}
    >
      {shouldBeHidden ? "?" : letter.toUpperCase()}
    </div>
  );
};
