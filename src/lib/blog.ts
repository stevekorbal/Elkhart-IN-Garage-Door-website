import fm from 'front-matter';

export interface BlogPostFrontmatter {
  title: string;
  description: string;
  slug: string;
  date: string;
  updatedDate?: string;
  author: string;
  featuredImage: string;
  featuredImageAlt?: string;
  primaryKeyword?: string;
  category?: string;
}

export interface BlogPost extends BlogPostFrontmatter {
  content: string;
}

// Dynamically import all markdown files from /content/blog/ using Vite's import.meta.glob
const markdownFiles = import.meta.glob('/content/blog/*.{md,mdx}', {
  query: '?raw',
  eager: true
}) as Record<string, { default: string } | string>;

export function getAllPosts(): BlogPost[] {
  const posts: BlogPost[] = [];

  for (const path in markdownFiles) {
    const rawContent = typeof markdownFiles[path] === 'string'
      ? (markdownFiles[path] as string)
      : (markdownFiles[path] as { default: string }).default;

    if (!rawContent) continue;

    try {
      const parsed = fm<BlogPostFrontmatter>(rawContent);
      const attrs = parsed.attributes;

      if (!attrs.slug || !attrs.title) continue;

      posts.push({
        title: attrs.title || 'Untitled Post',
        description: attrs.description || '',
        slug: attrs.slug,
        date: attrs.date || '',
        updatedDate: attrs.updatedDate,
        author: attrs.author || 'Elkhart Garage Door Team',
        featuredImage: attrs.featuredImage || '/assets/images/garage-door-repair.png',
        featuredImageAlt: attrs.featuredImageAlt || attrs.title,
        primaryKeyword: attrs.primaryKeyword || '',
        category: attrs.category || 'General',
        content: parsed.body || ''
      });
    } catch (err) {
      console.error(`Error parsing markdown frontmatter for ${path}:`, err);
    }
  }

  // Sort posts in reverse chronological order (newest date first)
  return posts.sort((a, b) => {
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();
    return dateB - dateA;
  });
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  const posts = getAllPosts();
  return posts.find((p) => p.slug === slug);
}

export function getRelatedPosts(currentSlug: string, category?: string, limit: number = 3): BlogPost[] {
  const posts = getAllPosts();
  const otherPosts = posts.filter((p) => p.slug !== currentSlug);

  if (!category) return otherPosts.slice(0, limit);

  const categoryMatches = otherPosts.filter((p) => p.category === category);
  if (categoryMatches.length >= limit) {
    return categoryMatches.slice(0, limit);
  }

  const remaining = otherPosts.filter((p) => p.category !== category);
  return [...categoryMatches, ...remaining].slice(0, limit);
}
