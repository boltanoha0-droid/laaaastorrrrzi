import { collections } from '../../data/collections';
import CollectionTile from './CollectionTile';
import DecorativeIcon from '../DecorativeIcons';

interface CollectionGridProps {
  onCollectionSelect?: (collectionId: string) => void;
}

export default function CollectionGrid({
  onCollectionSelect,
}: CollectionGridProps) {
  const sortedCollections = [...collections].sort((a, b) => {
    if (a.id === 'bracelets') return -1;
    if (b.id === 'bracelets') return 1;
    return 0;
  });

  return (
    <section className="py-16 md:py-24 bg-[#e7ddcc] relative">
      <DecorativeIcon icon="watch" position={{ top: '10%', right: '5%' }} delay={0.5} />
      <DecorativeIcon icon="scissors" position={{ bottom: '15%', left: '8%' }} delay={2} />

      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#243247] mb-6">
            <span className="product-name">ORZI</span> <span> خط إصدارات</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          من الإصدارات الأيقونية إلى التصاميم القادمة
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sortedCollections.map((collection) => (
            <CollectionTile
              key={collection.id}
              collection={collection}
              onActionClick={() => onCollectionSelect?.(collection.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
