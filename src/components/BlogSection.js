const BlogSection = () => {
  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">
          Blog <span className="text-[#FF5A5F]">& Haberler</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Blog kartları */}
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="bg-gray-900 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 border border-gray-700 hover:border-[#2B4EA2]"
            >
              <img
                src={`/blog-${item}.jpg`}
                alt="Blog"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  Teknoloji Trendleri
                </h3>
                <p className="text-gray-300 mb-4">
                  AI ve Makine Öğrenimi alanındaki son gelişmeler...
                </p>
                <a
                  href="/blog"
                  className="text-[#2B4EA2] hover:text-[#FF5A5F] transition-colors inline-flex items-center"
                >
                  Devamını Oku
                  <span className="ml-1">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
