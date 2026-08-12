import React, { useState } from 'react';
import { Calendar, User, Tag, ArrowRight, BookOpen, Search, Phone } from 'lucide-react';
import { getAllPosts, BlogPost } from '../lib/blog';
import Breadcrumbs from './Breadcrumbs';

interface BlogIndexViewProps {
  onNavigate: (path: string) => void;
}

export default function BlogIndexView({ onNavigate }: BlogIndexViewProps) {
  const posts = getAllPosts();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', ...Array.from(new Set(posts.map((p) => p.category || 'General').filter(Boolean)))];

  const filteredPosts = posts.filter((post) => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (post.primaryKeyword && post.primaryKeyword.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const formatDate = (dateString: string) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return dateString;
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="w-full bg-slate-50 font-sans min-h-screen">
      <Breadcrumbs paths={[{ label: 'Blog' }]} onNavigate={onNavigate} />

      {/* Hero Header Banner */}
      <section className="bg-slate-900 text-white py-12 md:py-16 text-center border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <span className="text-xs font-bold text-amber-400 bg-amber-950/60 px-3.5 py-1 rounded-full border border-amber-900/40 uppercase tracking-widest inline-flex items-center gap-1.5 mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            Garage Door Knowledge Base & Guides
          </span>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight">
            Elkhart Garage Door Blog
          </h1>
          <p className="text-slate-300 text-xs md:text-sm leading-relaxed max-w-2xl mx-auto mt-4">
            Expert repair guides, troubleshooting tips, cost breakdowns, and maintenance advice from Elkhart's trusted overhead door specialists.
          </p>

          {/* Search Bar & Category Filters */}
          <div className="mt-8 max-w-2xl mx-auto flex flex-col gap-4">
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search articles, topics, or repair guides..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-800/90 text-white text-xs md:text-sm rounded-xl pl-10 pr-4 py-3 border border-slate-700 focus:outline-none focus:border-amber-500 transition-colors"
              />
            </div>

            {/* Category Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`text-xs font-bold px-3.5 py-1.5 rounded-lg transition-all ${
                    selectedCategory === cat
                      ? 'bg-amber-500 text-slate-950 shadow-md border border-amber-600'
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-700'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Blog Post Grid Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16">
        {filteredPosts.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-slate-200">
            <p className="text-slate-600 font-semibold text-base">No articles found matching your criteria.</p>
            <p className="text-xs text-slate-400 mt-1">Try clearing your search query or selecting a different category.</p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="mt-4 bg-blue-900 text-white text-xs font-bold px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post.slug}
                onClick={() => {
                  onNavigate(`blog/${post.slug}`);
                  window.scrollTo({ top: 0, behavior: 'instant' });
                }}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer group hover:-translate-y-1"
              >
                {/* Featured Image */}
                <div className="relative h-48 sm:h-52 overflow-hidden bg-slate-100">
                  <img
                    src={post.featuredImage}
                    alt={post.featuredImageAlt || post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  {post.category && (
                    <span className="absolute top-3 left-3 bg-blue-900/90 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md backdrop-blur-sm border border-blue-700">
                      {post.category}
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow justify-between gap-4">
                  <div>
                    {/* Date and Author info */}
                    <div className="flex items-center gap-3 text-[11px] text-slate-500 font-medium mb-2.5">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-amber-500" />
                        {formatDate(post.date)}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1 truncate">
                        <User className="w-3.5 h-3.5 text-slate-400" />
                        {post.author}
                      </span>
                    </div>

                    <h2 className="text-base md:text-lg font-black text-slate-900 group-hover:text-blue-900 transition-colors leading-snug">
                      {post.title}
                    </h2>

                    <p className="text-slate-600 text-xs md:text-sm mt-2.5 line-clamp-3 leading-relaxed">
                      {post.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-blue-900 group-hover:text-amber-600">
                    <span>Read Article</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* CTA Banner Section */}
        <div className="mt-16 bg-slate-900 text-white rounded-3xl p-8 md:p-10 border border-slate-800 flex flex-col lg:flex-row justify-between items-center gap-6 shadow-xl">
          <div className="text-center lg:text-left">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block mb-1">
              Need Expert Help with Your Garage Door?
            </span>
            <h3 className="text-xl md:text-3xl font-black">
              Same-Day Garage Door Repairs in Elkhart & Northern Indiana
            </h3>
            <p className="text-slate-300 text-xs md:text-sm mt-2 max-w-xl">
              Don't let a broken spring or malfunctioning opener disrupt your day. Our certified local technicians arrive in fully equipped service vans.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <a
              href="tel:5745648115"
              className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-black py-3 px-6 rounded-xl text-xs md:text-sm tracking-wide transition-all border border-amber-600 flex items-center justify-center gap-2 cursor-pointer"
            >
              <Phone className="w-4 h-4 fill-current" />
              CALL (574) 564-8115
            </a>
            <button
              onClick={() => {
                onNavigate('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="bg-blue-800 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-xl text-xs md:text-sm transition-all border border-blue-700"
            >
              REQUEST FREE ESTIMATE
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
