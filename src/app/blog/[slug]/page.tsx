import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Header } from '@/components/layout';
import { FooterSection } from '@/components/sections';
import { Container } from '@/components/ui';
import {
  AuditCard,
  AuthorAvatar,
  AuthorBox,
  Breadcrumbs,
  KeyTakeaways,
  PostCard,
  PostCta,
  PostFaqs,
  ReadingProgress,
  ShareButtons,
  TableOfContents,
} from '@/components/blog';
import { JsonLd } from '@/components/seo';
import { formatDate, getAllPosts, getPostBySlug, getRelatedPosts } from '@/lib/blog';
import { absoluteUrl, blogPostingSchema, breadcrumbSchema, createMetadata, faqPageSchema } from '@/lib/seo';

type PageProps = { params: Promise<{ slug: string }> };

// Solo existen las URLs de los .md en content/blog; cualquier otra da 404
export const dynamicParams = false;

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};

  return createMetadata({
    title: post.metaTitle,
    description: post.description,
    path: post.path,
    keywords: post.keywords.length > 0 ? post.keywords : post.tags,
    // La previsualización la genera ./opengraph-image.tsx
    image: false,
    noIndex: post.draft,
    article: {
      publishedTime: post.date,
      modifiedTime: post.updated,
      authors: [post.author],
      section: post.category,
      tags: post.tags,
    },
  });
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  const related = getRelatedPosts(post);
  const wasUpdated = post.updated.slice(0, 10) !== post.date.slice(0, 10);
  const crumbs = [
    { name: 'Blog', path: '/blog' },
    { name: post.title, path: post.path },
  ];

  return (
    <>
      {!post.draft && (
        <JsonLd
          schemas={[
            blogPostingSchema({
              title: post.title,
              description: post.description,
              path: post.path,
              datePublished: post.date,
              dateModified: post.updated,
              author: post.author,
              category: post.category,
              keywords: post.keywords.length > 0 ? post.keywords : post.tags,
              image: post.image,
            }),
            breadcrumbSchema(crumbs),
            ...(post.faqsHtml.length > 0
              ? [faqPageSchema(post.faqsHtml.map((f) => ({ question: f.question, answer: f.answerText })))]
              : []),
          ]}
        />
      )}
      <ReadingProgress targetId="articulo" />
      <Header variant="solid" />
      <main className="bg-paper pt-28 pb-20 sm:pt-32 sm:pb-24">
        <Container>
          <Breadcrumbs items={crumbs} />

          <article id="articulo">
            <header className="mb-8 max-w-4xl sm:mb-12">
              <div className="mb-5 flex flex-wrap items-center gap-2.5">
                <span className="rounded-full bg-mint px-3 py-1.5 text-[13px] font-bold text-accent-green">
                  {post.category}
                </span>
                {post.draft && (
                  <span className="rounded-full bg-warning/20 px-3 py-1.5 text-[13px] font-bold text-[#8a5a00]">
                    Borrador
                  </span>
                )}
              </div>
              <h1 className="mb-5 font-display text-[2.25rem] font-semibold leading-[1.08] tracking-[-0.01em] text-ink sm:text-5xl lg:text-[4rem] lg:leading-[1.05] lg:tracking-[-0.02em]">
                {post.title}
              </h1>
              <p className="mb-7 text-[17px] leading-relaxed text-ink-muted sm:text-[22px]">{post.description}</p>

              <div className="flex flex-wrap items-center gap-4">
                <div className="flex flex-1 items-center gap-3.5">
                  <AuthorAvatar author={post.author} />
                  <div className="text-sm leading-snug">
                    <p className="font-bold text-ink sm:text-[15px]">{post.author}</p>
                    <p className="text-ink-muted">
                      <time dateTime={post.date}>{formatDate(post.date)}</time>
                      {wasUpdated && (
                        <>
                          {' · '}Actualizado el <time dateTime={post.updated}>{formatDate(post.updated)}</time>
                        </>
                      )}
                      {' · '}
                      {post.readingTime} min de lectura
                    </p>
                  </div>
                </div>
                <ShareButtons url={absoluteUrl(post.path)} title={post.title} />
              </div>
            </header>

            <div className="relative mb-10 aspect-[1200/630] overflow-hidden rounded-3xl sm:mb-16 sm:rounded-[2rem] lg:aspect-[1280/520]">
              <Image
                src={post.image}
                alt={post.imageAlt}
                fill
                priority
                sizes="(min-width: 1280px) 1216px, 100vw"
                className="object-cover"
              />
            </div>

            <div className="lg:grid lg:grid-cols-[200px_minmax(0,1fr)_260px] lg:items-start lg:gap-10 xl:grid-cols-[230px_minmax(0,1fr)_290px] xl:gap-14">
              <TableOfContents headings={post.headings} className="mb-8 lg:sticky lg:top-28 lg:mb-0" />

              <div className="min-w-0">
                <KeyTakeaways items={post.summary} />
                <div
                  className="blog-prose prose max-w-none sm:prose-lg prose-headings:scroll-mt-28"
                  dangerouslySetInnerHTML={{ __html: post.html }}
                />
                <AuditCard className="mt-12 lg:hidden" />
                <PostFaqs faqs={post.faqsHtml} />
                <AuthorBox author={post.author} />
              </div>

              <AuditCard className="hidden lg:sticky lg:top-28 lg:flex" />
            </div>
          </article>

          <PostCta className="mt-20 sm:mt-24" />

          {related.length > 0 && (
            <section aria-labelledby="relacionados" className="mt-20 sm:mt-24">
              <div className="mb-8 flex items-baseline justify-between gap-4">
                <h2 id="relacionados" className="font-display text-3xl font-semibold text-ink sm:text-4xl">
                  Sigue aprendiendo
                </h2>
                <Link href="/blog" className="shrink-0 text-[15px] font-bold text-primary hover:text-primary-dark">
                  Ver todo el blog
                </Link>
              </div>
              <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
                {related.map((p) => (
                  <div key={p.slug} className="flex">
                    <PostCard post={p} headingLevel="h3" />
                  </div>
                ))}
              </div>
            </section>
          )}
        </Container>
      </main>
      <FooterSection />
    </>
  );
}
