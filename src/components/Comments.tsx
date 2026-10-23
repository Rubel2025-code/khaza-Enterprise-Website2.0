import React, { useState } from "react";
import { REVIEWS } from "../data/reviewsData";

const StarIcon = ({ filled }: { filled: boolean }) => (
  <svg
    width="16" height="16" viewBox="0 0 24 24"
    fill={filled ? "#D4A843" : "none"}
    stroke="#D4A843"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const Comments: React.FC = () => {
  const [visibleCount, setVisibleCount] = useState(4);
  const visibleReviews = REVIEWS.slice(0, visibleCount);
  const hasMore = visibleCount < REVIEWS.length;

  return (
    <section className="w-full bg-white py-16 px-6 border-t border-[#E8E3DF]">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-[#8B1A3A] font-semibold tracking-widest text-xs uppercase mb-2">
            What Our Clients Say
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] tracking-tight">
            Customer <span className="text-[#8B1A3A]">Reviews</span>
          </h2>



          {/* Decorative line */}
          <div className="mt-5 flex justify-center gap-1">
            <div className="w-12 h-1 rounded-full bg-[#8B1A3A]" />
            <div className="w-3 h-1 rounded-full bg-[#D4A843]" />
            <div className="w-3 h-1 rounded-full bg-[#8B1A3A] opacity-30" />
          </div>
        </div>



        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {visibleReviews.map((review) => (
            <div
              key={review.id}
              className="group bg-[#F8F5F2] border border-[#E8E3DF] rounded-2xl p-6
                         hover:border-[#8B1A3A] hover:shadow-lg transition-all duration-300
                         flex flex-col gap-4"
            >


              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">


                  {/* Avatar */}
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center
                               text-white font-black text-base flex-shrink-0 shadow-sm"
                    style={{ background: review.avatarBg }}
                  >
                    {review.avatar}
                  </div>
                  <div>
                    <p className="font-bold text-[#1A1A1A] text-sm leading-tight">
                      {review.name}
                    </p>
                    <p className="text-xs text-gray-400 mt-0.5">{review.timeAgo}</p>
                  </div>
                </div>



                {/* lang badge */}
                {review.language === "bn" && (
                  <span className="text-[10px] font-bold uppercase tracking-widest
                                   bg-[#8B1A3A]/10 text-[#8B1A3A] px-2 py-0.5 rounded-full border
                                   border-[#8B1A3A]/20">
                    বাংলা
                  </span>
                )}
              </div>

              {/* Stars */}
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((star) => (
                  <StarIcon key={star} filled={star <= review.rating} />
                ))}
              </div>


              <p
                className="text-gray-600 text-sm leading-relaxed flex-1"
                style={{ fontFamily: review.language === "bn" ? "inherit" : undefined }}
              >
                "{review.text}"
              </p>

              {/* Bottom  bar */}
              <div
                className="h-[3px] rounded-full mt-1 opacity-60"
                style={{ background: review.avatarBg }}
              />
            </div>
          ))}
        </div>


        {hasMore && (
          <div className="text-center mt-10">
            <button
              onClick={() => setVisibleCount((prev) => Math.min(prev + 4, REVIEWS.length))}
              className="px-8 py-3 rounded-xl border-2 border-[#8B1A3A] text-[#8B1A3A]
                         font-bold tracking-wide text-sm hover:bg-[#8B1A3A] hover:text-white
                         transition-all duration-200"
            >
              Show More Reviews
            </button>
          </div>
        )}


        {/* Summary */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-6
                        bg-[#F8F5F2] rounded-2xl border border-[#E8E3DF] px-8 py-5">
          <div className="text-center">
            <p className="text-3xl font-black text-[#8B1A3A]">5.0</p>
            <div className="flex gap-0.5 mt-1 justify-center">
              {[1, 2, 3, 4, 5].map((s) => <StarIcon key={s} filled={true} />)}
            </div>
            <p className="text-xs text-gray-400 mt-1">Average Rating</p>
          </div>
          <div className="w-px h-12 bg-[#E8E3DF] hidden sm:block" />
          <div className="text-center">
            <p className="text-3xl font-black text-[#1A1A1A]">{REVIEWS.length}+</p>
            <p className="text-xs text-gray-400 mt-1">Happy Clients</p>
          </div>
          <div className="w-px h-12 bg-[#E8E3DF] hidden sm:block" />
          <div className="text-center">
            <p className="text-3xl font-black text-[#1A1A1A]">22+</p>
            <p className="text-xs text-gray-400 mt-1">Years of Service</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Comments;