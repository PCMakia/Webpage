type ComingSoonProps = {
  message: string;
};

export function ComingSoon({ message }: ComingSoonProps) {
  return (
    <div className="text-center p-8">
      <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-[#8b1a5c] bg-opacity-20 flex items-center justify-center">
        <svg
          className="w-12 h-12 text-[#8b1a5c]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>
      <h3 className="text-2xl font-bold mb-3">{message}</h3>
    </div>
  );
}
