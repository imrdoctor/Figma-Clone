import { CursorChatProps, CursorMode } from "@/types/type";
import CursorSVG from "@/public/assets/CursorSVG";
const CursorChat = ({
  cursor,
  cursorState,
  setCursorState,
  updateMyPresence,
}: CursorChatProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateMyPresence({ message: e.target.value });
    setCursorState({
      mode: CursorMode.Chat,
      previousMessage: null,
      message: e.target.value,
    });
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setCursorState({
        mode: CursorMode.Chat,
        // @ts-ignore
        previousMessage: cursorState.message,
        message: "",
      });
    } else if (e.key === "Escape") {
      setCursorState({
        mode: CursorMode.Hidden,
      });
    }
  };

  const maxLength = 80;
  const currentLength = cursorState.message ? cursorState.message.length : 0;
  const remainingLength = maxLength - currentLength;
  return (
    <div
      className='absolute left-0 top-0'
      style={{
        transform: `translateX(${cursor.x}px) translateY(${cursor.y}px)`,
      }}
    >
      {/* Show message input when cursor is in chat mode */}
      {cursorState.mode === CursorMode.Chat && (
        <>
          {/* Custom Cursor shape */}
          <CursorSVG color='#000' />

          <div
            className='absolute left-2 top-5 bg-blue-500 px-4 py-2 text-sm leading-relaxed text-white'
            onKeyUp={(e) => e.stopPropagation()}
            style={{
              borderRadius: 20,
            }}
          >
            {cursorState.previousMessage && (
              <div>{cursorState.previousMessage}</div>
            )}
            <input
              className='z-10 w-60 border-none bg-transparent text-white placeholder-blue-300 outline-none'
              autoFocus={true}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
              placeholder={
                cursorState.previousMessage ? "" : "Type your message..."
              }
              value={cursorState.message || ""}
              maxLength={maxLength}
            />
            <div
              className={`text-right  ${remainingLength <= 0 ? "text-red-500" : "text-gray-300"} mt-1 text-xs `}
            >
              {remainingLength}/{maxLength}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CursorChat;
