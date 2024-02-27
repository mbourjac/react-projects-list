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
              !isLastProject(index) && 'mr-[calc(0.2rem+0.85vw)]',
            )}
          >
            <h2 className="inline text-[calc(1rem+10vw)] font-medium leading-none tracking-[calc(-0.095rem-0.45vw)]">
              {title}
            </h2>
            <span className="inline-flex items-baseline">
              <img
                src={src}
                alt=""
                className="aspect[3/2] ml-[calc(0.2rem+0.85vw)] mr-[calc(0.05rem+0.2vw)] w-[calc(1rem+11vw)]"
              />
              {!isLastProject(index) && (
                <span className="text-[calc(1rem+10vw)] font-medium leading-none tracking-[calc(-0.095rem-0.45vw)]">
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
