const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col justify-center h-screen">{children}</div>
  );
};

export default HomeLayout;
