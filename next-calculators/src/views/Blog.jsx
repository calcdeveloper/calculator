import Link from 'next/link';

export default function Blog({ allPostsData = [] }) {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10 min-h-screen text-calc-darkGray">
      <h1 className="text-4xl font-bold mb-2 text-calc-green">Blog</h1>
      <p className="text-sm text-gray-500 mb-10">Latest articles and updates</p>

      {allPostsData.length === 0 ? (
        <div className="bg-calc-white p-8 rounded-xl border border-calc-lightGray shadow-sm">
          <p className="text-lg text-gray-600">
            Coming soon! We're working on bringing you the latest articles, tutorials, and updates about online tools, calculators, and productivity tips.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allPostsData.map(({ slug, date, title, description, category }) => (
            <div key={slug} className="bg-calc-white rounded-xl border border-calc-lightGray shadow-sm overflow-hidden flex flex-col transition-transform hover:-translate-y-1 hover:shadow-md">
              <div className="p-6 flex flex-col flex-grow">
                {category && (
                  <span className="inline-block px-3 py-1 bg-calc-green/10 text-calc-green text-xs font-semibold rounded-full mb-3 w-fit">
                    {category}
                  </span>
                )}
                <h2 className="text-xl font-bold mb-2 text-calc-darkGray line-clamp-2">
                  <Link href={`/blog/${slug}`} className="hover:text-calc-green transition-colors">
                    {title}
                  </Link>
                </h2>
                <p className="text-sm text-gray-500 mb-4">{date}</p>
                <p className="text-gray-600 text-sm mb-6 flex-grow line-clamp-3">
                  {description}
                </p>
                <div className="mt-auto">
                  <Link
                    href={`/blog/${slug}`}
                    className="inline-flex items-center text-sm font-semibold text-calc-green hover:text-calc-green/80 transition-colors"
                  >
                    Read More
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
