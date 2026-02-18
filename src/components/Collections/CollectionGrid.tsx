import { collections } from '../../data/collections';
import CollectionTile from './CollectionTile';
import FeaturedProduct from './FeaturedProduct';
import DecorativeIcon from '../DecorativeIcons';

interface CollectionGridProps {
  onCollectionSelect?: (collectionId: string) => void;
}

export default function CollectionGrid({
  onCollectionSelect,
}: CollectionGridProps) {
  const featuredCollection = collections.find((c) => c.id === 'bracelets');
  const otherCollections = collections.filter((c) => c.id !== 'bracelets');

  return (
    <>
      {featuredCollection && (
        <FeaturedProduct collection={featuredCollection} onActionClick={onCollectionSelect} />
      )}

      <section className="py-16 md:py-24 bg-white relative">
        <DecorativeIcon icon="watch" position={{ top: '10%', right: '5%' }} delay={0.5} />
        <DecorativeIcon icon="scissors" position={{ bottom: '15%', left: '8%' }} delay={2} />

        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[#243247] mb-6">
              <span className="product-name">ORZI</span> <span> خط إصدارات المستقبل</span>
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              التصاميم القادمة الجديدة
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {otherCollections.map((collection) => (
              <CollectionTile
                key={collection.id}
                collection={collection}
                onActionClick={() => onCollectionSelect?.(collection.id)}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
