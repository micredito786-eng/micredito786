import { Header } from '@/components/layout';
import { FooterSection } from '@/components/sections';
import { Container } from '@/components/ui';
import { BlogIndex, Breadcrumbs, PostCta, StartHere } from '@/components/blog';
import { JsonLd } from '@/components/seo';
import { getAllPosts, getCategories, getStartHerePosts } from '@/lib/blog';
import { blogSchema, breadcrumbSchema, createMetadata } from '@/lib/seo';

const page = {
  title: 'Blog de Crédito: Guías para Latinos en USA',
  description:
    'Guías claras en español para entender tu reporte de crédito, subir tu score y usar tus derechos bajo la ley FCRA. Consejos prácticos para latinos en USA.',
  path: '/blog',
};

export const metadata = createMetadata({ ...page, image: false });

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <JsonLd
        schemas={[
          blogSchema({
            ...page,
            posts: posts.map((p) => ({ title: p.title, path: p.path, datePublished: p.date })),
          }),
          breadcrumbSchema([{ name: 'Blog', path: page.path }]),
        ]}
      />
      <Header variant="solid" />
      <main className="bg-paper pt-28 pb-20 sm:pt-32 sm:pb-24">
        <Container>
          <Breadcrumbs items={[{ name: 'Blog', path: page.path }]} />

          <BlogIndex
            posts={posts}
            categories={getCategories()}
            intro={
              <>
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.14em] text-accent-green sm:mb-5 sm:text-sm">
                  El blog de Mi Crédito 786
                </p>
                <h1 className="mb-4 font-display text-[2.5rem] font-semibold leading-[1.05] tracking-[-0.01em] text-ink sm:mb-5 sm:text-6xl lg:text-[4.75rem] lg:leading-[1.02] lg:tracking-[-0.02em]">
                  Tu crédito, explicado en <em className="text-primary">español</em> y sin letra chiquita.
                </h1>
                <p className="max-w-2xl text-[17px] leading-relaxed text-ink-muted sm:text-xl">
                  Guías claras para entender tu reporte, subir tu score y usar tus derechos bajo la ley FCRA.
                </p>
              </>
            }
          />

          <StartHere posts={getStartHerePosts()} />

          <PostCta variant="light" className="mt-20 sm:mt-24" />
        </Container>
      </main>
      <FooterSection />
    </>
  );
}
