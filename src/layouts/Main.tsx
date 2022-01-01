interface IMainProps {
  children: React.ReactNode | React.ReactNode[];
}

const Main = ({ children }: IMainProps) => {
  return (
    <>
      <main>{children}</main>
      <footer></footer>
    </>
  );
};

export default Main;
