import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-gradient-to-br from-pink-100 to-pink-200">
      <main className="flex flex-col gap-8 items-center sm:items-start">
        <h1 className="text-4xl font-bold text-pink-600 mb-8">Котики</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[0, 404, 101, 102, 500, 205].map((i) => (
            <div
              key={i}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105"
            >
              <Image
                src={`https://http.cat/${i}`}
                alt={`Cute cat ${i}`}
                width={300}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-pink-600 mb-2">
                  Милый котик {i}
                </h2>
                <p className="text-gray-600">
                  Очаровательный пушистик, который любит обниматься и мурлыкать.
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>
      <footer className="mt-16 text-center text-pink-600">
        <p>© 2023 Мир котиков. Все права защищены.</p>
      </footer>
    </div>
  );
}
