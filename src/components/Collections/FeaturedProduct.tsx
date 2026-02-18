import { ChevronRight } from 'lucide-react';
import { Collection } from '../../types/product';

interface FeaturedProductProps {
  collection: Collection;
  onActionClick?: () => void;
}

export default function FeaturedProduct({
  collection,
  onActionClick,
}: FeaturedProductProps) {
  const handleClick = () => {
    window.open('/bracelets', '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-12 md:py-20 bg-[#e7ddcc] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <img
              src={collection.image}
              alt={collection.name}
              className="w-full h-auto rounded-2xl shadow-2xl object-cover"
              style={{ aspectRatio: '4/3' }}
            />
          </div>

          <div className="order-1 md:order-2 flex flex-col justify-center">
            <div className="mb-4 inline-block">
              <span className="bg-[#243247] text-[#e7ddcc] text-xs font-bold px-4 py-2 rounded-full tracking-wide">
                القطعة الأساسية
              </span>
            </div>

            <h1 className="product-name text-5xl md:text-6xl font-bold text-[#243247] mb-6 leading-tight">
              {collection.name}
            </h1>

            <p className="text-lg md:text-xl text-[#243247] mb-6 leading-relaxed font-light">
              {collection.descriptionAr}
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-1 h-12 bg-[#243247] rounded-full flex-shrink-0 mt-2"></div>
                <div>
                  <p className="text-gray-700 leading-relaxed">
                    أساور نحاسية أصيلة مصنوعة يدويًا بدقة عالية
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-1 h-12 bg-[#243247] rounded-full flex-shrink-0 mt-2"></div>
                <div>
                  <p className="text-gray-700 leading-relaxed">
                    تصاميم حديثة مستوحاة من التراث المصري العريق
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-1 h-12 bg-[#243247] rounded-full flex-shrink-0 mt-2"></div>
                <div>
                  <p className="text-gray-700 leading-relaxed">
                    جودة خالدة مع طلاء نيكل وذهب مقاوم للصدأ
                  </p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <button
                onClick={handleClick}
                className="group px-10 py-4 bg-[#243247] text-[#e7ddcc] font-bold text-lg rounded-xl hover:bg-[#1a2a3a] transition-all duration-300 transform hover:shadow-2xl flex items-center gap-2"
              >
                <span>اكتشف المجموعة</span>
                <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
