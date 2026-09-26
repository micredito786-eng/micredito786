import { AuthorAvatar } from './AuthorAvatar';

/** Recuadro del autor al final del artículo */
export function AuthorBox({ author }: { author: string }) {
  return (
    <div className="mt-14 flex items-center gap-5 border-t border-line pt-8">
      <AuthorAvatar author={author} size="lg" />
      <div>
        <p className="mb-1 text-[17px] font-bold text-ink">Escrito por {author}</p>
        <p className="text-[15px] leading-relaxed text-ink-muted">
          Ayudamos a latinos en USA a entender y reparar su crédito, en español.
        </p>
      </div>
    </div>
  );
}
