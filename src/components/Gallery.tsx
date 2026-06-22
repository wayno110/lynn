export default function Gallery() {
  const photos = [
    {
      src: "/photos/photo2.jpg",
      caption: "Group session in the home studio 🏠",
    },
    {
      src: "/photos/photo1.jpg",
      caption: "Yes, the masks are real 😄",
    },
    {
      src: "/photos/photo3.jpg",
      caption: "Different mask, same energy ✌️",
    },
  ];
  return (
    <section className="py-20 bg-cream">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-ink text-center mb-4">
          Inside the classroom
        </h2>
        <p className="text-center text-ink/70 mb-12 max-w-2xl mx-auto">
          A peek at what lessons actually feel like. Photos shared with student/parent permission;
          children's faces have been kept private.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {photos.map((p, i) => (
            <div key={i} className="group">
              <div className="relative overflow-hidden rounded-2xl shadow-md bg-white aspect-[3/4]">
                <img
                  src={p.src}
                  alt={p.caption}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              <p className="mt-3 text-sm text-center text-ink/60 italic">{p.caption}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
