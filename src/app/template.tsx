export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex-grow flex flex-col">
      {children}
    </div>
  );
}
