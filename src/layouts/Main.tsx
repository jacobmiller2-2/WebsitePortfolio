interface IMainProps {
  children: React.ReactNode | React.ReactNode[];
}

const Main = ({ children }: IMainProps) => {
  return (
    <>
      <main>{children}</main>
      <footer style={{ minHeight: "5vh" }}></footer>
    </>
  );
};

export default Main;
