import { Props } from './container';

function SubContainer({ children }: Props) {
  return <div className='bg-white rounded-lg mt-4 h-[78vh]'>{children}</div>;
}

export default SubContainer;
