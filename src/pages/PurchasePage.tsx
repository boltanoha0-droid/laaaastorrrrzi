import { useState } from 'react';
import OrderForm from '../components/OrderForm';
import SuccessModal from '../components/SuccessModal';
import { OrderFormData } from '../types/form';
import { ArrowRight } from 'lucide-react';

interface PurchasePageProps {
  onBack: () => void;
}

export default function PurchasePage({ onBack }: PurchasePageProps) {
  const [showModal, setShowModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [lastSubmitTime, setLastSubmitTime] = useState(0);

  const handleSubmit = async (data: OrderFormData) => {
    const now = Date.now();
    if (now - lastSubmitTime < 1000) {
      return;
    }
    setLastSubmitTime(now);
    setIsSubmitting(true);

    try {
      const totalQuantity = data.straightQuantity + data.curvedQuantity + data.curvedGoldQuantity;
      const totalPrice = totalQuantity * 360;

      const formDataToSend = {
        name: data.name,
        phone: data.phone,
        governorate: data.governorate,
        area: data.area,
        address: data.address,
        straightQty: data.straightQuantity,
        curvedQty: data.curvedQuantity,
        curvedGoldQty: data.curvedGoldQuantity,
        totalPrice: totalPrice,
        timestamp: new Date().toISOString(),
      };

      const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycby8uj_Mc166lFj9mVHIrVHUHm00SYGbjNT-7_0xzPGnEF12IYU0CiD5QZOA3771r6mW/exec';

      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formDataToSend),
      });

      setShowModal(true);
    } catch (error) {
      console.error('Error submitting form:', error);
      setShowModal(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen py-16 px-4" dir="rtl" style={{ background: 'linear-gradient(135deg, #e7ddcc 0%, rgba(231, 221, 204, 0.8) 100%)' }}>
      <div className="max-w-3xl mx-auto">
        <button
          onClick={onBack}
          className="mb-8 flex items-center gap-2 text-[#243247] bg-white/70 backdrop-blur-sm px-4 py-2.5 rounded-lg hover:bg-white transition-all duration-300 shadow-sm hover:shadow-md"
        >
          <ArrowRight size={20} />
          <span className="font-semibold">العودة</span>
        </button>

        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl" style={{ border: '1px solid rgba(36, 50, 71, 0.06)' }}>
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-[#243247] mb-3">
              أكمل طلبك
            </h1>
            <div className="w-20 h-1 bg-[#243247] mx-auto rounded-full mb-4"></div>
            <p className="text-gray-600 text-lg">
              نحن متحمسون لتقديم قطعتك الفريدة إليك
            </p>
          </div>

          <OrderForm onSubmit={handleSubmit} isSubmitting={isSubmitting} />
        </div>
      </div>

      <SuccessModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
}
