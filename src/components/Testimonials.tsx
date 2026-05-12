const reviews = [
  {
    name: 'Trung Tran',
    text: 'I highly recommend Manisha Bakshi from MB Credit Consulting for anyone navigating the complexities of SMSF lending. We secured a great rate with a seamless approval process that allowed us to settle on our investment property ahead of schedule.',
  },
  {
    name: 'Sathya Subbiah',
    text: 'Amazing service from start to finish! Manisha Bakshi has been our go to financial broker since 7 years for all our loan requirements. She always helps us with great rates and made the whole process easy and stress-free.',
  },
  {
    name: 'Hung Nguyen',
    text: 'Working with Manisha Bakshi was an exceptional experience. She guided me through securing a home loan for my SMSF with professionalism, deep expertise, and genuine care. I truly would not have been able to settle on the property in time without her support.',
  },
  {
    name: 'Kauntik Dey',
    text: 'MB Credit Consulting Pty Ltd has been outstanding in supporting our financial needs over the years. They have assisted us with purchasing our family home, investment properties, and refinancing when needed to secure competitive rates.',
  },
  {
    name: 'Swati Gauba',
    text: "Excellent timely service and a wide range of options provided every time we needed it. Manisha explains everything so well to someone like me who doesn't have much knowledge in the area. Thank you Manisha for your wonderful service!",
  },
  {
    name: 'Vikas Chopra',
    text: "We've been working with Manisha from MB Credit Consulting for over five years, and every experience with her has been exceptional! She first helped us with a car loan, making the process smooth and stress-free. What makes Manisha stand out is her genuine care and professionalism.",
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className="w-4 h-4 text-yellow-400"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-24 bg-[#F7F8FA] font-[family-name:var(--font-space-grotesk)]"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[2px] bg-[#119DA4]" />
            <span className="text-[#119DA4] text-xs font-bold tracking-[0.2em] uppercase">
              Testimonials
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1C1C1E] tracking-tight">
            What Our Clients Say
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="bg-white border border-gray-100 p-8"
            >
              <Stars />
              <p className="mt-4 text-sm text-gray-400 font-[family-name:var(--font-sora)] leading-relaxed line-clamp-5">
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="w-9 h-9 bg-[#119DA4]/10 flex items-center justify-center text-[#119DA4] text-sm font-bold">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-bold text-[#1C1C1E]">
                    {review.name}
                  </p>
                  <p className="text-xs text-gray-400 font-[family-name:var(--font-sora)]">
                    Google Review
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://share.google/gZq1Zqee8Tb1MpPwc"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-bold tracking-wider uppercase text-[#119DA4] hover:text-[#0e8a90] transition-colors"
          >
            View All Google Reviews
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
