export default function Button({
    dodi,
  }: {
    dodi: string;
  }) {
    return (
      <button

        className="h-10 w-20 rounded hover:bg-slate-300 active:bg-slate-400"
      >
        {dodi}
      </button>
    );
  }
  