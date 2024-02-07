import { Link } from 'react-router-dom';
import { cn } from '../lib/tailwind';
import { projectCovers } from './Home.constants';

export const Home = () => {
  const isLastProject = (index: number) => index === projectCovers.length - 1;

  return (
    <main className="min-h-screen max-w-full px-2 py-2">
      <div>
        {projectCovers.map(({ id, src, slug, title }, index) => (
          <Link
            key={id}
            to={slug}
            className={cn(
              'text-off-black hover:bg-primary',
              !isLastProject(index) && 'mr-4',
            )}
          >
            <h2 className="inline text-[10.8rem] font-medium leading-none tracking-[-0.5rem]">
              {title}
            </h2>
            <span className="inline-flex items-baseline">
              <img
                src={src}
                alt=""
                className="aspect[3/2] ml-4 mr-1 h-[7.5rem]"
              />
              {!isLastProject(index) && (
                <span className="text-[10.8rem] font-medium leading-none tracking-[-0.5rem]">
                  ,
                </span>
              )}
            </span>
          </Link>
        ))}
      </div>
    </main>
  );
};
