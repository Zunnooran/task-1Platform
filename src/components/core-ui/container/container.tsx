export interface Props {
  children: React.ReactNode;
}

function Container({ children }: Props) {
  return <div className='md:ml-64 ml-0 mx-auto max-w-screen-3xl pl-4'>{children}</div>;
}

export default Container;
