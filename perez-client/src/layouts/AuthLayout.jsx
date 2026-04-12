const AuthLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-950 px-4">
      
      <div className="w-full max-w-md rounded-3xl border border-zinc-800 bg-zinc-900 p-6 shadow-lg shadow-purple-500/10">
        {children}
      </div>

    </div>
  );
};

export default AuthLayout;